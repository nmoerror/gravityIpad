import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styled from "styled-components"

export default function OrderDetails(props: object) {
    return (
        <Section>
            <HeadingSection>
                <OrderName>
                    {props.order.what}
                </OrderName>
            </HeadingSection>
            <BorderBottom/>
            <BodyDetailSection>
                {props.order.details.map(detail => (
                    <>
                        <OrderDetail>
                            {detail.name} : {detail.value}
                        </OrderDetail>
                        <BorderBottom/>
                    </>
                ))}
            </BodyDetailSection>
        </Section>
    );
}


const Section = styled.View`
  height: 95px;
  width: 300px;
  margin: 15px 0;
  border: 1px solid #aaa;
  border-radius: 10px;
`

const HeadingSection = styled.View`
  padding: 8px;
`

const BodyDetailSection = styled.ScrollView`

`

const OrderName = styled.Text`
    margin: auto;
`

const OrderDetail = styled.Text`
    margin: 3px auto;
`
const BorderBottom = styled.View`
   height: 1px;
   background: rgba(0,0,0,0.1);
`