import * as React from 'react';
import { FluentProvider } from '@fluentui/react-provider';
import { Switch } from '@pongoai/react-switch';
import { webLightTheme } from '@pongoai/react-theme';
import { makeStyles } from '@fluentui/react-make-styles';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    gap: '10px',
  },
  row: {
    display: 'inline-flex',
    flexDirection: 'row',
    gap: '10px',
  },
});

export const BasicSwitchExample = () => {
  const styles = useStyles();

  return (
    <FluentProvider theme={webLightTheme}>
      <div className={styles.root}>
        <div className={styles.row}>
          <Switch />
          <Switch defaultChecked={true} />
        </div>
        <div className={styles.row}>
          <Switch disabled />
          <Switch defaultChecked={true} disabled />
        </div>
      </div>
    </FluentProvider>
  );
};

export default {
  title: 'Components/Switch',
  component: Switch,
};
