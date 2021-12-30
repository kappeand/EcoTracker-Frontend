<script>
    import axios from "axios";
    import { onMount } from "svelte";

    let products = [];

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


    
</script>

<div class="mb-5">
    <h1 class="mt-3">List of all Products</h1>
    <a href="#/createProduct">Add Product</a>
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

<style>

</style>
