import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createCategory, readALlCategory, deleteCategory } from '../../apiServices/allApi';
import { errorToast, isEmpty, successToast } from '../../helper/validationHelper';
import "./Categpry.css";
import Swal from 'sweetalert2';
import CategoryUpdateModal from './CategoryUpdateModal';
const Category = () => {
    const [categories, setCategories] = useState([])
    let navigate = useNavigate()
    let categoryName = useRef();
    console.log(categories)
    const handleCatagoryCreate = () => {
        const Name = categoryName.value
        createCategory(Name)
            .then((res) => {
                if (res) {
                    successToast("category create successfully!!")
                    window.location.reload()
                }
                else {
                    errorToast("category create failed")
                }
            })
    }
    useEffect(() => {
        readALlCategory()
            .then((result) => {
                setCategories(result.data)
            })
    }, [])

    const handleDeleteCategory = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        },
            // deleteCategory(id)
                // .then((result) => {
                // })
        ).then((result) => {
            if (result.isConfirmed) {
                deleteCategory(id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                setCategories(categories => {
                    const filteredNotes = categories.filter((category) => {
                        return category.CategoryID !== id;
                    });
                    return [...filteredNotes];
                });
            }
        })
    }

    //update Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div id="category">
            <div className="category_container ">
                <div className="create_category p-3">
                    <h5 className="text-center ">Create Category</h5>
                    <div>
                        <div className="inputAndButton">
                            <div>
                                <input type="text" ref={(input) => categoryName = input} className="form-control category-Input" placeholder="Category Name" />
                            </div>
                            <div className="category_btn">
                                <button onClick={handleCatagoryCreate} className="main_btn">Save</button>
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
                                    categories.map((category, i) => {
                                        return (
                                            <tr>
                                                <td >{category.Name}</td>
                                                <td >{category.CategoryID}</td>
                                                <td>{category.productLength}</td>
                                                <td>
                                                    <button onClick={() => handleDeleteCategory(category.CategoryID)} className="btn btn-danger mx-1">Delete</button>
                                                    {/* <button onClick={handleShow} className="btn btn-success">Update</button>
                                                    <CategoryUpdateModal name={category.Name} id={category.CategoryID} show={show} onClose={handleClose} /> */}
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

export default Category;