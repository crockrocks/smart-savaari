import React from 'react';


function Home() {
    const home = "/images/home.png";
    const logo = "/images/logo.png"
    return (
        <section id="title" >
            <div className="container-fluid home-main-div">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>Struggling to find buses on time?</h1>
                        <h1>Get SmartSavaari today !</h1>
                        <hr />
                        <div className="row">
                            <div className="col-lg-6">
                                <img className="logo" src={logo} alt="smart-savaari-phone-mockup" />
                            </div>
                            <div className="col-lg-6">
                                <h3>Explore Bus Stops, Track Routes, Buy Tickets & Much More - Your One-Stop Transit Hub!</h3>
                            </div>
                        </div>
                        <button type="button" className="btn btn-dark btn-lg download-button"><i className="fa-brands fa-apple"></i>Download</button>
                        <button type="button" className="btn btn-light btn-outline-dark btn-lg download-button"><i className="fa-brands fa-google-play"></i>Download</button>
                    </div>
                    <div className="col-lg-6">
                        <img className="iphone" src={home} alt="smart-savaari-phone-mockup" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;