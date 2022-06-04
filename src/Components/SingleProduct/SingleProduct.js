import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SingleProduct.css'

const SingleProduct = (props) => {
    // console.log(props.products)
    const { setCartCount } = props
    return (
        <div className="col-md-4">
            <div className="card p-3 border">
                <img className="w-50 m-auto" src={props.products.image} alt="" />
                <h2>{props.products.title.slice(0, 10)}</h2>

                <div className="d-flex justify-content-around">
                    <button onClick={setCartCount} className="btn btn-primary">Add To Cart</button>
                    <button className="btn btn-danger">Delete</button>
                    {/* <button className="btn btn-info">Details</button> */}
                    <ReactModal products={props.products}></ReactModal>
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;