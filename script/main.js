$("#searchBtn").on("click", () => {
  Swal.fire({
    icon: "warning",
    title: "Oops...",
    text: "This function is not available yet!",
  });
});

$("#tag-learnMore").on("click", () => {
  Swal.fire({
    icon: "warning",
    title: "Oops...",
    text: "This function is not available yet!",
  });
});

$("#allCategory").on("click", () => {
  Swal.fire({
    icon: "warning",
    title: "Oops...",
    text: "This function is not available yet!",
  });
});

$("#register").on("click", () => {
  Swal.fire({
    icon: "warning",
    title: "Oops...",
    text: "This function is not available yet!",
  });
});

$(".forgot-password").on("click", () => {
  Swal.fire({
    icon: "warning",
    title: "Oops...",
    text: "This function is not available yet!",
  });
});

// Hide header actions on scroll for mobile
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $("header").addClass("header-scrolled");
  } else {
    $("header").removeClass("header-scrolled");
  }
});
