
// Function Loading Page
window.addEventListener("load", ShowAff);

var loadingAff;

function ShowAff() {
    loadingAff = setTimeout(ShowPages, 12000);

}

function ShowPages() {
    document.querySelector(".loading1").style.display="none";
    document.querySelector(".pages").style.display="block";
}