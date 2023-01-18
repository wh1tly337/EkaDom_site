const modal = document.getElementById("my_modal");
const btn_intro = document.getElementById("intro");
const btn_partners = document.getElementById("partners");
const span = document.getElementsByClassName("close_modal_window")[0];

btn_intro.onclick = function () {
    modal.style.display = "block";
}

btn_partners.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}