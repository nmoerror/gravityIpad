import * as React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components';
import Menu from "../Common/Menu/Menu";
import Nav from "../Common/Nav/Nav";

export default function AppLayout({children, navigation, route, selected}) {
    return (
        <Section>
            <Menu navigation={navigation} route={route} selected={selected} />
            <MainView>
                <Nav navigation={navigation} route={route} />
                { children }
            </MainView>
        </Section>
    );
}

const Section = styled.View`
  flex: 1;
  flex-direction: row;
  background: white;
`

const MainView = styled.View `
  flex-direction: column;
  flex: 1;
`