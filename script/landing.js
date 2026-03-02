// Course Item Data
let courseTitle = [
  "គណិតវិទ្យា - ធរណីមាត្រ",
  "កាឡាក់ស៊ីមីលគីវ៉េ",
  "សុខភាពបេះដូង",
  "ទម្លាប់ទាំង៧",
  "មូលដ្ឋានគ្រឹះក្នុងការបង្កើតជំនួញ",
  "កង់ទិចរូបវិទ្យា",
  "ទម្លាប់អាតូមិក",
  "រចនារូបភាព3D",
];
let courseAuthor = [
  "Sombath",
  "Uk Sophanha",
  "Hout Sokleng",
  "Sombath",
  "Uk Sophanha",
  "Hout Sokleng",
  "Uk Sophanha",
  "Hout Sokleng",
];
let courseImage = [
  "https://wallpapers.com/images/featured/physics-w4ac9eqvnunc0ocp.jpg",
  "https://nsf-gov-resources.nsf.gov/styles/hero_small/s3/2023-04/Andromeda_galaxy_h.jpg.webp?VersionId=1jJ3N_Ix2nIguRWAof8ppMEpu3Bzvx7Q&itok=WSHuusB5",
  "https://www.drashwanimehta.com/assets/image/blog/tips-from-cardiologist-for-healthy-heart.webp",
  "https://media.licdn.com/dms/image/v2/D4D12AQHGC4-mftneKw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1683647951916?e=2147483647&v=beta&t=sqbOZkehA39pUJx6ifvxVkEaSB73CDP1t-8JY8BeWKI",
  "https://png.pngtree.com/thumb_back/fw800/background/20251126/pngtree-stack-of-self-help-and-business-books-with-glasses-pen-on-image_20619670.webp",
  "https://cdn.mos.cms.futurecdn.net/ayTnhRypWyGEgi5zod4RAd.jpg",
  "https://m.media-amazon.com/images/S/aplus-media/sota/cdab3996-5d25-4e0c-952b-09d3c4a5635f.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  "https://4kwallpapers.com/images/wallpapers/geometric-3d-render-3840x2160-12087.jpg",
];
let courseAuthorImage = [
  "mainpfp.jpg",
  "mainpfp.jpg",
  "mainpfp.jpg",
  "mainpfp.jpg",
  "mainpfp.jpg",
  "mainpfp.jpg",
  "mainpfp.jpg",
  "mainpfp.jpg",
];
let courseId = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < courseTitle.length; i++) {
  let courseItem = `
<div class="course-item-card" id="course${courseId[i]}">
  <img class="course-thumb"
      src="${courseImage[i]}"
      alt="Maths chalkboard">
      <div class="course-item-card-favorite"><img class="icon-small" src="asset/svg/heart.svg" alt="favorite">
      </div>
          <hr>
            <h3>${courseTitle[i]}</h3>
                <div class="course-item-card-author">
                    <div class="course-profile">
                      <img class="profile-thumb"
                        src="../asset/author/${courseAuthorImage[i]}"
                        alt="author">
              <p>${courseAuthor[i]}</p>
          </div>
      <h2 class="price"><del>$19.99</del>Free</h2>
  </div>
</div>
`;
  document.querySelector(".course-item").innerHTML += courseItem;
}

document.getElementById("course1").style.display = "block";
document.getElementById("course2").style.display = "block";
document.getElementById("course3").style.display = "block";
document.getElementById("course4").style.display = "block";
document.getElementById("course5").style.display = "none";
document.getElementById("course6").style.display = "none";
document.getElementById("course7").style.display = "none";
document.getElementById("course8").style.display = "none";

function backCourse() {
  document.getElementById("course1").style.display = "block";
  document.getElementById("course2").style.display = "block";
  document.getElementById("course3").style.display = "block";
  document.getElementById("course4").style.display = "block";
  document.getElementById("course5").style.display = "none";
  document.getElementById("course6").style.display = "none";
  document.getElementById("course7").style.display = "none";
  document.getElementById("course8").style.display = "none";

  document.getElementById("nextBtn").innerHTML = "បន្ទាប់";
  document.getElementById("nextBtn").removeEventListener("click", backCourse);
  document.getElementById("nextBtn").addEventListener("click", nextCourse);
}

function nextCourse() {
  document.getElementById("course1").style.display = "none";
  document.getElementById("course2").style.display = "none";
  document.getElementById("course3").style.display = "none";
  document.getElementById("course4").style.display = "none";
  document.getElementById("course5").style.display = "block";
  document.getElementById("course6").style.display = "block";
  document.getElementById("course7").style.display = "block";
  document.getElementById("course8").style.display = "block";

  document.getElementById("nextBtn").innerHTML = "ត្រឡប់";
  document.getElementById("nextBtn").removeEventListener("click", nextCourse);
  document.getElementById("nextBtn").addEventListener("click", backCourse);
}

// Category Item Data
let title = [
  "គណិតវិទ្យា",
  "បច្ចេកវិទ្យា",
  "សុខភាព",
  "ជំនួញ",
  "រូបវិទ្យា",
  "រចនារូបភាព",
  "ចំណេះដឹងទូទៅ",
  "ផ្សេងៗ",
];
let info = [
  "ធរណីមាត្រ​,​ តក្កវិទ្យា, ផ្សេងៗ",
  "កុំព្យូទ័រ, ស្មាតហ្វូន, ផ្សេងៗ",
  "សុខាភិបាល, ជំងឺ, ផ្សេងៗ",
  "ទីផ្សារ, ការគ្រប់គ្រង, ផ្សេងៗ",
  "ធរណីមាត្រ​,​ តក្កវិទ្យា, ផ្សេងៗ",
  "កុំព្យូទ័រ, ស្មាតហ្វូន, ផ្សេងៗ",
  "សុខាភិបាល, ជំងឺ, ផ្សេងៗ",
  "ទីផ្សារ, ការគ្រប់គ្រង, ផ្សេងៗ",
];
let titleID = [
  "Math",
  "Technology",
  "Health",
  "Business",
  "Physic",
  "Design",
  "General",
  "Other",
];
let titleIcon = [
  "fa-solid fa-calculator",
  "fa-brands fa-react",
  "fa-solid fa-heart",
  "fa-solid fa-business-time",
  "fa-solid fa-cloud-bolt",
  "fa-solid fa-bezier-curve",
  "fa-solid fa-code-branch",
  "fa-solid fa-arrows-turn-to-dots",
];

for (let i = 0; i < title.length; i++) {
  let categoryitem = `
  <div class="category-card">
    <div class="category-card-item" id="${titleID[i]}">
      <div class="category-icon"><i class="${titleIcon[i]}"></i></div>
      <h3>${title[i]}</h3>
      <p>${info[i]}</p>
    </div>
  </div>
  `;
  document.getElementById("category-item").innerHTML += categoryitem;
}

// Teacher Item Data
let teacherName = [
  "លោកគ្រូ វិឈាន សម្បត្តិ",
  "លោកគ្រូ អ៊ុក សុបញ្ញា",
  "លោកគ្រូ អ៊ុក សុបញ្ញា",
  "លោកគ្រូ វិឈាន សម្បត្តិ",
  "លោកគ្រូ អ៊ុក សុបញ្ញា",
  "លោកគ្រូ វិឈាន សម្បត្តិ",
  "លោកគ្រូ អ៊ុក សុបញ្ញា",
  "លោកគ្រូ អ៊ុក សុបញ្ញា",
];

let teacherState = [
  "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រកុំព្យូទ័រ",
  "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រកុំព្យូទ័រ",
  "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រកុំព្យូទ័រ",
  "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រកុំព្យូទ័រ",
  "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រកុំព្យូទ័រ",
  "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រកុំព្យូទ័រ",
  "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រកុំព្យូទ័រ",
  "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រកុំព្យូទ័រ",
];

let teacherProfile = [
  "mainpfp.jpg",
  "mainpfp.jpg",
  "mainpfp.jpg",
  "mainpfp.jpg",
  "mainpfp.jpg",
  "mainpfp.jpg",
  "mainpfp.jpg",
  "mainpfp.jpg",
];

let teacherId = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < teacherId.length; i++) {
  let teacherData = `
    <div class="teacher-profile-item" id="teacher${teacherId[i]}">
      <img src="asset/author/${teacherProfile[i]}" alt="teacher-profile">
      <div class="teacher-profile-text">
        <h2>${teacherName[i]}</h2>
        <h3>${teacherState[i]}</h3>
      </div>
    </div>
  `;

  document.getElementById("teacher-profile").innerHTML += teacherData;
}

document.getElementById("teacher1").style.display = "block";
document.getElementById("teacher2").style.display = "block";
document.getElementById("teacher3").style.display = "block";
document.getElementById("teacher4").style.display = "block";
document.getElementById("teacher5").style.display = "none";
document.getElementById("teacher6").style.display = "none";
document.getElementById("teacher7").style.display = "none";
document.getElementById("teacher8").style.display = "none";

function backTeacher() {
  document.getElementById("teacher1").style.display = "block";
  document.getElementById("teacher2").style.display = "block";
  document.getElementById("teacher3").style.display = "block";
  document.getElementById("teacher4").style.display = "block";
  document.getElementById("teacher5").style.display = "none";
  document.getElementById("teacher6").style.display = "none";
  document.getElementById("teacher7").style.display = "none";
  document.getElementById("teacher8").style.display = "none";

  document.getElementById("nextTeacherBtn").innerHTML = "បន្ទាប់";
  document
    .getElementById("nextTeacherBtn")
    .removeEventListener("click", backTeacher);
  document
    .getElementById("nextTeacherBtn")
    .addEventListener("click", nextTeacher);
}

function nextTeacher() {
  document.getElementById("teacher1").style.display = "none";
  document.getElementById("teacher2").style.display = "none";
  document.getElementById("teacher3").style.display = "none";
  document.getElementById("teacher4").style.display = "none";
  document.getElementById("teacher5").style.display = "block";
  document.getElementById("teacher6").style.display = "block";
  document.getElementById("teacher7").style.display = "block";
  document.getElementById("teacher8").style.display = "block";

  document.getElementById("nextTeacherBtn").innerHTML = "ត្រឡប់";
  document
    .getElementById("nextTeacherBtn")
    .removeEventListener("click", nextTeacher);
  document
    .getElementById("nextTeacherBtn")
    .addEventListener("click", backTeacher);
}
