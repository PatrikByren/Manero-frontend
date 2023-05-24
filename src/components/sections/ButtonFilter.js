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

    const buttonStyle = {
        backgroundColor: 'lightblue',
        color: 'black',
        padding: '5px 16px',
        borderRadius: '10px',
        fontSize: '14px',
        margin: '5px',
        border: 'none',
    };

    return (
        <div className='text-center justify-content-center align-items-center m-2'>
            <div>
                <Button style={buttonStyle} variant={selectedFilters.includes('Option1') ? 'primary' : 'outline-primary'} size="sm" onClick={() => handleFilterClick('Option3')}>
                    SPORT
                </Button>
                <Button style={buttonStyle} variant={selectedFilters.includes('Option2') ? 'primary' : 'outline-primary'} size="sm" onClick={() => handleFilterClick('Option3')}>
                    SPORT
                </Button>
                <Button style={buttonStyle} variant={selectedFilters.includes('Option3') ? 'primary' : 'outline-primary'} size="sm" onClick={() => handleFilterClick('Option3')}>
                    SPORT
                </Button>
                <Button style={buttonStyle} variant={selectedFilters.includes('Option4') ? 'primary' : 'outline-primary'} size="sm" onClick={() => handleFilterClick('Option3')}>
                    SPORT
                </Button>
            </div>
            <div>
                <Button style={buttonStyle} variant={selectedFilters.includes('Option5') ? 'primary' : 'outline-primary'} size="sm" onClick={() => handleFilterClick('Option3')}>
                    SPORT
                </Button>
                <Button style={buttonStyle} variant={selectedFilters.includes('Option6') ? 'primary' : 'outline-primary'} size="sm" onClick={() => handleFilterClick('Option3')}>
                    SPORT
                </Button>
                <Button style={buttonStyle} variant={selectedFilters.includes('Option7') ? 'primary' : 'outline-primary'} size="sm" onClick={() => handleFilterClick('Option3')}>
                    SPORT
                </Button>
                <Button style={buttonStyle} variant={selectedFilters.includes('Option8') ? 'primary' : 'outline-primary'} size="sm" onClick={() => handleFilterClick('Option3')}>
                    SPORT
                </Button>
            </div>
            <div>
                <Button style={buttonStyle} variant={selectedFilters.includes('Option9') ? 'primary' : 'outline-primary'} size="sm" onClick={() => handleFilterClick('Option3')}>
                    SPORT
                </Button>
                <Button style={buttonStyle} variant={selectedFilters.includes('Option10') ? 'primary' : 'outline-primary'} size="sm" onClick={() => handleFilterClick('Option3')}>
                    SPORT
                </Button>
                <Button style={buttonStyle} variant={selectedFilters.includes('Option11') ? 'primary' : 'outline-primary'} size="sm" onClick={() => handleFilterClick('Option3')}>
                    SPORT
                </Button>
            </div>
        </div>
    );
};

export default FilterComponent;