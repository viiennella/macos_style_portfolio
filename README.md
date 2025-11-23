# 🍎 macOS Style Portfolio

![Project Banner](/public/images/wallpaper.png)

> A stunning, interactive portfolio website mimicking the macOS desktop environment. Built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **🖥️ Realistic Desktop Interface**: Experience a fully functional desktop with draggable windows, a dynamic dock, and a global menu bar.
- **📂 Finder File System**: Browse through "Work", "About", and "Resume" folders just like on a real Mac.
- **🧭 Safari Browser**: Read developer blog posts and view project previews in a mock browser window.
- **💻 Interactive Terminal**: Explore technical skills and run commands in a Zsh-style terminal.
- **📸 Photos Gallery**: View a curated collection of images in a beautiful grid layout.
- **🎨 Dynamic Theming**: Glassmorphism effects, smooth animations, and pixel-perfect design details.
- **📱 Fully Responsive**: Optimized for both desktop and mobile experiences.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [GSAP](https://greensock.com/gsap/) (Draggable, Flip)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) + [Immer](https://github.com/immerjs/immer)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

Follow these steps to get the project running locally on your machine.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/viiennella/macos_style_portfolio.git
   cd macos_style_portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**

   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open in Browser**
   Visit [http://localhost:3000](http://localhost:3000) to see your new portfolio!

## 📂 Project Structure

```
├── app/                  # Next.js App Router pages
├── components/           # Reusable UI components (Dock, MenuBar, etc.)
├── constants/            # Static data and configuration
├── hoc/                  # Higher-Order Components (WindowWrapper)
├── store/                # Zustand state management
├── windows/              # Application window components (Safari, Terminal, etc.)
└── public/               # Static assets (images, icons)
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/viiennella">Viiennella</a>
</p>
