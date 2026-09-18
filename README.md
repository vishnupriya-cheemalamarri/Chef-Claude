```markdown
# 👨‍🍳 Chef Claude

Chef Claude is a React-based recipe generator that suggests recipes based on the ingredients available to the user. The application uses the Groq API to generate recipes and renders the response as formatted Markdown.

This project was built to strengthen my understanding of React fundamentals and API integration while building a practical application from scratch.

## ✨ Features

- Add ingredients through a form
- Display the available ingredients
- Generate AI-powered recipe recommendations
- Render formatted recipe content using Markdown
- Support GitHub-Flavored Markdown tables
- Conditionally display the generated recipe
- Styled recipe interface
- Ingredient-based recipe generation

## 🛠️ Tech Stack

- **React**
- **JavaScript**
- **Vite**
- **Groq API**
- **React Markdown**
- **Remark GFM**
- **CSS**

## 🧠 Concepts Practiced

- React components
- Props and prop passing
- `useState`
- Event handling
- Form handling
- `FormData`
- Conditional rendering
- Array `.map()`
- Async/Await
- API integration
- Environment variables
- Third-party packages
- Markdown rendering
- Git and GitHub

## 📂 Project Structure

```text
src/
├── assets/
│   └── chef.jpeg
├── components/
│   ├── Header.jsx
│   ├── Main.jsx
│   ├── IngredientsList.jsx
│   └── ClaudeRecipe.jsx
├── ai.js
├── App.jsx
├── index.jsx
└── index.css
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the Groq API

Create a `.env` file in the project root:

```env
VITE_GROQ_API_KEY=your_api_key_here
```

Make sure `.env` is included in `.gitignore`:

```gitignore
.env
.env.local
```

**Never commit your API key to GitHub.**

### 4. Start the development server

```bash
npm run dev
```

## 🔄 How It Works

```text
User adds ingredients
        ↓
React stores ingredients in state
        ↓
User clicks "Get a recipe"
        ↓
Groq API receives the ingredients
        ↓
AI generates a recipe in Markdown
        ↓
React Markdown renders the response
        ↓
Recipe is displayed in the application
```

## 🔐 Security Note

The current implementation calls the Groq API directly from the browser using the Vite environment variable and `dangerouslyAllowBrowser`.

This approach is being used for learning purposes.

For a production application, the Groq API request should be moved to a backend or server-side API route so that the API key remains private.

## 🌱 Future Improvements

- Add loading states while generating recipes
- Add error handling for failed API requests
- Allow users to remove ingredients
- Add recipe regeneration
- Add favorite recipes
- Store saved recipes
- Improve mobile responsiveness
- Move the AI API request to a secure backend

## 👩‍💻 Author

**Vishnupriya Cheemalamarri**

B.Tech Computer Science and Engineering  
VIT Chennai
```