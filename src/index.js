import _ from 'lodash';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var button = document.createElement('button');

    element.innerHTML = _.join(['hello','webpack'],' ');

    button.innerHTML = 'Click me and check the console!';
    button.onclick = printMe;
    element.appendChild(button);

    return element
}

document.body.appendChild(component());