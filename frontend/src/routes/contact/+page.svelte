<script>
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector("form").addEventListener("submit", async (e) => {
            e.preventDefault();

            const formData = new FormData(e.target);

            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    alert("Votre message a bien été envoyé!");
                    e.target.reset();
                } else {
                    alert("Une erreur est survenue. Merci de réessayer.");
                }
            } catch (error) {
                console.error("Erreur :", error);
                alert("Impossible d'envoyer votre message.Vérifiez votre connexion.");
            }
        });
    });
    
</script>

<section 
    class="text-center py-16 bg-yellow-200" 
    style="background-image: url('https://img.freepik.com/vecteurs-libre/plaid-orange-texture-fond_1048-2585.jpg?t=st=1735808591~exp=1735812191~hmac=bc151ea5a8c9478f40083c39c51f39c11ab7d556b8702c501dbd76655eb99d88&w=740'); background-size: cover; background-blend-mode: multiply;"
>    
    <h1 class="text-3xl font-bold text-white mb-8">Contactez-nous</h1>
    <form 
        class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4"
        aria-labelledby="contact-form"
    >
        <div>
            <label for="nom" class="block text-gray-700 font-medium">Nom</label>
            <input type="text" name="nom" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Entrez votre nom" required>
        </div>
        <div>
            <label for="prenom">Prénom</label>
            <input type="text" name="prenom"  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Entrez votre prénom" required>
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" name="email"  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Entrez votre email" required>
        </div>
        <div>
            <label for="message">Message</label>
            <textarea name="message" required class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Ecrivez votre message"></textarea>
        </div>
        <div>
            <button type="submit" class="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                Envoyer
            </button>
        </div>
    </form>
</section>

<style>
    form {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
    }
</style>