import * as React from 'react';
import { FluentProvider } from '@fluentui/react-provider';
import { Text, Body, Caption, Display, Header1, Header2, Header3, SubHeadline, Title } from '@pongoai/react-text';
import { makeStyles } from '@fluentui/react-make-styles';
import { webLightTheme } from '@pongoai/react-theme';

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

export const BasicTextExample = () => {
  const styles = useStyles();

  return (
    <FluentProvider theme={webLightTheme}>
      <div className={styles.root}>
        <Text size={600}>Header</Text>
        <div className={styles.row}>
          <Text>Basic</Text>
          <Text italic>Italic</Text>
          <Text weight="bold">Weight</Text>
          <Text font="monospace">monospace</Text>
        </div>
        <div className={styles.row}>
          <Text strikethrough>Strikethrough</Text>
          <Text underline strikethrough>
            Underline
          </Text>
          <Text underline strikethrough>
            Underline Strikethrough
          </Text>
        </div>
        <Display>Display: The quick brown fox jumps over the lazy dog</Display>
        <Title>Title: The quick brown fox jumps over the lazy dog</Title>
        <Header1>Header1: The quick brown fox jumps over the lazy dog</Header1>
        <Header2>Header2: The quick brown fox jumps over the lazy dog</Header2>
        <Header3>Header3: The quick brown fox jumps over the lazy dog</Header3>
        <SubHeadline>SubHeadline: The quick brown fox jumps over the lazy dog</SubHeadline>
        <Body>Body: The quick brown fox jumps over the lazy dog</Body>
        <Caption>Caption: The quick brown fox jumps over the lazy dog</Caption>
      </div>
    </FluentProvider>
  );
};

export default {
  title: 'Components/Text',
  component: Text,
};
