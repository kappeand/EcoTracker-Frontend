<script>
    import axios from "axios";
    import { onMount } from "svelte";

    let customer = [];

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
</script>

<div class="mb-5">
    <h1 class="mt-3">List of all Customers</h1>
    <a href="#/createCustomer">Add customer</a>
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
                    {c.co2_rating}
                </td>
                <td>
                    {c.cumulus_number}
                </td>
                <td>
                    {c.address_id}
                </td>
            </tr>
            {/each}
            
        </tbody>
    </table>
</div>
