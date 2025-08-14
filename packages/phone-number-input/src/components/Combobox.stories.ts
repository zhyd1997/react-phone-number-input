import type { Meta, StoryObj } from '@storybook/react-vite';

import { Combobox } from './Combobox';

const meta = {
  title: 'Core/Combobox',
  component: Combobox,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
