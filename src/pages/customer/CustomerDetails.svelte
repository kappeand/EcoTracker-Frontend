<script>
    import axios from "axios";

    export let params = {};
    let customerId;

    $: {
        customerId = params.id;
        getCustomer();
    }
    let customer = {};

    function getCustomer() {
        console.log("getCustomer")
        axios
            .get("http://localhost:8080/ecotracker/customer/" + customerId)
            .then((response) => {
                customer = response.data;
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Customer (ID: {customerId})</h1>
    <p>Name: {customer.name}</p>
    <p>CO2-Rating: {customer.co2_rating}</p>
    <p>Cumulus-Number: {customer.cumulus_number}</p>
    </div>
