import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const FilterComponent = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterClick = (value) => {
        if (selectedFilters.includes(value)) {
            setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
        } else {
            setSelectedFilters([...selectedFilters, value]);
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <Button variant={selectedFilters.includes('Option1') ? 'primary' : 'outline-primary'} size="sm" onClick={() => handleFilterClick('Option1')}>
                Option 1
            </Button>
            <Button variant={selectedFilters.includes('Option2') ? 'primary' : 'outline-primary'} size="sm" onClick={() => handleFilterClick('Option2')}>
                Option 2
            </Button>
            <Button variant={selectedFilters.includes('Option3') ? 'primary' : 'outline-primary'} size="sm" onClick={() => handleFilterClick('Option3')}>
                Option 3
            </Button>
            {/* Add more buttons for other filter options */}
        </div>
    );
};

export default FilterComponent;