import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readPurchaseProduct } from '../../apiServices/allApi';

const PurchaseProduct = () => {
    let {purchaseId} = useParams();
    const [purchaseProd, setPurchaseProd] = useState({})
    useEffect(()=>{
        readPurchaseProduct(purchaseId)
        .then((result)=>{
            console.log(result)
        })
    },[])
    return (
        <div>
            <h1>Purchase Product</h1>
        </div>
    );
};

export default PurchaseProduct;