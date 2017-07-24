let checkbox = document.querySelectorAll("input[type=checkbox]");
let showAll = $('.filters__button');

checkbox.forEach(input => {
    input.addEventListener('change', function() {
        filter(this.value, this.checked);
    })
})

showAll.addEventListener('click', () => filter('', false))

function filter(value, checked) {
    let items = document.querySelectorAll(".list__item");

    items.forEach(item => {
        switch (value) {
            case ("hightop"):
                if (item.dataset.highTop != "true") {
                    showItem(checked, item);
                }
                break;
            case ("lowtop"):
                if (item.dataset.highTop != "false") {
                    showItem(checked, item);
                }
                break;
            case ("campo"):
                if (item.dataset.category != "campo") {
                    showItem(checked, item);
                }
                break;
            case ("society"):
                if (item.dataset.category != "society") {
                    showItem(checked, item);
                }
                break;
            default:
                item.style.display = "initial";
                checkbox.forEach(input => input.checked = false);
        }
    });

    function showItem(checked, item) {
        return checked ? item.style.display = "none" : item.style.display = "initial";
    }
}