const cells = document.querySelectorAll(".cell");

const playerO = '<img src="./img/playerO.png">';
const playerX = '<img src="./img/playerX.png">';

let hero = prompt("Qahramondi tanla. (X yoki O)")?.toLowerCase();
let nextStep = "";

const winlist = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // dioganal
    [0, 4, 8],
    [2, 4, 6],
];

if (!hero) {
    alert("Qahramon tanlanmadi!");
    document.location.reload();
} else if (hero === "x") {
    nextStep = playerX;
} else if (hero === "o") {
    nextStep = playerO;
} else {
    alert("Siz mavjud bo'lmagan qahramondi tanladingiz!");
    document.location.reload();
}

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.innerHTML === "") {
            cell.innerHTML = nextStep;
            nextStep = nextStep === playerX ? playerO : playerX;
            checker();
        } else {
            alert("Allaqachon belgilangan!");
        }
    });
});

function checker() {
    const winner = winlist.find(item => {
        let a = cells[item[0]].innerHTML;
        let b = cells[item[1]].innerHTML;
        let c = cells[item[2]].innerHTML;

        if (a === b && b === c && c !== "") return item;
    });

    if (winner) {
        setTimeout(() => {
            alert("O'yin tugadi!");
            document.location.reload();
        }, 100);
    };
}