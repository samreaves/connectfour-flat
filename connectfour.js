/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* Board coords
 * 0     = intentionally left empty
 * 1-6   = col1 
 * 7-12  = col2
 * 13-18 = col3
 * 19-24 = col4
 * 25-30 = col5
 * 31-36 = col6
 * 37-42 = col7
 *
 * 8 = player1
 * 9 = player2
 *  **/


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

}

function checkForUpwardDiagonalWin(player) {

}

function checkForDownwardDiagonalWin(player) {

}

function checkForWin(player) {
    if (checkForHorizontalWin(player) === true) {
        return true;
    }
    if (checkForVerticalWin(player) === true) {
        return true;
    }
    if (checkForUpwardDiagonalWin(player) === true) {
        return true;
    }
    if (checkForDownwardDiagonalWin(player) === true) {
        return true;
    }
}

function addPiece(token, player, currentColumn) {
    if (player === true) {
        // 8 = player1
        player = 8;
    }
    else {
        // 9 = player2
        player = 9;
    }
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
    gamecount++;
    if (gamecount % 2 === 1) {
        $("#drop_space").append("<div class=\"token player1 currenttoken\" id=\"token" + gamecount + "\"></div>");
        $("#header").html("<h1>Player 1</h1>");
    }
    else {
        $("#drop_space").append("<div class=\"token player2 currenttoken\" id=\"token" + gamecount + "\"></div>");
        $("#header").html("<h1>Player 2</h1>");
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

