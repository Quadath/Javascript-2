const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    hideTabContent = () => {
        content.forEach(item => {
            item.style.display = 'none';
        });
        tab.foreach(item => {
            item.classList.remove(activeClass);
        });
    }

    showTabContent = (i = 0) => {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }
    hideTabContent();
    showTabContent();
}

export default tabs;