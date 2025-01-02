<script>
    export let gateau;
    export let onClose;

    import { onMount, onDestroy } from 'svelte';

    // Ajouter ou supprimer le gestionnaire d'évenement au nivau de la fenêtre
    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            onClose();
        }
    }

    // Ajouter le gestionnaire d'événements lorsque le composant est monté
   
    onMount(() => {
        window.addEventListener('keydown', handleKeyDown);
    });

    // Supprimer le gestionnaire d'événements lorsque le composant est détruit
    onDestroy(() => {
        window.removeEventListener('keydown', handleKeyDown);
    });

    console.log("GateauDetail chargé pour: ", gateau);
</script>

<dialog
    class="gateau-detail-overlay" 
    open
    aria-labelledby="gateau-title"
    aria-describedby="gateau-description"
>
    <div 
        class="gateau-detail"
        role="dialog"
        aria-model="true"
        on:click|stopPropagation
    >
        <!-- Bouton pour fermer le dialogue -->
        <button 
            class="close-button" 
            on:click={onClose} 
            aria-label="Fermer le détail"
        >
            x
        </button>

        <h2 id="gateau-title">{gateau.name}</h2>
        <img src={gateau.image} alt="image de {gateau.name}"/>
        <p id="gateau-price">Prix: {gateau.price}</p>
        <p id="gateau-description">Description: {gateau.description}</p>
    </div>
</dialog>

<style>

    .gateau-detail-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .gateau-detail {
        background-color: #fff;
        border-radius: 0.5rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        width: 90%;
        max-width: 600px;
        position: relative;
    }

    .close-button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 2rem;
        background: none;
        border: none;
        cursor: pointer;
    }
</style>