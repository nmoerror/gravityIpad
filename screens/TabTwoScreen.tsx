import * as React from 'react';
import {Text, View } from 'react-native';
import styled from "styled-components";
import data from "../assets/data.js"

import MainScreenItem from "../components/Common/MainScreenItem";
import Menu from "../components/Common/Menu/Menu";
import AppLayout from "../components/Layout/AppLayout";
import {Ionicons} from "@expo/vector-icons";
import {useState} from "react";


export default function TabTwoScreen({navigation, route}) {
    return (
        <AppLayout navigation={navigation} route={route} selected={1}>
            <Section>
                <Horizontally
                    horizontal={true}
                >
                    <SearchBox>
                        <PlaceHolder>
                            Search here
                        </PlaceHolder>
                    </SearchBox>
                </Horizontally>
                    <Table>
                        <Header>
                            <ColumnName bold={true}>
                                Order ID
                            </ColumnName>
                            <ColumnName bold={true}>
                                Date
                            </ColumnName>
                            <ColumnName bold={true}>
                                Customer Name
                            </ColumnName>
                            <ColumnName bold={true}>
                                Drinks
                            </ColumnName>
                            <ColumnName bold={true}>
                                Food
                            </ColumnName>
                            <ColumnName bold={true}>
                                Amount
                            </ColumnName>
                            <ColumnName bold={true}>
                                Status Order
                            </ColumnName>
                            <ColumnName>
                            </ColumnName>
                        </Header>
                        <Division />
                        <Body>
                            {data.map((a, i) => (
                                <Row index={i}>
                                    <ColumnName>
                                        {a.ornum}
                                    </ColumnName>
                                    <ColumnName>
                                        {a.orderTime}
                                    </ColumnName>
                                    <ColumnName>
                                        {a.custname}
                                    </ColumnName>
                                    <ColumnName>
                                        {a.what}
                                    </ColumnName>
                                    <ColumnName>
                                        -
                                    </ColumnName>
                                    <ColumnName>
                                        $5.59
                                    </ColumnName>
                                    <ColumnItemSpace>
                                        <StatusSpace bg={a.bg} >
                                            <Status color={a.color}>
                                            {a.status}
                                            </Status>
                                        </StatusSpace>
                                    </ColumnItemSpace>
                                    <ColumnName bold={true}>
                                        ...
                                    </ColumnName>
                                </Row>
                                )
                            )}
                        </Body>
                    </Table>
            </Section>
        </AppLayout>
    );
}

const StatusSpace = styled.TouchableOpacity `
   padding: 10px;
   background: ${props => props.bg};
   width: 80%;


   border-radius: 5px;
   overflow: hidden;

`

const Status = styled.Text `
   text-transform: uppercase;
   font-weight: 600;
  color: ${props => props.color};
     text-align: center;
`

const Row = styled.View `
  flex-direction: row;
  height: 45px;
  align-items: center;
  padding: 0 20px;
  background: ${props => props.index % 2 === 0 ? 'white' : 'rgb(245,245,245)'};
`

const Division = styled.View `
  height: 1px;
  background: #ddd;
`

const Table = styled.View `
  margin: 10px 20px 20px 20px;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  min-height: 200px;
  flex:1;
  background:white;
`

const ColumnName = styled.Text `
  flex: 1;
  text-align: center;
  font-weight: ${props => props.bold ? 800 : 400};
`
const ColumnItemSpace = styled.View `
  flex: 1;
  align-items: center;
  position: relative;
`

const PlaceHolder = styled.Text `
  color: #bbb;
`

const SearchBox = styled.TouchableOpacity `
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 20px;
  width: 300px;
  margin-left: 20px;
  justify-content: center;
  padding: 0 20px;
`

const Section = styled.View`
  flex:1;
  background: #fff;
`

const Horizontally = styled.View`
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

const Vertically = styled.View `
  background: blue;
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

const Body = styled.ScrollView ``

const Header = styled.View `
  flex-direction: row;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 20px;
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

const Subtitle = styled.Text ``






