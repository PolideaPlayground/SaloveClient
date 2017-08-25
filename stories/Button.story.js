import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/Button';

storiesOf('Button', module)
    .add('Reserve now', () => <Button onClick={action('clicked')}>Reserve now</Button>)
