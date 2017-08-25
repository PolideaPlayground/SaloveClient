import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo'

class Timeline extends Component {
    render() {
        const { data } = this.props
        if (data.loading) {
            return <div>Loading</div>
        }
        else {
            debugger
            return (
                <ul>
                    {data.reservations.map(reservation => (
                        <li key={reservation.id}>
                            {reservation.start}
                            {reservation.end}
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
      id
      start
      end
    }
  }
`

export default graphql(TimelineQuery)(Timeline)