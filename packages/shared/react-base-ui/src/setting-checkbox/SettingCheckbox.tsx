import React from 'react';
import { ConfigContext } from '@vaporeon/config-context';
import { CheckBox } from '../checkbox';
import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',

    '& input': {
      marginTop: '4px',
    },
  },
});

const SettingCheckbox = () => {
  const classes = useStyles();

  const { disableTabInCodeSnippets, setDisableTabInCodeSnippets } =
    React.useContext(ConfigContext);

  return (
    <div className={classes.wrapper}>
      <CheckBox
        checked={!disableTabInCodeSnippets}
        onChange={() => {
          setDisableTabInCodeSnippets(!disableTabInCodeSnippets);
        }}
        label="Enable ’tab’ key"
      />
    </div>
  );
};

export default SettingCheckbox;
