import {Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Review = () => {
    const [review, setReview] = useState({});

    const handleOnBlur = (e) => {
        const field = e.target.name;
        let value = e.target.value;
        if(field==='rating' && parseInt(value)>5) value=5;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    };
    const submitReview = (e) => {
        fetch('https://infinite-cove-31198.herokuapp.com/review', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.result.insertedId){
                alert('Review Submitted Successfully!');
                // <Alert severity="success">Order Booked Successfully!</Alert>
            }
        })

        e.preventDefault();
    };

    return (
        <div>
            <h2 className="my-3">
                Leave a <span className="text-danger">Review</span>
            </h2>
            <hr />
            <form onSubmit={submitReview}>
                <div className="mb-3 w-50 m-auto">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Your Name
                    </label>
                    <input
                        name="name"
                        className="form-control"
                        id="exampleFormControInput1"
                        placeholder="Enter your name"
                        onBlur={handleOnBlur}
                        required
                    />
                </div>
                <div className="mb-3 w-50 m-auto">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Your Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleFormControInput1"
                        placeholder="name@example.com"
                        onBlur={handleOnBlur}
                        required
                    />
                </div>
                <div className="mb-3 w-50 m-auto">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Rating
                    </label>
                    <input
                        type="number"
                        name="rating"
                        className="form-control"
                        id="exampleFormControInput1"
                        placeholder="rating point"
                        onBlur={handleOnBlur}
                        required
                    />
                </div>
                <div className="mb-3 w-50 m-auto">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Comment
                    </label>
                    <textarea
                        className="form-control"
                        name="comment"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        onBlur={handleOnBlur}
                        required
                    ></textarea>
                </div>
                <Button
                    sx={{ width: "25%", m: 1 }}
                    type="submit"
                    variant="contained"
                >
                    Submit Review
                </Button>
            </form>
            <Link to='/home' className="btnReview" style={{textDecoration:'none'}}>Back to Home</Link>
        </div>
    );
};

export default Review;

