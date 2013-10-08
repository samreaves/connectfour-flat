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

var gameboard = [42];
var gamecount = 1;

function addPiece(token, player, currentColumn) {
    if (player === true) {
        player = 8;
    }
    else {
        player = 9;
    }
    if (currentColumn === 1) {
        if (gameboard[6] === undefined) {
            gameboard[6] = player;
            dropToken(token, 6);
        }
        else if (gameboard[5] === undefined) {
            gameboard[5] = player;
            dropToken(token, 5);
        }
        else if (gameboard[4] === undefined) {
            gameboard[4] = player;
            dropToken(token, 4);
        }
        else if (gameboard[3] === undefined) {
            gameboard[3] = player;
            dropToken(token, 3);
        }
        else if (gameboard[2] === undefined) {
            gameboard[2] = player;
            dropToken(token, 2);
        }
        else if (gameboard[1] === undefined) {
            gameboard[1] = player;
            dropToken(token, 1);
        }
    }
    else if (currentColumn === 2) {
        if (gameboard[12] === undefined) {
            gameboard[12] = player;
            dropToken(token, 6);
        }
        else if (gameboard[11] === undefined) {
            gameboard[11] = player;
            dropToken(token, 5);
        }
        else if (gameboard[10] === undefined) {
            gameboard[10] = player;
            dropToken(token, 4);
        }
        else if (gameboard[9] === undefined) {
            gameboard[9] = player;
            dropToken(token, 3);
        }
        else if (gameboard[8] === undefined) {
            gameboard[8] = player;
            dropToken(token, 2);
        }
        else if (gameboard[7] === undefined) {
            gameboard[7] = player;
            dropToken(token, 1);
        }
    }
    else if (currentColumn === 3) {
        if (gameboard[18] === undefined) {
            gameboard[18] = player;
            dropToken(token, 6);
        }
        else if (gameboard[17] === undefined) {
            gameboard[17] = player;
            dropToken(token, 5);
        }
        else if (gameboard[16] === undefined) {
            gameboard[16] = player;
            dropToken(token, 4);
        }
        else if (gameboard[15] === undefined) {
            gameboard[15] = player;
            dropToken(token, 3);
        }
        else if (gameboard[14] === undefined) {
            gameboard[14] = player;
            dropToken(token, 2);
        }
        else if (gameboard[13] === undefined) {
            gameboard[13] = player;
            dropToken(token, 1);
        }
    }
    else if (currentColumn === 4) {
        if (gameboard[23] === undefined) {
            gameboard[23] = player;
            dropToken(token, 6);
        }
        else if (gameboard[22] === undefined) {
            gameboard[22] = player;
            dropToken(token, 5);
        }
        else if (gameboard[21] === undefined) {
            gameboard[21] = player;
            dropToken(token, 4);
        }
        else if (gameboard[20] === undefined) {
            gameboard[20] = player;
            dropToken(token, 3);
        }
        else if (gameboard[20] === undefined) {
            gameboard[20] = player;
            dropToken(token, 2);
        }
        else if (gameboard[19] === undefined) {
            gameboard[19] = player;
            dropToken(token, 1);
        }
    }
    else if (currentColumn === 5) {
        if (gameboard[30] === undefined) {
            gameboard[30] = player;
            dropToken(token, 6);
        }
        else if (gameboard[29] === undefined) {
            gameboard[29] = player;
            dropToken(token, 5);
        }
        else if (gameboard[28] === undefined) {
            gameboard[28] = player;
            dropToken(token, 4);
        }
        else if (gameboard[27] === undefined) {
            gameboard[27] = player;
            dropToken(token, 3);
        }
        else if (gameboard[26] === undefined) {
            gameboard[26] = player;
            dropToken(token, 2);
        }
        else if (gameboard[25] === undefined) {
            gameboard[25] = player;
            dropToken(token, 1);
        }
    }
    else if (currentColumn === 6) {
        if (gameboard[36] === undefined) {
            gameboard[36] = player;
            dropToken(token, 6);
        }
        else if (gameboard[35] === undefined) {
            gameboard[35] = player;
            dropToken(token, 5);
        }
        else if (gameboard[34] === undefined) {
            gameboard[34] = player;
            dropToken(token, 4);
        }
        else if (gameboard[33] === undefined) {
            gameboard[33] = player;
            dropToken(token, 3);
        }
        else if (gameboard[32] === undefined) {
            gameboard[32] = player;
            dropToken(token, 2);
        }
        else if (gameboard[31] === undefined) {
            gameboard[31] = player;
            dropToken(token, 1);
        }
    }
    else if (currentColumn === 7) {
        if (gameboard[42] === undefined) {
            gameboard[42] = player;
            dropToken(token, 6);
        }
        else if (gameboard[41] === undefined) {
            gameboard[41] = player;
            dropToken(token, 5);
        }
        else if (gameboard[40] === undefined) {
            gameboard[40] = player;
            dropToken(token, 4);
        }
        else if (gameboard[39] === undefined) {
            gameboard[39] = player;
            dropToken(token, 3);
        }
        else if (gameboard[38] === undefined) {
            gameboard[38] = player;
            dropToken(token, 2);
        }
        else if (gameboard[37] === undefined) {
            gameboard[37] = player;
            dropToken(token, 1);
        }
    }
    gamecount++;
    if (gamecount % 2 === 1) {
        $("#drop_space").append("<div class=\"token player1 currenttoken\" id=\"token" + gamecount + "\"></div>");
        $("#messages").text("Player 1: Drop your piece below!");
    }
    else {
        $("#drop_space").append("<div class=\"token player2 currenttoken\" id=\"token" + gamecount + "\"></div>");
        $("#messages").text("Player 2: Drop your piece below!");
    }
}



$(document).ready(function() {
    var currentMousePos;
    var currentColumn;
    $("div").mousemove(function(e) {
        currentMousePos = e.pageX - $('#drop_space').offset().left - 38;   
        if (currentMousePos < 61) {
            $(".currenttoken").css("left", "18px");
            currentColumn = 1;
            //alert(currentMousePos);
        }
        else if (currentMousePos >= 61 && currentMousePos < 144) {
            $(".currenttoken").css("left", "102px");
            currentColumn = 2;
            //alert("Current column is " + currentColumn + " and token should be there");
        }
        else if (currentMousePos >= 144 && currentMousePos < 227) {
            $(".currenttoken").css("left", "184px");
            currentColumn = 3;
            //alert("Current column is " + currentColumn + " and token should be there");
        }
        else if (currentMousePos >= 227 && currentMousePos < 310) {
            $(".currenttoken").css("left", "268px");
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
});

