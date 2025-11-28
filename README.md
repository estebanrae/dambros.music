# dambros - Music Landing Page

A clean and simple landing page for the dambros music group, featuring band information, social media links, gallery, and an about section.

## Features

- **Main Landing Page**: Band name, logo, social media links, photo gallery, and about section
- **Responsive Design**: Works on desktop and mobile devices
- **Simple & Clean**: Minimalist design focused on showcasing the artist

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build
```

## Project Structure

```
src/
├── pages/
│   ├── Home.jsx       # Main landing page
│   └── Stream.jsx     # Streaming services page
├── components/
│   └── MusicGame.jsx  # Music creation game
├── styles/
│   ├── Home.css       # Landing page styles
│   ├── MusicGame.css  # Game styles
│   └── Stream.css     # Streaming page styles
├── App.jsx            # Router configuration
└── main.jsx           # Entry point
```

## Adding Your Content

### Logo
1. Place your band logo as `public/logo.png`
2. The logo will automatically display in the header
3. Supported formats: PNG, JPG, SVG

### Gallery Images
1. Add your photos to `public/images/`
2. Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`
3. Or update the image paths in `src/pages/Home.jsx` to match your file names

### Social Media Links
Update the social media links in `src/pages/Home.jsx`:
- Replace the placeholder URLs with your actual social media profiles
- Add or remove social platforms as needed

### About Section
Edit the about section text in `src/pages/Home.jsx` to tell your story.

## Customization

- Update band name and tagline in `src/pages/Home.jsx`
- Modify social media links in `src/pages/Home.jsx`
- Change colors/styles in `src/styles/Home.css`
- Adjust gallery layout and spacing in the CSS

## Technologies

- React 18
- React Router DOM 6
- Vite
- Canvas API for visualizer

