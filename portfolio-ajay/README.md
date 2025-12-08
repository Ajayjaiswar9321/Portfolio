# Ajay Jaiswar - Portfolio Website

A premium portfolio website built with React.js and Node.js featuring cosmic purple theme, stunning animations, and 3D elements.

## Features

- 🎨 Premium Cosmic Purple Design
- ✨ Multiple Background Animations (Particles, Gradient Blobs, Mouse Glow)
- 🎲 Interactive 3D Cube in Hero Section
- 📱 Fully Responsive Design
- 🎬 Smooth Scroll Animations (AOS)
- 📧 Working Contact Form with Backend
- ⚡ Fast Performance
- ♿ Accessibility Features

## Tech Stack

### Frontend
- React.js 18
- Vite (Build Tool)
- AOS (Animate On Scroll)
- CSS3 with Custom Properties

### Backend
- Node.js
- Express.js
- Nodemailer (Email Service)
- CORS

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Install Dependencies**
```bash
cd portfolio-ajay
npm install
```

2. **Configure Email Service (Backend)**

Edit `server/index.js` and update the email configuration:

```javascript
const transporter = nodemailer.createTransport({
  service: 'gmail', // Your email service
  auth: {
    user: 'your-email@gmail.com', // Your email
    pass: 'your-app-password' // Your app password
  }
})
```

**Note:** For Gmail, you need to generate an App Password:
- Go to Google Account Settings
- Security → 2-Step Verification → App Passwords
- Generate a new app password for "Mail"

3. **Add Your CV**

Place your CV file at: `public/assets/cv/Ajay_Jaiswar_CV.pdf`

4. **Add Project Images (Optional)**

Place project images at:
- `public/assets/images/project-foodtaxi.webp`
- `public/assets/images/project-clicker.webp`

## Running the Application

### Development Mode

**Terminal 1 - Frontend:**
```bash
npm run dev
```
Frontend will run on: http://localhost:3000

**Terminal 2 - Backend:**
```bash
npm run server
```
Backend will run on: http://localhost:5000

### Production Build

```bash
npm run build
npm run preview
```

## Customization Guide

### 1. Personal Information

Edit the following files to update your information:

**Hero Section** (`src/components/Hero.jsx`):
- Name, role, description
- Social media links

**About Section** (`src/components/About.jsx`):
- Bio text
- Experience years

**Contact Section** (`src/components/Contact.jsx`):
- Email, phone, location

### 2. Colors

All colors are defined in `src/index.css` using CSS variables:

```css
:root {
  --accent-primary: #9333ea;    /* Change main purple */
  --accent-secondary: #ec4899;  /* Change pink accent */
  /* ... more colors */
}
```

### 3. Skills

Edit `src/components/Skills.jsx` to add/remove skills:

```javascript
const skillCategories = [
  {
    title: 'Your Category',
    skills: ['Skill 1', 'Skill 2', ...]
  }
]
```

### 4. Experience

Edit `src/components/Experience.jsx` to update work history:

```javascript
const experiences = [
  {
    title: 'Job Title',
    company: 'Company Name',
    duration: 'Start - End',
    points: ['Achievement 1', 'Achievement 2']
  }
]
```

### 5. Projects

Edit `src/components/Projects.jsx` to add/update projects:

```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Description',
    tech: ['Tech1', 'Tech2'],
    liveLink: 'https://...',
    githubLink: 'https://...'
  }
]
```

## Project Structure

```
portfolio-ajay/
├── public/
│   └── assets/
│       ├── images/          # Project images
│       └── cv/              # CV file
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── BackgroundAnimations.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server/
│   └── index.js             # Backend server
├── package.json
└── vite.config.js
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Images are lazy-loaded
- Animations use hardware acceleration
- Reduced motion support for accessibility
- Optimized particle count for mobile devices

## Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Backend (Heroku/Railway)
1. Deploy the `server` folder
2. Update the API endpoint in `Contact.jsx`

## License

© 2025 Ajay Jaiswar. All rights reserved.

## Contact

- Email: ajayjaiswar6340@gmail.com
- Phone: +91 9321446340
- Location: Mumbai, India

---

Built with ❤️ using React.js and Node.js
