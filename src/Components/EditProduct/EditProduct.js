import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { readALlCategory, readBrands, readProductById, updateProduct } from '../../apiServices/allApi';
import { errorToast, successToast } from '../../helper/validationHelper';

const EditProduct = () => {
    let { productId } = useParams();
    let navigate = useNavigate()
    const [product, setProduct] = useState({});
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    console.log(product)
    let brandId, categoryId, productName, price, stock, detail,unit = useRef();
    useEffect(() => {
        readBrands()
            .then((result) => {
                setBrands(result.data.data)
            });
        readALlCategory()
            .then((result) => {
                setCategories(result.data)
            })

        readProductById(productId)
            .then((result) => {
                setProduct(result)
            })
    }, [])
    //(productId,CategoryID,BrandID,Name,Price,Unit,Stock,Details){

    const handeUpdateProduct=(id)=>{
        // updateProduct()
        updateProduct(
            id,
            categoryId.value,
            brandId.value,
            productName.value,
            price.value,
            unit.value,
            stock.value,
            detail.value,
            )
            .then((result)=>{
                if(result===true){   
                    navigate("/products")
                    successToast("Product Updated Success")
                } else{
                    errorToast("Product Updated Fail")
                }
            })
    }
    return (
        <div>
            <div className="container">
                <div className="col-md-6 mx-auto pb-5">
                    <h5 className="text-center p-1">EDIT PRODUCT</h5>
                    <div className="select_Area">
                        <div className="input-group mb-3 p-2">
                            <select defaultValue={product.BrandID} ref={(input)=>brandId=input} className="custom-select form-control" id="inputGroupSelect02">
                                <option hidden >Brand...</option>
                                {
                                    brands.map((item, index) => {
                                        return (
                                            <option value={item.BrandID}>{item.Name}</option>
                                        )

                                    })
                                }
                            </select>
                            <div className="input-group-append">
                                <label className="input-group-text" htmlFor="inputGroupSelect02">Select</label>
                            </div>
                        </div>
                        <div className="input-group mb-3 p-2">
                            <select defaultValue={product.CategoryID} ref={(input)=>categoryId=input} className="custom-select form-control" id="inputGroupSelect02">
                                <option hidden >Category...</option>
                                {
                                    categories.map((item, index) => {
                                        return (
                                            <option value={item.CategoryID}>{item.Name}</option>
                                        )

                                    })
                                }
                            </select>
                            <div className="input-group-append">
                                <label className="input-group-text" htmlFor="inputGroupSelect02">Select</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="p-2">
                            <label>Name</label>
                            <input ref={(input)=>productName=input} defaultValue={product.Name} type="text" className="form-control" />
                        </div>
                        <div className="p-2">
                            <label>Price</label>
                            <input ref={(input)=>price=input} defaultValue={product.Price} type="text" className="form-control" />
                        </div>

                        <div className="p-2">
                            <label>Stock</label>
                            <input ref={(input)=>stock=input} defaultValue={product.Stock} type="number" className="form-control" />
                        </div>
                        <div className="p-2">
                            <label>Detail</label>
                            <input ref={(input)=>detail=input} defaultValue={product.Details} type="text" className="form-control" />
                        </div>
                        <div className="input-group mb-3 p-2">
                            <select defaultValue={product.Unit} ref={(input)=>unit=input} className="custom-select form-control" id="inputGroupSelect02">
                                <option hidden >Unit</option>
                                <option value="Pice">Pice</option>
                                <option value="kg">kg</option>

                            </select>
                            <div className="input-group-append">
                                <label className="input-group-text" htmlFor="inputGroupSelect02">Select</label>
                            </div>
                        </div>
                        <div className="p-2">
                            <button onClick={()=>handeUpdateProduct(product.ProductID)} className='btn btn-primary w-100'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;