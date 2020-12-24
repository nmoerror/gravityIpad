import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from "styled-components"

export default function MiniSquare(props: object) {
    return (
        <Section>
            <Square>

            </Square>
            <SectionTitle>
                {props.title}
            </SectionTitle>
        </Section>
    );
}


const Section = styled.View `
  width: 100px;
  height: 120px;
  margin: 20px;
`

const Square = styled.TouchableOpacity `
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0px 20px rgba(0,0,0, 0.05);
`

const SectionTitle = styled.Text `
  flex: 1;
  height: 30px;
  padding: 5px 0;
  margin: auto;
`
