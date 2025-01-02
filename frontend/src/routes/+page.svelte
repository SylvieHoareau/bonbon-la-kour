<script>
    export let title = "Bonbon La Kour";

</script>

<section 
    class="text-center py-16 bg-yellow-200" 
    style="background-image: url('https://img.freepik.com/vecteurs-libre/plaid-orange-texture-fond_1048-2585.jpg?t=st=1735808591~exp=1735812191~hmac=bc151ea5a8c9478f40083c39c51f39c11ab7d556b8702c501dbd76655eb99d88&w=740'); background-size: cover; background-blend-mode: multiply;"
>
    <img 
        src="https://files.oaiusercontent.com/file-Dxe3UcEW99EKdA8dbNwHNz?se=2025-01-02T09%3A37%3A33Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dfbf950ed-aad9-48ad-830a-e6acaef077ab.webp&sig=qJJGEzDJBhdBW1zbr7eBZuVvlMAhtH24A3s6%2BlE5LTs%3D" 
        alt="logo de Bonbon La Kour"
        class="logo"
    >
    <!-- Titre principal -->
    <h1 class="text-5xl font-extrabold text-white drop-shadow-md">
        Bienvenue chez {title}
    </h1>
    <p class="mt-4 text-xl text-white font-medium">
        Découvrez les saveurs uniques des gâteaux créoles de La Réunion
    </p>
    <p class="mt-4 text-xl text-white font-medium">
        Choisissez le gâteau qui vous plaît le plus et découvrez notre équipement de cuisine et de service
    </p>
    <a href="/gateaux" class="mt-6 inline-block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
        Voir nos gâteaux
    </a>
</section>

<section class="text-center py-16 bg-white">
    <h2 class="text-4xl font-extrabold text-green-600">
        Notre histoire
    </h2>
    <p class="mt-4 text-lg text-gray-700">
        Bonbon La Kour est une entreprise de cuisine créée en 1997 par la famille Bonbon.
        Nous avons décidé de repenser nos valeurs et de créer un lieu où nous aimons apprendre, écouter et partager nos saveurs.
    </p>
</section>

<section class="text-center py-16 bg-gray-100">
    <h2 class="text-4xl font-extrabold text-green-600">
        Nos valeurs
    </h2>
    <p class="mt-4 text-lg text-gray-700">
        Nous croyons en l'utilisation d'ingrédients locaux et de qualité pour offrir des produits de qualité.
    </p>
</section>

<section class="text-center py-16 bg-white">
    <h2 class="text-4xl font-extrabold text-green-600">
        Nos services
    </h2>
    <p class="mt-4 text-lg text-gray-700">
        En plus de nos délicieux gâteaux, nous proposons également des services de traiteur.
    </p>
</section>

<style>
/* Mobile First Design */
section {
    padding: 2rem 1rem;
    background-color: #fbbf24;
    background-blend-mode: multiply;
    color: #333;
}

.logo {
    width: 150px;
    height: 150px;
    margin: 1rem auto;
}

h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
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
}

.bg-white {
    background-color: #fff;
}

.bg-gray-100 {
    background-color: #f7fafc;
}

.text-gray-700 {
    color: #4a5568;
}

</style>

