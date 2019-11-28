import HtmlComponent from './components/html-component'
import PrintMe from './print-me';

const ele = HtmlComponent();

const btn = document.createElement('button');
btn.innerHTML = 'Click me and check the console!';
btn.onclick = PrintMe;

ele.appendChild(btn);

// Render elements
document.body.appendChild(ele);


export { default as HtmlComponent } from './components/html-component';