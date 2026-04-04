// projets/c2_optimiser.js

if (!window.portfolioData) window.portfolioData = [];

window.portfolioData.push({
    id: "c2",
    ordre: 2,
    titre: "2. Optimiser : Améliorer les performances d'applications informatiques",
    description: "Analyse de la complexité algorithmique, choix des structures de données adaptées.",
    projets: [
        {
            id: "jeu_python",
            titre: "SAE 1.02 - Jeu en Python",
            icon: "fa-code",
            tags: ['Python', 'Pygame'],
            images: [],
            descriptionCourte: "Développement de mini jeux en Python.",
            descriptionLongue: `
                <strong>Description :</strong><br> Ce projet consiste à développer des mini jeux avec une interface console, en Python (partie 1) et de reprendre le code pour l'améliorer (partie 2), et de développer des "robots" que l'utilisateur peut affronter avec différentes difficultés (naïf, normal, difficile) le tout dans une équipe de 2. Contenant un jeu de devinette, d'allumettes, de morpion, et de puissance 4. Nous devions également documenter le projet notamment la complexité des algorithmes utilisé pour les robots.<br><br>
                
                <strong>Rôle personnel :</strong><br> Développement du mini jeux de morpions et du jeu de puissance 4, ainsi que l'implémentation des robots et les améliorations apportées.<br><br>
                
                <strong>Livrables :</strong><br> (Voir le compte rendu dans le lien)<br><br>
                
                <strong>Compétences et AC (Apprentissage Critiques) démontrées :</strong><br><br> 
                - Conception algorithmique<br>
                - Début de qualité de code avec Python<br>
                - Création d'interfaces utilisateur textuelles<br>
                - AC12.01 | Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données...)<br>
                - AC12.02 | Comparer des algorithmes pour des problèmes classiques (tris simples, recherche...)  <br><br>
            `,
            lien: "https://github.com/njacquet87/S1.02"
        }
    ]
});