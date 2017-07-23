function toggleMenu(e) {
    e.preventDefault();
    let menuClass = e.target.className;

    if (menuClass == "menu__icon") {
        $('.menu').classList.contains('show') ?
            $('.menu').classList.remove('show') :
            $('.menu').classList.add('show');
    }
    if (menuClass == "main-menu__link") {
        $('.filters').classList.contains('show') ?
            $('.filters').classList.remove('show') :
            $('.filters').classList.add('show');
    }

}