# Jakra E-Learning Platform (ចក្រា)

A modern, responsive e-learning platform frontend built with HTML, CSS, and Vanilla JavaScript. It is designed to provide students with accessible online education, featuring a clean, responsive user interface that supports the Khmer language natively. 

## 🎯 Feature Functions

*   **Course Discovery & Filtering**: Students can easily browse and search for specific courses. The platform includes a sidebar to filter courses by category (Mathematics, Physics, Technology, Health, Business, General Knowledge, and Design) and pricing (Free/Paid).
*   **Comprehensive Course Details**: Detailed course landing pages that beautifully display the course description, curriculum modules, teacher profiles, course duration, enrollment counts, and interactive student feedback/ratings bars.
*   **Interactive Enrollment**: A functional frontend shopping cart and enrollment page with cost calculations displaying subtotals, discounts, and processing fees.
*   **Multiple Payment Methods UI**: Dedicated UI sections for checking out via traditional **VISA Cards** as well as local digital payment solutions like **ACLEDA KHQR**.
*   **Responsive & Modular Design**: The platform is fully responsive across desktop and mobile devices. The CSS is highly modular, utilizing CSS variables (custom properties) for theming, making it highly maintainable and visually consistent.
*   **Enhanced Element Workflows**: Layout optimizations on actionable items like selections, list elements, and enrollment components, ensuring robust rendering across pages.

## 🚀 Future Uses & Enhancements

*   **Backend Integration**: The current static frontend is perfectly structured to merge with a powerful backend service (such as Node.js, Python/Django, or PHP/Laravel) to handle real user authentication, database management, and active payment gateway processing.
*   **Personalized Student Dashboard**: Adding a dashboard where students can track their current progress, view enrolled courses, take quizzes, and earn digital certificates.
*   **Instructor Portal**: Developing a dedicated portal where teachers can create courses, upload video materials, grade assignments, and interact directly with students.
*   **Live Video Integration**: Embedding reliable video streaming services or integrating WebRTC for live virtual classrooms and webinars.
*   **Gamification**: Introducing reward points, badges, and learning streaks to keep students engaged and motivated to finish their courses.
*   **Localization (L10n)**: Expanding the platform's multi-lingual support to seamlessly toggle between Khmer, English, and other regional languages to reach a broader audience. 

## 💻 Tech Stack
*   **HTML5**
*   **CSS3** (Custom Properties, Flexbox, Grid)
*   **Vanilla JavaScript** (with **jQuery** integration)
*   **FontAwesome** (Icons)
*   **Google Fonts** (Bayon, Inter)

## 📂 Project Structure
*   `src/`: Contains the main HTML pages (`allcourse.html`, `course_details.html`, `course_enrollment.html`).
*   `style/`: Modular CSS files assigned to specific structural views, alongside a global `style.css` for shared components.
*   `script/`: Functional JavaScript files used to handle interactive UI states.
*   `asset/`: Static assets, images, and SVGs used throughout the platform.
*   `index.html`: The main landing page.