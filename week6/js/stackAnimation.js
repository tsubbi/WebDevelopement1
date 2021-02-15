let stack = document.querySelector(".stack");

var animation = setInterval(swap, 5000);

function swap() {
    let card = document.querySelector('.card:last-child');

    card.getElementsByClassName.animation = "swap 700ms forwards";

    setTimeout(() => {
        card.getElementsByClassName.animation = "";
        stack.prepend(card);
    }, 700);
}