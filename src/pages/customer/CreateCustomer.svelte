<script>
    let customer = {
        name: "",
        co2rating: "",
        cumulusNumber: "",
        addressId: "",
    };

    function addCustomer() {
        // TODO: POST with axios (like in CreatePerson.svelte)

        console.log("adding customer: " + JSON.stringify(customer));

        // reset input fields
        customer.name = "";
        customer.co2rating = "";
        customer.cumulusNumber = "";
        customer.addressId = "";
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
                type="number">
                bind:value={customer.cumulusNumber}
                />
        </div>
        <button on:click={addCustomer} type="button" class="btn btn-primary">
            Add Customer
        </button>
    </form>
</div>
