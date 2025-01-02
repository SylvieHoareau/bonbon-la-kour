<script>
    import Navbar from '$lib/Navbar.svelte';
</script>

<div>
    <!--Navbar partagée sur toutes les pages -->
    <Navbar />

    <!-- Contenu de la page (varie selon la route)-->
    <slot></slot>
</div>