import React, { useState } from 'react';
import './Home.css'; // Import your custom styles

function Home() {
    const home = "./images/home.png";
    const [showBusOptions, setShowBusOptions] = useState(true);
    const [showMetroOptions, setShowMetroOptions] = useState(false);

    const handleToggleBusOptions = () => {
        setShowBusOptions(true);
        setShowMetroOptions(false);
    };

    const handleToggleMetroOptions = () => {
        setShowBusOptions(false);
        setShowMetroOptions(true);
    };

    const handleSearch = () => {
        alert('Search button clicked!');
    };

    return (
        <div className="container">
            <div className="row">
                {/* Travel Options Card */}
                <div className="card col-md-6">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="card-title">Travel Options</h5>
                        <div className="btn-group">
                            <button
                                className={`btn btn-link ${showBusOptions ? 'active bus' : ''}`}
                                onClick={handleToggleBusOptions}
                            >
                                Bus
                            </button>
                            <button
                                className={`btn btn-link ${showMetroOptions ? 'active metro' : ''}`}
                                onClick={handleToggleMetroOptions}
                            >
                                Metro
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        {showBusOptions && (
                            <>
                                {/* Bus options */}
                                <div className="mb-3">
                                    <label htmlFor="busSource" className="form-label">Source:</label>
                                    <select id="busSource" className="form-select">
                                        <option value="source1">bus</option>
                                        <option value="source2">Source 2</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="busDestination" className="form-label">Destination:</label>
                                    <select id="busDestination" className="form-select">
                                        <option value="destination1">Destination 1</option>
                                        <option value="destination2">Destination 2</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                            </>
                        )}
                        {showMetroOptions && (
                            <>
                                {/* Metro options */}
                                <div className="mb-3">
                                    <label htmlFor="metroSource" className="form-label">Source:</label>
                                    <select id="metroSource" className="form-select">
                                        <option value="source1">metro</option>
                                        <option value="source2">Source 2</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="metroDestination" className="form-label">Destination:</label>
                                    <select id="metroDestination" className="form-select">
                                        <option value="destination1">Destination 1</option>
                                        <option value="destination2">Destination 2</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="card-footer d-flex justify-content-end">
                        <button
                            className="btn btn-primary"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* Image Container */}
                <div className="col-md-6 d-md-block">
                    <div className="image-container d-flex justify-content-center mb-4">
                        <img src={home} alt="Your Image" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;