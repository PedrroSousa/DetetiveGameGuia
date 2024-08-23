document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');


    icons.forEach(icon => {
        const statusKey = `${icon.parentElement.previousElementSibling.textContent.trim()}-${icon.dataset.status}`;
        if (localStorage.getItem(statusKey) === 'selected') {
            icon.classList.add('selected');
        }
    });


    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const statusKey = `${icon.parentElement.previousElementSibling.textContent.trim()}-${icon.dataset.status}`;
            

            if (icon.classList.contains('selected')) {

                icon.classList.remove('selected');
                localStorage.removeItem(statusKey);
            } else {

                icon.parentElement.querySelectorAll('.icon').forEach(i => {
                    const key = `${i.parentElement.previousElementSibling.textContent.trim()}-${i.dataset.status}`;
                    i.classList.remove('selected');
                    localStorage.removeItem(key);
                });


                icon.classList.add('selected');
                localStorage.setItem(statusKey, 'selected');
            }
        });
    });
});
