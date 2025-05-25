# Finance App

A React-based finance application built with TypeScript and Vite.

## Features

- User registration and login
- Form validation using `react-hook-form`
- Modular and reusable components (e.g., `Checkbox`)
- Navigation using `react-router-dom`
- API integration for user management
- Built with Vite for fast development and optimized builds

## Project Structure

```bash
src
├── assets
│   └── logo.svg
├── components
│   ├── Auth
│   │   ├── Login.tsx
│   │   └── Register.tsx
│   ├── Common
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   └── Dashboard
│       ├── Overview.tsx
│       └── Reports.tsx
├── hooks
│   ├── useAuth.ts
│   └── useForm.ts
├── layouts
│   ├── AuthLayout.tsx
│   └── MainLayout.tsx
├── pages
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Home.tsx
│   └── NotFound.tsx
├── services
│   ├── api.ts
│   └── auth.ts
├── styles
│   ├── globals.css
│   └── variables.css
├── types
│   ├── auth.d.ts
│   └── user.d.ts
├── utils
│   ├── constants.ts
│   └── helpers.ts
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd finance-app
npm install
```

## Development

For development, run the following command:

```bash
npm run dev
```

This will start the Vite development server, and you can view the app in your browser at `http://localhost:3000`.

## Building for Production

To build the app for production, run:

```bash
npm run build
```

This will create an optimized build of your app in the `dist` directory.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that compiles to clean JavaScript output
- [Vite](https://vitejs.dev/) - A fast build tool and development server
- [react-hook-form](https://react-hook-form.com/) - A performant, flexible, and extensible form library for React
- [react-router-dom](https://reactrouter.com/) - Declarative routing for React.js
- [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) - React-specific lint rules
- [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) - React DOM-specific lint rules
