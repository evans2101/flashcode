# 🚀 FlashCode by Evans Moris

## 📌 Overview
This project is built using **Next.js** with App Router and follows a modular architecture to maintain scalability and readability. It includes various sections such as Hero, Testimonials, Features, and Contact, along with reusable UI components.

## 🛠️ Tech Stack
- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Zustand** (State Management)

## 📂 Project Structure
```
src/
│── app/                  # Next.js App Router
│── assets/               # Static assets (images, icons, etc.)
│── components/           # Reusable components
│   ├── forms/            # Form elements
│   ├── layouts/          # Layout components (Header, Footer)
│   ├── ui/               # UI components (Cards, Modals, etc.)
│── hooks/                # Custom hooks (State management, API calls)
│── sections/             # Page sections (Hero, Features, etc.)
│── styles/               # Global styles (Tailwind CSS config, etc.)
│── utils/                # Utility functions
│── layout.tsx            # Main layout file
│── page.tsx              # Main entry point
```

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/webprogramminghack/eval-evans.git
cd your-repo
```

### 2️⃣ Install Dependencies
```sh
yarn install
# or
npm install
```

### 3️⃣ Run the Development Server
```sh
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Dependencies
- **Next.js**: Server-side rendering and static generation
- **Tailwind CSS**: Styling framework
- **Zustand**: Lightweight state management
- **Framer Motion**: Animations

## 🚧 Challenges & Solutions
### 🏗️ Component Reusability
**Challenge:** Maintaining a scalable component architecture.
**Solution:** Used modular **UI components** and **section-based structure**.

### 🌐 Performance Optimization
**Challenge:** Optimizing images and reducing render reflows.
**Solution:** Used Next.js **Image component** and **lazy loading**.

### 🎯 State Management
**Challenge:** Handling global state efficiently without Redux.
**Solution:** Used **Zustand** for lightweight and performant state management.

## ✅ Contributing
1. Fork the repo
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature-name`)
5. Create a Pull Request

## 📜 License
This project is licensed under the MIT License.

