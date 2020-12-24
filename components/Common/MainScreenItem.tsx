import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styled from "styled-components"
import OrderDetails from "./OrderDetails";

export default function MainScreenItem(props: object) {
    return (
        <Section>
            <Row>
                <OrderNumberSpace>
                    <OrderNumber>{props.order.ornum}</OrderNumber>
                </OrderNumberSpace>
                <CustomerSpace>
                    <CustomerName>
                        {props.order.custname}
                    </CustomerName>
                </CustomerSpace>
                <OrderSpace>
                    <OrderStatus bg={props.order.bg}>
                        <Dot color={props.order.color}/>
                        <OrderStatusText color={props.order.color}>
                            {props.order.status}
                        </OrderStatusText>
                    </OrderStatus>
                </OrderSpace>
            </Row>
            <BorderBottom/>
        </Section>
    );
}


const Section = styled.View`
  height: 40px;
`

const Row = styled.View`
    height: 100%;
    flex-direction: row;  
`

const BorderBottom = styled.View`
   height: 1px;
   background: rgba(0,0,0,0.05);
`

const BorderRight = styled.View`
   width: 1px;
   background: rgba(0,0,0,0.2);
   height: 100%;
`

const OrderNumberSpace = styled.View`
  flex-direction: row;
  width: 190px;
  height: 100%;
`

const CustomerSpace = styled.View`
  width: 300px;
  height: 100%;
    display: flex;
    justify-content: center;
`

const OrderNumber = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin: auto auto auto 25px;
  color: rgba(104,103,110,1);
`

const CustomerName = styled.Text `
  font-size: 17px;
  margin-left: 30px;
  font-weight: 600;
    color: rgba(104,103,110,1);
`

const CustomerOrderTime = styled.Text `
  font-size: 20px;
  color: rgba(0,0,0,0.7);
`

const OrderSpace = styled.View `
  width: 300px;
  overflow: hidden;
  margin-left: 10px;
`

const OrderStatus = styled.View `
    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${props => props.bg ? props.bg : 'rgba(213, 236, 250,1)'};
    height: 60%;
    margin-top: 10px;
    border-radius: 10px;
    padding-left: 10px;
    margin: auto auto auto 0;
    padding-right: 10px;
`

const OrderStatusText = styled.Text `
  color: ${props => props.color ? props.color : 'rgba(88, 145, 248,1)'};
  font-weight: 800;
  text-transform: uppercase;
  margin-left: 5px;
`

const Dot = styled.View `
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: ${props => props.color ? props.color : 'rgba(88, 145, 248,1)'};
`