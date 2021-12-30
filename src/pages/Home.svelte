<div class="my-5" style="text-align: center">
    <img
        class="logo"
        alt="EcoTracker Logo"
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
    import { onMount } from "svelte";

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
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          List of all customers
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
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
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          List of all products
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <div class="mb-5">
   
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Bio</th>
                            <th>CO2</th>
                            <th>Supplier ID</th>
                            <th>Customer ID</th>
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
                                    hallo
                                </td>
                                <td>
                                    name
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
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          List of all supplier
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <div class="mb-5">
  
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Bio</th>
                            <th>CO2</th>
                            <th>Supplier ID</th>
                            <th>Customer ID</th>
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
                                <td>
                                    hallo
                                </td>
                                <td>
                                    hallo
                                </td>
                                <td>
                                    name
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
    .logo {
        height: 100px;
    }
</style>
