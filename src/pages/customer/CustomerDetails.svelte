<script>
    import axios from "axios";

    export let params = {};
    let customerId;

    $: {
        customerId = params.id;
        getCustomer();
    }
    let customer = {};
    let address = {};

    function getCustomer() {
        console.log("getCustomer")
        axios
            .get("http://localhost:8080/customer/" + customerId)
            .then((response) => {
                customer = response.data;
                address = customer.address;
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Customer (ID: {customerId})</h1>
    <p>Name: {customer.name}</p>
    <p>CO2 Rating: {customer.co2rating}</p>
    <p>Cumulus Number: {customer.cumulusNumber}</p>
    <p>Phone Number: {address.phoneNumber}</p>
    <p>Email: {address.email}</p>
    </div>




