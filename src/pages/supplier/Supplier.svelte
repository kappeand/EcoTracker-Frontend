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
                <th>Name</th>
                <th>Test</th>
                <th>Test</th>
                <th>Test</th>
            </tr>
        </thead>
        <tbody>
            {#each suppliers as supplier}
                <tr>
                    <td>
                        <a href={"#/supplier/" + supplier.id}>
                            {supplier.id}
                        </a>
                    </td>
                    <td>
                        {supplier.name}
                    </td>
                    <td>
                        test
                    </td>
                    <td>
                        test
                    </td>
                    <td>
                        test
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>

</div>

<style>

</style>
