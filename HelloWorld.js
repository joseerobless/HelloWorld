const React = require('react');
const ReactDOM = require('react-dom');

const HelloWorld = () => {
  return <h1>Hello World</h1>;
};

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('react-render-example')
);

export default HelloWorld;
