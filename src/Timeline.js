import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo'

class Timeline extends Component {
    render() {
        const { data } = this.props
        if (data.loading) {
            return <div>Loading</div>
        }
        else {
            return (
                <ul>
                    {data.reservations.map(reservation => (
                        <li key={reservation.roomId}>
                            {reservation.start}
                            <br/>
                            {reservation.end}
                            <br/>
                            {reservation.summary}
                            <br/>
                            <br/>
                        </li>
                    ))}
                </ul>
            )
        }
    }
}

const TimelineQuery = gql`
query TimelineQuery {
    reservations {
      roomId
      start
      end
      summary
    }
  }
`

export default graphql(TimelineQuery)(Timeline)