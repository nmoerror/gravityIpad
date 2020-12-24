import * as React from 'react';
import { Text, View } from 'react-native';
import styled from "styled-components"

export default function WelcomeBack() {
    return (
        <Section>
            <MainMessage>
                Hello, Gerard
            </MainMessage>
            <Subtitle>
                Let's get started!
            </Subtitle>
        </Section>
    );
}


const Section = styled.View `
  margin: 30px auto 10px 20px; 
`

const MainMessage = styled.Text `
  font-size: 24px;
  font-weight: 700;
`

const Subtitle = styled.Text `
    font-size: 16px;
    
`