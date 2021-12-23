// Pages
import Home from "./pages/Home.svelte";
import DemoPage from "./pages/DemoPage.svelte"

// Export the route definition object
export default {
    // Exact path
    '/': Home,
    '/home': Home,
    '/demo': DemoPage,
}