import React from 'react';

function Loader({ name }) { // props cambia por { name }
    return (
        // <li>{ props.data.name }</li>
        <li>{ name }</li> //Con destructuring
    )
}

export default Loader;