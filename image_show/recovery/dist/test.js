'use strict';

document.getElementById('next_button').onclick = function () {
    var query = "UPDATE `Counts` SET `visit1`=1 WHERE `uid`=[%uid%]";
    $.post('https://webmail.brt.org.ua/update.php', { query: query });
};