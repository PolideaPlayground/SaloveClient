import React, { Component } from 'react';
import TodayHeader from './TodayHeader'

class Calendar extends Component {
    render() {
        return (
            <div>
                <TodayHeader/>
                <WeekDisplay/>
            </div>
        )
    }

    refresh() {
        if (!this.timeout) {
            this.dayOfTheWeek
            this.dayOfTheMonth
            this.month
            this.timeout = setTimeout(this.refresh(), 1000)
        }
    }
}

export default Calendar