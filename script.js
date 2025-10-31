$(document).ready(function() {
    console.log("jQuery is ready!");

    // Task 1
    $("#changeStyle").click(function() {
        $("#byID").text("Selected by ID → Updated!");
        $(".byClass").html("<b>Updated by Class!</b>");
        $("h3").css({"color": "purple", "font-size": "22px"});
    });

    // Task 2
    $("#hideBtn").click(() => $("#textToHide").hide());
    $("#showBtn").click(() => $("#textToHide").show());
    $("#toggleBtn").click(() => $("#textToHide").toggle());

    // Task 3
    $("#fadeOutBtn").click(() => $("#fadeImage").fadeOut());
    $("#fadeInBtn").click(() => $("#fadeImage").fadeIn());
    $("#fadeToggleBtn").click(() => $("#fadeImage").fadeToggle());

    // Task 4
    $("#togglePanelBtn").click(() => $("#panel").slideToggle());

    // Task 5
    let count = 3;
    $("#addItem").click(() => {
        $("#itemList").append(`<li>Item ${count++}</li>`);
    });
    $("#removeItem").click(() => {
        $("#itemList li:last").remove();
    });

    // Task 6
    $("#changeSrc").click(() => {
        $("#attrImage").attr("src", "https://via.placeholder.com/150/ff9999");
    });
    $("#changeHref").click(() => {
        $("#myLink").attr("href", "https://www.wikipedia.org").text("Go to Wikipedia");
    });

    // Task 7
    $("#nameInput").keyup(function() {
        $("#liveName").text($(this).val());
    });
    $("#emailInput").keyup(function() {
        $("#liveEmail").text($(this).val());
    });

    // Task 8
    $("#animateBtn").click(function() {
        $("#box").animate({left: "200px", height: "150px", width: "150px"}, 800);
    });

    // Task 9
    $("#sequentialBtn").click(function() {
        $("#box").animate({left: "200px"}, 600)
                 .animate({top: "100px"}, 600)
                 .animate({height: "50px", width: "50px"}, 600)
                 .animate({left: "0px", top: "0px", height: "100px", width: "100px"}, 600);
    });

    // Task 10
    $("#combinedBtn").click(function() {
        $("#box").animate({
            left: "250px",
            opacity: 0.5,
            height: "120px",
            width: "120px"
        }, 800);
    });

    // Task 11: Image Gallery
    $(".gallery img").click(function() {
        $(".gallery img").not(this).fadeTo(400, 0.3);
        $(this).fadeTo(400, 1).css("transform", "scale(1.3)");
        setTimeout(() => $(this).css("transform", "scale(1)"), 800);
    });
});
