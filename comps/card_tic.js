import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   background-color: #fff;
    padding: 20px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    text-align: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

`
const Title = styled.h1`
    padding: 10px;
    color: grey;
    font-size: 1.5rem;
` 
const Subtitle = styled.p`
padding: 10px;
color: #7a9eb3;
` 

const CardTic = ({title, content, icon}) => {
    return (
        <Container>
            {icon}
            <Title>{title}</Title>
            <Subtitle>{content}</Subtitle>
         </Container> 
        
    )
}


export default CardTic;

