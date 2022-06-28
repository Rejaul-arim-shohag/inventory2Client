import React, { useEffect, useState, PureComponent } from 'react';
import { Button, Card } from 'react-bootstrap';
import { BarChart, Area, Line, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { readCustomers, readSell, totalSell, totalExpense } from '../apiServices/allApi';
import { SpinnerRoundOutlined } from 'spinners-react';
const Dashboard = () => {
    const [TotalSell, setTotalSell] = useState({});
    const [totalOrders, setTotalOrder] = useState([]);
    const [totalCUstomers, setTotalCustomer] = useState([]);
    const [TotalExpense, setTotalExpense] = useState([]);
    const [sells, setSells] = useState([]);
    useEffect(() => {
        totalSell().then((result) => { setTotalSell(result) })
        readSell().then((result) => { setTotalOrder(result) })
        readCustomers().then((result) => setTotalCustomer(result.data.data));
        totalExpense().then((result) => { setTotalExpense(result) })
        readSell()
        .then((result) => {
            setSells(result);
        })
    }, [])
    if(TotalSell<0){
        return <SpinnerRoundOutlined size={50} thickness={100} speed={100} color="#36ad47" />
    }
    return (
        <div className="container px-5">
            <h4 className="mb-4">Dashboard</h4>
            <div className="card_container row gx-3 gy-4">
                <div className="col-md-4">
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                Total sells
                            </Card.Text>
                            <Card.Title className="py-3"><h1 className="text-center">{TotalSell.sum}</h1></Card.Title>
                        </Card.Body>
                    </Card>
                </div>


                <div className="col-md-4">
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                Total Customers
                            </Card.Text>
                            <Card.Title className="py-3"><h1 className="text-center">{totalCUstomers.length}</h1></Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                Total Expense
                            </Card.Text>
                            <Card.Title className="py-3"><h1 className="text-center">{TotalExpense.sum}</h1></Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </div>
           
            <div className="recent_sell ">
                <h5 className="mt-4">Recent sells</h5>
                <table className="table table-responsive">
                    <thead>
                        <tr className="text-center">
                            <th>Customer</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>CustomerID</th>
                            <th>SellID</th>
                            <th>GrandTotal</th>
                           
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            sells.map((item, i) => {
                                return (
                                    <tr key={item.SellID}>
                                        <td className="text-left">{item.CustomerName}</td>
                                        <td>{item.CustomerEmail}</td>
                                        <td>{item.CustomerPhone}</td>
                                        <td>{item.CustomerID}</td>
                                        <td>{item.SellID}</td>
                                        <td>{item.GrandTotal} TK</td>
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;