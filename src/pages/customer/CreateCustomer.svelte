<script>
    import axios from "axios";

    let customer = {
        name: "",
        co2rating: "",
        cumulusNumber: "",
        address: {
            houseNumber: "",
            postalCode: "",
            phoneNumber: "",
            email: ""
        }

    };

    function addCustomer() {
        axios
            .post("http://localhost:8080/customer", customer)
            .then((response) => {
                alert("Customer added");
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error)
                alert(error)
            });


        console.log("adding customer: " + JSON.stringify(customer));

        // reset input fields
        customer.name = "";
        customer.co2rating = "";
        customer.cumulusNumber = "";
        customer.address.houseNumber = "";
        customer.address.postalCode = "";
        customer.address.phoneNumber = "";
        customer.address.email = "";
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Add a customer</h1>

    <form>
        <div class="mb-3">
            <label class="form-label" for="">Name</label>
            <input
                    bind:value={customer.name}
                    class="form-control"
                    type="text"
            />
        </div>
        <div class="mb-3">
            <label class="form-label" for="">CO2-Rating</label>
            <select bind:value={customer.co2rating} class="form-control">
                <option>Anfaenger</option>
                <option>Fortgeschritten</option>
                <option>Profi</option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label" for="">Cumulus-Number</label>
            <input
                    bind:value={customer.cumulusNumber}
                    class="form-control"
                    type="number"
            />
        </div>
        <div class="mb-3">
            <label class="form-label" for=""></label>
        </div>


        <button class="btn btn-primary" on:click={addCustomer} type="button">
            Add Customer
        </button>
    </form>
</div>
