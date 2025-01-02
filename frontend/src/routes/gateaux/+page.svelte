<script>
    let gateaux = [
        { id: 1, name: "Gâteau Tisson", price: "20€"},
        { id: 2, name: "Gâteau Patate", price: "15€"},
        { id: 3, name: "Bonbon Coco", price: "18€"},
        { id: 4, name: "Pâté Créole", price: "25€"}
    ]
</script>

<section>
    <h1>Nos gâteaux</h1>
    <div>
        <div>
            {#each gateaux as gateau}
            <div>
                <h2>{gateau.name }</h2>
                <p>{gateau.price }</p>
            </div>
            {/each}
        </div>
    </div>
</section>