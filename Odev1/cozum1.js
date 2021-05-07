// görev 1
$("#gorev1 button").click(function () {
  for (let i = 0; i < 3; i++) {
    $("#gorev1 ul").append(`<li> ${$(`h2:eq(${i})`).text()} </li>`);
  }
});
// görev 2
$("#gorev2 button").click(function () {
  $("#gorev2 > input").val(`${$("article h2").length}`);
});
// görev 3

$("#gorev3 button").click(function () {
  let val = $("h1").first().text();
  $("#gorev3 > input").val(val);
});
// görev 4
$("#gorev4 button").click(function () {
  let len = $("article p").length;
  for (let i = 0; i < len; i++) {
    var val = $(`article p:eq(${i})`).text().length;
    $(`article h2:eq(${i})`).append("(" + val + " karakter)");
  }
});
// görev 5
$("#gorev5 button").click(function () {
  $("article h2:odd").css("color", "blue");
  $("article h2:even").css("color", "orange");
  $("article h1").css("color", "red");
});
// görev 6
$("#gorev6 button").click(function(){
    $("article div").first().fadeOut()
})
// görev 7
$("#gorev7 button").click(function () {
  let query = $("article h2:contains('can')").each(function (index,element) {
    $("#gorev7 ul").append("<li>" + $(element).text() + "</li>");
  });  
});
// görev 8
$("#gorev8 button").click(function(){
    $("<h2></h2>").attr("id","lorem").append("Lorem").insertAfter("h1").ready(function(){
        $.ajax({
            url:"lorem.html",
            type:"get",

            success: function(response){
                $("<p></p>").append(response).insertAfter("#lorem")
            }
        })
    })   
})
// görev 9
$("h1,h2").mouseenter(function(){
    $("#gorev9 > input").val($(this).text())
})
// görev 10
$("#gorev10 button").click(function(){
    $("<img>").attr({
        "src":"check.png",
        "height":"100",
        "width":"100",
    }).css({
        "position":"fixed",
        "bottom":"50px",
        "right":"50px"
    }).appendTo("html")
})
