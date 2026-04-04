// projets/c5_conduire.js

if (!window.portfolioData) window.portfolioData = [];

window.portfolioData.push({
    id: "c5",
    ordre: 5,
    titre: "5. Conduire : Piloter des projets informatiques",
    description: "Méthodologies agiles, gestion du cycle de vie logiciel, expression des besoins.",
    projets: [
        {
            id: "recueil_besoins",
            titre: "SAE 2.05 - Recueil et analyse des besoins",
            icon: "fa-code",
            tags: ['SWOT', 'CQQCOQP', 'SMART', 'RACI', 'Gantt'],
            images: [],
            descriptionCourte: "Recueil et analyse des besoins d'une agence immobilière fictive.",
            descriptionLongue: `
                <strong>Description :</strong><br> Ce projet consiste en la réalisation d'un compte rendu d'une analyse des besoins, pour une agence immobilière fictive qui souhaite se différencier sur leur marché en utilisant le numérique, à l'aide de différents outils comme le SWOT, le CQQCOQP, le SMART et le RACI. Il fallait aussi réaliser un diagramme de Gantt et établir un budget prévisionnel.<br><br>
                
                <strong>Rôle personnel :</strong><br> J'ai utilisé les différents outils de gestion et réalisé le budget prévisionnel pour l'écriture du compte rendu.<br><br>
                
                <strong>Livrables :</strong><br> (Voir le compte rendu dans le lien) <br><br>
                
                <strong>Compétences et AC (Apprentissage Critiques) démontrées :</strong><br><br> 
                - Analyse de besoins avec différents outils de gestion de projet (SWOT, CQQCOQP, SMART)<br> 
                - Estimation de budget prévisionnel<br> 
                - AC15.01 | Appréhender les besoins du client et de l'utilisateur<br> 
                - AC15.02 | Mettre en place les outils de gestion de projet<br> 
                - AC15.03 | Identifier les acteurs et les différentes phases d'un cycle de développement<br> 
                - AC25.02 | Formaliser les besoins du client et de l'utilisateur  <br><br>
            `,
            lien: "https://github.com/njacquet87/S2.05"
        }
    ]
});