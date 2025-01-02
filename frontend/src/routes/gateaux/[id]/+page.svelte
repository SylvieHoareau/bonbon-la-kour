<script>
    export let params;
    let gateaux = [
        { id: 1, name: "Gâteau Tisson", price: "20€"},
        { id: 2, name: "Gâteau Patate", price: "15€"},
        { id: 3, name: "Bonbon Coco", price: "18€"},
        { id: 4, name: "Pâté Créole", price: "25€"}
    ]
    let gateau = gateaux.find(g => g.id == params.id);
</script>

<section 
    class="text-center py-16 bg-yellow-200" 
    style="background-image: url('https://img.freepik.com/vecteurs-libre/plaid-orange-texture-fond_1048-2585.jpg?t=st=1735808591~exp=1735812191~hmac=bc151ea5a8c9478f40083c39c51f39c11ab7d556b8702c501dbd76655eb99d88&w=740'); background-size: cover; background-blend-mode: multiply;"
>    
    <h1>Nos gâteaux</h1>
    <div>
        <div>
            {#if gateau}
            <div>
                <h2>{gateau.name }</h2>
                <p>{gateau.price }</p>
            </div>
            {/if}

            {#if !gateau}
                <p>Le gâteau demandé n'existe pas.</p>
            {/if}
        </div>
    </div>
</section>