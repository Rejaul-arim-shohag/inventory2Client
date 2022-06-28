import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteProduct, readProducts } from '../../apiServices/allApi';
import Swal from 'sweetalert2';

const Products = () => {
    let navigate = useNavigate();
    const [products, setProduct] = useState([]);
    console.log(products)
    console.log(products)
    const handleCreateProduct = () => {
        navigate("/addNewProduct")
    }
    useEffect(() => {
        readProducts()
            .then((result) => {
                setProduct(result.data.data)
            })
    }, [])

    const handleDeleteProduct = (id) => {
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
                deleteProduct(id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                setProduct(products => {
                    const filteredNotes = products.filter((product) => {
                        return product.ProductID !== id;
                    });
                    return [...filteredNotes];
                });
            }
        })
    }
    const navigateToEditProduct = (productId) => {
        navigate("/product/edit/" + productId)
    }
    return (
        <div>
            <div className="create px-4 my-2">
                <div>
                    <h6>dashboard/products</h6>
                </div>
                <div>
                    <button onClick={handleCreateProduct} className="btn btn-primary">Add New Product</button>
                </div>
            </div>
            <div className="product_list">
                <div className="expenseTypeList mt-2">
                    <div className="container table-responsive">
                        <table className="table">
                            <thead>
                                <tr className="text-center">
                                    <th>ProductID</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Brand</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {
                                    products.map((item, i) => {
                                        return (
                                            <tr key={item.ExpenseID}>
                                                <td >{item.ProductID}</td>
                                                <td >{item.Name}</td>
                                                <td>{item.categoryName}</td>
                                                <td>{item.brandName}</td>
                                                <td>{item.Price}</td>
                                                <td>{item.Stock}</td>
                                                <td>
                                                    <button onClick={() => handleDeleteProduct(item.ProductID)} className="btn btn-danger mx-1">Delete</button>
                                                    <button onClick={() => navigateToEditProduct(item.ProductID)} className="btn btn-primary mx-1">Edit</button>
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

export default Products; <h1>This is product</h1>