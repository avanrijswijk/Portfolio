// projets/c1_realiser.js

if (!window.portfolioData) window.portfolioData = [];

window.portfolioData.push({
    id: "c1",
    ordre: 1,
    titre: "1. Réaliser : Développer des applications informatiques",
    description: "Conception, codage, test et intégration d'applications.",
    projets: [
        {
            id: "projet_questionnaire",
            titre: "SAE A2 - Questionnaire en ligne",
            icon: "fa-code",
            tags: ['HTML', 'JavaScript', 'PHP', 'SQL', 'Bulma'],
            images: ["data/Questionnaire en ligne - 1.png", "data/Questionnaire en ligne - 2.png", "data/Questionnaire en ligne - 3.png", "data/Questionnaire en ligne - 4.png"],
            descriptionCourte: "Questionnaire en ligne pour améliorer la communication entre élèves et enseignants.",
            descriptionLongue: `
                <strong>Description :</strong><br> Ce projet permet la création de questionnaire en ligne afin de recueillir les réponses des utilisateurs. Ce site va également permettre d'analyser les réponses via des graphiques et des tableaux de bord détaillés.<br><br>
                
                <strong>Rôle personnel :</strong><br> En tant que chef de projet, j'ai supervisé le développement et la mise en œuvre du questionnaire. J'ai eu un rôle polyvalent autour du développement backend et frontend, ainsi que la configuration du serveur et du portail d'authentification.<br><br>
                
                <strong>Livrables :</strong><br> (Consulter les pièces jointes).<br><br>
                
                <strong>Compétences et AC (Apprentissage Critiques) démontrées :</strong><br><br> 
                - Conception d'architecture logicielle<br> 
                - Développement d'applications web<br> 
                - Collaboration en équipe agile et avec git<br> 
                - AC11.04 | Développer des interfaces utilisateurs<br> 
                - AC21.01 | Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences<br> 
                - AC21.02 | Appliquer des principes d’accessibilité et d’ergonomie <br><br>
            `,
            lien: "https://github.com/avanrijswijk"
        },

        {
            id: "projet_todo",
            titre: "R4.11 - TODO List",
            icon: "fa-laptop-code",
            tags: ['Kotlin', 'Room'],
            images: ["data/ToNote - 1.png", "data/ToNote - 2.png", "data/ToNote - 3.png"],
            descriptionCourte: "Application Android de gestion de tâches.",
            descriptionLongue: `
                <strong>Description :</strong><br> Développement d'une application Android permettant de gérer et créer des tâches, avec une interface intuitive et une synchronisation locale. Réalisée avec Kotlin Jetpack Compose et Room.<br><br>
                
                <strong>Rôle personnel :</strong><br> Travail en binôme, je me suis principalement occupé du développement frontend et de l'intégration des différentes fonctionnalités.<br><br>
                
                <strong>Livrables :</strong><br> (Consulter les pièces jointes).<br><br>
                
                <strong>Compétences et AC (Apprentissage Critiques) démontrées :</strong><br><br> 
                - Conception d'interface utilisateur mobile<br> 
                - Utilisation de JetPack compose pour le développement d'applications Android<br> 
                - Gestion de données locales avec Room<br> 
                - AC11.04 | Développer des interfaces utilisateurs<br> 
                - AC21.01 | Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences<br> 
                - AC21.02 | Appliquer des principes d’accessibilité et d’ergonomie<br> 
                - AC21.03 | Adopter de bonnes pratiques de conception et de programmation <br><br>
            `,
            lien: "https://github.com/avanrijswijk"
        }
    ]
});