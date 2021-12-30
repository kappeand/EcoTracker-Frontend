<script>
    let customer = {
        name: "",
        co2rating: "",
        cumulusNumber: "",
        houseNumber:"",
        postalCode:"",
        phoneNumber:"",
        email:"",
    };

    function addCustomer() {
        axios
        .post("http://localhost:8080/customer", customer)
            .then((response)=>{
                alert("Customer added");
                console.log(response.data);
            })
            .catch( (error) => {
                console.log(error)
                alert(error)
            });
    

        console.log("adding customer: " + JSON.stringify(customer));

        // reset input fields
        customer.name = "";
        customer.co2rating = "";
        customer.cumulusNumber = "";
        customer.houseNumber = "";
        customer.postalCode = "";
        customer.phoneNumber = "";
        customer.email = "";
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Add a customer</h1>

    <form>
        <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input
                class="form-control"
                type="text"
                bind:value={customer.name}
            />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">CO2-Rating</label>
            <input
                class="form-control"
                type="number"
                bind:value={customer.co2rating}
            />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Cumulus-Number</label>
            <input 
                class="form-control"
                type="number"
                bind:value={customer.cumulusNumber}
                />
        </div>
        <div class="mb-3">
            <label for="" class="form-label"></label>
        </div>


        <button on:click={addCustomer} type="button" class="btn btn-primary">
            Add Customer
        </button>
    </form>
</div>
