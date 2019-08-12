
function reset() {
    document.getElementById('qAge').value = '';
    document.getElementById('qHxAge').value = '';
    document.getElementById('table').value = '';
    document.getElementById('Con').value = '';
    document.getElementById('Skip').value = '';
    color()
}
function copy() {
    color();
    document.getElementById('qHxAge').value = "Hx" + document.getElementById('qAge').value + "List";
}
function result() {
    var one = document.getElementById('qAge').value;
    var two = document.getElementById('qHxAge').value;
    var res = document.getElementById('table').value;
    var arrRes = res.split('\n');
    var art = [];
    for (var i = 0; i < arrRes.length; i++) {
        art.push(arrRes[i].split(/[-–—\.\,\t a-zA-Z а-яА-Я]/));
    }
    var arrResResRes = '';
    for (var i = 0; i < art.length; i++) {
        if (art[i][0] != '' && art[i][1] != '') {
            if (document.getElementById('roro1').checked) {
                arrResResRes += `if (VALUE("${one}_r1_c1")>=${art[i][0]} && VALUE("${one}_r1_c1")<=${art[i][1]}) {ADD("${two}",${i + 1});}\n`;
            }
            else {
                arrResResRes += `if (VALUE("${one}")>=${art[i][0]} && VALUE("${one}")<=${art[i][1]}) {ADD("${two}",${i + 1});}\n`;
            }

        }

    }
    document.getElementById('Con').value = `Begin Unverified Perl\n${arrResResRes}End Unverified`;
    document.getElementById('Skip').value  = `ListLength(Hx${one}xCL)=0` ; 
    color();
}
function saveD(x) {

    var res = document.getElementById(x).value;

    if (res != '') {
        navigator.clipboard.writeText(res)
            .then(() => {
                document.getElementById('save'+x).innerHTML = 'OK';
            })
            .catch(err => {
                document.getElementById('save'+x).innerHTML = 'ERROR';
            });
    } else {
        alert('NOT FAUND');
    }
}

function color() {
    var res = document.getElementById('Con').value;
    if (res != '') {
        document.getElementById('saveCon').style.color = 'blue';
        document.getElementById('saveCon').innerHTML = 'SAVE(construct) ';
        document.getElementById('saveSkip').style.color = 'blue';
        document.getElementById('saveSkip').innerHTML = 'SAVE(skip)';
    }
    else {
        document.getElementById('saveCon').style.color = 'silver';
        document.getElementById('saveCon').innerHTML = 'SAVE(construct)';
        document.getElementById('saveSkip').style.color = 'silver';
        document.getElementById('saveSkip').innerHTML = 'SAVE(skip)';
    }

}
