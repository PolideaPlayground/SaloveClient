import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { gql, graphql } from 'react-apollo'
import TopPane from './TopPane'
import BottomPane from './BottomPane'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex: 1;
    height: 100vh;
`

function LeftPane({ data, mutate }) {
    return (
        <Container>
            <TopPane data={data} mutate={mutate}/>
            <BottomPane data={data}/>
        </Container>
    )
}

const ReservationQuery = gql`query {
    reservations {
      roomId
      start
      end
      summary
    }
  }
`;

const ReserveRoomMutation = gql`mutation{
    reserveRoom(roomId: 402) {
      roomId
      start
      end
      summary
    }
}`;


const LeftPaneWithData = graphql(ReservationQuery)(LeftPane);
const LeftPaneWithMutation = graphql(ReserveRoomMutation)(LeftPaneWithData);

export default LeftPaneWithMutation