import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
    const [product, setProduct] = useState({});
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://infinite-cove-31198.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        let value = e.target.value;
        const newProduct = { ...product };
        newProduct[field] = value;
        setProduct(newProduct);
    };

    const submitProduct = (e) => {
        fetch("https://infinite-cove-31198.herokuapp.com/productAdded", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.result.insertedId) {
                    Swal.fire({
                        position: "middle",
                        icon: "success",
                        title: "Product Added Successfully!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });

        e.preventDefault();
    };

    return (
        <div>
            <h2 className="my-3">
                Add <span className="text-danger">Product</span>
            </h2>
            <hr />
            <form onSubmit={submitProduct}>
                <div className="mb-3 w-50 m-auto">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                    >
                        Enter Creadle Name
                    </label>
                    <input
                        name="Name"
                        className="form-control"
                        id="exampleFormControInput1"
                        placeholder="creadle name"
                        onBlur={handleOnBlur}
                        required
                    />
                </div>
                <div className="mb-3 w-50 m-auto">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                    >
                        Creadle's Image URL
                    </label>
                    <input
                        name="img"
                        className="form-control"
                        id="exampleFormControInput1"
                        placeholder="paste creadle picture's url"
                        onBlur={handleOnBlur}
                        required
                    />
                </div>
                <div className="mb-3 w-50 m-auto">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                    >
                        Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        className="form-control"
                        id="exampleFormControInput1"
                        placeholder="creadle price"
                        onBlur={handleOnBlur}
                        required
                    />
                </div>
                <div className="mb-3 w-50 m-auto">
                    <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                    >
                        Short Description
                    </label>
                    <textarea
                        className="form-control"
                        name="Description"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        onBlur={handleOnBlur}
                        required
                    ></textarea>
                </div>
                {services.length < 10 ? (
                    <Button
                        sx={{ width: "25%", m: 1 }}
                        type="submit"
                        variant="contained"
                    >
                        Upload the Product
                    </Button>
                ) : (
                    <Button
                        sx={{ width: "25%", m: 1 }}
                        type="submit"
                        variant="contained"
                        disabled
                    >
                        Sorry! Total Products are too enough to add a new product
                    </Button>
                )}
            </form>
            <Link to="/home" className="btn btn-secondary">
                Back to Home
            </Link>
        </div>
    );
};

export default AddProduct;
