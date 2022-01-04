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

    function deleteCustomer() {
        console.log(customerId);
        axios
            .delete("http://localhost:8080/customer/" + customerId)
            .then((response) => {
                alert("Customer was deleted");
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Customer (ID: {customerId})</h1>
    <br>
    <p>Name: {customer.name}</p>
    <p>CO2 Rating: {customer.co2rating}</p>
    <p>Cumulus Number: {customer.cumulusNumber}</p>
    <p>Phone Number: {address.phoneNumber}</p>
    <p>Email: {address.email}</p>
</div>
<br>
<button class="btn btn-primary" id="buttonDelete" on:click={deleteCustomer} type="button">
    Delete
</button>




