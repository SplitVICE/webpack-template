import { content } from './content'; // other .js import
import './style.css'; // css import

document.getElementById('content').innerHTML = content;

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "Hello Webpack"

    return element;
}

document.body.appendChild(component());
