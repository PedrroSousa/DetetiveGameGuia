document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');

    // Carrega o estado salvo no localStorage
    icons.forEach(icon => {
        const statusKey = `${icon.parentElement.previousElementSibling.textContent.trim()}-${icon.dataset.status}`;
        if (localStorage.getItem(statusKey) === 'selected') {
            icon.classList.add('selected');
        }
    });

    // Adiciona evento de clique para alternar a seleção dos ícones
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const statusKey = `${icon.parentElement.previousElementSibling.textContent.trim()}-${icon.dataset.status}`;
            
            // Verifica se o ícone já está selecionado
            if (icon.classList.contains('selected')) {
                // Desmarca o ícone e remove do localStorage
                icon.classList.remove('selected');
                localStorage.removeItem(statusKey);
            } else {
                // Remove a seleção atual dos outros ícones do mesmo conjunto
                icon.parentElement.querySelectorAll('.icon').forEach(i => {
                    const key = `${i.parentElement.previousElementSibling.textContent.trim()}-${i.dataset.status}`;
                    i.classList.remove('selected');
                    localStorage.removeItem(key);
                });

                // Marca o ícone clicado
                icon.classList.add('selected');
                localStorage.setItem(statusKey, 'selected');
            }
        });
    });
});
