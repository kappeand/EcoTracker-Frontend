<div class="my-5" style="text-align: center">
    <img
            alt="EcoTracker Logo"
            class="logo"
            src="images/ecoTracker.jpg"
    />
    <br>
</div>

<h1 class="mt-3">Welcome to the EcoTracker Application</h1>
<br>
<br>
<br>
<br>
<script>
    import axios from "axios";
    import {onMount} from "svelte";

    let customer = [];
    let products = [];
    let suppliers = [];

    // Customer Script Teil (Variable oben)

    onMount(() => {
        getCustomers();
    });

    function getCustomers() {
        axios
            .get("http://localhost:8080/customer/all")
            .then((response) => {
                customer = response.data;
            });
    }

    // Product Script Teil (Variable oben)

    onMount(() => {
        getProducts();
    });

    function getProducts() {
        axios
            .get("http://localhost:8080/product/all")
            .then((response) => {
                products = response.data;
            });
    }

    //Supplier script Teil (Variable oben)

    onMount(() => {
        getSuppliers();
    });

    function getSuppliers() {
        axios
            .get("http://localhost:8080/supplier/all")
            .then((response) => {
                suppliers = response.data;
            });
    }


</script>


<div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button aria-controls="collapseOne" aria-expanded="true" class="accordion-button" data-bs-target="#collapseOne"
                    data-bs-toggle="collapse" type="button">
                List of all customers
            </button>
        </h2>
        <div aria-labelledby="headingOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample"
             id="collapseOne">
            <div class="accordion-body">
                <div class="mb-5">


                    <table class="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>CO2 Rating</th>
                            <th>Cumulus number</th>
                            <th>Address ID</th>
                        </tr>
                        </thead>
                        <tbody>
                        {#each customer as c}
                            <tr>
                                <td>
                                    <a href={"#/customer/" + c.id}>
                                        {c.id}
                                    </a>
                                </td>
                                <td>
                                    {c.name}
                                </td>
                                <td>
                                    {c.co2rating}
                                </td>
                                <td>
                                    {c.cumulusNumber}
                                </td>
                                <td>
                                    {c.address.street}
                                </td>
                            </tr>
                        {/each}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button aria-controls="collapseTwo" aria-expanded="false" class="accordion-button collapsed"
                    data-bs-target="#collapseTwo" data-bs-toggle="collapse" type="button">
                List of all products
            </button>
        </h2>
        <div aria-labelledby="headingTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample"
             id="collapseTwo">
            <div class="accordion-body">

                <div class="mb-5">
                    <h1 class="mt-3">List of all Products</h1>
                    <table class="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>CO2</th>
                            <th>Price</th>
                            <th>Country Of Origin</th>
                        </tr>
                        </thead>
                        <tbody>
                        {#each products as product}
                            <tr>
                                <td>
                                    {product.id}
                                </td>
                                <td>
                                    {product.name}
                                </td>
                                <td>
                                    {product.co2emission}
                                </td>
                                <td>
                                    {product.price}
                                </td>
                                <td>
                                    {product.countryOfOrigin}
                                </td>
                            </tr>
                        {/each}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button aria-controls="collapseThree" aria-expanded="false" class="accordion-button collapsed"
                    data-bs-target="#collapseThree" data-bs-toggle="collapse" type="button">
                List of all supplier
            </button>
        </h2>
        <div aria-labelledby="headingThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample"
             id="collapseThree">
            <div class="accordion-body">
                <div class="mb-5">

                    <table class="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {#each suppliers as supplier}
                            <tr>

                                <td>
                                    {supplier.id}
                                </td>
                                <td>
                                    {supplier.name}
                                </td>
                            </tr>
                        {/each}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
</div>


<style>

    h1 {
        text-align: center;
    }

    .logo {
        height: 100px;
    }
</style>
