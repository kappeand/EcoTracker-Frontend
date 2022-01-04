// Pages
import Home from "./pages/Home.svelte";


import Product from "./pages/product/Product.svelte"
import CreateProduct from "./pages/product/CreateProduct.svelte"
import ProductDetails from "./pages/product/ProductDetails.svelte"


import Supplier from "./pages/supplier/Supplier.svelte"
import SupplierDetails from "./pages/supplier/SupplierDetails.svelte"


import Customer from "./pages/customer/Customer.svelte"
import CustomerDetails from "./pages/customer/CustomerDetails.svelte"
import CreateCustomer from "./pages/customer/CreateCustomer.svelte"

// Export the route definition object
export default {
    // Exact path
    '/': Home,
    '/home': Home,

    // product
    '/product': Product,
    '/product/:id': ProductDetails,
    '/create-product': CreateProduct,

    // supplier
    '/supplier': Supplier,
    '/supplier/:id': SupplierDetails,

    // customer
    '/customer': Customer,
    '/customer/:id': CustomerDetails,
    '/create-customer': CreateCustomer,
}