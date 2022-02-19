import React from "react";

const SingleReview = ({ singleReview }) => {
    let {name, comment, rating } = singleReview;
    rating=parseInt(rating);
    return (
        <div>
            <div className="my-4">
                <h3>
                    <i className="fas fa-user-edit"></i>{" "}
                    <span className="text-secondary">{name}</span>
                </h3>
                <h5 className="text-danger mb-3" style={{marginTop:'-20px'}}>
                    <i className="far fa-comment text-dark"></i> {comment}
                </h5>
                {[...Array(rating)].map((rate) => (
                    <i className="fa fa-star text-warning fs-6">&nbsp;</i>
                ))}
                {[...Array(5 - rating)].map((rate) => (
                    <i className="far fa-star fs-6">&nbsp;</i>
                ))}
            </div>
            <hr
                className="mx-auto"
                style={{
                    marginTop: "-20px",
                    height: "2px",
                    width: "50%",
                }}
            />
        </div>
    );
};

export default SingleReview;
