import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import type { Preview } from '@storybook/react';
import '../src/App.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <Router><Story /></Router>
    )
  ],
};

export default preview;