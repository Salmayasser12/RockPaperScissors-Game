# Rock Paper Scissors UI ✊✋✌️

A modern, responsive Rock–Paper–Scissors web application built with Angular 21. This single-page application provides an engaging user experience with configurable match settings, real-time gameplay, and comprehensive game history tracking.

🌐 **Live Demo:** [https://rps-game-ui.vercel.app/home](https://rps-game-ui.vercel.app/home)

## 📖 Overview
Rock Paper Scissors UI is a fully-featured implementation of the classic hand game, designed to showcase modern Angular development practices. The application emphasizes clean architecture, smooth navigation, and responsive design while maintaining simplicity and user-friendliness.

## ✨ Features
- **Configurable Match Settings** – Choose your preferred match format (Best of 3, 5, or 7)
- **Computer Opponent** – Play against an intelligent computer player
- **Real-Time Score Tracking** – Live updates of player and computer scores during gameplay
- **Round Results** – Clear visual indication of each round outcome (Player Win / Computer Win / Draw)
- **Game History** – Comprehensive history page displaying all played rounds
- **Game Management** – Restart matches and clear history with ease
- **Smooth Navigation** – Seamless client-side routing for optimal SPA experience
- **Responsive Design** – Card-based UI with gradient background, optimized for all screen sizes

## 🛠️ Tech Stack
- **Framework:** Angular 21 (Standalone Components)
- **Language:** TypeScript
- **Styling:** SCSS
- **Routing:** Angular Router
- **Deployment:** Vercel
- **Architecture Pattern:** Component-based with service layer

## 🏗️ Architecture
The application follows Angular best practices with a clear separation of concerns:

- **Standalone Components** – Modern Angular approach without NgModules
- **Centralized Routing** – Route configuration managed in `app.routes.ts`
- **Service Layer** – In-memory history management through Angular services
- **Page-Based Structure** – Logical separation between Home, Game, and History pages

## 📁 Project Structure

```
rock-paper-scissors-ui/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/           # Match configuration page
│   │   │   ├── game/           # Gameplay page
│   │   │   └── history/        # Game history page
│   │   ├── services/           # Angular services (game logic, history)
│   │   ├── app.routes.ts       # Route configuration
│   │   └── app.component.ts    # Root component
│   ├── styles.scss             # Global styles
│   └── index.html              # Entry HTML file
├── vercel.json                 # Vercel deployment configuration
├── angular.json                # Angular CLI configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

## 📄 Pages

### Home Page
The landing page where users configure their match settings:
- Select "Best Of" option (3, 5, or 7 rounds)
- Start a new game
- Clean, intuitive interface

### Game Page
The main gameplay interface featuring:
- Rock, Paper, Scissors selection buttons
- Real-time score display for both player and computer
- Round-by-round result indicators
- Visual feedback for game outcomes

### History Page
A comprehensive view of all played rounds:
- Complete record of past games
- Round-by-round breakdown
- Clear history functionality
- Navigation back to home

## 🚀 Getting Started
### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone <repository-url>
cd rock-paper-scissors-ui
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
ng serve
```

4. Open your browser and navigate to
```
http://localhost:4200
```

### Build for Production

```bash
ng build --configuration production
```
The build artifacts will be stored in the `dist/` directory.

## 🌐 Deployment
The application is deployed on Vercel with optimized SPA routing configuration.

### Vercel Configuration
The project includes a `vercel.json` file with rewrite rules to handle client-side routing:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This ensures all routes are properly handled by Angular Router in the production environment.


## 🔮 Future Improvements

Potential enhancements for future iterations:

- **Multiplayer Mode** – Add real-time multiplayer functionality using WebSockets
- **Animations** – Enhanced transitions and visual effects for game actions
- **Sound Effects** – Audio feedback for user interactions and game events
- **Difficulty Levels** – Multiple AI difficulty settings for varied gameplay
- **Statistics Dashboard** – Win/loss ratios, performance analytics, and charts
- **Persistent Storage** – Save game history using local storage or backend integration
- **Themes** – Multiple UI themes with dark mode support
- **Leaderboards** – Global or local leaderboards for competitive play

## 📄 License

This project is available for personal and educational use.

## 👤 Author
**Salma Yasser**
Built with Angular 21 and TypeScript.

---

**Rock Paper Scissors UI** – Classic game, modern implementation. 🎮
