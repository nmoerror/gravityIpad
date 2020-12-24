import * as React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components';
import {Ionicons} from "@expo/vector-icons";
import userPhoto from "../../../assets/user-photo.png"

export default function Nav({navigation, route}) {
    return (
        <Section>
            <SectionName>
                {route?.name}
            </SectionName>
            <Controls>
                <Control>
                    <Ionicons name="md-notifications" size={20} color="#3E4954"/>
                </Control>
                <Control>
                    <Ionicons name="ios-chatbubbles" size={20} color="#3E4954"/>
                </Control>
                <Control>
                    <Ionicons name="ios-cog" size={20} color="#3E4954"/>
                </Control>
                <LoggedInView>
                    <DetailsView>
                        <Greeting>
                            Good Morning
                        </Greeting>
                        <User>
                            Gerard Martinez
                        </User>
                    </DetailsView>
                    <UserLogo source={userPhoto} />
                </LoggedInView>
            </Controls>
        </Section>
    );
}

const Section = styled.SafeAreaView`
  margin-top: 0px;
  width: 100%;
  height: 80px;
  background: white;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

const SectionName = styled.Text`
  margin-left: 30px;
  color: #3E4954;
  font-weight: 800;
  font-size: 24px;
`

const Controls = styled.View`
  flex-direction: row;
  margin-right: 30px;
`

const Control = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  margin: auto 5px;
  background: rgba(248,248,248,1);
  justify-content: center;
  align-items: center;
`

const LoggedInView = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 0 0 0 30px;
`

const DetailsView = styled.View`
  margin-right: 15px;
  text-align: right;
`

const Greeting = styled.Text`
  font-size: 12px;
  align-self: flex-end;
  color: #9C9C9C;
`

const User = styled.Text`
  align-self: flex-end;
  font-weight: 600;
  color: #3E4954;
`

const UserLogo = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 60px;
`