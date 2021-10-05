import * as React from 'react';
import { useFluent } from '@fluentui/react-shared-contexts';
import { makeStyles } from '@fluentui/react-make-styles';
import { LogoIcon } from '../../../../../../pongo-ui/packages/react-icon/src';
import { Header3, Text } from '../../../../../../pongo-ui/packages/react-text/src';

const useStyles = makeStyles({
  header: {
    position: 'relative',
    height: '60px',
    width: '100%',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    background: '#2060cf',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    gap: '15px',
  },

  headerLeftOuterContainer: {
    position: 'relative',
    width: '80px',
    height: '100%',
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },

  headerRightOuterContainer: {
    position: 'relative',
    width: '80px',
    height: '100%',
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    position: 'relative',
    width: '100px',
    height: '100%',
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'white',
    lineHeight: '21px',
    userSelect: 'none',
  },

  headerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontFamily: '"Roboto", sans-serif',
    color: 'white',
    fontStyle: 'normal',
    fontWeight: 750,
    fontSize: '18px',
    lineHeight: '21px',
    userSelect: 'none',
  },

  headerInnerContainer: {
    position: 'relative',
    height: '60px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },

  headerButton: {
    position: 'relative',
    width: '80px',
    height: '100%',
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255, 255, 255, 0.95)',
    cursor: 'pointer',
    userSelect: 'none',
    ':hover': {
      background: '#005bb6',
    },
    ':active': {
      background: '#00509e',
    },
  },
});

export const Header = () => {
  const { dir } = useFluent();
  const styles = useStyles();

  const justifyContent = { justifyContent: dir === 'rtl' ? 'left' : 'right' };

  return (
    <div className={styles.header}>
      <LogoIcon className={styles.headerLeftOuterContainer} />
      <span className={styles.headerTitle}>
        <Text size={500} weight="bold">
          Pongo AI
        </Text>
      </span>
      <span className={styles.headerInnerContainer} style={justifyContent}>
        <span className={styles.headerButton}>
          <Header3>Home</Header3>
        </span>
        <span className={styles.headerButton}>
          <Header3>About</Header3>
        </span>
        <span className={styles.headerButton}>
          <Header3>Create</Header3>
        </span>
        <span className={styles.headerButton}>
          <Header3>News</Header3>
        </span>
      </span>
      <span className={styles.headerRightOuterContainer} />
    </div>
  );
};
