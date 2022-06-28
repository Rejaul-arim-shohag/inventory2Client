import React from 'react';
import "./Main.css";
import {
    Routes,
    Route,
  } from "react-router-dom";
import Dashboard from '../../Pages/Dashboard';
import Category from '../Category/Category';
import Brand from '../Brand/Brand';
import Customer from '../Customer/Customer';
import CreateCustomer from '../CreateCustomer/CreateCustomer';
import UpdateCustomer from '../UpdateCustomer/UpdateCustomer';
import Supplier from '../Supplier/Supplier';
import NewSupplier from '../NewSupplier/NewSupplier';
import UpdateSupplier from '../UpdateSupplier/UpdateSupplier';
import Expense from '../Expense/Expense';
import ExpenseList from '../ExpenseLists/ExpenseList';
import ExpenseListCreate from '../ExpenseListCreate/ExpenseListCreate';
import ExpenseUpdate from '../ExpenseUpdate/ExpenseUpdate';
import Products from '../Products/Products';
import CreateProduct from '../CreateProduct/CreateProduct';
import EditProduct from '../EditProduct/EditProduct';
import AddSell from '../AddSell/AddSell';
import SellList from '../SellList/SellList';
import SellProduct from '../SellProduct/SellProduct';
import Return from '../Return/Return';
import CreateReturn from '../CreateReturn/CreateReturn';
import CreatePurchase from '../CreatePurchase/CreatePurchase';
import AllPurchase from '../AllPurchases/AllPurchase';
import PurchaseProduct from '../PurchaseProduct/PurchaseProduct';

const Main = () => {
    return (
        <div className="main">
         <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/customers" element={<Customer/>}/>
            <Route path="/createCategory" element={<Category/>}/>
            <Route path="/brand" element={<Brand/>}/>
            <Route path="/customers/newCustomer" element={<CreateCustomer/>}/>
            <Route path="/customers/edit/:customerId" element={<UpdateCustomer/>}/>
            <Route path="/suppliers" element={<Supplier/>}/>
            <Route path="/suppliers/new" element={<NewSupplier/>}/>
            <Route path="/suppliers/edit/:supplierId" element={<UpdateSupplier/>}/>
            <Route path="/expense" element={<Expense/>}/>
            <Route path="/expenseList" element={<ExpenseList/>}/>
            <Route path="/expenseCreate" element={<ExpenseListCreate/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/expenseEdit/:expenseID" element={<ExpenseUpdate/>}/>
            <Route path="/addNewProduct" element={<CreateProduct/>}/>
            <Route path="/product/edit/:productId" element={<EditProduct/>}/>
            <Route path="/sell/add-Sell" element={<AddSell/>}/>
            <Route path="/sell/sellList" element={<SellList/>}/>
            <Route path="/sell/sellProduct/:sellId" element={<SellProduct/>}/>
            <Route path="/sell/return" element={<Return/>}/>
            <Route path="/return/add-return" element={<CreateReturn/>}/>
            <Route path="/createPurchase" element={<CreatePurchase/>}/>
            <Route path="/allPurchase" element={<AllPurchase/>}/>
            <Route path="/purchase-product/:purchaseId" element={<PurchaseProduct/>}/>

           
            
            <Route path="*" element={<h1>Not Found</h1>}/>
         </Routes>
        </div>
    );
};

export default Main;