import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CityList = ({ cities }) => (
    <ul>
        {cities.map(city => (
            <li key={city}>{city}</li>
        ))}
    </ul>
);

const App = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleFocus = () => {
        setIsDialogOpen(true);
    };

    const handleBlur = () => {
        setIsDialogOpen(false);
    };

    const cities = ['Seoul', 'New York', 'London', 'Tokyo'];

    // Render the city list to the 'dialog' div when the input is focused
    if (isDialogOpen) {
        ReactDOM.render(<CityList cities={cities} />, document.getElementById('dialog'));
    } else {
        ReactDOM.render(null, document.getElementById('dialog')); // Clear the 'dialog' div when the input is not focused
    }

    return (
        <div id="app">
            <input type="text" placeholder="Enter a city" onFocus={handleFocus} onBlur={handleBlur} />
        </div>
    );
};

export default App;