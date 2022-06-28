import React, { useEffect, useState } from 'react';
import { deleteCustomer, readCustomers } from '../../apiServices/allApi';
import "./Customer.css"
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Swal from 'sweetalert2';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
const Customer = () => {
    const [customers, setCustomer] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        readCustomers()
            .then((result) => {
                setCustomer(result.data.data)
                console.log(result.data.data)
            })
    }, [])
    const handleDeleteCustomer = (id) => {
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
                deleteCustomer(id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                setCustomer(customers => {
                    const filteredNotes = customers.filter((customer) => {
                        return customer.CustomerID !== id;
                    });
                    return [...filteredNotes];
                });
            }
        })
        // deleteCustomer(id)
        // .then((result)=>{
        //     if(result){

        //     }
        // })
    }
    const handleNavigateToCreate = ()=>{
       navigate("/customers/newCustomer")
    }
    const handleNavigateToUpdate=(id)=>{
        navigate("/customers/edit/"+id)
    }
    return (
        <div id="customer">
            <div className="container mt-2">
                <div className="create">
                    <h4>Customers</h4>
                    <button 
                    onClick={handleNavigateToCreate}
                    className="btn btn-primary">New Customer</button>
                </div>

                {/* <input type="text" className="form-control mt-4 mb-5" placeholder="Search Customer" id="" /> */}
                <div className="category_list mx-4 mt-3">
                    <div className="container table-responsive px-3">
                        <table className="table">
                            <thead>
                                <tr className="text-center">
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Spent</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {
                                    customers.map((customer, i) => {
                                        return (
                                            <tr>
                                                <td >{customer.CustomerName}</td>
                                                <td >{customer.Phone}</td>
                                                <td>{customer.Email}</td>
                                                <td>{customer.totalSpent} TK</td>
                                                <td>                             <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <BiDotsHorizontalRounded className="actionBtn" />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={()=>handleNavigateToUpdate(customer.CustomerID)}>Edit</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => handleDeleteCustomer(customer.CustomerID)}>Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>

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

export default Customer;