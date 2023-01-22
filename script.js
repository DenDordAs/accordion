let accord_items = document.querySelectorAll(".accordion_item")

for (let i = 0; i < accord_items.length; i++) {
    accord_items[i].addEventListener("click", function () {
        if (document.querySelector(".active")) {
            let item_class = document.querySelector(".active")

            item_class.classList.toggle("active")
            item_class.children[0].children[1].classList.toggle("arrow_active")
            item_class.children[1].classList.toggle("text_active")
            item_class.children[1].classList.contains("text_active") ?
                item_class.children[1].style.maxHeight = item_class.children[1].scrollHeight + "px" : item_class.children[1].style.maxHeight = 0
        }

        this.classList.toggle("active")
        this.children[0].children[1].classList.toggle("arrow_active")
        this.children[1].classList.toggle("text_active")
        this.children[1].classList.contains("text_active") ?
            this.children[1].style.maxHeight = this.children[1].scrollHeight + "px" : this.children[1].style.maxHeight = 0
        
    })
}