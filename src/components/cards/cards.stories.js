export default {
  title: `Component/Cards`,
  decorators: [],
  parameters: {
    backgrounds: {
      default: 'light',
    }
  }
}

import template from './cards.hbs';

export const Default = () => template();
