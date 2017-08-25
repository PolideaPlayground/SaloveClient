/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react';
import '../src/index.css'

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
