import React, { useEffect, useRef, useState } from 'react';
import { createBrand, deleteBrand, readBrands } from '../../apiServices/allApi';
import { errorToast, isEmpty, successToast } from '../../helper/validationHelper';
import "./Brand.css";
import Swal from 'sweetalert2';
const Brand = () => {
    const [brands, setBrand] = useState([]);
    let brandName = useRef();
    const handleCreateBrand = () => {
        // console.log(brandName.value)
        createBrand(brandName.value)
            .then((res) => {
                if (res.status === 200) {
                    successToast("brand create successfully");
                    window.location.reload(false)
                } else {
                    errorToast("brand create failed");
                }
            })
    }

    useEffect(() => {
        readBrands()
            .then((result) => {
                setBrand(result.data.data)
            })
    }, []);
    const handleDeleteBrand = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        },
           
                
        ).then((result) => {
            if (result.isConfirmed) {
                deleteBrand(id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                setBrand(brands => {
                    const filteredNotes = brands.filter((brand) => {
                        return brand.BrandID !== id;
                    });
                    return [...filteredNotes];
                });
            }
        })
    }
    return (
        <div id="brand">
            <div className="brand_container">
                <div className="create_category p-3">
                    <h5 className="text-center ">Create Brand</h5>
                    <div>
                        <div className="inputAndButton">
                            <div>
                                <input ref={input => brandName = input} type="text" className="form-control category-Input" placeholder="Brand Name" />
                            </div>
                            <div className="category_btn">
                                <button onClick={handleCreateBrand} className="main_btn">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="category_list mx-4">
                    <h3 className="text-center pb-2">Category List</h3>
                    <div className="container table-responsive px-3">
                        <table className="table">
                            <thead>
                                <tr className="text-center">
                                    <th>Name</th>
                                    <th>ID</th>
                                    <th>Numbers Of Product</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {
                                    brands.map((brand, i) => {
                                        return (
                                            <tr>
                                                <td >{brand.Name}</td>
                                                <td >{brand.BrandID}</td>
                                                <td>{brand.productLength}</td>
                                                <td>
                                                    <button onClick={() => handleDeleteBrand(brand.BrandID)} className="btn btn-danger mx-1">Delete</button>

                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Brand;