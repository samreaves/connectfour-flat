/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function dropToken(token) {
//    $(token).css("top", "495px");
    $(token).animate({
        top: "495"
    }, 500);
}

$(document).ready(function() {
    $(".token").click(function() {
        dropToken(this);
    });
});