console.log("app.js loaded")

$("ul").on("click", "li", function(e) {
    $(this).toggleClass("completed");
})

$("ul").on("click", "span", function(e) {
    e.stopPropagation();
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
})

$("input[type='text']").on("keypress", function(e) {
    if (e.which === 13) {
        let todoText = $(this).val();
        $(this).val("");
        let $item = $(`<li><span><i class="fas fa-trash-alt"></i></span>${todoText}</li>`)
        $("#list").append($item);
    }
})

$(".fa-plus").on("click", function(e) {
    $("input[type='text']").fadeToggle();
})