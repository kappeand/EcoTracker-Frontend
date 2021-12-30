<script>
    let product = {
        name:"",
        co2emission: "",
        price:"",
        countryOfOrigin:"",
    };

    function addProduct() {
        axios
        .post("http://localhost:8080/product/", product)
            .then((response)=>{
                alert("Product added");
                console.log(response.data);
            })
            .catch( (error) => {
                console.log(error)
                alert(error)
            });
    

        console.log("adding prodcut: " + JSON.stringify(product));

        // reset input fields
        product.name = "";
        customer.co2emission = "";
        customer.price = "";
        customer.countryOfOrigin = "";
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Add a product</h1>

    <form>
        <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input
                class="form-control"
                type="text"
                bind:value={product.name}
            />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">CO2-Emission</label>
            <input
                class="form-control"
                type="number"
                bind:value={product.co2emission}
            />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Cumulus-Number</label>
            <input 
                class="form-control"
                type="number"
                bind:value={product.price}
                />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Herkunft</label>
            <input 
                class="form-control"
                type="text"
                bind:value={product.countryOfOrigin}
                />
        </div>
        <div class="mb-3">
            <label for="" class="form-label"></label>
        </div>


        <button on:click={addProduct} type="button" class="btn btn-primary">
            Add Product
        </button>
    </form>
</div>
