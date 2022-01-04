<script>
    import Router from "svelte-spa-router";
    import routes from "./routes";
</script>

<!-- This part is always displayed -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#/">Ecotracker</a>
        <button
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
                class="navbar-toggler"
                data-bs-target="#navbarNavDropdown"
                data-bs-toggle="collapse"
                type="button"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#/supplier">Supplier</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#/customer"> Customers </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#/product"> Products </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div class="container mt-3">
    <!-- Here we load the page depending on the current URL -->
    <Router {routes}/>
</div>

<style>
</style>
