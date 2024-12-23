import React from 'react';
import {Meta, StoryObj} from '@storybook/react'
import Button from '@/Components/ui/Button'


import {ComponentProps} from 'react'

type StoryProps = ComponentProps<typeof Button>


const meta: Meta<StoryProps> = {
    component: Button,
    title: 'Components/Button',
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: {
                type: 'select'
            }
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'select'
            }
        }
    }
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Button'
    },
    render: (args) => {
        return <Button
          onClick={(e) => e.preventDefault()} // Disable navigation

            {...args} />
    }

}

export const White: Story = {
    args: {
        variant: 'white',
        size: 'md',
        children: 'Button'
    },
      parameters: {
    backgrounds: { default: 'dark' },
  },

    render: (args) => {
        return  <Button
          onClick={(e) => e.preventDefault()} // Disable navigation
            {...args} />
    }

}



export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'md',
        children: 'Button'
    },
    render: (args) => {
        return <Button
          onClick={(e) => e.preventDefault()} // Disable navigation

            {...args} />
    }

}

export const SmallButton: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        children: 'Button'
    },
    render: (args) => {
        return <Button
          onClick={(e) => e.preventDefault()} // Disable navigation

            {...args} />
    }

}

export const MediumButton: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Button'
    },
    render: (args) => {
        return <Button
          onClick={(e) => e.preventDefault()} // Disable navigation

            {...args} />
    }

}

export const LargeButton: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
        children: 'Button'
    },
    render: (args) => {
        return <Button
          onClick={(e) => e.preventDefault()} // Disable navigation

            {...args} />
    }

}
