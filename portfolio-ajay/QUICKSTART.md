# Quick Start Guide

## Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd portfolio-ajay
npm install
```

### Step 2: Run the Application

**Option A: Frontend Only (for testing)**
```bash
npm run dev
```
Visit: http://localhost:3000

**Option B: Full Stack (Frontend + Backend)**

Open two terminal windows:

Terminal 1:
```bash
npm run dev
```

Terminal 2:
```bash
npm run server
```

### Step 3: Customize Your Content

#### Update Personal Info
1. Open `src/components/Hero.jsx` - Update name, role, social links
2. Open `src/components/About.jsx` - Update bio
3. Open `src/components/Contact.jsx` - Update email, phone, location

#### Add Your Skills
Open `src/components/Skills.jsx` and edit the `skillCategories` array

#### Add Your Experience
Open `src/components/Experience.jsx` and edit the `experiences` array

#### Add Your Projects
Open `src/components/Projects.jsx` and edit the `projects` array

#### Change Colors (Optional)
Open `src/index.css` and modify CSS variables at the top

#### Add Your CV
Place your CV at: `public/assets/cv/Ajay_Jaiswar_CV.pdf`

## Email Configuration (For Contact Form)

To enable the contact form:

1. Open `server/index.js`
2. Update email configuration:
```javascript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
})
```

3. For Gmail App Password:
   - Go to Google Account → Security
   - Enable 2-Step Verification
   - Generate App Password for "Mail"
   - Use that password in the config

## Common Issues

### Port Already in Use
If port 3000 or 5000 is busy, edit:
- Frontend: `vite.config.js` → change port
- Backend: `server/index.js` → change PORT

### Contact Form Not Working
- Make sure backend server is running
- Check email configuration in `server/index.js`
- Check browser console for errors

### Animations Not Smooth
- Reduce particle count in `BackgroundAnimations.jsx`
- Disable some animations on mobile

## Build for Production

```bash
npm run build
npm run preview
```

The `dist` folder contains your production-ready files.

## Need Help?

Check the full README.md for detailed documentation.

---

Happy coding! 🚀
