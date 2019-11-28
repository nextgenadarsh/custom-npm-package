import _ from 'lodash';
import './html-component.css';
import Icon from '../assets/photo.png';
import XmlData from '../assets/data.xml';
import JsonData from '../assets/data.json';

function HtmlComponent() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Webpack', 'Build', 'Demo'], ' ');
    element.classList.add('custom-class');

    const myIcon = new Image();
    myIcon.title = "Image from js file";
    myIcon.border = "10x solid blue;";
    myIcon.src = Icon;

    element.appendChild(myIcon);
    
    console.log(XmlData);
    console.log(JsonData);

    return element;
}

export default HtmlComponent;