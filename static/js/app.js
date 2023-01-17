$(function () {
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var blocId = $(this).data("scroll"),
            blockOffset = $(blocId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
});