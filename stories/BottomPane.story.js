import React from 'react'
import { storiesOf } from '@storybook/react';
import BottomPane from '../src/BottomPane';

const reservations = [
    {roomId: 1, start:  1503684141000, end: 1503687600000, summary: 'Beta'},
    {roomId: 2, start:  1503684141000, end: 1503687600000, summary: 'Timeular'}
]

storiesOf('BottomPane', module)
    .add('first nearest', () => <BottomPane reservations={reservations}/>)
