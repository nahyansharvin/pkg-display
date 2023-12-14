import type { Meta, StoryObj } from '@storybook/react';

import Display from './Display';

const meta = {
  title: 'Katzion/Display',
  component: Display,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Display>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
