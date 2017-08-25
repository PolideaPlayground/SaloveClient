import React from 'react'
import styled from 'styled-components'
import SubHeader from './SubHeader'
import { FirstNearestEvent, SecondNearestEvent } from './NearestEvent';
import { gql, graphql } from 'react-apollo'

const Container = styled.div`
    padding-top: 27px;
    padding-left: 27px;
    padding-right: 27px;
    padding-bottom: 80px;
    background-color: #4c57d0;
`

export default function BottomPane({ data }) {
    if (data.loading) {
        return <Container>Loading</Container>
    }
    const firstEvent = data.reservations[0]
    const secondEvent = data.reservations[1]
    return (
        <Container>
            <SubHeader>The nearest events:</SubHeader>
            {data.reservations.length === 0 && <div>No nearest events</div>}
            {firstEvent && <FirstNearestEvent {...firstEvent}/>}
            {secondEvent && <SecondNearestEvent {...secondEvent}/>}
        </Container>
    )
    return null
}
