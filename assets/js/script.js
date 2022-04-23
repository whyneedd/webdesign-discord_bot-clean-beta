const humbger = document.querySelector(".humbger");
const humbgermenu = document.querySelector(".humbgermenu");

humbger.onclick = function() {
    humbger.classList.toggle("active");
    humbgermenu.classList.toggle("active");

}
// Function Loading Page
window.addEventListener("load", ShowAff);

var loadingAff;

function ShowAff() {
    loadingAff = setTimeout(ShowPages, 10);

}

function ShowPages() {
    document.querySelector(".loading1").style.display="none";
    document.querySelector(".pages").style.display="block";
}