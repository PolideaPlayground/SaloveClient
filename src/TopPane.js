import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Button from './Button'
import { gql, graphql } from 'react-apollo'

const Container = styled.div`
    display: flex;
    background-color: #252c60;    
    align-items: center;
    flex-direction: column;
    padding-top: 122px;
    flex: 1;
`

export default function TopPane({ data, mutate }) {
    return (
        <Container>
            <Logo/>
            {data.loading
            ? <div>Loading</div>
            : <Button onClick={mutate}>Reserve now</Button>
            }
        </Container>
    )
}
