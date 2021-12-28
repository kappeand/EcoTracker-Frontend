// Pages
import Home from "./pages/Home.svelte";
import DemoPage from "./pages/DemoPage.svelte"

import Products from "./pages/products/products.svelte"
import AddProduct from "./pages/products/addproduct.svelte"

import Supplier from "./pages/supplier/Supplier.svelte"
import SupplierDetails from "./pages/supplier/SupplierDetails.svelte"
import CreateSupplier from "./pages/supplier/CreateSupplier.svelte"

import Customers from "./pages/customer/customers.svelte"
import CustomerDetails from "./pages/customer/customerDetails.svelte"
import CreateCustomer from "./pages/customer/createCustomer.svelte"

// Export the route definition object
export default {
    // Exact path
    '/': Home,
    '/home': Home,
    '/demo': DemoPage,

    // infections
    '/products': Products,
    '/addproduct': AddProduct,
    
    // supplier
    '/supplier': Supplier,
    '/supplier/:id': SupplierDetails,
    '/create-supplier': CreateSupplier,

    // customer
    '/customers': Customers,
    '/customers/:id': CustomerDetails,
    '/create-customer': CreateCustomer,
}