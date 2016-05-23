// module.exports = function () {
//   var element = document.createElement('h1');
//
//   element.innerHTML = 'Hello world, this is brian han!!';
//
//   return element;
// };
require('./styles.scss');

import React from 'react';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <h1 className="hello-world">Hello World</h1>
    );
  }
}
