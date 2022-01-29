var restart_button = document.getElementById("restart");

var button0 = document.getElementById("position0");
var button1 = document.getElementById("position1");
var button2 = document.getElementById("position2");
var button3 = document.getElementById("position3");
var button4 = document.getElementById("position4");
var button5 = document.getElementById("position5");
var button6 = document.getElementById("position6");
var button7 = document.getElementById("position7");
var button8 = document.getElementById("position8");

let board_values = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let player = 1;
let winner = false;

restart_button.onclick = function() {
    board_values = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    player = 1;
    button0.innerHTML = ".";
    button1.innerHTML = ".";
    button2.innerHTML = ".";
    button3.innerHTML = ".";
    button4.innerHTML = ".";
    button5.innerHTML = ".";
    button6.innerHTML = ".";
    button7.innerHTML = ".";
    button8.innerHTML = ".";
}

button0.onclick = function() {
    if (board_values[0][0] == 0) {
        if (player == 1) {
            button0.innerHTML = "X";
            board_values[0][0] = 1;
            player = 2;
        } else {
            button0.innerHTML = "O";
            board_values[0][0] = 2;
            player = 1;
        }
    }
    check_win();
}

button1.onclick = function() {
    if (board_values[0][1] == 0) {
        if (player == 1) {
            button1.innerHTML = "X";
            board_values[0][1] = 1;
            player = 2;
        } else {
            button1.innerHTML = "O";
            board_values[0][1] = 2;
            player = 1;
        }
    }
    check_win();
}

button2.onclick = function() {
    if (board_values[0][2] == 0) {
        if (player == 1) {
            button2.innerHTML = "X";
            board_values[0][2] = 1;
            player = 2;
        } else {
            button2.innerHTML = "O";
            board_values[0][2] = 2;
            player = 1;
        }
    }
    check_win();
}

button3.onclick = function() {
    if (board_values[1][0] == 0) {
        if (player == 1) {
            button3.innerHTML = "X";
            board_values[1][0] = 1;
            player = 2;
        } else {
            button3.innerHTML = "O";
            board_values[1][0] = 2;
            player = 1;
        }
    }
    check_win();
}

button4.onclick = function() {
    if (board_values[1][1] == 0) {
        if (player == 1) {
            button4.innerHTML = "X";
            board_values[1][1] = 1;
            player = 2;
        } else {
            button4.innerHTML = "O";
            board_values[1][1] = 2;
            player = 1;
        }
    }
    check_win();
}

button5.onclick = function() {
    if (board_values[1][2] == 0) {
        if (player == 1) {
            button5.innerHTML = "X";
            board_values[1][2] = 1;
            player = 2;
        } else {
            button5.innerHTML = "O";
            board_values[1][2] = 2;
            player = 1;
        }
    }
    check_win();
}

button6.onclick = function() {
    if (board_values[2][0] == 0) {
        if (player == 1) {
            button6.innerHTML = "X";
            board_values[2][0] = 1;
            player = 2;
        } else {
            button6.innerHTML = "O";
            board_values[2][0] = 2;
            player = 1;
        }
    }
    check_win();
}

button7.onclick = function() {
    if (board_values[2][1] == 0) {
        if (player == 1) {
            button7.innerHTML = "X";
            board_values[2][1] = 1;
            player = 2;
        } else {
            button7.innerHTML = "O";
            board_values[2][1] = 2;
            player = 1;
        }
    }
    check_win();
}

button8.onclick = function() {
    if (board_values[2][2] == 0) {
        if (player == 1) {
            button8.innerHTML = "X";
            board_values[2][2] = 1;
            player = 2;
        } else {
            button8.innerHTML = "O";
            board_values[2][2] = 2;
            player = 1;
        }
    }
    check_win();
}

function check_win() {
    check_row_win();
    check_column_win();
    check_diagonal_win();
}

function check_row_win() {
    if (board_values[0][0] == board_values[0][1] && board_values[0][1] == board_values[0][2]) {
        if (board_values[0][0] == 1) {
            alert("Player 1 wins!");
            winner = true;
        } else if (board_values[0][0] == 2) {
            alert("Player 2 wins!");
            winner = true;
        }
    } else if (board_values[1][0] == board_values[1][1] && board_values[1][1] == board_values[1][2]) {
        if (board_values[1][0] == 1) {
            alert("Player 1 wins!");
            winner = true;
        } else if (board_values[1][0] == 2) {
            alert("Player 2 wins!");
            winner = true;
        }
    } else if (board_values[2][0] == board_values[2][1] && board_values[2][1] == board_values[2][2]) {
        if (board_values[2][0] == 1) {
            alert("Player 1 wins!");
            winner = true;
        } else if (board_values[2][0] == 2) {
            alert("Player 2 wins!");
            winner = true;
        }
    }
}

function check_column_win() {
    if (board_values[0][0] == board_values[1][0] && board_values[1][0] == board_values[2][0]) {
        if (board_values[0][0] == 1) {
            alert("Player 1 wins!");
            winner = true;
        } else if (board_values[0][0] == 2) {
            alert("Player 2 wins!");
            winner = true;
        }
    } else if (board_values[0][1] == board_values[1][1] && board_values[1][1] == board_values[2][1]) {
        if (board_values[0][1] == 1) {
            alert("Player 1 wins!");
            winner = true;
        } else if (board_values[0][1] == 2) {
            alert("Player 2 wins!");
            winner = true;
        }
    } else if (board_values[0][2] == board_values[1][2] && board_values[1][2] == board_values[2][2]) {
        if (board_values[0][2] == 1) {
            alert("Player 1 wins!");
            winner = true;
        } else if (board_values[0][2] == 2) {
            alert("Player 2 wins!");
            winner = true;
        }
    }
}

function check_diagonal_win() {
    if (board_values[0][0] == board_values[1][1] && board_values[1][1] == board_values[2][2]) {
        if (board_values[0][0] == 1) {
            alert("Player 1 wins!");
            winner = true;
        } else if (board_values[0][0] == 2) {
            alert("Player 2 wins!");
            winner = true;
        }
    } else if (board_values[0][2] == board_values[1][1] && board_values[1][1] == board_values[2][0]) {
        if (board_values[0][2] == 1) {
            alert("Player 1 wins!");
            winner = true;
        } else if (board_values[0][2] == 2) {
            alert("Player 2 wins!");
            winner = true;
        }
    }
}