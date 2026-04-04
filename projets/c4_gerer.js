// projets/c4_gerer.js

if (!window.portfolioData) window.portfolioData = [];

window.portfolioData.push({
    id: "c4",
    ordre: 4,
    titre: "4. Gérer : Superviser des données de l'information",
    description: "Conception, création et interrogation de bases de données.",
    projets: [
        {
            id: "projet_taches",
            titre: "Gestionnaire de Tâches",
            icon: "fa-code",
            tags: ["Python", "JSON", "CLI"],
            images: ["data/capture1.jpg"],
            descriptionCourte: "Application CLI en Python pour gérer des listes de tâches avec sauvegarde JSON.",
            descriptionLongue: `
                <strong>Contexte :</strong> Projet de fin de semestre 2.<br><br>
                <strong>Objectif :</strong> Développer une application en ligne de commande permettant de créer, modifier, supprimer et lister des tâches.<br><br>
                <strong>Défis techniques :</strong> Gestion de la persistance des données via la sérialisation d'objets Python en JSON.
            `,
            lien: "https://github.com/avanrijswijk"
        },
        {
            id: "projet_jeu_java",
            titre: "Jeu de plateau en Java",
            icon: "fa-laptop-code",
            tags: ["Java", "JavaFX"],
            images: [],
            descriptionCourte: "Développement d'un jeu de plateau avec interface graphique JavaFX.",
            descriptionLongue: `
                Projet de groupe visant à répliquer un jeu de société en application de bureau.<br><br>
                Mise en place d'une architecture MVC (Modèle-Vue-Contrôleur).
            `,
            lien: "https://github.com/avanrijswijk"
        }
    ]
});