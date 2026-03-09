# Jakra E-Learning Platform (ចក្រា)

A premium, responsive e-learning platform frontend meticulously crafted with HTML5, CSS3, and Vanilla JavaScript. Jakra is designed to provide students with a seamless online education experience, featuring a sophisticated UI that honors the Khmer language and culture while maintaining modern web standards.

## 🌟 Key Features

### 1. **Intuitive Discovery & Navigation**

* **Hero Landing Page**: A striking welcome experience with clear CTAs and featured categories.
* **Advanced Filtering**: Browse courses by category (Technology, Design, Business, etc.) and filter by price (Free/Paid) in a sleek sidebar.
* **Dynamic Data Rendering**: Courses are dynamically populated from JavaScript data structures, allowing for easy content scalability.

### 2. **Immersive Learning Experience**

* **Dynamic Course Player**: A dedicated interface for video lessons (`course_play.html`) featuring a curriculum sidebar for easy lesson switching.
* **Rich Course Details**: Comprehensive pages showcasing curriculum modules, instructor bios, student testimonials, and interactive rating visualizations.
* **Native Khmer Support**: Full integration of Khmer typography (Bayon) and localized content for a culturally relevant experience.

### 3. **Streamlined Enrollment & Checkout**

* **Interactive Shopping Cart**: Frontend logic for cost calculation, including subtotals, discounts, and fees.
* **Modern Payment UI**: Dedicated checkout flows for **VISA/MasterCard** and local **ACLEDA KHQR** digital payments.
* **Responsive Layout**: Optimized for smooth enrollment on any device, from smartphones to desktops.

### 4. **Modern Technical Architecture**

* **Centralized Design System**: Utilizes `variables.css` for unified tokens (colors, typography, spacing).
* **Component-Based Styling**: Scoped CSS for each view (e.g., `landing.css`, `course_play.css`) ensures high maintainability.
* **Efficient UI Logic**: Highly interactive elements powered by Vanilla JS and jQuery for smooth, low-latency performance.

---

## 💻 Tech Stack & Resources

* **Logic**: Vanilla JavaScript & jQuery 3.x.
* **Styling**: CSS3 (Custom Properties, Flexbox, Grid).
* **Typography**: [Bayon](https://fonts.google.com/specimen/Bayon) & [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts.
* **Iconography**: Bootstrap Icons & FontAwesome 6.
* **Design**: Responsive, Mobile-First Approach.

## 📂 Project Structure

```text
├── index.html              # Main Landing Page
├── src/                    # Application Pages
│   ├── allcourse.html      # Course Discovery & Filtering
│   ├── course_details.html # Detailed Course Information
│   ├── course_enrollment.html # Checkout & Payment Processing
│   ├── course_play.html    # Video Learning Interface
│   └── studyoncampuss.html # University & Campus Info
├── style/                  # Modular CSS Files
│   ├── variables.css      # Design System Tokens (Colors, Fonts)
│   ├── style.css          # Shared Page Components
│   └── [page].css         # Page-specific Styling
├── script/                 # UI Logic & Data Handling
├── asset/                  # Brand Assets, Images, and SVGs
└── note.txt                # Developer Resources & Links
```

## 🚀 Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/eLearning_platform.git
   ```
2. **Launch the Platform**:
   Open `index.html` in any modern web browser. No complex build step or server is required for this frontend demonstration.
3. **Themes & Branding**:
   Modify primary colors and spacing globally in `style/variables.css`.

## 🛠 Developer Guide

### SVG Implementation & Coloring

To maintain a consistent look while using SVGs, we use a masking technique that allows for dynamic color changes via CSS.

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

### Key Scripts

- `script/allcourse.js`: Handles dynamic course inventory and category filtering.
- `script/landing.js`: Controls landing page animations and navigation states.

## 📈 Future Roadmap

- [ ] **Full-stack Integration**: Connecting to a Node.js/Python backend for user persistence.
- [ ] **Interactive Quizzes**: Post-lesson assessments with real-time feedback.
- [ ] **Instructor Dashboard**: Tools for content management and student communications.
- [ ] **Light/Dark Mode**: Enhanced accessibility options.

---

*Developed with Passion by the Jakra.*
