let chess = document.getElementById("chessBoard");

let letter = "ABCDEFGH";

let boardIndex = "";

for (let i = 0; i < 9; i++) {
    boardIndex += `<tr>`;
    for (let j = 0; j < 9; j++) {
        boardIndex += `<td class = "${(i + j) % 2 ? "black" : "white"}">${i == 0 ? letters[j] :
            j == 0 ? i : ''
            }</td>`;
    }
    boardIndex += `</tr>`;
}

chess.innerHTML = boardIndex;

