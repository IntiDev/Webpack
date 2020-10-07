import React, { useState } from 'react';
import data from './data.json';
import Loader from './loader';

function App() {
    const [loaderList, setLoaderList] = useState([]);

    function handleClick() {
        setLoaderList(data.loaders);
    }

    return (
        <div>
         App con React
            <ul>
                {/* loaderList.map(item => <Loader data={item} key={item.id} /> ) */}
                {
                    
                    loaderList.map(item => <Loader {...item} key={item.id} /> ) //Usando spread operator
                }
            </ul>
            <button onClick={handleClick} > Click!</button>
        </div>
    )
}

export default App;