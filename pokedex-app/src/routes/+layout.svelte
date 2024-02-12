<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<div class="relative flex flex-col mx-auto w-full max-w-[1400px] text-sm sm:text-base min-h-screen">
  <Header />
  <slot />
  <Footer />
</div>