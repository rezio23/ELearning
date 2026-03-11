# Jakra E-Learning Platform (ចក្រា)

A premium, responsive e-learning platform frontend meticulously crafted with HTML5, CSS3, and Vanilla JavaScript. Jakra is designed to provide students with a seamless online education experience, featuring a sophisticated UI that honors the Khmer language and culture while maintaining modern web standards.

## 🌟 Key Features

### 1. **Intuitive Discovery & Navigation**

* **Hero Landing Page**: A striking welcome experience with clear CTAs and featured categories.
* **Advanced Filtering**: Browse courses by category (Technology, Design, Business, etc.) and filter by price (Free/Paid) in a sleek sidebar.
* **Dynamic Data Rendering**: Courses are dynamically populated from JavaScript data structures (`allcourse.js`), allowing for easy content scalability.

### 2. **Immersive Learning Experience**

* **Dynamic Course Player**: A dedicated interface for video lessons (`course_play.html`) featuring a curriculum sidebar for easy lesson switching.
* **Student Dashboard**: A centralized hub (`student_dashboard.html`) for learners to track their enrolled courses, progress, and daily notices.
* **Rich Course Details**: Comprehensive pages showcasing curriculum modules, instructor bios, student testimonials, and interactive rating visualizations.
* **Native Khmer Support**: Full integration of Khmer typography (Bayon) and localized content for a culturally relevant experience.

### 3. **Streamlined Enrollment & Checkout**

* **Interactive Shopping Cart**: Frontend logic for cost calculation, including subtotals, discounts, and fees.
* **Modern Payment UI**: Dedicated checkout flows for **VISA/MasterCard** and local **ACLEDA KHQR** digital payments.
* **Responsive Layout**: Optimized for smooth enrollment on any device, from smartphones to desktops.

### 4. **Secure Authentication Flow**

* **Interactive Login Page**: A dedicated, beautifully designed login interface (`login.html`) that simulates access to the student dashboard.
* **Client-side Validation**: Employs SweetAlert2 to provide visual feedback for credential validation (e.g., success animations and error alerts).
* **Intuitive Navigation**: Seamless redirection flow that correctly points all "Login" actions across the platform to the centralized login page.

### 5. **Modern Technical Architecture**

* **Centralized Design System**: Utilizes `variables.css` for unified tokens (colors, typography, spacing).
* **Component-Based Styling**: Scoped CSS for each view (e.g., `landing.css`, `course_play.css`) ensures high maintainability.
* **Efficient UI Logic**: Highly interactive elements powered by Vanilla JS and jQuery for smooth, low-latency performance.
* **Telegram Bot Integration**: A functional contact form (`studyoncampuss.html`) that messages inquiries directly to admin via Telegram Bot API.

---

## 🤖 Telegram Bot Integration Message Definition

One of the project's standout features is its automated contact system using the **Telegram Bot API**. When a user fills out the contact form on `studyoncampuss.html` ("Study On Campus" section), the submission is processed and sent directly to a configured Telegram chat using a beautifully formatted HTML message template.

Here is the exact message structure sent to the Telegram bot upon a successful inquiry:

```text
🎓 New Inquiry from Jakra E-Learning 🎓

👤 Name: {User's Name}
📧 Email: {User's Email}
📝 Subject: {Subject entered by user | "មិនមាន (None)"}

💬 Message:
{User's Message Content}
```

**How to Configure:**
Update `script/config.js` with your specific Telegram bot token and chat ID to receive the messages:
```javascript
const config = {
    botToken: "YOUR_BOT_TOKEN",
    chatId: "YOUR_CHAT_ID"
};
```

---

## 💻 Tech Stack & Resources

* **Logic**: Vanilla JavaScript & jQuery 3.x.
* **Styling**: CSS3 (Custom Properties, Flexbox, Grid).
* **Typography**: [Bayon](https://fonts.google.com/specimen/Bayon) & [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts.
* **Iconography**: Bootstrap Icons & FontAwesome 6.
* **Design**: Responsive, Mobile-First Approach.

## 📂 Project Structure

```text
├── index.html                 # Main Landing Page
├── jquery.js                  # jQuery Library
├── note.txt                   # Developer Resources & Links
├── svgUsage.txt               # Instructions on SVG Icon Customization
├── src/                       # Application HTML Pages
│   ├── allcourse.html         # Course Discovery & Filtering
│   ├── course_details.html    # Detailed Course Information
│   ├── course_enrollment.html # Checkout & Payment Processing
│   ├── course_play.html       # Video Learning Interface
│   ├── login.html             # User Authentication Interface
│   ├── student_dashboard.html # Centralized Student Portal
│   └── studyoncampuss.html    # Contact Form & Campus Information
├── style/                     # Modular CSS Files
│   ├── variables.css          # Design System Tokens (Colors, Fonts)
│   ├── style.css              # Shared Global Styles
│   ├── landing.css            # Styles for Landing Page
│   ├── allcourse.css          # Styles for Courses Page
│   ├── course_enrollment.css  # Styles for Checkout & Payment
│   ├── course_play.css        # Styles for Course Video Player
│   ├── coursedetail.css       # Styles for Course Details
│   ├── login.css              # Styles for Login Interface
│   ├── student_dashboard.css  # Styles for Dashboard UI
│   └── studyoncampus.css      # Styles for Contact Flow
├── script/                    # UI Logic & Data Handling
│   ├── config.js              # Credentials (e.g. Telegram Bot Tokens)
│   ├── main.js                # Shared DOM functionality
│   ├── landing.js             # Hero/Landing dynamic animations
│   ├── allcourse.js           # Course Inventory Data & Filter Logic
│   ├── course_enrollment.js   # Cart and Validation logic
│   ├── course_play.js         # Video Player & Sidebar interactions
│   ├── coursedetail.js        # Expandable/Collapsible detail nodes
│   ├── login.js               # Authentication & Credential Validation
│   ├── student_dashboard.js   # Student Dashboard behaviors
│   └── studyoncampus.js       # Telegram API Integration Logic
└── asset/                     # Brand Assets, Images, and SVGs
```

## 🚀 Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/jakracode/eLearning_project.git
   ```
2. **Launch the Platform**:
   Open `index.html` in any modern web browser. No complex build step or local server is strictly required for testing.
3. **Themes & Branding**:
   Modify primary colors and spacing globally in `style/variables.css`.

## 🛠 Developer Guide

### SVG Implementation & Coloring

To maintain a consistent look while using SVGs, we use a masking technique that allows for dynamic color changes via CSS. Checkout `svgUsage.txt` for more specifics.

**Example Usage**:

```css
.icon {
  width: 28px;
  height: 28px;
  background-color: var(--primary-color);
  -webkit-mask: url('../asset/svg/icon.svg') no-repeat center/contain;
  mask: url('../asset/svg/icon.svg') no-repeat center/contain;
}
```

## 📈 Future Roadmap

- [ ] **Full-stack Integration**: Connecting to a Node.js/Python backend for user persistence.
- [ ] **Interactive Quizzes**: Post-lesson assessments with real-time feedback.
- [ ] **Instructor Dashboard**: Tools for content management and student communications.
- [ ] **Light/Dark Mode**: Enhanced accessibility options.

---

*Developed with Passion by the Jakra.*
