import * as React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components';
import {Ionicons} from '@expo/vector-icons';
import {useEffect, useState} from "react";

export default function Menu({navigation, route, selected }) {
    const [tabs, setTabs] = useState([
        {
            name: 'Dashboard',
            to: 'Dashboard',
            selected: selected == 0,
            icon: 'ios-home',
        },
        {
            name: 'Orders',
            to: 'Orders',
            selected: selected == 1,
            icon: 'md-clipboard',
        },
        {
            name: 'Menus',
            to: 'Menus',
            selected: selected == 2,
            icon: 'ios-apps',
        },
        {
            name: 'Customers',
            to: 'Customers',
            selected: selected == 3,
            icon: 'ios-people',
        },
        {
            name: 'Analytics',
            to: 'Analytics',
            selected: selected == 4,
            icon: 'ios-stats',
        },
        {
            name: 'Settings',
            to: 'Settings',
            selected: selected == 5,
            icon: 'ios-cog',
        }
    ]);

    return (
        <Section>
            <Brand>
                <BrandText>
                    GRAVITY
                </BrandText>
            </Brand>
            {tabs.map((tab, i) => (
                <MenuItem onPress={() => navigation.navigate(tab.to)} selected={tab.selected}>
                    <IconSpace>
                        <Ionicons name={tab.icon} size={24} color={tab.selected ? 'rgba(243, 50 ,105,  1)' : 'white'}/>
                    </IconSpace>
                    <MenuItemTitle selected={tab.selected}>
                        {tab.name}
                    </MenuItemTitle>
                </MenuItem>
            ))}
            <BrandSection>
                <BrandStatement>
                    Gravity PTY LTD Admin Dashboard
                </BrandStatement>
                <Copyrights>
                    © 2020 All Rights Reserved
                </Copyrights>
            </BrandSection>
        </Section>
    );
}

const BrandSection = styled.View `
  position: absolute;
  bottom: 16px;
  width: 230px;
  padding: 0 0 5px 15px;
`

const BrandStatement = styled.Text `
  color: white;
  font-weight: 600;
  font-size: 11px;
`

const Copyrights = styled.Text `
  color: white;
  font-size: 10px;
`

const Section = styled.View`
  width: 230px;
  height: 100%;
  padding: 30px 0 30px 15px;
  background: rgba(243, 50 ,105,  1);
  color: white;
`

const Brand = styled.View`
  margin: 10px 0 30px 0;
`

const BrandText = styled.Text`
  margin-left: 15px;
  font-size: 26px;
  font-weight: 800;
  color: white;
`

const BrandLogo = styled.Image`
  width: 200px;
  height: 80px;
`

const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  height: 43px;
  align-items: center;
  padding-left: 20px;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  background: ${props => props.selected ? 'white' : 'rgba(243, 50 ,105,  1)'};
  margin: 5px 0;
`

const IconSpace = styled.View`
  width: 25px;
`

const MenuItemTitle = styled.Text`
  color: white;
  font-size: 16px;
  margin-left: 15px;
  color: ${props => props.selected ? 'rgba(243, 50 ,105,  1)': 'white'};
  font-weight: ${props => props.selected ? '600': '400'};
`