<script>
    import axios from "axios";

    export let params = {};
    let supplierId;

    $: {
        supplierId = params.id;
        getSupplier();
    }
    let supplier = {};

    function getSupplier() {
        console.log("getSupplier")
        axios
            .get("http://localhost:8080/supplier/" + supplierId)
            .then((response) => {
                supplier = response.data;
                console.log(supplier)
            });
    }

    function deleteSupplier() {
        console.log(supplierId);
        axios
            .delete("http://localhost:8080/supplier/" + supplierId)
            .then((response) => {
                alert("Supplier is deleted");
            });
    }

</script>

<div class="mb-5">
    <h1 class="mt-3">Supplier (ID: {supplierId})</h1>
    <p>Name: {supplier.name}</p>

</div>





