/* 
 * ConnectFour Flat
 * Written by Sam Reaves
 * October 2013
 */

function dropToken(token, space) {
    if (space % 6 === 0) {
        $(token).animate({
            top: "495"
        }, 500);
    }
    else if (space % 5 === 0) {
        $(token).animate({
            top: "416"
        }, 500);
    }
    else if (space % 4 === 0) {
        $(token).animate({
            top: "337"
        }, 500);
    }
    else if (space % 3 === 0) {
        $(token).animate({
            top: "258"
        }, 500);
    }
    else if (space % 2 === 0) {
        $(token).animate({
            top: "179"
        }, 500);
    }
    else if (space % 1 === 0) {
        $(token).animate({
            top: "100"
        }, 500);
    }
    $(".currenttoken").removeClass("currenttoken");
}

var gameboard = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
var gamecount = 1;


function checkForHorizontalWin(player) {

}

function checkForVerticalWin(player) {
    var consecutiveTokens = 0;
    for (var columns = 0; columns < 7; columns++) {
        for (var spaces = 0; spaces < 6; spaces++) {
            if (gameboard[columns][spaces] === player) {
                consecutiveTokens++;
                if (consecutiveTokens === 4) {
                    return true;
                }

            } else {
                consecutiveTokens = 0;
            }
        }
    }
    return false;
}

function checkForUpwardDiagonalWin(player) {
    var consecutiveTokens = 0;
    for (var spaces = 0; spaces < 6; spaces++) {
        for (var columns = 0; columns < 7; columns++) {
            if (gameboard[columns][spaces] === player) {
                consecutiveTokens++;
                if (consecutiveTokens === 4) {
                    return true;
                }

            } else {
                consecutiveTokens = 0;
            }
        }
    }
    return false;
}

function checkForDownwardDiagonalWin(player) {

}

function checkForWin(player) {
    if (checkForHorizontalWin(player)) {
        $("#header").html("<h1>Player " + player + " Wins!</h1>");
        $("#messages").text("Great game, guys.");
        return true;
    }
    if (checkForVerticalWin(player)) {
        return true;
    }
    if (checkForUpwardDiagonalWin(player)) {
        return true;
    }
    if (checkForDownwardDiagonalWin(player)) {
        return true;
    }
    return false;
}

function addPiece(token, player, currentColumn) {
    if (player === true) {
        // 1 = player1 
        player = 1;
    }
    else {
        // 2 = player2. 
        player = 2;
    }

    // Validation to see into which space token drops
    if (currentColumn === 1) {
        if (gameboard[0][5] === 0) {
            gameboard[0][5] = player;
            dropToken(token, 6);
        }
        else if (gameboard[0][4] === 0) {
            gameboard[0][4] = player;
            dropToken(token, 5);
        }
        else if (gameboard[0][3] === 0) {
            gameboard[0][3] = player;
            dropToken(token, 4);
        }
        else if (gameboard[0][2] === 0) {
            gameboard[0][2] = player;
            dropToken(token, 3);
        }
        else if (gameboard[0][1] === 0) {
            gameboard[0][1] = player;
            dropToken(token, 2);
        }
        else if (gameboard[0][0] === 0) {
            gameboard[0][0] = player;
            dropToken(token, 1);
        }
    }
    else if (currentColumn === 2) {
        if (gameboard[1][5] === 0) {
            gameboard[1][5] = player;
            dropToken(token, 6);
        }
        else if (gameboard[1][4] === 0) {
            gameboard[1][4] = player;
            dropToken(token, 5);
        }
        else if (gameboard[1][3] === 0) {
            gameboard[1][3] = player;
            dropToken(token, 4);
        }
        else if (gameboard[1][2] === 0) {
            gameboard[1][2] = player;
            dropToken(token, 3);
        }
        else if (gameboard[1][1] === 0) {
            gameboard[1][1] = player;
            dropToken(token, 2);
        }
        else if (gameboard[1][0] === 0) {
            gameboard[1][0] = player;
            dropToken(token, 1);
        }
    }
    else if (currentColumn === 3) {
        if (gameboard[2][5] === 0) {
            gameboard[2][5] = player;
            dropToken(token, 6);
        }
        else if (gameboard[2][4] === 0) {
            gameboard[2][4] = player;
            dropToken(token, 5);
        }
        else if (gameboard[2][3] === 0) {
            gameboard[2][3] = player;
            dropToken(token, 4);
        }
        else if (gameboard[2][2] === 0) {
            gameboard[2][2] = player;
            dropToken(token, 3);
        }
        else if (gameboard[2][1] === 0) {
            gameboard[2][1] = player;
            dropToken(token, 2);
        }
        else if (gameboard[2][0] === 0) {
            gameboard[2][0] = player;
            dropToken(token, 1);
        }
    }
    else if (currentColumn === 4) {
        if (gameboard[3][5] === 0) {
            gameboard[3][5] = player;
            dropToken(token, 6);
        }
        else if (gameboard[3][4] === 0) {
            gameboard[3][4] = player;
            dropToken(token, 5);
        }
        else if (gameboard[3][3] === 0) {
            gameboard[3][3] = player;
            dropToken(token, 4);
        }
        else if (gameboard[3][2] === 0) {
            gameboard[3][2] = player;
            dropToken(token, 3);
        }
        else if (gameboard[3][1] === 0) {
            gameboard[3][1] = player;
            dropToken(token, 2);
        }
        else if (gameboard[3][0] === 0) {
            gameboard[3][0] = player;
            dropToken(token, 1);
        }
    }
    else if (currentColumn === 5) {
        if (gameboard[4][5] === 0) {
            gameboard[4][5] = player;
            dropToken(token, 6);
        }
        else if (gameboard[4][4] === 0) {
            gameboard[4][4] = player;
            dropToken(token, 5);
        }
        else if (gameboard[4][3] === 0) {
            gameboard[4][3] = player;
            dropToken(token, 4);
        }
        else if (gameboard[4][2] === 0) {
            gameboard[4][2] = player;
            dropToken(token, 3);
        }
        else if (gameboard[4][1] === 0) {
            gameboard[4][1] = player;
            dropToken(token, 2);
        }
        else if (gameboard[4][0] === 0) {
            gameboard[4][0] = player;
            dropToken(token, 1);
        }
    }
    else if (currentColumn === 6) {
        if (gameboard[5][5] === 0) {
            gameboard[5][5] = player;
            dropToken(token, 6);
        }
        else if (gameboard[5][4] === 0) {
            gameboard[5][4] = player;
            dropToken(token, 5);
        }
        else if (gameboard[5][3] === 0) {
            gameboard[5][3] = player;
            dropToken(token, 4);
        }
        else if (gameboard[5][2] === 0) {
            gameboard[5][2] = player;
            dropToken(token, 3);
        }
        else if (gameboard[5][1] === 0) {
            gameboard[5][1] = player;
            dropToken(token, 2);
        }
        else if (gameboard[5][0] === 0) {
            gameboard[5][0] = player;
            dropToken(token, 1);
        }
    }
    else if (currentColumn === 7) {
        if (gameboard[6][5] === 0) {
            gameboard[6][5] = player;
            dropToken(token, 6);
        }
        else if (gameboard[6][4] === 0) {
            gameboard[6][4] = player;
            dropToken(token, 5);
        }
        else if (gameboard[6][3] === 0) {
            gameboard[6][3] = player;
            dropToken(token, 4);
        }
        else if (gameboard[6][2] === 0) {
            gameboard[6][2] = player;
            dropToken(token, 3);
        }
        else if (gameboard[6][1] === 0) {
            gameboard[6][1] = player;
            dropToken(token, 2);
        }
        else if (gameboard[6][0] === 0) {
            gameboard[6][0] = player;
            dropToken(token, 1);
        }
    }
    if (!checkForWin(player)) {
        gamecount++;

        // Change Player Number
        if (gamecount % 2 === 1) {
            $("#drop_space").append("<div class=\"token player1 currenttoken\" id=\"token" + gamecount + "\"></div>");
            $("#header").html("<h1>Player 1</h1>");
        }
        else {
            $("#drop_space").append("<div class=\"token player2 currenttoken\" id=\"token" + gamecount + "\"></div>");
            $("#header").html("<h1>Player 2</h1>");
        }
    }
    else {
        $("#header").html("<h1>Player " + player + " Wins!</h1>");
        $("#messages").text("Great game, guys.");
    }
}



$(document).ready(function() {
    var currentMousePos;
    var currentColumn;
    $("#drop_space").mousemove(function(e) {
        currentMousePos = e.pageX - $('#drop_space').offset().left - 38;
        if (currentMousePos < 61) {
            $(".currenttoken").css("left", "18px");
            currentColumn = 1;
            //alert(currentMousePos);
        }
        else if (currentMousePos >= 61 && currentMousePos < 144) {
            $(".currenttoken").css("left", "101px");
            currentColumn = 2;
            //alert("Current column is " + currentColumn + " and token should be there");
        }
        else if (currentMousePos >= 144 && currentMousePos < 227) {
            $(".currenttoken").css("left", "184px");
            currentColumn = 3;
            //alert("Current column is " + currentColumn + " and token should be there");
        }
        else if (currentMousePos >= 227 && currentMousePos < 310) {
            $(".currenttoken").css("left", "267px");
            currentColumn = 4;
            //alert("Current column is " + currentColumn + " and token should be there");
        }
        else if (currentMousePos >= 310 && currentMousePos < 393) {
            $(".currenttoken").css("left", "350px");
            currentColumn = 5;
            //alert("Current column is " + currentColumn + " and token should be there");
        }
        else if (currentMousePos >= 393 && currentMousePos < 476) {
            $(".currenttoken").css("left", "433px");
            currentColumn = 6;
            //alert("Current column is " + currentColumn + " and token should be there");
        }
        else if (currentMousePos >= 476) {
            $(".currenttoken").css("left", "516px");
            currentColumn = 7;
            //alert("Current column is " + currentColumn + " and token should be there");
        }
    });
    $("#drop_space").on('click', '.token', function(e) {
        addPiece(this, $(".currenttoken").hasClass("player1"), currentColumn);
    });
    $("#change_background").on('click', '#background_change_white', function() {
        $("body").css({
            background: '#FFF',
            color: '#000'
        });
        /*$(".space").css("background", "#FFF");*/
    });
    $("#change_background").on('click', '#background_change_black', function() {
        $("body").css({
            background: '#000',
            color: '#FFF'
        });
        /*$(".space").css("background", "#000");*/
    });
    $("#change_background").on('click', '#background_change_green', function() {
        $("body").css({
            background: '#97e365',
            color: '#FFF'
        });
        /* $(".space").css("background", "#97e365");*/
    });
});

