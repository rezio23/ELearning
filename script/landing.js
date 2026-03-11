let courseData = [
  {
    courseId: 1,
    courseTitle: "គណិតវិទ្យា - ធរណីមាត្រ",
    courseAuthor: "វិឈាន សម្បត្តិ",
    courseImage:
    "https://wallpapers.com/images/featured/physics-w4ac9eqvnunc0ocp.jpg",
    courseOldPrice: 19.99,
    courseNewPrice: 'Free',
    courseAuthorImage: "main5.jpg",
  },
  {
    courseId: 2,
    courseTitle: "កាឡាក់ស៊ីមីលគីវ៉េ",
    courseAuthor: "អ៊ុក សុបញ្ញា",
    courseImage:
      "https://nsf-gov-resources.nsf.gov/styles/hero_small/s3/2023-04/Andromeda_galaxy_h.jpg.webp?VersionId=1jJ3N_Ix2nIguRWAof8ppMEpu3Bzvx7Q&itok=WSHuusB5",
    courseOldPrice: 99.99,
    courseNewPrice: 'Free',
    courseAuthorImage: "main16.jpg",
  },
  {
    courseId: 3,
    courseTitle: "សុខភាពបេះដូង",
    courseAuthor: "Dr. John",
    courseImage:
      "https://www.drashwanimehta.com/assets/image/blog/tips-from-cardiologist-for-healthy-heart.webp",
    courseOldPrice: 99.99,
    courseNewPrice: 'Free',
    courseAuthorImage: "main1.jpg",
  },
  {
    courseId: 4,
    courseTitle: "ទម្លាប់ទាំង៧",
    courseAuthor: "Ms. Alice",
    courseImage:
      "https://media.licdn.com/dms/image/v2/D4D12AQHGC4-mftneKw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1683647951916?e=2147483647&v=beta&t=sqbOZkehA39pUJx6ifvxVkEaSB73CDP1t-8JY8BeWKI",
    courseOldPrice: 79.99,
    courseNewPrice: '$9.99',
    courseAuthorImage: "main11.jpg",
  },
  {
    courseId: 5,
    courseTitle: "មូលដ្ឋានគ្រឹះក្នុងការបង្កើតជំនួញ",
    courseAuthor: "សែន ពិសី",
    courseImage:
      "https://png.pngtree.com/thumb_back/fw800/background/20251126/pngtree-stack-of-self-help-and-business-books-with-glasses-pen-on-image_20619670.webp",
    courseOldPrice: 79.99,
    courseNewPrice: 'Free',
    courseAuthorImage: "main8.jpg",
  },
  {
    courseId: 6,
    courseTitle: "កង់ទិចរូបវិទ្យា",
    courseAuthor: "សាន សុជាតា",
    courseImage: "https://cdn.mos.cms.futurecdn.net/ayTnhRypWyGEgi5zod4RAd.jpg",
    courseOldPrice: 79.99,
    courseNewPrice: '$29.99',
    courseAuthorImage: "main10.jpg",
  },
  {
    courseId: 7,
    courseTitle: "ទម្លាប់អាតូមិក",
    courseAuthor: "មិញ ផាលាភ",
    courseImage:
      "https://m.media-amazon.com/images/S/aplus-media/sota/cdab3996-5d25-4e0c-952b-09d3c4a5635f.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    courseOldPrice: 79.99,
    courseNewPrice: 'Free',
    courseAuthorImage: "main2.jpg",
  },
  {
    courseId: 8,
    courseTitle: "រចនារូបភាព3D",
    courseAuthor: "ចាន់ ដារ៉ា",
    courseImage:
      "https://4kwallpapers.com/images/wallpapers/geometric-3d-render-3840x2160-12087.jpg",
    courseOldPrice: 79.99,
    courseNewPrice: 'Free',
    courseAuthorImage: "main3.jpg",
  },
];

courseData.forEach((course) => {
  let priceColor = "";

  if (course.courseNewPrice === "Free") {
    priceColor = "var(--price-color)";
  } else {
    priceColor = "red";
  }

  let courseItem = `
  <a href="src/course_details.html" class="course-item-card" id="course${course.courseId}">
    <img class="course-thumb" src="${course.courseImage}" alt="${course.courseTitle}">
    <div class="course-item-card-favorite"></div>
    <hr>
    <h3>${course.courseTitle}</h3>
    <div class="course-item-card-author">
      <div class="course-profile">
        <img class="profile-thumb" src="asset/author/${course.courseAuthorImage}" alt="author">
        <p>${course.courseAuthor}</p>
      </div>
      <h2 class="price" style="color: ${priceColor}"><del>$${course.courseOldPrice}</del>${course.courseNewPrice}</h2>
    </div>
    <button>មើល</button>
  </a>
  `;

  $(".course-item").append(courseItem);
});

$("#course1, #course2, #course3, #course4").show();
$("#course5, #course6, #course7, #course8").hide();

function backCourse() {
  $("#course1, #course2, #course3, #course4").show();
  $("#course5, #course6, #course7, #course8").hide();
  $("#nextBtn")
    .text("បន្ទាប់")
    .off("click", backCourse)
    .on("click", nextCourse);
}

function nextCourse() {
  $("#course1, #course2, #course3, #course4").hide();
  $("#course5, #course6, #course7, #course8").show();
  $("#nextBtn").text("ត្រឡប់").off("click", nextCourse).on("click", backCourse);
}

$("#nextBtn").on("click", nextCourse);
$("#course-number1").on("click", backCourse);
$("#course-number2").on("click", nextCourse);

let categories = [
  {
    title: "គណិតវិទ្យា",
    info: "ធរណីមាត្រ, តក្កវិទ្យា, ផ្សេងៗ",
    titleID: "Math",
    titleIcon: "fa-solid fa-calculator",
  },
  {
    title: "បច្ចេកវិទ្យា",
    info: "កុំព្យូទ័រ, ស្មាតហ្វូន, ផ្សេងៗ",
    titleID: "Technology",
    titleIcon: "fa-brands fa-react",
  },
  {
    title: "សុខភាព",
    info: "សុខាភិបាល, ជំងឺ, ផ្សេងៗ",
    titleID: "Health",
    titleIcon: "fa-solid fa-heart",
  },
  {
    title: "ជំនួញ",
    info: "ទីផ្សារ, ការគ្រប់គ្រង, ផ្សេងៗ",
    titleID: "Business",
    titleIcon: "fa-solid fa-business-time",
  },
  {
    title: "រូបវិទ្យា",
    info: "លំយោល,​ ច្បាប់នៃថាមពល, ផ្សេងៗ",
    titleID: "Physic",
    titleIcon: "fa-solid fa-cloud-bolt",
  },
  {
    title: "រចនារូបភាព",
    info: "រួបភាពផ្សព្វផ្សាយ, រួបភាព3D, ផ្សេងៗ",
    titleID: "Design",
    titleIcon: "fa-solid fa-bezier-curve",
  },
  {
    title: "ចំណេះដឹងទូទៅ",
    info: "ការអភិវឌ្ឃន៍គោលគំនិត, ផ្សេងៗ",
    titleID: "General",
    titleIcon: "fa-solid fa-code-branch",
  },
  {
    title: "ផ្សេងៗ",
    info: "វប្បធម៌, នយោបាយ, ផ្សេងៗ",
    titleID: "Other",
    titleIcon: "fa-solid fa-arrows-turn-to-dots",
  },
];

categories.forEach((category) => {
  let categoryitem = `
  <div class="category-card">
    <div class="category-card-item" id="${category.titleID}">
      <div class="category-icon"><i class="${category.titleIcon}"></i></div>
      <h3>${category.title}</h3>
      <p>${category.info}</p>
    </div>
  </div>
  `;
  $("#category-item").append(categoryitem);
});

// Teacher Item Data
let teachers = [
  {
    teacherId: 1,
    teacherName: "លោកគ្រូ វិឈាន សម្បត្តិ",
    teacherState: "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រកុំព្យូទ័រ",
    teacherProfile: "main5.jpg",
  },
  {
    teacherId: 2,
    teacherName: "លោកគ្រូ អ៊ុក សុបញ្ញា",
    teacherState: "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រកុំព្យូទ័រ",
    teacherProfile: "main16.jpg",
  },
  {
    teacherId: 3,
    teacherName: "លោកគ្រូ ចាន់ ដារ៉ា",
    teacherState: "បរិញ្ញាបត្រ គណិតវិទ្យា",
    teacherProfile: "main3.jpg",
  },
  {
    teacherId: 4,
    teacherName: "Mr. John",
    teacherState: "បរិញ្ញាបត្រ វិជ្ជបណ្ឌិត",
    teacherProfile: "main1.jpg",
  },
  {
    teacherId: 5,
    teacherName: "Ms. Alice",
    teacherState: "បណ្ឌិត ចិត្តសាស្ត្រ",
    teacherProfile: "main11.jpg",
  },
  {
    teacherId: 6,
    teacherName: "អ្នកគ្រូ សាន សុជាតា",
    teacherState: "អនុបណ្ឌិត រូបវិទ្យា",
    teacherProfile: "main10.jpg",
  },
  {
    teacherId: 7,
    teacherName: "លោកគ្រូ មិញ ផាលាភ",
    teacherState: "បណ្ឌិត វិទ្យាសាស្ត្រកុំព្យូទ័រ",
    teacherProfile: "main2.jpg",
  },
  {
    teacherId: 8,
    teacherName: "អ្នកគ្រូ សែន ពិសី",
    teacherState: "បរិញ្ញាបត្រ ពាណិជ្ជកម្មអន្តរជាតិ",
    teacherProfile: "main8.jpg",
  },
];

teachers.forEach((teacher) => {
  let teacherData = `
    <div class="teacher-profile-item" id="teacher${teacher.teacherId}">
      <img src="asset/author/${teacher.teacherProfile}" alt="teacher-profile">
      <div class="teacher-profile-text">
        <h2>${teacher.teacherName}</h2>
        <h3>${teacher.teacherState}</h3>
      </div>
    </div>
  `;

  $("#teacher-profile").append(teacherData);
});


$("#teacher1, #teacher2, #teacher3, #teacher4").show();
$("#teacher5, #teacher6, #teacher7, #teacher8").hide();

function backTeacher() {
  $("#teacher1, #teacher2, #teacher3, #teacher4").show();
  $("#teacher5, #teacher6, #teacher7, #teacher8").hide();

  $("#nextTeacherBtn")
    .text("បន្ទាប់")
    .off("click", backTeacher)
    .on("click", nextTeacher);
}

function nextTeacher() {
  $("#teacher1, #teacher2, #teacher3, #teacher4").hide();
  $("#teacher5, #teacher6, #teacher7, #teacher8").show();
  $("#nextTeacherBtn").text("ត្រឡប់").off("click", nextTeacher).on("click", backTeacher);
}

// Initial events
$("#nextTeacherBtn").on("click", nextTeacher);
$("#teacher-number1").on("click", backTeacher);
$("#teacher-number2").on("click", nextTeacher);

// Welcome Popup Logic
$(document).ready(function() {
    // Temporarily disabled the sessionStorage check so it pops up EVERY time you refresh (for testing!)
    // if (!sessionStorage.getItem('welcomeShown')) {
        // Show the modal after a short delay
        setTimeout(function() {
            $('#welcomeModal').css('display', 'flex');
        }, 800); // 0.8s delay
    // }

    // Close the popup when clicking the 'X'
    $('#closeWelcomeBtn').on('click', function() {
        $('#welcomeModal').fadeOut();
        sessionStorage.setItem('welcomeShown', 'true');
    });

    // Close the popup when clicking outside the image content
    $('#welcomeModal').on('click', function(event) {
        if ($(event.target).is('#welcomeModal')) {
            $('#welcomeModal').fadeOut();
            sessionStorage.setItem('welcomeShown', 'true');
        }
    });
});
