export default {
  title: `Composition/Cards`,
  decorators: [],
  parameters: {
    backgrounds: {
      default: 'light',
    }
  }
}

import template from './cards.hbs';

export const Default = () => template();
