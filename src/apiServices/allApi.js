const axios = require('axios');
let token = JSON.parse(localStorage.getItem('token'));
const baseUrl = "https://rejaulkariminventory.herokuapp.com/api/v1"
//user Api
export function AddUser(UserName, Email, Password) {
    const url = baseUrl + "/addUser";
    const postBody = {
        UserName: UserName,
        Email: Email,
        Password: Password
    }
    return axios.post(url, postBody)
        .then((res) => {
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        }).catch((err) => {
            console.log("err", err)
        })
}

export function loginUser(email, password) {
    const url = baseUrl + "/loginUser";
    const postBody = {
        Email: email,
        Password: password,
    }
    return axios.post(url, postBody)
        .then((res) => {
            if (res.status === 200) {
                return [res, true];
            } else {
                return false;
            }
        }).catch((err) => {
            console.log("err", err)
        })
}

//category api
export function createCategory(categoryName) {
    const url = baseUrl + "/CreateCategoryType";
    const postBody = {
        Name: categoryName,
    }
    return axios.post(url, postBody, { headers: { token: token } })
        .then((result => {
            if (result.status === 200) {
                return true;
            } else {
                return false;
            }
        }))
}
export function readALlCategory() {
    const url = baseUrl + "/ReadCategoryType";
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result.data;
            } else {
                return false
            }
        })
}

//delete category
export function deleteCategory(id) {
    const url = baseUrl + "/DeleteCategoryType/" + id;
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result;
            } else {
                return false;
            }
        })
}

//read categorybyId 
export function readCategoryById(CategoryID) {
    const url = baseUrl + "/ReadCategoryById/" + CategoryID;
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result;
            } else {
                return false;
            }
        })

}
//update category
export function updateCategory(id, name) {
    const url = baseUrl + "/UpdateCategoryType";
    const postBody = {
        Name: name,
        CategoryID: id
    }
    return axios.post(url, postBody, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result;
            } else {
                return false;
            }
        })

}

//create brand
export function createBrand(name) {
    const url = baseUrl + "/createBrand";
    const postBody = {
        Name: name,
    }
    return axios.post(url, postBody, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result;
            } else {
                return false;
            }
        })

}

//read brands
export function readBrands() {
    const url = baseUrl + "/readBrands";
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result;
            } else {
                return false;
            }
        })

}

//delete brand
export function deleteBrand(id) {
    const url = baseUrl + "/deleteBrand/" + id;
    console.log(url)
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result;
            } else {
                return false;
            }
        })

}



//create customers
export function CreateNewCustomer(name, phone, email, address) {
    const url = baseUrl + "/CreateCustomer";
    const postBody = {
        CustomerName: name,
        Phone: phone,
        Email: email,
        Address: address
    };
    return axios.post(url, postBody, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result;
            } else {
                return false;
            }
        })

}
//read customers
export function readCustomers() {
    const url = baseUrl + "/ReadCustomer";
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result;
            } else {
                return false;
            }
        })
}
//delete customer
export function deleteCustomer(id) {
    const url = baseUrl + "/DeleteCustomer/" + id;
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return true;
            } else {
                return false
            }
        })
}
//read customer by ID
export function readCustomerByID(id) {
    const url = baseUrl + "/readCustomer/" + id;
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result.data.data[0];
            } else {
                return false
            }
        })
}

export function updateCustomer(customerId, CustomerName, Phone, Email, Address) {
    const url = baseUrl + "/UpdateCustomer/" + customerId;
    const postBody = {
        CustomerName: CustomerName,
        Phone: Phone,
        Email: Email,
        Address: Address,
    }
    return axios.post(url, postBody, { headers: { token: token } })
        .then((result) => {
            console.log(result)
            if (result.status === 200) {
                return result.data;
            } else {
                return false;
            }
        })
}

//create supplier
export function CreateSupplier(Name, Phone, Email, Address) {
    const url = baseUrl + "/CreateSupplier";
    const postBody = {
        Name: Name,
        Phone: Phone,
        Email: Email,
        Address: Address,
    }
    return axios.post(url, postBody, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return true;
            } else {
                return false;
            }
        })
}

//read Suppliers
export function ReadSuppliers() {
    const url = baseUrl + "/ReadSupplier";
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result.data.data;
            } else {
                return false;
            }
        })
}

//deleteSupplier
export function DeleteSupplier(id) {
    const url = baseUrl + "/DeleteSupplier/" + id;
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return true;
            } else {
                return false
            }
        })

}

//readSUpplierByID
export function readSupplierById(id) {
    const url = baseUrl + "/ReadSupplierByID/" + id;
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result.data.data[0];
            } else {
                return false;
            }
        })

}

//update supplier
export function updateSupplier(id, name, phone, email, address) {
    const url = baseUrl + "/UpdateSupplier/" + id;
    const postBody = {
        Name: name,
        Phone: phone,
        Email: email,
        Address: address
    };
    return axios.post(url, postBody, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return true;
            } else {
                return false
            }
        })
}

//create expense type
export function createExpenseType(name) {
    const url = baseUrl + "/CreateExpenseType";
    const postBody = {
        Name: name
    }
    return axios.post(url, postBody, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return true;
            } else {
                return false;
            }
        })
}
//read expense type
export function readExpenseTypes() {
    const url = baseUrl + "/ReadExpenseType";
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result.data.data;
            } else {
                return false;
            }
        })
}

export function deleteExpenseType(id) {
    const url = baseUrl + "/DeleteExpenseType/" + id;
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result;
            } else {
                return false;
            }
        })
}

//expense create
export function createExpense(typeID, amount, note) {
    const url = baseUrl + "/CreateExpenseList";
    const postBody = {
        TypeID: typeID,
        Amount: amount,
        Note: note
    }
    return axios.post(url, postBody, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result;
            } else {
                return false;
            }
        })

}

//read expense 
export function readExpense() {
    const url = baseUrl + "/ReadExpenseList";
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result.data.data;
            } else {
                return false;
            }
        })
}

export function deleteExpense(id) {
    const url = baseUrl + "/DeleteExpenseList/" + id;
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return true;
            } else {
                return false;
            }
        })

}


export function updateExpenseList(id,type, amount, note) {
    const url = baseUrl + "/UpdateExpenseList/" + id;
    const postBody = {
        Amount: amount,
        Note: note
    }
    return axios.post(url, postBody, { headers: { token: token } })
    .then((reuslt)=>{
        if(reuslt.status === 200){
            return true;
        } else{
            return false;
        }
    })

}
export function readExpenseById(id) {
    const url = baseUrl + "/readExpenseById/" + id;
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result.data.data[0];
            } else {
                return false;
            }
        })
}

export function totalExpense() {
    const url = baseUrl + "/TotalExpense";
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result.data.data[0];
            } else {
                return false;
            }
        })
}
//createProduct
export function productCreate(CategoryID, BrandID, Name, Price, Unit, Stock, Details) {
    const url = baseUrl + "/CreateProduct";
    const postBody = {
        CategoryID: CategoryID,
        BrandID: BrandID,
        Name: Name,
        Price: Price,
        Unit: Unit,
        Stock: Stock,
        Details: Details
    }
    return axios.post(url, postBody, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result;
            } else {
                return false;
            }
        })
}

export function readProducts() {
    const url = baseUrl + "/ReadProduct";
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result;
            } else {
                return false;
            }
        })
}

export function deleteProduct(id) {
    const url = baseUrl + "/DeleteProduct/" + id;
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result;
            } else {
                return false;
            }
        })
}

export function readProductById(id) {
    const url = baseUrl + "/readProductById/" + id;
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result.data.data[0];
            } else {
                return false;
            }
        })
}

export function updateProduct(productId, CategoryID, BrandID, Name, Price, Unit, Stock, Details) {
    const url = baseUrl + "/UpdateProduct/" + productId;
    const postBody = {
        CategoryID: CategoryID,
        BrandID: BrandID,
        Name: Name,
        Price: Price,
        Unit: Unit,
        Stock: Stock,
        Details: Details
    }
    return axios.post(url, postBody, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return true;
            } else {
                return false;
            }
        })
}

//create sell
export function createSell(customerID, sellID, vatTax, otherCost, discount, grandTotal, productID, Qty, price, total, note) {
    const url = baseUrl + "/CrearteSell";
    const postBody = {
        CustomerID: customerID,
        SellID: sellID,
        VatTax: vatTax,
        OtherCost: otherCost,
        Discount: discount,
        GrandTotal: grandTotal,
        Note: note,
        Products: [
            {
                SellID: sellID,
                ProductID: productID,
                Qty: Qty,
                Cost: price,
                Total: total
            }
        ]
    };
    return axios.post(url, postBody, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return true;
            } else {
                return false;
            }
        })
}

export function readSell() {
    const url = baseUrl + "/ReadSell";
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result.data.data;
            } else {
                return false;
            }
        })

}

export function deleteSell(sellId) {
    const url = baseUrl + "/DeleteSell/" + sellId;
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return true;
            } else {
                return false;
            }
        })
}

export function readSellProduct(sellId) {
    const url = baseUrl + "/ReadSellProducts/" + sellId;
    return axios.get((url), { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result.data.data[0];
            } else {
                return false;
            }
        })
}
export function createReturn(CustomerID, ReturnID, ReturnCharges, GrandTotal, Note, ProductID, Qty, Cost, Total) {
    const url = baseUrl + "/CreateReturn";
    const postBody = {
        CustomerID: CustomerID,
        ReturnID: ReturnID,
        ReturnCharges: ReturnCharges,
        GrandTotal: GrandTotal,
        Note: Note,
        Products: [
            {
                ProductID: ProductID,
                Qty: Qty,
                Cost,
                Total: Total
            }
        ]
    }
    return axios.post(url, postBody, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return true;
            } else {
                return false;
            }
        })

}
export function readReturn() {
    const url = baseUrl + "/ReadReturn";
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result.data.data;
            } else {
                return false;
            }
        })
}

export function deleteRetrun(id) {
    const url = baseUrl + "/DeleteReturn/" + id;
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result.data.data;
            } else {
                return false;
            }
        })

}

export function totalSell() {
    const url = baseUrl + "/TotalSell";
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result.data.data[0]
            } else {
                return false
            }
        })

}
export function createPurchase(productPrice, quantity, vatTax, discount, otherCost, supplierId, purchaseId, grandTotal, note, productID, total
) {
    const url = baseUrl + "/CreartePurchase";
    const postBody = {
        SupplierID: supplierId,
        PurchaseID: purchaseId,
        VatTax: vatTax,
        Discount: discount,
        OtherCost: otherCost,
        GrandTotal: grandTotal,
        Note: note,
        Products: [
            {
                PurchaseID: purchaseId,
                ProductID: productID,
                Qty: quantity,
                Cost: productPrice,
                Total: total
            }
        ]
    }

    return axios.post(url, postBody, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return true;
            } else {
                return false;
            }
        })

}

export function readAllPurchase() {
    const url = baseUrl + "/ReadPurchase";
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result.data.data
            } else {
                return false;
            }
        })
}


export function deletePurchase(id) {
    const url = baseUrl + "/DeletePurchase/" + id;
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return true;
            } else {
                return false;
            }
        })
}

export function readPurchaseProduct(purchaseId) {
    const url = baseUrl + "/ReadPurchaseProduct/" + purchaseId;
    return axios.get(url, { headers: { token: token } })
        .then((result) => {
            if (result.status === 200) {
                return result
            } else {
                return false;
            }
        })


}



