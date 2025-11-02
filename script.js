$(document).ready(function() {
  console.log("jQuery loaded successfully!");

  // Task 1 – Selectors
  $("#title").text("✔ jQuery is working!");
  $("#task1 p").css({
    color: "#007bff",
    fontWeight: "bold"
  }).text("This text was changed using jQuery!");

  // Task 2 – Visibility
  $("#hide-btn").click(() => $("#text").hide());
  $("#show-btn").click(() => $("#text").show());
  $("#toggle-btn").click(() => $("#text").toggle());

  // Task 3 – Fade
  $("#fadeout-btn").click(() => $("#fade-img").fadeOut());
  $("#fadein-btn").click(() => $("#fade-img").fadeIn());
  $("#fadetoggle-btn").click(() => $("#fade-img").fadeToggle());

  // Task 4 – Slide
  $("#slideup-btn").click(() => $("#collapsible-panel").slideUp());
  $("#slidedown-btn").click(() => $("#collapsible-panel").slideDown());
  $("#slidetoggle-btn").click(() => $("#collapsible-panel").slideToggle());

  // Task 5 – Add/Remove
  $("#add-item").click(() => $("ul").append("<li>New Item</li>"));
  $("#remove-item").click(() => $("ul li:last-child").remove());

  // Task 6 – Attributes
  $("#change-img").click(() => {
    $("#attr-img").attr("src", "https://picsum.photos/200?random=" + Math.floor(Math.random() * 100));
  });
  $("#change-link").click(() => {
    $("#attr-link").attr("href", "https://wikipedia.org").text("Go to Wikipedia");
  });

  // Task 7 – Form Interaction
  $("#name, #email").on("input", function() {
    const name = $("#name").val();
    const email = $("#email").val();
    $("#live-output").html(`<b>Name:</b> ${name}<br><b>Email:</b> ${email}`);
  });

  // Task 8–10 – Animations
  $("#animate1").click(() => {
    $("#square").animate({ left: "200px", height: "150px", width: "150px" }, 1000)
                 .animate({ left: "0px", height: "100px", width: "100px" }, 1000);
  });

  $("#animate2").click(() => {
    $("#square").animate({ left: "200px" }, 600)
                .animate({ top: "150px" }, 600)
                .animate({ left: "0" }, 600)
                .animate({ top: "0" }, 600);
  });

  $("#animate3").click(() => {
    $("#square").animate({
      left: "150px",
      opacity: 0.3,
      height: "200px",
      width: "200px"
    }, 1000).animate({
      left: "0px",
      opacity: 1,
      height: "100px",
      width: "100px"
    }, 1000);
  });

  // Task 11 – Gallery
  $(".gallery img").click(function() {
    $(".gallery img").removeClass("active");
    $(this).addClass("active");
  });
});
