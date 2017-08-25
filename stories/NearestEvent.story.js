import React from 'react'
import { storiesOf } from '@storybook/react';
import { FirstNearestEvent, SecondNearestEvent } from '../src/NearestEvent';

storiesOf('NearestEvent', module)
    .addDecorator(getStory => (
        <div style={{width: '771px', height: '280px', backgroundColor: '#4c57d0', padding: '27px'}}>
            {getStory()}
        </div>
    ))
    .add('first nearest', () => <FirstNearestEvent summary='Beta meeting' />)
    .add('second nearest', () => <SecondNearestEvent summary='Timeular meeting' />);
