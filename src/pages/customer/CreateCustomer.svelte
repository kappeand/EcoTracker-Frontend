<script>
    let customer = {
        name: "",
        co2_rating: "",
        cumulus_number: "",
        address_id: "",
    };

    function addCustomer() {
        // TODO: POST with axios (like in CreatePerson.svelte)

        console.log("adding customer: " + JSON.stringify(customer));

        // reset input fields
        customer.name = "";
        customer.co2_rating = "";
        customer.cumulus_number = "",
        customer.address_id = "",
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
                bind:value={customer.co2_rating}
            />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Cumulus-Number</label>
            <input 
                class="form-control"
                type="number">
                bind:value={customer.cumulus_number}
                />
        </div>
        <button on:click={addCustomer} type="button" class="btn btn-primary">
            Add Customer
        </button>
    </form>
</div>
