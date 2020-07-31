import './css/index.css';
import text from './text';

// document.body.innerHTML = "Hola desde webpack: css";
text();

if(module.hot){
    module.hot.accept('./text.js', function () {
        console.log('Recargado');
        text();
    })
}