$("#lesson-container1").on("click", () =>
  $(".module1-lesson").slideToggle(400),
);
$("#lesson-container2").on("click", () =>
  $(".module2-lesson").slideToggle(400),
);

$("#nextLesson").on("click", () => {
  Swal.fire({
    icon: "warning",
    title: "មិនទាន់មានមេរៀនបន្ទាប់!",
  });
});

$("#basicMath").on("click", () => {
  $(".display").html(`
        <iframe width="800" height="450" src="https://www.youtube.com/embed/fnBoRFRDgsk"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>`);
});
$("#degMath").on("click", () => {
  $(".display").html(`
        <iframe width="800" height="450" src="https://www.youtube.com/embed/EQpguitDfGU"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>`);
});
$("#pluralMath").on("click", () => {
  $(".display").html(`
          <iframe width="800" height="450" src="https://www.youtube.com/embed/o8mec4m_76Y"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
          </iframe>`);
});
$("#circleMath").on("click", () => {
  $(".display").html(`
          <iframe width="800" height="450" src="https://www.youtube.com/embed/dBIlCD_JF9Q"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
          </iframe>`);
});
$("#areaMath").on("click", () => {
  $(".display").html(`
          <iframe width="800" height="450" src="https://www.youtube.com/embed/fnBoRFRDgsk"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
          </iframe>`);
});
$("#3dMath").on("click", () => {
  $(".display").html(`
          <iframe width="800" height="450" src="https://www.youtube.com/embed/fnBoRFRDgsk"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
          </iframe>`);
});
