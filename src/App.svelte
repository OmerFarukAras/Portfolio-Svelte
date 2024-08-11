<script>
  import { Route, router } from "tinro";

  import About from "./routes/About.svelte";
  import Transition from "./routes/Transition.svelte";
  import Layout from "./routes/Layout.svelte";
  import Portfolio from "./routes/Portfolio.svelte";
  import Contact from "./routes/Contact.svelte";
  import Photos from "./routes/Photos.svelte";
  import Projects from "./routes/Projects.svelte";
  import Home from "./routes/Home.svelte";

  router.mode.memory();
</script>

<Layout>
  <Transition>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/portfolio/*">
      <Route path="/">
        <Portfolio />
      </Route>
      <Route path="/projects"><Projects /></Route>
      <Route path="/photos"><Photos /></Route>
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
    <Route fallback>No page found</Route>
  </Transition>
</Layout>
