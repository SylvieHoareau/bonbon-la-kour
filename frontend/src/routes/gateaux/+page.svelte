<script>
    import GateauDetail from "$lib/GateauDetail.svelte";

    let gateaux = [
        {   id: 1, 
            name: "Gâteau Tison", 
            image: "https://img.freepik.com/photos-gratuite/casserole-fromage-cottage-aux-raisins-secs-semoule_114579-8950.jpg?t=st=1735804921~exp=1735808521~hmac=96956695d97146322c2d7f3fedc482410e0294bc50dc97326c7607197ea52902&w=996", 
            price: "20€",
            description: "Un délicieux gâteau à base de farine de maïs et de rhum"
        },
        {   id: 2, 
            name: "Gâteau Patate", 
            image: "https://img.freepik.com/photos-gratuite/omelette-espagnole-traditionnelle-fond-noir-vue-superieure-copier-espace_123827-31132.jpg?t=st=1735804699~exp=1735808299~hmac=aeba695e712c2a33def8f2e50d6999a28b9fc69f3eece1ca730abc1e067d115c&w=1380", 
            price: "25€",
            description: "Un gâteau de patate à la sauce épaisse, accompagné de riz et de lait"
        },
        {   id: 3, 
            name: "Bonbon Coco", 
            image: "https://img.freepik.com/photos-gratuite/delicieux-macarons-maison-noix-coco-noix-coco-fraiche-vue-dessus_114579-9815.jpg?t=st=1735805055~exp=1735808655~hmac=84f4d8bbd19ce4ee88041a150a0784b2e68bd9885099d146f09b92ba82cf207e&w=996", 
            price: "10€",
            description: "Un bonbon coco d'une douceur extrême"
        },
        {
            id: 4, 
            name: "Gâteau Banane",
            image: "https://img.freepik.com/photos-gratuite/vue-du-delicieux-gateau-dessert-aux-bananes_23-2150822885.jpg?t=st=1735822242~exp=1735825842~hmac=b1f27ee076d9f2fd79cd0e949bb82549628ce47fd65fa6b5ba3025f7236647d1&w=900",
            price: "15€",
            description: "Un gâteau de banane, accompagné de lait et de chocolat noir"
        },
        {
            id: 4, 
            name: "Gâteau Manioc",
            image: "https://img.freepik.com/photos-gratuite/biscuits-patissiers-est-interieur-plaque-anneaux-ananas-seche-creme-blanche-table-bois_140725-29486.jpg?t=st=1735822201~exp=1735825801~hmac=5650c2e4ef9ea5d0dac084602753e65c5f4305acb35ef47683ef63c6ea774b4c&w=900",
            price: "12€",
            description: "Un gâteau de manioc, accompagné de lait et de caramel au beurre au sel de Saint-Leu"
        },
        {
            id: 4, 
            name: "Gâteau Chemin de Fer",
            image: "https://img.freepik.com/photos-gratuite/delicieux-gateau-aux-framboises-fait-maison_114579-47537.jpg?t=st=1735822392~exp=1735825992~hmac=356607ddd9f83a9dfd06b4d87f34526a47c10b95eaaf6f52820287452140b04d&w=900",
            price: "16€",
            description: "Une délicieuse génoise moelleuse fourrée à la confiture de fraises"
        }
    ];

    let selectedGateau = null;

    const showDetails = (gateau) => {
        console.log("Gâteau sélectionné :", gateau);
        // Associe le gâteau sélectionné
        selectedGateau = gateau;
    }

    const closeDetails = () => {
        // Réinitialise la sélection pour fermer le détail
        selectedGateau = null;
    }
</script>

<section 
    class="text-center py-16 bg-yellow-200" 
    style="background-image: url('https://img.freepik.com/vecteurs-libre/plaid-orange-texture-fond_1048-2585.jpg?t=st=1735808591~exp=1735812191~hmac=bc151ea5a8c9478f40083c39c51f39c11ab7d556b8702c501dbd76655eb99d88&w=740'); background-size: cover; background-blend-mode: multiply;"
>    
   
    <h1 class="text-4xl font-extrabold text-green-600 mt-16">
        Nos gâteaux
    </h1>

    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {#each gateaux as gateau}
            <div class="gateau-card p-6 bg-white rounded shadow-md transition transform hover:scale-105">
                <h2 class="text-lg font-bold text-gray-800">{gateau.name}</h2>
                <img src={gateau.image} alt="image de {gateau.name}" class="w-full h-48 object-cover rounded-t">
                <p class="mt-2 text-gray-700">Prix : {gateau.price}</p>
                <button class="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600" on:click={() => showDetails(gateau)}>
                    En savoir plus
                </button>
            </div>
        {/each}
    </div>
</section>

<!-- Affiche GateauDetail si un gâteau est sélectionné -->
{#if selectedGateau}
    <GateauDetail gateau={selectedGateau} onClose={closeDetails}/>
{/if}

<style>
    /* Mobile First Design */
section {
    padding: 2rem 1rem;
    background-color: #fbbf24;
    background-blend-mode: multiply;
    color: #333;
}

h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 1rem;
}

p {
    font-size: 1.25rem;
    font-weight: 500;
    color: #fff;
}

a {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #f97316;
    color: #fff;
    text-decoration: none;
    border-radius: 0.25rem;
    transition: background-color 0.3s;
}

a:hover {
    background-color: #ea580c;
}

h2 {
    font-size: 2rem;
    font-weight: 800;
    color: #10b981;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
}

.grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr;
}

@media (min-width: 640px) {
    .grid {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

.gateau-card {
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.gateau-card:hover {
    transform: scale(1.05);
}

.gateau-card img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
}

.gateau-card h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #4a5568;
}

.gateau-card p {
    font-size: 1rem;
    color: #718096;
}

button {
    margin-top: 1rem;
}
</style>


