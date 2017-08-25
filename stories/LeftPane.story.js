import React from 'react'
import { storiesOf } from '@storybook/react';
import LeftPane from '../src/LeftPane';
import TopPane from '../src/TopPane';
import BottomPane from '../src/BottomPane';

storiesOf('LeftPane', module)
    .addDecorator(getStory => (
        <div style={{display: 'flex', width: '875px', height: '800px'}}>
            {getStory()}
        </div>
    ))
    .add('left pane', () => (
        <LeftPane>
            <TopPane />
            <BottomPane />
        </LeftPane>
    ))
