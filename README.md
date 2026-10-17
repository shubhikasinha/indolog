# React + Vite

## Contact form email delivery

The Contact form sends through EmailJS. Configure these variables in a local
`.env` file and in the production hosting environment:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Set the EmailJS template's **To Email** field to `{{to_email}}` and its
**Reply To** field to `{{from_email}}`. The form supplies `to_email` as
`nikhil@indologindia.com`. Its template should use the form fields
`from_name`, `from_email`, `phone`, `company`, `service`, `origin`,
`destination`, `industry`, and `message`. The page shows success only after
EmailJS accepts the send request.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
