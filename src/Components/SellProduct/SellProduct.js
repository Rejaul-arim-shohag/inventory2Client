import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readSellProduct } from '../../apiServices/allApi';

const SellProduct = () => {
    const [sellProduct, setSellProduct]=useState({});
    // console.log(sellProduct)
    let {sellId}=useParams()
    useEffect(()=>{
        readSellProduct(sellId)
        .then((result)=>{
            setSellProduct(result)
        })
    },[])
    return (
        <div>
            <p className="px-3">sell/sellProduct/detail</p>
            <div className="container px-5">
                <div className="row">
                    <div className="col-md-6 p-2">
                        <label>Product-Name</label>
                        <input value={sellProduct?.products?.Name} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 p-2">
                        <label>Category</label>
                        <input value={sellProduct?.categoryName} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 p-2">
                        <label>Brand</label>
                        <input value={sellProduct?.brandName} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 p-2">
                        <label>ProductID</label>
                        <input value={sellProduct?.ProductID} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 p-2">
                        <label>SellID</label>
                        <input value={sellProduct?.SellID} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 p-2">
                        <label>BrandID</label>
                        <input value={sellProduct?.products?.BrandID} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 p-2">
                        <label>CategoryID</label>
                        <input value={sellProduct?.products?.CategoryID} type="text" className="form-control" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellProduct;