// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;


console.log(Math.min(13,6));

const lowest = [2,1];
console.log(Math.min(...lowest));