import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from "../screens/TabThreeScreen";

import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';
import TabFourScreen from "../screens/TabFourScreen";
import TabFiveScreen from "../screens/TabFiveScreen";
import TabSixScreen from "../screens/TabSixScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false, tabBarVisible:false}}
      tabBarOptions={{ tabBarVisible: false, activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Dashboard"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Orders"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    <BottomTab.Screen
        name="Menus"
        component={TabThreeNavigator}
        options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
    />
    <BottomTab.Screen
        name="Customers"
        component={TabFourNavigator}
        options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
    />
    <BottomTab.Screen
        name="Analytics"
        component={TabFiveScreen}
        options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
    />
    <BottomTab.Screen
        name="Settings"
        component={TabSixScreen}
        options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
    />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Dashboard"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title', headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Orders"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title', headerShown:false }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabTwoParamList>();

function TabThreeNavigator() {
    return (
        <TabThreeStack.Navigator>
            <TabThreeStack.Screen
                name="Menus"
                component={TabThreeScreen}
                options={{ headerTitle: 'Tab threeee Title', headerShown:false }}
            />
        </TabThreeStack.Navigator>
    );
}

const TabFourStack = createStackNavigator<TabTwoParamList>();

function TabFourNavigator() {
    return (
        <TabFourStack.Navigator>
            <TabFourStack.Screen
                name="Customers"
                component={TabFourScreen}
                options={{ headerTitle: 'Tab threeee Title', headerShown:false }}
            />
        </TabFourStack.Navigator>
    );
}
const TabFiveStack = createStackNavigator<TabTwoParamList>();

function TabFiveNavigator() {
    return (
        <TabFiveStack.Navigator>
            <TabFiveStack.Screen
                name="Analytics"
                component={TabFiveScreen}
                options={{ headerTitle: 'Tab threeee Title', headerShown:false }}
            />
        </TabFiveStack.Navigator>
    );
}

const TabSixStack = createStackNavigator<TabTwoParamList>();

function TabSixNavigator() {
    return (
        <TabSixStack.Navigator>
            <TabSixStack.Screen
                name="Settings"
                component={TabSixScreen}
                options={{ headerTitle: 'Tab threeee Title', headerShown:false }}
            />
        </TabSixStack.Navigator>
    );
}