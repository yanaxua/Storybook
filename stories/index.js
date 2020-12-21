import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import markdown from './test.md';

storiesOf('Buttons|Simple', module).add('with text', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
));

storiesOf('Buttons|Emoji', module).add('with some emoji', () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
));

storiesOf('Buttons', module)
  .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('with text', () => (  // 一个 add 表示添加一个 story
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (  // 这里是另一个 story
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
  .add('with markdown', () => (
    <Button onClick={action('clicked')}>Hello Button with markdown</Button>
  ),{
    notes:{markdown}   // 将会渲染 markdown 内容
  }) 