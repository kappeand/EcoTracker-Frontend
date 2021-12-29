// Pages
import Home from "./pages/Home.svelte";
import DemoPage from "./pages/DemoPage.svelte"

import Product from "./pages/product/Product.svelte"
<<<<<<< HEAD
=======

>>>>>>> 13dba7cb979666f6271bc28d394bcb4d5a084f05

import Supplier from "./pages/supplier/Supplier.svelte"
import SupplierDetails from "./pages/supplier/SupplierDetails.svelte"
import CreateSupplier from "./pages/supplier/CreateSupplier.svelte"

import Customer from "./pages/customer/Customer.svelte"
import CustomerDetails from "./pages/customer/CustomerDetails.svelte"
import CreateCustomer from "./pages/customer/CreateCustomer.svelte"

// Export the route definition object
export default {
    // Exact path
    '/': Home,
    '/home': Home,
    '/demo': DemoPage,

    // infections
    '/product': Product,
    
    // supplier
    '/supplier': Supplier,
    '/supplier/:id': SupplierDetails,
    '/create-supplier': CreateSupplier,

    // customer
    '/customer': Customer,
    '/customer/:id': CustomerDetails,
    '/create-customer': CreateCustomer,
}