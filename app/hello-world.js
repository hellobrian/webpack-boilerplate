// module.exports = function () {
//   var element = document.createElement('h1');
//
//   element.innerHTML = 'Hello world, this is brian han!!';
//
//   return element;
// };
import React from 'react';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <h1 className="title">Hello World</h1>
    );
  }
}
