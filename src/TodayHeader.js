import React, { Component } from 'react';
import './TodayHeader.css'

class TodayHeader extends Component {
    render() {
        const { dayOfTheWeek, month, dayOfTheMonth } = this.props 
        return (
            <div className='TodayHeader'>
                    {dayOfTheWeek} {dayOfTheMonth}/{month}
            </div>
        )
    }
}

export default TodayHeader