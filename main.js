let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");

const span = document.querySelector("span");
decrease.addEventListener("click", (e) => {
    const value = Number(span.innerText);
    if (value === 0) return;
    span.innerText = value - 1;
});
reset.addEventListener("click", (e) => {
    span.innerText = 0;
});

increase.addEventListener("click", (e) => {
    span.innerText = Number(span.innerText) + 1;
});

span.addEventListener("click", (e) => {
    span.innerText = Number(span.innerText) + 1;
})
