import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Logo from '../src/Logo';
import SubHeader from '../src/SubHeader';

import { Button, Welcome } from '@storybook/react/demo';

import TodayHeader from '../src/TodayHeader';
import './NearestEvent.story'
import './LeftPane.story'
import './TopPane.story'
import './BottomPane.story'
import './Button.story'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Logo', module).add('salove', () => <Logo />);

storiesOf('TodayHeader', module)
  .add('with some day', () => <TodayHeader dayOfTheWeek='Friday' dayOfTheMonth='25' month='8'></TodayHeader>)
  .add('without parameters', () => <TodayHeader></TodayHeader>)

  storiesOf('Subheader', module)
    .addDecorator(getStory => (
        <div style={{width: '771px', height: '280px', backgroundColor: '#4c57d0', padding: '27px'}}>
            {getStory()}
        </div>
    ))
    .add('subheader', () => <SubHeader>The nearest events:</SubHeader>);
