import React from "react";
import "./Home.css";
import banner from "../../Images/delivery-banner.png";
import process1 from "../../Images/process1.png";
import process2 from "../../Images/process2.png";
import process3 from "../../Images/process3.png";
import process4 from "../../Images/process4.png";
import founder1 from "../../Images/founder1.jpg";
import founder2 from "../../Images/founder2.jpg";
import founder3 from "../../Images/founder3.jpg";
import Services from "../Services/Services";
import ReviewList from "./../ReviewList/ReviewList";

const Home = () => {
    return (
        <div>
            {/* banner */}
            <div className="banner-container">
                <div>
                    <img src={banner} alt="" />
                </div>
                <div className="banner-descrition text-center">
                    <h1>World's Leading</h1>
                    <h1>Creadle Superstore!</h1>
                </div>
            </div>
            <div>
                <h2>Total Visitors</h2>
                <hr />
                {/* <!-- hitwebcounter Code START --> */}
                <a
                    href="https://www.hitwebcounter.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="https://hitwebcounter.com/counter/counter.php?page=7900089&style=0025&nbdigits=5&type=page&initCount=0"
                        title="Free Counter"
                        Alt="web counter"
                        border="0"
                        width="200px"
                    />
                </a>
            </div>

            <Services></Services>
            <ReviewList></ReviewList>

            {/* connection-process */}
            <div className="connection-container mt-5 bg-secondary">
                <div className="text-center">
                    <h5 className="text-info mt-5">OUR PROCESS</h5>
                    <h1 className="text-white">
                        Go Direct-To-Consumer With CreadleBike
                    </h1>
                </div>
                <hr />
                <div className="process">
                    <div className="single-process">
                        <img src={process1} alt="" />
                        <p className="text-warning">Choose Creadle</p>
                    </div>
                    <div className="single-process">
                        <img src={process2} alt="" />
                        <p className="text-warning">Order</p>
                    </div>
                    <div className="single-process">
                        <img src={process3} alt="" />
                        <p className="text-warning">Find Driver</p>
                    </div>
                    <div className="single-process">
                        <img src={process4} alt="" />
                        <p className="text-warning">Delivery</p>
                    </div>
                </div>
            </div>

            {/* team founder */}
            <hr />
            <div className="bg-secondary">
                <h1 className="text-center text-info my-3">Our Team Founder</h1>
                <div className="founders text-center">
                    <div className="founder">
                        <img src={founder1} alt="" />
                        <h3>Alex Furgosen</h3>
                        <h6>Manager</h6>
                    </div>
                    <div className="founder">
                        <img src={founder2} alt="" />
                        <h3>Sharmin</h3>
                        <h6>Chairman</h6>
                    </div>
                    <div className="founder">
                        <img src={founder3} alt="" />
                        <h3>Robert Smith</h3>
                        <h6>Chief Director</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
