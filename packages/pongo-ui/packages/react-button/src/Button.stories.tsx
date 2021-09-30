import * as React from 'react';
import { Button } from './index';
import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { webLightTheme } from '../../react-theme/src';

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

export const BasicButtonExample = () => {
  const styles = useStyles();

  return (
    <ThemeProvider theme={webLightTheme}>
      <div className={styles.root}>
        <div className={styles.row}>
          <Button>Outline</Button>
          <Button appearance="primary">Primary</Button>
          <Button appearance="subtle">Subtle</Button>
          <Button appearance="transparent">Transparent</Button>
        </div>
        <div className={styles.row}>
          <Button disabled>Outline</Button>
          <Button appearance="primary" disabled>
            Primary
          </Button>
          <Button appearance="subtle" disabled>
            Subtle
          </Button>
          <Button appearance="transparent" disabled>
            Transparent
          </Button>
        </div>
        <div className={styles.row}>
          <Button shape="rounded">Rounded</Button>
          <Button shape="circular" appearance="primary">
            Text
          </Button>
          <Button shape="circular">
            <div style={{ position: 'relative', transform: 'translateY(-10%)' }}>👍</div>
          </Button>
          <Button shape="circular">
            <div style={{ position: 'relative', transform: 'translateY(5%)' }}>👎</div>
          </Button>
          <Button shape="square">Square</Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default {
  title: 'Components/Button',
  component: Button,
};
