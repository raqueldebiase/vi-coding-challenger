# Pocket Monsters App

Pocket Monsters App is a React application that uses TypeScript for static typing and Tailwind CSS for styling. The app is built around reusable components and focuses on a filter system and displaying details of Pokémon, including their evolutions.

Features: 
Pokémon Visualization: Displays a list of Pokémon with their images and types.
Type Filtering: Allows filtering the list of Pokémon based on their types.
Evolution Details: Shows information about the Pokémon evolution chain.
Loading and Errors: Displays loading states and error messages when needed.
Responsive Design: The interface is responsive and adapts to different screen sizes.

Project Structure: 
src/components: Contains reusable components such as MonsterCard, FilterSection, and MonsterList.
src/templates: Contains page templates like ProductOverviewTemplate, which organizes the page layout.
src/pages: Contains main pages of the application, such as ProductOverviewPage.
src/types.ts: Defines interfaces and types used in the project, including types for Pokémon and their evolution chains.
src/stories: Contains Storybook stories for visualizing and testing components in different states.

Setup and Running
Install Dependencies

To install the project dependencies, run:

bash
Copiar código
npm install
Start the Application

To start the development server, run:

bash
Copiar código
npm start
The application will be available at http://localhost:3000.

Run Tests

To run tests, execute:

bash
Copiar código
npm test
Run Storybook

To start Storybook and view the components, run:

bash
Copiar código
npm run storybook
Tailwind CSS Setup
The project uses Tailwind CSS for styling. Configurations can be found in tailwind.config.js and postcss.config.js. Ensure that Tailwind CSS is set up correctly to apply styles as expected.

ESLint Configuration
If you are developing a production application, it is recommended to update the ESLint configuration to enable type-aware linting rules:

Configure the parserOptions property in the .eslintrc.js file:

js
Copiar código
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
Replace plugin:@typescript-eslint/recommended with plugin:@typescript-eslint/recommended-type-checked or plugin:@typescript-eslint/strict-type-checked.

Optionally, add plugin:@typescript-eslint/stylistic-type-checked.

Install eslint-plugin-react and add plugin:react/recommended and plugin:react/jsx-runtime to the extends list.

Contributing
Fork the repository.
Create a branch for your modification (git checkout -b my-new-feature).
Commit your changes (git commit -am 'Add new feature').
Push to the remote repository (git push origin my-new-feature).
Open a Pull Request.
License
This project is licensed under the MIT License.
