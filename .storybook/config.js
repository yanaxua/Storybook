// import { configure } from '@storybook/react';

// function loadStories() {
//   require('../stories/index.js'); // 指定 story 的位置
//   // 可以是任意目录，根据自己需要写路径
// }

// configure(loadStories, module);



import {
  configure,
  addDecorator
} from '@storybook/react';
import React from 'react';
const req = require.context('../stories', true, /\.js$/);
/**同一个组件可对应多个story，装饰器的作用是把这些 story 包起来，
 * 形成一个父级元素，然后可以对这个父级元素做些修饰，
 * 比如让所有子元素居中对齐。*/

addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);