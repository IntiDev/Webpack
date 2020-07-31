import './css/index.css';
import search from './search';
import render from './render'

const id = prompt('¿Una pregunta al azar?');

search(id)
    .then((data) => {
        render(data);
    })
    .catch(() => {
        console.log('No funciona');
    })