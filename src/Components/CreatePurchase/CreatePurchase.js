import React, { useRef, useState } from 'react';
import { createPurchase } from '../../apiServices/allApi';
import { errorToast, isEmpty, successToast } from '../../helper/validationHelper';

const CreatePurchase = () => {
    let SupplierID, PurchaseID, VatTax, Discount, OtherCost, GrandTotal, Note, ProductID, Qty, Cost, Total = useRef();
    const [productPrice, setProductPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [vatTax, setvatTax] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [otherCost, setOtherCost] = useState(0);
    const totalProductPrice = quantity*productPrice;
    const purchaseGrandTotal = totalProductPrice+vatTax+otherCost-discount;
    const handleCreatePurchase = () => {
        let supplierId = SupplierID.value;
        let purchaseId = PurchaseID.value;
        // let vatTax = VatTax.value;
        // let discount = Discount.value;
        // let otherCost = OtherCost.value;
        let grandTotal = GrandTotal.value;
        let note = Note.value;
        let productID = ProductID.value;
        // let quantity = Qty.value;
        // let cost = Cost.value;
        let total = Total.value;
        if (isEmpty(supplierId)) {
            errorToast("supplierId is Required")
        } else if(isEmpty(purchaseId)){
            errorToast("purchaseId is Required")
        } else if(isEmpty(vatTax)){
            errorToast("vatTax is Required")
        } else if(isEmpty(discount)){
            errorToast("discount is Required")
        } else if(isEmpty(otherCost)){
            errorToast("otherCost is Required")
        } else if(isEmpty(note)){
            errorToast("note is Required")
        } else if(isEmpty(productID)){
            errorToast("productID is Required")
        } else if(isEmpty(productPrice)){
            errorToast("Product price is Required")
        } else{
            // console.log(
            //     productPrice,quantity,vatTax,discount,otherCost,supplierId,purchaseId,grandTotal,note,productID,total
            // )
            createPurchase(productPrice,quantity,vatTax,discount,otherCost,supplierId,purchaseId,grandTotal,note,productID,total)
            .then((result)=>{
                if(result===true){
                    successToast("Purchase Create Success");
                    productPrice="";
                    quantity="";
                    vatTax="";
                    discount="";
                    otherCost="";
                    purchaseId="";
                    purchaseGrandTotal = "";
                    note=""
                } else{
                    errorToast("Purchase Create Fail")
                }
            })
        }

    }
    return (
        <div>
            <div className="container">
                <p className="text-center mt-2">Create Purchase</p>
                <div className="row mx-5">
                    <div className="col-md-6">
                        <label>SupplierID</label>
                        <input ref={(input) => SupplierID = input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label>PurchaseID</label>
                        <input ref={(input) => PurchaseID = input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label>ProductID</label>
                        <input ref={(input) => ProductID = input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label>VatTax</label>
                        <input onChange={(e) => setvatTax(parseInt(e.target.value))} ref={(input) => VatTax = input} type="text" className="form-control" />
                    </div> 
                    <div className="col-md-6">
                        <label>Discount</label>
                        <input onChange={(e) => setDiscount(parseInt(e.target.value))} ref={(input) => Discount = input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label>OtherCost</label>
                        <input onChange={(e) => setOtherCost(parseInt(e.target.value))} ref={(input) => OtherCost = input} type="text" className="form-control" />
                    </div>

                    
                    <div className="col-md-6">
                        <label>Product Price</label>
                        <input onChange={(e) => setProductPrice(parseInt(e.target.value))} ref={(input) => Cost = input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6"> 
                        <label>quantity</label>
                        <input onChange={(e) => setQuantity(parseInt(e.target.value))} defaultValue={1} min={1}  type="number" className="form-control" />
                    </div>
                    
                    <div className="col-md-6">
                        <label>Total Product Price</label>
                        <input value={totalProductPrice} ref={(input) => Total = input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label>GrandTotal</label>
                        <input value={purchaseGrandTotal} ref={(input) => GrandTotal = input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-12">
                        <label>Note</label>
                        <input ref={(input) => Note = input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mx-auto mt-4">
                        <button onClick={handleCreatePurchase} className="btn btn-primary w-100">Save</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CreatePurchase;