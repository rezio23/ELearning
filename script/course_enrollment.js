let paymentMethod = "visa";

$("#visaCARD").show();
$("#acledaKHQR").hide();

function visaMethod() {
  paymentMethod = "visa";
  $("#visaCARD").show();
  $("#acledaKHQR").hide();
  $("#acleda").css("background-color", "lightgray");
  $("#acleda").css("color", "var(--button-color)");
  $("#visa").css("background-color", "var(--button-color)");
  $("#visa").css("color", "white");
}

function acledaMethod() {
  paymentMethod = "acleda";
  $("#visaCARD").hide();
  $("#acledaKHQR").show();
  $("#visa").css("background-color", "lightgray");
  $("#visa").css("color", "var(--button-color)");
  $("#acleda").css("background-color", "var(--button-color)");
  $("#acleda").css("color", "white");
}

$("#submitCardBtn").on("click", function (e) {
  e.preventDefault();

  if (paymentMethod === "visa") {
    let cardNumber = $("#cardNumber").val();
    let expirationDate = $("#expirationDate").val();
    let securityCode = $("#securityCode").val();
    let fullName = $("#fullName").val();
    let address = $("#address").val();

    if (!cardNumber || !expirationDate || !securityCode || !fullName || !address) {
      Swal.fire({
        icon: "error",
        title: "សូមបំពេញព័ត៌មានឱ្យបានគ្រប់គ្រាន់!",
        text: "រាល់ព័ត៌មានកាត VISA ត្រូវតែបំពេញ។",
      });
      return;
    }

    if (cardNumber.length !== 16) {
      Swal.fire({
        icon: "error",
        title: "លេខកាតមិនត្រឹមត្រូវ!",
        text: "លេខកាតត្រូវតែមាន ១៦ ខ្ទង់។",
      });
      return;
    }

    if (expirationDate.length !== 4) {
      Swal.fire({
        icon: "error",
        title: "កាលបរិច្ឆេទផុតកំណត់មិនត្រឹមត្រូវ!",
        text: "កាលបរិច្ឆេទផុតកំណត់ត្រូវតែមាន ៤ ខ្ទង់ (ខែឆ្នាំ)។",
      });
      return;
    }

    if (securityCode.length !== 3) {
      Swal.fire({
        icon: "error",
        title: "លេខកូដសម្ងាត់មិនត្រឹមត្រូវ!",
        text: "លេខកូដ CVC ត្រូវតែមាន ៣ ខ្ទង់។",
      });
      return;
    }
  }

  Swal.fire({
    icon: "success",
    title: "ការចុះឈ្មោះជោគជ័យ!",
    text: "សាកល្បងរៀនឥឡូវនេះ",
    timer: 2000,
    showConfirmButton: false,
  }).then(() => {
    window.location.href = "course_play.html";
  });
});

let courseData = [
  {
    courseID: 1,
    courseName: "កង់ទិចរូបវិទ្យា",
    courseOldPrice: "19.99",
    courseNewPrice: "Free",
    courseImg: "../asset/author/mainpfp.jpg",
  },
  {
    courseID: 2,
    courseName: "បញ្ញាសប្បនិម្មិត",
    courseOldPrice: "19.99",
    courseNewPrice: "Free",
    courseImg: "../asset/author/mainpfp.jpg",
  },
  {
    courseID: 3,
    courseName: "កាឡាក់ស៊ីមីលគីវ៉េ",
    courseOldPrice: "19.99",
    courseNewPrice: "Free",
    courseImg: "../asset/author/mainpfp.jpg",
  },
];

for (let i in courseData) {
  let course = courseData[i];

  let courseDisplay = `
  <div class="course" id="course-display${course.courseID}">
    <img src="${course.courseImg}" alt="">
    <div class="price">
      <h3>${course.courseName}</h3>
      <label for="price"><del>$${course.courseOldPrice}</del> ${course.courseNewPrice}</label>
    </div>
    <button id="deleteBtn${course.courseID}"><i class="fa-solid fa-minus"></i></button>
    </div>
    <hr id="line${course.courseID}">
  `;

  $("#ordered-course").append(courseDisplay);
}

for (let i in courseData) {
  let course = courseData[i];

  let addCourse = `
    <div class="course-add" id="course${course.courseID}">
      <img src=${course.courseImg} alt="courseImg">
      <div class="course-add-price">
        <h4>${course.courseName}</h4>
        <label for="coursePrice"><del>$${course.courseOldPrice}</del><span> ${course.courseNewPrice}</span></label>
      </div>
      <button id="addBtn${course.courseID}"><i class="fa-solid fa-plus"></i></button>
    </div>
  `;
  $("#add-order").append(addCourse);
}

$("#course1, #course2, #course3").show();
$("#course-display1, #course-display2, #course-display3, #line1, #line2, #line3").hide();

let cost = 19.99;

$("#addBtn1").on("click", function () {
  $("#course1").hide();
  $("#course-display1, #line1").show();
  cost += 19.99;
  $("#spanCost").html("$ " + cost.toFixed(2));
  $("#spanDiscount").html("$ " + cost.toFixed(2));
});
$("#addBtn2").on("click", function () {
  $("#course2").hide();
  $("#course-display2, #line2").show();
  cost += 19.99;
  $("#spanCost").html("$ " + cost.toFixed(2));
  $("#spanDiscount").html("$ " + cost.toFixed(2));
});
$("#addBtn3").on("click", function () {
  $("#course3").hide();
  $("#course-display3, #line3").show();
  cost += 19.99;
  $("#spanCost").html("$ " + cost.toFixed(2));
  $("#spanDiscount").html("$ " + cost.toFixed(2));
});
$("#deleteBtn1").on("click", function () {
  $("#course1").show();
  $("#course-display1, #line1").hide();
  cost -= 19.99;
  $("#spanCost").html("$ " + cost.toFixed(2));
  $("#spanDiscount").html("$ " + cost.toFixed(2));
});
$("#deleteBtn2").on("click", function () {
  $("#course2").show();
  $("#course-display2, #line2").hide();
  cost -= 19.99;
  $("#spanCost").html("$ " + cost.toFixed(2));
  $("#spanDiscount").html("$ " + cost.toFixed(2));
});
$("#deleteBtn3").on("click", function () {
  $("#course3").show();
  $("#course-display3, #line3").hide();
  cost -= 19.99;
  $("#spanCost").html("$ " + cost.toFixed(2));
  $("#spanDiscount").html("$ " + cost.toFixed(2));
});