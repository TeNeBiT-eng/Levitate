// changeicon = (this) => this.classList.toggle("fa-times");
// this.addEventListener("click", () => show.classList.toggle("left"));
var btn = document.getElementById("language")
var ul = document.getElementById("myDropdown")

btn.addEventListener('click', function(){
    ul.classList.toggle('shows')
})