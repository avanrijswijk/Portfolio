// projets/c3_administrer.js

if (!window.portfolioData) window.portfolioData = [];

window.portfolioData.push({
    id: "c3",
    ordre: 3,
    titre: "3. Administrer : Gérer les systèmes informatiques communicants",
    description: "Configuration de réseaux, déploiement de services, utilisation de Linux.",
    projets: [
        {
            id: "stage_CTF_Modulaire",
            titre: "Stage A2 - Plateforme de CTF modulaire",
            icon: "fa-code",
            tags: ['Ansible', 'Terraform', 'Docker', 'Linux', 'Kubernetes'],
            images: [],
            descriptionCourte: "Plateforme de CTF modulaire sécurisée et scalable.",
            descriptionLongue: `
                <strong>Description :</strong><br> Projet réalisé à la DSI de l'Université de Limoges avec l'école d'ingénieurs 3iL, consiste en la conception et le déploiement d'une infrastructure de CTF (Capture The Flag) modulaire, permettant de proposer divers défis de cybersécurité. Ce projet explore les principes de la cybersécurité et les bonnes pratiques de déploiement, notamment sur sa pérennité autour d'une documentation technique complète et structurée.<br><br>
                
                <strong>Rôle personnel :</strong><br> Non renseigné.<br><br>
                
                <strong>Livrables :</strong><br> Non renseigné.<br><br>
                
                <strong>Compétences et AC (Apprentissage Critiques) démontrées :</strong><br><br> 
                -  <br><br>
            `,
            lien: "https://github.com/avanrijswijk"
        },

        {
            id: "projet_reseau",
            titre: "SAE 2.O3 - Conception d'un réseau fictif",
            icon: "fa-laptop-code",
            tags: ['Kathara', 'Linux', 'Réseaux'],
            images: ["data/Kathara - 1.png"],
            descriptionCourte: "Conception et simulation d'un réseau fictif.",
            descriptionLongue: `
                <strong>Description :</strong><br> Ce projet consiste à concevoir et installer un réseau fictif avec des contraintes de plages d'adresses IP, que nous devions découper et calculer dans l'émulateur Kathara utilisant des fichiers de configuration pour simuler des routeurs et des machines virtuelles.<br><br>
                
                <strong>Rôle personnel :</strong><br> Travail en binôme, je me suis principalement occupé du calcul des adresses IP, le découpage en sous-réseaux ainsi que de la configuration des routes.<br><br>
                
                <strong>Livrables :</strong><br> (Consulter les pièces jointes).<br><br>
                
                <strong>Compétences et AC (Apprentissage Critiques) démontrées :</strong><br><br> 
                - Conception de réseaux<br>
                - Calcule et découpage de plages d'adresses IP<br>
                - AC23.02 | Utiliser des serveurs et des services réseaux virtualisés <br><br>
            `,
            lien: "https://github.com/avanrijswijk"
        },

        {
            id: "authentification_cas",
            titre: "SAE A2 - Questionnaire en ligne (Authentification CAS)",
            icon: "fa-code",
            tags: ['CAS', 'Authentification'],
            images: ["data/CAS - 1.png"],
            descriptionCourte: "Intégration d'un système d'authentification CAS pour sécuriser une application web.",
            descriptionLongue: `
                <strong>Description :</strong><br> Au cours de ce projet, j'ai intégré et configuré le système d'authentification CAS de l'Université du Limousin pour sécuriser une application web. Cela impliquait la gestion des utilisateurs et des sessions avec le traitement des requêtes et des informations renvoyées.<br><br>
                
                <strong>Rôle personnel :</strong><br> Je me suis personnelement occupé de la configuration du système d'authentification et de la gestion des utilisateurs.
                <br>J'ai rencontré plusieurs difficultés lors de l'intégration du système, notamment via un manque d'informations fournis par la DSI en charge des droits d'accès, ce qui a retardé son implémentation.<br><br>
                
                <strong>Livrables :</strong><br> (Consulter la compétence 1. Réaliser, et les pièces jointes).<br><br>
                
                <strong>Compétences et AC (Apprentissage Critiques) démontrées :</strong><br><br> 
                - Intégration de systèmes d'authentification<br>
                - Gestion des groupes utilisateurs et des sessions<br>
                - AC23.03 | Sécuriser les services et données d'un système <br><br>
            `,
            lien: "https://github.com/avanrijswijk"
        }
    ]
});