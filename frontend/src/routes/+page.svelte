<script>
    export let title = "Bonbon La Kour";

</script>

<section>
    <img 
        src="https://files.oaiusercontent.com/file-Dxe3UcEW99EKdA8dbNwHNz?se=2025-01-02T09%3A37%3A33Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dfbf950ed-aad9-48ad-830a-e6acaef077ab.webp&sig=qJJGEzDJBhdBW1zbr7eBZuVvlMAhtH24A3s6%2BlE5LTs%3D" 
        alt="logo de Bonbon La Kour"
        class="logo"
    >
    <!-- Titre principal -->
    <h1>
        Bienvenue chez {title}
    </h1>
    <p>
        Découvrez les saveurs uniques des gâteaux créoles de La Réunion
    </p>
    <p>
        Choisissez le gâteau qui vous plaît le plus et découvrez notre équipement de cuisine et de service
    </p>
    <a href="/gateaux">
        Voir nos gâteaux
    </a>
</section>

<section>
    <h2>
        Notre histoire
    </h2>
    <p>
        Bonbon La Kour est une entreprise de cuisine créée en 1997 par la famille Bonbon.
        Nous avons décidé de repenser nos valeurs et de créer un lieu où nous aimons apprendre, écouter et partager nos saveurs.
    </p>
</section>

<section>
    <h2>
        Nos valeurs
    </h2>
    <p>
        Nous croyons en l'utilisation d'ingrédients locaux et de qualité pour offrir des produits de qualité.
    </p>
</section>

<section>
    <h2>
        Nos services
    </h2>
    <p>
        En plus de nos délicieux gâteaux, nous proposons également des services de traiteur.
    </p>
</section>

<style>
/* Mobile First Design */

section {
    padding: 4rem 1.5rem;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    background: linear-gradient(1.35deg,
    rgba(249, 115, 22, 0.1),
    rgba(16, 185, 129, 0.1)
    );
}

/* Section d'accueil avec effet de superposition */
section:first-of-type {
    background-image: url('https://img.freepik.com/vecteurs-libre/plaid-orange-texture-fond_1048-2585.jpg?t=st=1735808591~exp=1735812191~hmac=bc151ea5a8c9478f40083c39c51f39c11ab7d556b8702c501dbd76655eb99d88&w=740');
    background-size: cover;
    background-blend-mode: soft-light;
    color: var(--white);
}

.logo {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid var(--white);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.logo:hover {
    transform: scale(1.05);
}

h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    color: var(--white);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    letter-spacing: -1px;
}

h2 {
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--secondary-color);
    margin-bottom: 1.5rem;
    position: relative;
}

h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: var(--primary-color);
}

p {
    max-width: 700px;
    font-size: 1.1rem;
    line-height: 1.8;
    font-weight: 500;
    color: var(--text-color);
    text-align: center;
}

a {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: var(--primary-color);
    color: var(--white);
    text-decoration: none;
    border-radius: 0.25rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(249, 115, 22, 0.1);
}

a:hover {
    background-color: var(--secondary-color);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(16, 185, 129, 0.2);
}


/* Media Queries */
@media screen and (min-width: 768px) {
    section {
        padding: 6re 3rem;
    }

    .logo {
        width: 250px;
        height: 250px;
    }

    h1 {
        font-size: clamp(2.5rem, 6vw, 4rem);
    }
}

/* Animations subtiles */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

section > * {
    animation: fadeIn 0.8s ease-out;
}
</style>

