<script>
    import axios from "axios";
    import { onMount } from "svelte";

    let suppliers = [];

    onMount(() => {
        getPersons();
    });

    function getPersons() {
        axios
            .get("http://localhost:8080/supplier")
            .then((response) => {
                persons = response.data;
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">List of all Supplier</h1>
    <a href="#/create-person">+ Add Supplier</a>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Adress ID</th>
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
                        {supplier.addressId}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
