//  this is js code use at the mobile devices
let drowDown = document.getElementsByClassName("dropdown-toggle-cs");
for(items of drowDown){
    items.addEventListener('click', drowdownToggle)
    function drowdownToggle() {
        this.nextElementSibling.classList.toggle("show");
    }
}
//  this is js code use at the mobile devices



