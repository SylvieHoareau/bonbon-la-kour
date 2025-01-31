<script>
  import '../app.css';
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<div>
    <!--Navbar partagée sur toutes les pages -->
    <Navbar />

    <!-- Contenu de la page (varie selon la route)-->
    <slot></slot>

    <!-- Footer partagé sur toutes les pages -->
    <Footer />
</div>