import * as React from 'react';
import {Text, View} from 'react-native';
import styled from "styled-components";
import data from "../assets/data.js"

import MainScreenItem from "../components/Common/MainScreenItem";
import Menu from "../components/Common/Menu/Menu";
import AppLayout from "../components/Layout/AppLayout";
import {Ionicons} from "@expo/vector-icons";

export default function TabOneScreen({navigation, route}) {
    return (
        <AppLayout navigation={navigation} route={route} selected={0}>
            <Section>
                <Horizontally horizontal={true}>
                    <MiniDataSquare>
                        <Logo>
                            <Ionicons name="md-paper" size={26} color="rgba(243, 50 ,105,  1)"/>
                        </Logo>
                        <Amount>85</Amount>
                        <Title>Orders</Title>
                    </MiniDataSquare>
                    <MiniDataSquare>
                        <Logo>
                            <Ionicons name="md-people" size={26} color="rgba(243, 50 ,105,  1)"/>
                        </Logo>
                        <Amount>56</Amount>
                        <Title>Customers</Title>
                    </MiniDataSquare>
                    <MiniDataSquare>
                        <Logo>
                            <Ionicons name="md-cash" size={26} color="rgba(243, 50 ,105,  1)"/>
                        </Logo>
                        <Amount>$ 240.95</Amount>
                        <Title>Earnings</Title>
                    </MiniDataSquare>
                    <MiniDataSquare>
                        <Logo>
                            <Ionicons name="md-podium" size={26} color="rgba(243, 50 ,105,  1)"/>
                        </Logo>
                        <Amount>2.2 Minutes</Amount>
                        <Title>Average Coffee Time</Title>
                    </MiniDataSquare>
                    <MiniDataSquare>
                        <Logo>
                            <Ionicons name="md-users" size={26} color="rgba(243, 50 ,105,  1)"/>
                        </Logo>
                        <Amount>100</Amount>
                        <Title>Some other stuff</Title>
                    </MiniDataSquare>
                </Horizontally>
                <Vertically>
                    <FlexTwo>
                        <DataSquare>
                            <Header>
                                <TitleSection>
                                    <BookMark>
                                        <Head />
                                        <Body />
                                    </BookMark>
                                    <Texts>
                                        <SectionTitle>
                                            Revenue
                                        </SectionTitle>
                                        <Subtitle>
                                            Lorem ipsum dolor sit amet, consectetur
                                        </Subtitle>
                                    </Texts>
                                </TitleSection>
                            </Header>

                        </DataSquare>
                        <DataSquare>
                            <Header>
                                <TitleSection>
                                    <BookMark>
                                        <Head />
                                        <Body/>
                                    </BookMark>
                                    <Texts>
                                        <SectionTitle>
                                            Customer Map
                                        </SectionTitle>
                                        <Subtitle>
                                            Lorem ipsum dolor sit amet, consectetur
                                        </Subtitle>
                                    </Texts>
                                </TitleSection>
                            </Header>
                        </DataSquare>
                    </FlexTwo>
                    <FlexTwo>
                        <DataSquareWide>
                            <Header>
                                <TitleSection>
                                    <BookMark>
                                        <Head />
                                        <Body/>
                                    </BookMark>
                                    <Texts>
                                        <SectionTitle>
                                            Tomorrows Orders
                                        </SectionTitle>
                                        <Subtitle>
                                            Future Orders
                                        </Subtitle>
                                    </Texts>
                                </TitleSection>
                            </Header>
                        </DataSquareWide>

                        <DataSquareNarrow>
                            <Header>
                                <TitleSection>
                                    <BookMark>
                                        <Head />
                                        <Body/>
                                    </BookMark>
                                    <Texts>
                                        <SectionTitle>
                                            Daily Trending Menus
                                        </SectionTitle>
                                        <Subtitle>
                                            Lorem ipsum dolor sit amet, consectetur
                                        </Subtitle>
                                    </Texts>
                                </TitleSection>
                            </Header>
                            <Column>
                                <Row>
                                    <ItemImage>
                                        <Rank>
                                            <RankNumber>
                                                #1
                                            </RankNumber>
                                        </Rank>
                                    </ItemImage>
                                    <ItemDetails>
                                        <ItemName>
                                            Chicken curry special with cucumber
                                        </ItemName>
                                        <Stats>
                                            <ItemPrice>
                                                $5.60
                                            </ItemPrice>
                                            <ItemCount>
                                                Order <Value>x86</Value>
                                            </ItemCount>
                                        </Stats>
                                    </ItemDetails>
                                    <Division/>
                                </Row>

                                <Row>
                                    <ItemImage>
                                        <Rank>
                                            <RankNumber>
                                                #2
                                            </RankNumber>
                                        </Rank>
                                    </ItemImage>
                                    <ItemDetails>
                                        <ItemName>
                                            Watermelon juice with ice
                                        </ItemName>
                                        <Stats>
                                            <ItemPrice>
                                                $5.60
                                            </ItemPrice>
                                            <ItemCount>
                                                Order <Value>x63</Value>
                                            </ItemCount>
                                        </Stats>
                                    </ItemDetails>
                                    <Division/>
                                </Row>

                                <Row>
                                    <ItemImage>
                                        <Rank>
                                            <RankNumber>
                                                #3
                                            </RankNumber>
                                        </Rank>
                                    </ItemImage>
                                    <ItemDetails>
                                        <ItemName>
                                            Italiano pizza with garlic
                                        </ItemName>
                                        <Stats>
                                            <ItemPrice>
                                                $10.60
                                            </ItemPrice>
                                            <ItemCount>
                                                Order <Value>x42</Value>
                                            </ItemCount>
                                        </Stats>
                                    </ItemDetails>
                                    <Division/>
                                </Row>


                                <Row>
                                    <ItemImage>
                                        <Rank>
                                            <RankNumber>
                                                #4
                                            </RankNumber>
                                        </Rank>
                                    </ItemImage>
                                    <ItemDetails>
                                        <ItemName>
                                            Tuna soup spinach with himalaya salt
                                        </ItemName>
                                        <Stats>
                                            <ItemPrice>
                                                $3.6
                                            </ItemPrice>
                                            <ItemCount>
                                                Order <Value>x39</Value>
                                            </ItemCount>
                                        </Stats>
                                    </ItemDetails>
                                    <Division/>
                                </Row>

                                <Row>
                                    <ItemImage>
                                        <Rank>
                                            <RankNumber>
                                                #5
                                            </RankNumber>
                                        </Rank>
                                    </ItemImage>
                                    <ItemDetails>
                                        <ItemName>
                                            Medium Spicy Spagethi Italiano
                                        </ItemName>
                                        <Stats>
                                            <ItemPrice>
                                                $14.60
                                            </ItemPrice>
                                            <ItemCount>
                                                Order <Value>x35</Value>
                                            </ItemCount>
                                        </Stats>
                                    </ItemDetails>
                                </Row>
                            </Column>
                        </DataSquareNarrow>
                    </FlexTwo>
                </Vertically>
            </Section>
        </AppLayout>
    );
}

const Rank = styled.View `
  width: 60%;
  position: absolute;
  height: 60%;
  top: 70%;
  left: 21%;
  border-radius: 100px;
  border: 2px solid white;
  background: rgba(237, 183, 44, 1);
`

const RankNumber = styled.Text `
  margin: auto;
  font-weight: 600;
`

const Division = styled.View `
  height: 1px;
  background: rgba(0,0,0,0.1);
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 10px;
`

const Stats = styled.View `
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
`

const ItemName = styled.Text `
  font-size: 20px;
    font-weight: 500;
`

const ItemPrice = styled.Text `
  font-size: 18px;
  font-weight: 600;
`

const ItemCount = styled.Text`

`
const Value = styled.Text `
  font-weight: 600;
`

const Column = styled.View `
    flex:1;
    margin-top: 70px;
    overflow: hidden;
`
const Row = styled.View `
    flex: 1;
    flex-direction: row;
    padding: 20px 15px;
`
const ItemImage = styled.View `
  background: rgba(0,0,0,0.2);
  border-radius: 10px;
  height: 50px;
  width: 50px;
`

const ItemDetails = styled.View `
  flex: 1;
  margin-left: 10px;
`

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
  flex: 5;
  height: 600px;
  margin: 0 10px;
  background: white;
    border-radius: 12px;
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
`

const DataSquareNarrow = styled.View `
  flex: 2;
  height: 600px; 
  background: white;
    margin: 0 10px;
    border-radius: 12px;
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
      flex-direction: column;
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

const Header = styled.View ``

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
  margin-left: 2px;
  color: rgba(0,0,0,0.7);
`






