// main.js : Logique fonctionnelle, génération HTML et Modale

window.projetsDict = {};

// ==========================================
// GÉNÉRATEUR AUTOMATIQUE DES PROJETS
// ==========================================
function renderPortfolio() {
    const container = document.getElementById('competences-container');
    if (!container || !window.portfolioData) return;

    window.portfolioData.sort((a, b) => a.ordre - b.ordre);

    let htmlContent = '';
    let delay = 100;

    window.portfolioData.forEach(comp => {
        
        let projetsHtml = '';

        if (comp.projets && comp.projets.length > 0) {
            projetsHtml = `<div class="grid grid-cols-1 md:grid-cols-2 gap-6">`;
            
            comp.projets.forEach(projet => {
                window.projetsDict[projet.id] = projet;

                const tagsHtml = projet.tags.map(tag => 
                    `<span class="text-xs font-mono bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded border border-green-100 dark:border-green-800 text-brand dark:text-green-400">${tag}</span>`
                ).join('');

                projetsHtml += `
                    <div data-tilt data-tilt-max="5" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.2" onclick="openModal('${projet.id}')" class="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-brand dark:hover:border-green-400 shadow-sm transition-colors group/card cursor-pointer flex flex-col h-full transform-gpu">
                        <h4 class="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover/card:text-brand dark:group-hover/card:text-green-400 transition-colors">
                            <i class="fa-solid ${projet.icon} text-brand dark:text-green-400 mr-2"></i>${projet.titre}
                        </h4>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow line-clamp-2">${projet.descriptionCourte}</p>
                        <div class="flex flex-wrap gap-2 mt-auto">
                            ${tagsHtml}
                        </div>
                    </div>
                `;
            });
            projetsHtml += `</div>`;
        } else {
            projetsHtml = `<p class="italic text-sm text-gray-500 dark:text-gray-400">Aucun projet ajouté pour cette compétence pour le moment.</p>`;
        }

        htmlContent += `
            <details data-aos="fade-up" data-aos-delay="${delay}" class="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 cursor-pointer transition-colors duration-300">
                <summary class="flex justify-between items-center font-semibold text-xl list-none">
                    <span class="text-gray-900 dark:text-white">${comp.titre}</span>
                    <i class="fa-solid fa-chevron-down text-brand dark:text-green-400 transition-transform duration-300 group-open:rotate-180"></i>
                </summary>
                <div class="mt-6 border-t border-gray-100 dark:border-gray-700 pt-6">
                    <p class="text-gray-600 dark:text-gray-300 mb-6">${comp.description}</p>
                    ${projetsHtml}
                </div>
            </details>
        `;
        delay += 100;
    });

    container.innerHTML = htmlContent;

    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
    }
}

// ==========================================
// GESTION DU THEME (DARK / LIGHT MODE)
// ==========================================
function initThemeToggle() {
    const themeToggleBtns = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        toggleIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        toggleIcons(false);
    }
    themeToggleBtns.forEach(btn => {
        if(btn) {
            btn.addEventListener('click', function() {
                document.documentElement.classList.toggle('dark');
                const isDark = document.documentElement.classList.contains('dark');
                localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
                toggleIcons(isDark);
            });
        }
    });
}

function toggleIcons(isDark) {
    const darkIcons = [document.getElementById('theme-toggle-dark-icon'), document.getElementById('theme-toggle-dark-icon-mobile')];
    const lightIcons = [document.getElementById('theme-toggle-light-icon'), document.getElementById('theme-toggle-light-icon-mobile')];
    darkIcons.forEach(el => el && el.classList.toggle('hidden', isDark));
    lightIcons.forEach(el => el && el.classList.toggle('hidden', !isDark));
}

// ==========================================
// GESTION DE LA MODALE
// ==========================================
function openModal(projetId) {
    const projet = window.projetsDict[projetId];
    if (!projet) return;

    document.getElementById('modalTitle').textContent = projet.titre;
    document.getElementById('modalDesc').innerHTML = projet.descriptionLongue;
    document.getElementById('modalLink').href = projet.lien;

    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = '';
    projet.tags.forEach(tag => {
        tagsContainer.innerHTML += `<span class="text-sm font-mono bg-green-50 dark:bg-green-900/30 text-brand dark:text-green-300 px-3 py-1 rounded-full border border-green-100 dark:border-green-800">${tag}</span>`;
    });

    // ==========================================
    // GESTION DU CARROUSEL D'IMAGES
    // ==========================================
    const carouselWrapper = document.getElementById('modalCarouselWrapper');
    const imagesContainer = document.getElementById('modalImages');
    imagesContainer.innerHTML = ''; 
    
    if (projet.images && projet.images.length > 0) {
        carouselWrapper.classList.remove('hidden'); 
        
        projet.images.forEach(imgSrc => {
            imagesContainer.innerHTML += `
                <div class="flex-none w-full snap-center cursor-zoom-in group" onclick="openLightbox('${imgSrc}')">
                    <div class="relative w-full h-48 sm:h-72 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                        <img src="${imgSrc}" alt="Aperçu du projet" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <i class="fa-solid fa-magnifying-glass-plus text-white opacity-0 group-hover:opacity-100 text-3xl transition-opacity"></i>
                        </div>
                    </div>
                </div>
            `;
        });
        imagesContainer.scrollLeft = 0;
    } else {
        carouselWrapper.classList.add('hidden');
    }

    document.getElementById('projectModal').classList.add('modal-active');
    document.getElementById('modalContent').classList.add('modal-content-active');
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    document.getElementById('projectModal').classList.remove('modal-active');
    document.getElementById('modalContent').classList.remove('modal-content-active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") closeModal();
});

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    renderPortfolio();
});


// ==========================================
// FONCTIONS DU CARROUSEL ET LIGHTBOX
// ==========================================

function scrollCarousel(direction) {
    const container = document.getElementById('modalImages');
    const scrollAmount = container.clientWidth; 
    container.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
}

function openLightbox(imgSrc) {
    document.getElementById('lightboxImage').src = imgSrc;
    document.getElementById('lightbox').classList.add('lightbox-active');
    document.getElementById('lightboxImage').classList.add('lightbox-content-active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('lightbox-active');
    document.getElementById('lightboxImage').classList.remove('lightbox-content-active');
}



// ==========================================
// MISE A JOUR DES TOUCHES CLAVIER
// ==========================================
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        if (document.getElementById('lightbox').classList.contains('lightbox-active')) {
            closeLightbox();
        } else {
            closeModal();
        }
    }
});