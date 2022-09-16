const Gitrows = require('gitrows');

// eslint-disable-next-line @eevee/max-len
const defaultPath = `@github/yugi0h/${
  process.env.NODE_ENV === 'production' ? 'mimikyu-content' : 'mimikyu_content_dev'
}/`;

// Init the GitRows client, you can provide options at this point, later or just run on the defaults
const gitrows = new Gitrows({
  // ns: process.env.NS || 'github',
  // owner: process.env.GITHUB_OWNER,
  // user: process.env.GITHUB_USER,
  // repo: process.env.NODE_ENV === 'production' ? 'mimikyu-content' : 'mimikyu_content_dev',
  // branch: process.env.GITHUB_BRANCH,
  // strict: false,
  // token: process.env.BOT_GITHUB_TOKEN,
  strict: false,
});

gitrows.options({
  ns: 'github',
  owner: 'yugi0h',
  user: 'yugi0h',
  repo: process.env.NODE_ENV === 'production' ? 'mimikyu-content' : 'mimikyu_content_dev',
  branch: 'main',
  strict: false,
  token: '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',
});

/**
 *
 * @param path
 * @returns
 */
export const get = async <T>(path: string): Promise<T | null> => {
  path = `${defaultPath}${path}`;

  // eslint-disable-next-line no-useless-catch
  try {
    const data = await gitrows.get(path);

    if (data === null) {
      return null;
    }

    return data as T;
  } catch (error) {
    throw error;
  }
};

type Response = {
  code: 201 | 404 | 202;
  message: {
    description: string;
  };
};

/**
 *
 * @param path
 * @param data
 * @returns
 */
export const insert = async <T>(path: string, data: T) => {
  path = `${defaultPath}${path}`;

  // eslint-disable-next-line no-useless-catch
  try {
    const response = (await gitrows.put(path, data)) as Response;

    // success
    if (response.code === 201) {
      return true;
    }

    return false;
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param path
 * @param data
 * @returns
 */
export const update = async <T>(path: string, data: T) => {
  path = `${defaultPath}${path}`;

  // eslint-disable-next-line no-useless-catch
  try {
    const response = (await gitrows.replace(path, data)) as Response;
    // success
    if (response.code === 202) {
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
};
