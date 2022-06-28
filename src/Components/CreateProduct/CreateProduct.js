import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineSportsHockey } from 'react-icons/md';
import { productCreate, readALlCategory, readBrands } from '../../apiServices/allApi';
import { errorToast, successToast } from '../../helper/validationHelper';

const CreateProduct = () => {
    const [brands, setBrand] = useState([]);
    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory]=useState();
    const [selectedBrand, setSelectedBrand]=useState();
    const [selectedUnit, setSelectedUnit]= useState();
    let name, price, stock, detail = useRef();
    useEffect(() => {
        readBrands()
            .then((result) => {
                setBrand(result.data.data)
            })
    }, []);
    useEffect(() => {
        readALlCategory()
            .then((result) => {
                setCategory(result.data)
            })
    }, [])
    const handleCreateNewProduct=()=>{
        //CategoryID,BrandID,Name,Price,Unit,Stock,Details
        productCreate(selectedCategory,selectedBrand,name.value,price.value,selectedUnit, stock.value, detail.value)
        .then((result)=>{
            if(result){
                successToast("Product added success")
            } else{
                errorToast("product added failed")
            }
        })
    }
    return (
        <div>
            <div className="container">
                <div className="col-md-6 mx-auto pb-5">
                    <h5 className="text-center p-1">NEW PRODUCT</h5>
                    <div className="select_Area">
                        <div className="input-group mb-3 p-2">
                            <select onChange={(e)=>setSelectedBrand(e.target.value)} className="custom-select form-control" id="inputGroupSelect02">
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
                            <select onChange={(e)=>setSelectedCategory(e.target.value)} className="custom-select form-control" id="inputGroupSelect02">
                                <option hidden >Category...</option>
                                {
                                    category.map((item, index) => {
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
                            <input ref={(input)=>name=input} type="text" className="form-control" />
                        </div>
                        <div className="p-2">
                            <label>Price</label>
                            <input ref={(input)=>price=input} type="text" className="form-control" />
                        </div>

                        <div className="p-2">
                            <label>Stock</label>
                            <input ref={(input)=>stock=input} type="number" className="form-control" />
                        </div>
                        <div className="p-2">
                            <label>Detail</label>
                            <input ref={(input)=>detail=input} type="text" className="form-control" />
                        </div>
                        <div className="input-group mb-3 p-2">
                            <select onChange={(e)=>setSelectedUnit(e.target.value)} className="custom-select form-control" id="inputGroupSelect02">
                                <option hidden >Unit</option>
                                <option value="Pice">Pice</option>
                                <option value="kg">kg</option>

                            </select>
                            <div className="input-group-append">
                                <label className="input-group-text" htmlFor="inputGroupSelect02">Select</label>
                            </div>
                        </div>
                        <div className="p-2">
                            <button onClick={handleCreateNewProduct} className='btn btn-primary w-100'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProduct;