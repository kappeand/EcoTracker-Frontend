<script>
    import axios from "axios";

    export let params = {};
    let productId;

    $: {
        productId = params.id;
        getProduct();
    }
    let product = {};

    function getProduct() {
        console.log("getProduct")
        axios
            .get("http://localhost:8080/product/" + productId)
            .then((response) => {
                product = response.data;
                console.log(product)
            });
    }

    function deleteProduct() {
        console.log(productId);
        axios
            .delete("http://localhost:8080/product/" + productId)
            .then((response) => {
                alert("Product is deleted");
            });
    }

</script>

<div class="mb-5">
    <h1 class="mt-3">Product (ID: {productId})</h1>
    <p>Name: {product.name}</p>
    <p>Co2-Emission: {product.co2emission}</p>
    <p>Price: {product.price}</p>
    <p>Country of Origin: {product.countryOfOrigin}</p>
</div>

<button class="btn btn-primary" id="buttonDelete" on:click={deleteProduct} type="button">
    Delete
</button>
