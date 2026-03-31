
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

document.addEventListener('DOMContentLoaded', initThemeToggle);

// ==========================================
// GESTION DE LA MODALE DES PROJETS
// ==========================================
function openModal(projetId) {
    const projet = projetsData[projetId];
    if (!projet) return;

    document.getElementById('modalTitle').textContent = projet.titre;
    document.getElementById('modalDesc').innerHTML = projet.description;
    document.getElementById('modalLink').href = projet.lien;

    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = '';
    projet.tags.forEach(tag => {
        tagsContainer.innerHTML += `<span class="text-sm font-mono bg-purple-50 dark:bg-purple-900/30 text-brand dark:text-purple-300 px-3 py-1 rounded-full border border-purple-100 dark:border-purple-800">${tag}</span>`;
    });

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
    if (event.key === "Escape") {
        closeModal();
    }
});