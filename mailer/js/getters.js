function MAILER() {
  for (let i = 1; i <= 5; i++) {
    $.post(
      "php/mail.php",
      {
        RU: i
      },
      function(req) {
        console.log(req);
      }
    );
  }
}

function insertData() {
  today = new Date();
  let options_time = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  let time = today
    .toLocaleString("ru", options_time)
    .split(/[, :.]/)
    .join("");
  let file = document.getElementById("file").files[0];
  let form = new FormData();
  form.append("proj_name", $("#proj_name").val());
  form.append("proj_link", $("#proj_link").val());
  form.append("time", time);
  form.append("file", file);
  $.ajax({
    url: "php/insertDB.php",
    data: form,
    processData: false,
    contentType: false,
    type: "POST",
    success: function(data) {
      console.log(data);
    }
  });
}
function getTables() {
  $.post("php/getTable.php", function(data) {
    let option = "<option selected>Выбрать проект</option>";
    let names = JSON.parse(data);
    for (let i = 0; i < names.length; i++) {
      option += `<option value="${names[i]["id"]}">${
        names[i]["proj_name"]
      }</option>`;
    }
    $("#projects").html(option);
  });
}
function getMails() {
  let name = $("#projects option:selected").val();
  $.post("php/getMails.php", { tablename: name }, function(data) {
    let arrmails = JSON.parse(data);
    let td = "";

    for (let i = 0; i < arrmails.length; i++) {
      td += "<tr>";
      for (let key in arrmails[i]) {
        td += `<td scope="col">${arrmails[i][key]}</td>`;
      }
      td += "</tr>";
    }
    $("#tablemails>tbody").html(td);
  });
}
