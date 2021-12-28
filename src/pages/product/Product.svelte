<script>
    import axios from "axios";
    import { onMount } from "svelte";

    let products = [];

    onMount(() => {
        getProducts();
    });

    function getProducts() {
        axios
            .get("http://localhost:8080/ecotracker/product")
            .then((response) => {
                products = response.data;
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">List of all Products</h1>
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
                        {product.bio}
                    </td>
                    <td>
                        {product.co2_emission}
                    </td>
                    <td>
                        {product.supplier.id}
                    </td>
                    <td>
                        {product.customer.id}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
    
</div>

<style>

</style>
