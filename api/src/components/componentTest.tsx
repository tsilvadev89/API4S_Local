import React, { useState } from 'react';

const MyComponent = () => {
    // Chamando useState dentro do componente funcional
    const [value, setValue] = useState('initial value');

    return (
        <div>
            <p>Value: {value}</p>
            <button onClick={() => setValue('new value')}>Change Value</button>
        </div>
    );
};

export default MyComponent;