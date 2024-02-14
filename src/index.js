import _ from 'lodash';
import myName from './myName';
import { func1, func2} from './myModule';
import "./style.css";

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // use a different module instead
    element.textContent = myName('Brad');
    element.classList.add('hello');

    console.log(func1(), "<- func1");
    console.log(func2(), "<- func2");
  
    return element;
  }
  
  document.body.appendChild(component());