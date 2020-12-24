import * as React from 'react';
import {Text, View} from 'react-native';
import styled from "styled-components";
import data from "../assets/data.js"

import MainScreenItem from "../components/Common/MainScreenItem";
import Menu from "../components/Common/Menu/Menu";
import AppLayout from "../components/Layout/AppLayout";
import {Ionicons} from "@expo/vector-icons";

export default function TabFiveScreen({navigation, route}) {
    return (
        <AppLayout navigation={navigation} route={route} selected="4">
            <Section>
                <Horizontally
                    horizontal={true}
                >
                </Horizontally>
                <Vertically>
                    <Text>
                      5
                    </Text>
                </Vertically>
            </Section>
        </AppLayout>
    );
}

const Section = styled.ScrollView`
  flex: 1;
  background: #fff;
`

const Horizontally = styled.ScrollView`
  flex-direction: row;
  padding-bottom: 16px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`

const MiniDataSquare = styled.TouchableOpacity`
  width: 255px;
  height: 110px;
  background: white;
  border-radius: 12px;
  margin: 0 10px 0 15px;
`

const Title = styled.Text`
  font-size: 11px;
  margin-left: 15px;
  color: rgba(19,19,19,1);
`

const Amount = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin: 15px 0 5px 15px;
  color: rgba(19,19,19,1);
`

const Logo = styled.View `
  position: absolute;
  right: 15px;
  top: 15px;
`

const Vertically = styled.ScrollView `
`

const FlexTwo = styled.View `
  flex-direction: row;
  padding: 20px 10px;
`

const DataSquare = styled.TouchableOpacity `
  height: 400px;
  flex: 1;
  background: white;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin: 0 10px;
`

const DataSquareWide = styled.TouchableOpacity `
  flex: 2;
  height: 600px;
  margin: 0 10px;
  background: white;
    border-radius: 12px;
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
`

const DataSquareNarrow = styled.TouchableOpacity `
  flex: 1;
  height: 600px; 
  background: white;
    margin: 0 10px;
    border-radius: 12px;
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
`

const BookMark = styled.View `
  justify-content: center;
  align-items: center;
`

const Head = styled.View `
  width: 7px;
  height: 20px;
  border-radius: 5px;
  background: rgba(243, 50 ,105, 0.8);
`

const Body = styled.View `
  height: 20px;
  width: 3px;
  background: rgba(243, 50 ,105,  0.2)
`

const Header = styled.View `

`

const TitleSection = styled.View `
  position: absolute;
  top: 12px;
  left: 12px;
  flex-direction: row;
`

const Texts = styled.View `
  margin-left: 10px;
  justify-content: space-evenly;
`


const SectionTitle = styled.Text  `
  font-size: 20px;
`

const Subtitle = styled.Text `
  

`






