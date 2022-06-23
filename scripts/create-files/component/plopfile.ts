// Plop script for templating out a converged React component
//#region Imports
import { findGitRoot, getAllPackageInfo } from '../../monorepo/index';
import { NodePlopAPI } from 'plop';

//#endregion

//#region Globals

const getPackagePath = (packageName: string) => {
  const packageInfo = getAllPackageInfo();
  try {
    return packageInfo[packageName].packagePath;
  } catch (error) {
    throw error;
  }
};

const convergedComponentPackages = Object.entries(getAllPackageInfo())
  .filter(
    ([pkgName, info]) =>
      pkgName.startsWith('@eevee/react-') &&
      info.packagePath.startsWith('packages') &&
      !!info.packageJson.scripts?.start &&
      !!info.packageJson.dependencies?.['@eevee/react-utilities'],
  )
  .map(([packageName]) => packageName);

const root = findGitRoot();

interface Answers {
  packageNpmName: string;
  componentName: string;
  prefixPath: string;
}

interface Data extends Answers {}

//#endregion

module.exports = (plop: NodePlopAPI) => {
  plop.setWelcomeMessage('This utility is a helper to create converged React components');

  plop.setGenerator('post', {
    description: 'New Mdx post',

    prompts: [
      {
        type: 'list',
        name: 'packageNpmName',
        message: 'Which package to create the new component in?',
        choices: convergedComponentPackages,
        validate: (packageName: string) => convergedComponentPackages.includes(packageName),
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'New component name (ex: MyComponent):',
        validate: (input: string) =>
          /^[A-Z][a-zA-Z0-9]+$/.test(input) || 'Must enter a PascalCase component name (ex: MyComponent)',
      },
      {
        type: 'input',
        name: 'prefixPath',
        message: 'prefix component path (ex: pages/blog):',
        default: '',
      },
    ],

    actions: answers => {
      const nAnswer = answers as Answers;
      const { packageNpmName, componentName, prefixPath } = nAnswer;

      const data: Data = {
        ...nAnswer,
      };

      const packagePath = getPackagePath(packageNpmName);
      const destination = `${root}/${packagePath}/src/${prefixPath}/${componentName}/`;

      return [
        {
          type: 'addMany',
          destination,
          data,
          skipIfExists: true,
          templateFiles: ['plop-templates/**/*'],
        },
        () => 'Component ready!',
      ];
    },
  });
};
