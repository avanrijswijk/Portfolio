// projets/c4_gerer.js

if (!window.portfolioData) window.portfolioData = [];

window.portfolioData.push({
    id: "c4",
    ordre: 4,
    titre: "4. Gérer : Superviser des données de l'information",
    description: "Conception, création et interrogation de bases de données.",
    projets: [
        {
            id: "analyse_graphique",
            titre: "SAE A2 - Questionnaire en ligne (Analyse graphique)",
            icon: "fa-chart-bar",
            tags: ['SQL', 'Chart.js', 'WordCloud.js'],
            images: [],
            descriptionCourte: "Traitement et visualisation de données de questionnaire en ligne.",
            descriptionLongue: `
                <strong>Description :</strong><br> Au cours de ce projet, j'ai traité et visualisé les données issues d'un questionnaire en ligne pour permettre au créateur d'avoir une meilleure compréhension des réponses. Les données ont été analysées et représentées graphiquement à l'aide de bibliothèques comme Chart.js et WordCloud.js<br><br>
                
                <strong>Rôle personnel :</strong><br> Je me suis chargé de l'implémentation des graphiques et de l'analyse des données. J'ai rencontré certaines difficultés lors de la transmission des données, notamment au niveau de l'interprétation par les frameworks javascript.<br><br>
                
                <strong>Livrables :</strong><br> Non renseigné. (Consulter la compétence 1. Réaliser)<br><br>
                
                <strong>Compétences et AC (Apprentissage Critiques) démontrées :</strong><br><br> 
                - Traiter des frameworks de visualisation de données<br>
                - AC24.03 | Organiser la restitution de données à travers la programmation et la visualisation  <br><br>
            `,
            lien: "https://github.com/avanrijswijk"
        },

        {
            id: "traitement_donnees",
            titre: "SAE 1.04 - Traitement de données",
            icon: "fa-database",
            tags: ["SQL", "CSV"],
            images: [],
            descriptionCourte: "Traitement de données CSV avec SQL.",
            descriptionLongue: `
                <strong>Description :</strong><br> Dans ce projet, j'ai extrait des données d'un fichier CSV que j'ai dû découper en plusieurs tables SQL pour les insérer dans une base de données dans une équipe de 2 personnes. J'ai aussi écrit des requêtes SQL en SQLServer pour visualiser les données et pour reproduire des graphiques données dans le sujet.<br><br>
                
                <strong>Rôle personnel :</strong><br> J'ai travaillé en pair working pour l'extraction des données du fichier CSV et j'ai écrit des requêtes SQL.<br><br>
                
                <strong>Livrables :</strong><br> (Voir le compte rendu dans le lien) <br><br>
                
                <strong>Compétences et AC (Apprentissage Critiques) démontrées :</strong><br><br> 
                - Conception de bases de données relationnelles<br> 
                - Écriture de requêtes SQL pour l'extraction et la visualisation de données<br> 
                - AC14.01 | Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)<br> 
                - AC14.02 | Visualiser des données<br> 
                - AC14.03 | Concevoir une base de données relationnelle à partir d’un cahier des charges  <br><br>
            `,
            lien: "https://github.com/njacquet87/S1.04"
        }
    ]
});