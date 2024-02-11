<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<div class="relative flex flex-col max-w-[1231px] mx-auto w-full text-sm sm:text-base min-h-screen">
  <Header />
  <slot />
  <Footer />
</div>