import _ from 'lodash';
import './style.css';


const component = () => {
  const element = document.createElement('div');
  element.classList.add('webpack-style');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
};

document.body.appendChild(component());
console.log('Webpack bundle is working!');
