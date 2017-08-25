import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

'4D5BCD'

const TimeText = styled.span`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: #d0d8e8;
    margin-right: 16px;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const SummaryText = styled.div`
    width: 360px;
    height: 42px;
    font-size: 24px;
    text-align: center;
    color: #000000;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.color}
`


const Dot = styled.div`
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: ${props => props.color};
`

const Line = styled.div`
    height: 4px;
    width: 30px;
    background: ${props => props.color};
`

const Summary = ({ color, summary }) => (
    <Container>
        <Dot color={color}/>
        <Line color={color}/>
        <SummaryText color={color}>{summary}</SummaryText>
    </Container>
)

function NearestEvent(props) {
    const { summary, start, color } = props
    const startDate = moment(start)
    return (
        <Container>
            <TimeText>{startDate.format('HH:mm')}</TimeText>
            <Summary color={color} summary={summary}/>
        </Container>
    )
}

export function FirstNearestEvent(props) {
    return <NearestEvent color='#4af7aa' {...props} />
}

export function SecondNearestEvent(props) {
    return <NearestEvent color='#f93b8e' {...props} />
}