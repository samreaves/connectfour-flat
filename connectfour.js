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
}

var gameboard = [42];
var gamecount = 1;
function addPiece(token) {
    if (gameboard[6] === undefined) {
        gameboard[6] = 8;
        dropToken(token, 6);
        gamecount++;
    }
    else if (gameboard[5] === undefined) {
        gameboard[5] = 8;
        dropToken(token, 5);
        gamecount++;
    }
    else if (gameboard[4] === undefined) {
        gameboard[4] = 8;
        dropToken(token, 4);
        gamecount++;
    }
    else if (gameboard[3] === undefined) {
        gameboard[3] = 8;
        dropToken(token, 3);
        gamecount++;
    }
    else if (gameboard[2] === undefined) {
        gameboard[2] = 8;
        dropToken(token, 2);
        gamecount++;
    }
    else if (gameboard[1] === undefined) {
        gameboard[1] = 8;
        dropToken(token, 1);
        gamecount++;
    }
    $("#drop_space").append("<div class=\"token player1\" id=\"token" + gamecount + "\"></div>");
}



$(document).ready(function() {
    $("#drop_space").on('click', '.token', function(e) {
        addPiece(this);
    });

//    var currentMousePos = {x: -1, y: -1};
//    $(document).mousemove(function(event) {
//        currentMousePos.x = event.pageX;
//        currentMousePos.y = event.pageY;
//    });
});