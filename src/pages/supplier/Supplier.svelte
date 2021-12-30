<script>
    import axios from "axios";
    import { onMount } from "svelte";

    let suppliers = [];

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

<div class="mb-5">
    <h1 class="mt-3">List of all Suppliers</h1>
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

<style>

</style>
