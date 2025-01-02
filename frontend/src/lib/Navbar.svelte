 <!--Menu de navigation -->
<script>
    import { onMount } from 'svelte';
    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen =!isMenuOpen;
    }

    // Fermer le menu si on clique en dehors
    const handleClickOutside = (event) => {
        if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-button')) {
            isMenuOpen = false;
        }

    }

    onMount(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    });
</script>

 <nav class="mb-8 bg-yellow-500 p-8">
    <img 
        src="https://files.oaiusercontent.com/file-Dxe3UcEW99EKdA8dbNwHNz?se=2025-01-02T09%3A37%3A33Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dfbf950ed-aad9-48ad-830a-e6acaef077ab.webp&sig=qJJGEzDJBhdBW1zbr7eBZuVvlMAhtH24A3s6%2BlE5LTs%3D" 
        alt="logo de Bonbon La Kour"
        class="logo"
    >

    <!-- Toggle mobile menu -->
     <button 
        class="mobile-menu-button" 
        aria-label="Ouvrir le menu"
        aria-expanded={isMenuOpen}
        on:click={toggleMenu}
    >

        <div class="hamburger-icon" class:active={isMenuOpen}>
            <span></span>
            <span></span>
        </div>
     </button>

     <!-- Desktop Menu -->
    <div class="navlinks hidden sm:flex flex-1 justify-center">
        <a href="/" class="navlink">Accueil</a>
        <a href="/a-propos" class="navlink">A propos</a>
        <a href="/gateaux" class="navlink">Gâteaux</a>
        <a href="/contact" class="navlink">Contact</a>
    </div>
   
</nav>

<!-- Mobile Menu -->
 <div class="mobile-menu" class:active={isMenuOpen}>
    <a href="/" class="navlink-mobile">Accueil</a>
    <a href="/a-propos" class="navlink-mobile">A propos</a>
    <a href="/gateaux" class="navlink-mobile">Gâteaux</a>
    <a href="/contact" class="navlink-mobile">Contact</a>
 </div>

<style>
/* Mobile First Design */
nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: #fbbf24;
}

.logo {
    width: 75px;
    height: auto;
}

.navlinks {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
}

.navlink {
    color: white;
    font-weight: bold;
    margin: 0 16px;
    transition: color 0.3s, transform 0.3s;
}

.navlink:hover {
    color: #c25700;
    transform: scale(1.1);
}

/* Hamburger Icon */
.mobile-menu-button {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1;
}

.hamburger-icon {
    width: 25px;
    height: 20px;
    position: relative;
}

.hamburger-icon span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: white;
    position: absolute;
    transition: transform 0.3s ease;
}

.hamburger-icon span:first-child {
    top: 0;
}

.hamburger-icon span:last-child {
    bottom: 0;
}

.hamburger-icon.active span:first-child {
    transform: translateY(8px) rotate(45deg);
}

.hamburger-icon.active span:last-child {
    transform: translateY(-8px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
    display: none;
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background-color: white;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 2;
}

.mobile-menu.active {
    display: block;
}

/* Mobile Menu (toggle) */
@media (max-width: 639px) {

    .mobile-menu-button {
        display: block;
    }

    .navlink-mobile {
        display: block;
        padding: 10px 0;
        font-size: 18px;
        color: #333;
        font-weight: bold;
        text-decoration: none;
        transition: color 0.3s;
    }

    .navlink-mobile:hover {
        color: #f59e0b;
    }

    .navlinks {
        display: none;
    }
}

/* Styles pour les grands écrans */
@media (min-width: 640px) {

    .mobile-menu {
        display: none !important;
    }

    .mobile-menu-button {
        display: none !important;
    }

    .navlinks {
        display: flex !important;
        flex-direction: row;
    }

    .navlink {
        margin: 0 20px;
    }
}

/* Accessibilité */
.navlink, .navlink-mobile {
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 4px;
}

.navlink:focus, .navlink-mobile:focus {
    background-color: #1f2937;
    color: white;
    outline: none;
}
</style>