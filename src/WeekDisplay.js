import React, { Component } from 'react';
import DayOfTheWeek from './DayOfTheWeek'

class WeekDisplay extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><DayOfTheWeek></DayOfTheWeek></li>
                </ul>
            </div>
        )
    }
}

export default WeekDisplay