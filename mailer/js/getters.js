function MAILER() {
    for (let i = 1; i <= 5; i++) {
        $.post("php/mail.php", {
            RU: i
        }, function(req) {
            console.log(req);
        })
    }
}

function insertData() {
    today = new Date();
    let options_time = {year:'numeric', month:'2-digit',day: '2-digit', hour:'numeric', minute:'numeric', second:'numeric' };
    let time = today.toLocaleString("ru", options_time).split(/[, :.]/).join("");
    let file = document.getElementById('file').files[0];
    let form = new FormData();
    form.append('proj_name', $('#proj_name').val());
    form.append('proj_link', $('#proj_link').val());
    form.append('time', time);
    form.append('file', file);
    $.ajax({
        url: 'insertDB.php',
        data: form,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function(data) {
            console.log(data);
        }
    });
}
function getTables(){
    $.post("php/getTable.php",function(data){
        let arr = JSON.parse(data);
        console.log(data);
    });
}