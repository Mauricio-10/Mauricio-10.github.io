console.log("working")
$("navbar").find("a").click(function(event) {
    event.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});