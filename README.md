# Pocket Monsters App

Pocket Monsters App is a React application that uses TypeScript for static typing and Tailwind CSS for styling. The app is built around reusable components and focuses on a filter system and displaying details of Pokémon, including their evolutions.

## Features

- **Pokémon Visualization:** Displays a list of Pokémon with their images and types.
- **Type Filtering:** Allows filtering the list of Pokémon based on their types.
- **Evolution Details:** Shows information about the Pokémon evolution chain.
- **Loading and Errors:** Displays loading states and error messages when needed.
- **Responsive Design:** The interface is responsive and adapts to different screen sizes.

## Project Structure

- **`src/components`**: Contains reusable components such as `MonsterCard`, `FilterSection`, and `MonsterList`.
- **`src/templates`**: Contains page templates like `ProductOverviewTemplate`, which organizes the page layout.
- **`src/pages`**: Contains main pages of the application, such as `ProductOverviewPage`.
- **`src/types.ts`**: Defines interfaces and types used in the project, including types for Pokémon and their evolution chains.
- **`src/stories`**: Contains Storybook stories for visualizing and testing components in different states.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/pocket-monsters-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd pocket-monsters-app
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

## Development

For linting and type checking, use the following commands:

- **Linting**:
    ```bash
    npm run lint
    ```

- **Type Checking**:
    ```bash
    npm run type-check
    ```

## Storybook

To run Storybook for component development and testing, use:

```bash
npm run storybook
