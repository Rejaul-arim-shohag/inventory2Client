import React, { useEffect, useState } from 'react';
import { deletePurchase, readAllPurchase } from '../../apiServices/allApi';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { SpinnerRoundOutlined } from 'spinners-react';

const AllPurchase = () => {
    let navigate = useNavigate()
    const [purchases, setPurchase] = useState([]);
    useEffect(() => {
        readAllPurchase()
            .then((result) => {
                setPurchase(result)
            })
    }, [])

    const handleDeletePurchase = (id) => {
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
                deletePurchase(id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                setPurchase(purchases => {
                    const filteredNotes = purchases.filter((purchase) => {
                        return purchase.PurchaseID !== id;
                    });
                    return [...filteredNotes];
                });
            }
        })
    }

    const hnadleToPurchaseProduct = (id) => {
        navigate("/purchase-product/" + id)
    }

   
        return (
            <div>
                <div className="container">
                    <div className="expenseTypeList mt-2">
                        <div className="container table-responsive">
                            <table className="table">
                                <thead>
                                    <tr className="text-center">
                                        <th>PurchaseID</th>
                                        <th>SupplierID</th>
                                        <th>Discount</th>
                                        <th>OtherCost</th>
                                        <th>VatTax</th>

                                        <th>GrandTotal</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center purchaseTbody">
                                    {
                                        purchases.map((item, i) => {
                                            return (
                                                <tr key={item.PurchaseID}>
                                                    <td>{item.PurchaseID}</td>
                                                    {/* <td >{<a onClick={()=>hnadleToPurchaseProduct(item.PurchaseID)} className="purchaseId" >{item.PurchaseID}</a> }</td> */}
                                                    <td>{item.SupplierID}</td>
                                                    <td>{item.Discount}</td>
                                                    <td>{item.OtherCost}</td>
                                                    <td>{item.VatTax}</td>
                                                    <td>{item.GrandTotal}</td>
                                                    <td>
                                                        <button onClick={() => handleDeletePurchase(item.PurchaseID)} className="btn btn-danger mx-1">Delete</button>
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

export default AllPurchase;