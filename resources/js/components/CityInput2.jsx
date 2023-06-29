import React, { useState } from 'react';

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

    return (
        <div>
            <div id="app">
                <input type="text" placeholder="Enter a city" onFocus={handleFocus} onBlur={handleBlur} />
            </div>
            {isDialogOpen && (
                <div id="dialog">
                    <CityList cities={cities} />
                </div>
            )}
        </div>
    );
};

export default App;