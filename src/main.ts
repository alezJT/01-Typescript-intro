import './style.css'
import { setupCounter } from './counter.ts'

//import './Topics/01-basic-types.ts';
import './Topics/02-object-interface.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
Hola mundo

`;
console.log('Hola mundo, klk');

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

