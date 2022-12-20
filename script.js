function searchkar() {
    let a = document.body.querySelector("#search1").value.toUpperCase()
    let head = document.body.getElementsByTagName("h1")
    let count = document.body.getElementsByClassName("item")
    let allcards = document.body.getElementsByClassName("allcards")[0]
    let fdi = document.body.getElementsByClassName("fdi")

    for (let i = 0; i < count.length; i++) {
        if (head[i].innerHTML.toUpperCase().includes(a)) {
            fdi[i].style.display = ""
        }
        else {
            fdi[i].style.display = "none"
        }
    }
}
searchkar()




