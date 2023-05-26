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

    const isFilterSelected = (value) => selectedFilters.includes(value);

    return (
        <div className='text-center justify-content-center align-items-center m-2'>
            <div>
                <Button
                    variant={isFilterSelected('Option1') ? 'primary' : 'outline-primary'}
                    size="sm"
                    className={`marked-button ${isFilterSelected('Option1') ? 'marked' : ''}`}
                    onClick={() => handleFilterClick('Option1')}
                    style={isFilterSelected('Option1') ? { backgroundColor: 'grey', color: 'white' } : null}
                >
                    SPORT
                </Button>
                <Button
                    variant={isFilterSelected('Option2') ? 'primary' : 'outline-primary'}
                    size="sm"
                    className={`marked-button ${isFilterSelected('Option2') ? 'marked' : ''}`}
                    onClick={() => handleFilterClick('Option2')}
                    style={isFilterSelected('Option2') ? { backgroundColor: 'grey', color: 'white' } : null}
                >
                    SPORT
                </Button>
                <Button
                    variant={isFilterSelected('Option3') ? 'primary' : 'outline-primary'}
                    size="sm"
                    className={`marked-button ${isFilterSelected('Option3') ? 'marked' : ''}`}
                    onClick={() => handleFilterClick('Option3')}
                    style={isFilterSelected('Option3') ? { backgroundColor: 'grey', color: 'white' } : null}
                >
                    SPORT
                </Button>
                <Button
                    variant={isFilterSelected('Option4') ? 'primary' : 'outline-primary'}
                    size="sm"
                    className={`marked-button ${isFilterSelected('Option4') ? 'marked' : ''}`}
                    onClick={() => handleFilterClick('Option4')}
                    style={isFilterSelected('Option4') ? { backgroundColor: 'grey', color: 'white' } : null}
                >
                    SPORT
                </Button>
            </div>
            <div>
                <Button
                    variant={isFilterSelected('Option5') ? 'primary' : 'outline-primary'}
                    size="sm"
                    className={`marked-button ${isFilterSelected('Option5') ? 'marked' : ''}`}
                    onClick={() => handleFilterClick('Option5')}
                    style={isFilterSelected('Option5') ? { backgroundColor: 'grey', color: 'white' } : null}
                >
                    SPORT
                </Button>
                <Button
                    variant={isFilterSelected('Option6') ? 'primary' : 'outline-primary'}
                    size="sm"
                    className={`marked-button ${isFilterSelected('Option6') ? 'marked' : ''}`}
                    onClick={() => handleFilterClick('Option6')}
                    style={isFilterSelected('Option6') ? { backgroundColor: 'grey', color: 'white' } : null}
                >
                    SPORT
                </Button>
                <Button
                    variant={isFilterSelected('Option7') ? 'primary' : 'outline-primary'}
                    size="sm"
                    className={`marked-button ${isFilterSelected('Option7') ? 'marked' : ''}`}
                    onClick={() => handleFilterClick('Option7')}
                    style={isFilterSelected('Option7') ? { backgroundColor: 'grey', color: 'white' } : null}
                >
                    SPORT
                </Button>
                <Button
                    variant={isFilterSelected('Option8') ? 'primary' : 'outline-primary'}
                    size="sm"
                    className={`marked-button ${isFilterSelected('Option8') ? 'marked' : ''}`}
                    onClick={() => handleFilterClick('Option8')}
                    style={isFilterSelected('Option8') ? { backgroundColor: 'grey', color: 'white' } : null}
                >
                    SPORT
                </Button>
            </div>
            <div>
                <Button
                    variant={isFilterSelected('Option9') ? 'primary' : 'outline-primary'}
                    size="sm"
                    className={`marked-button ${isFilterSelected('Option9') ? 'marked' : ''}`}
                    onClick={() => handleFilterClick('Option9')}
                    style={isFilterSelected('Option9') ? { backgroundColor: 'grey', color: 'white' } : null}
                >
                    SPORT
                </Button>
                <Button
                    variant={isFilterSelected('Option10') ? 'primary' : 'outline-primary'}
                    size="sm"
                    className={`marked-button ${isFilterSelected('Option10') ? 'marked' : ''}`}
                    onClick={() => handleFilterClick('Option10')}
                    style={isFilterSelected('Option10') ? { backgroundColor: 'grey', color: 'white' } : null}
                >
                    SPORT
                </Button>
                <Button
                    variant={isFilterSelected('Option11') ? 'primary' : 'outline-primary'}
                    size="sm"
                    className={`marked-button ${isFilterSelected('Option11') ? 'marked' : ''}`}
                    onClick={() => handleFilterClick('Option11')}
                    style={isFilterSelected('Option11') ? { backgroundColor: 'grey', color: 'white' } : null}
                >
                    SPORT
                </Button>
            </div>
        </div>
    );
};

export default FilterComponent;