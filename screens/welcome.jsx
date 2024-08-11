import React , {useState}from 'react'
import { StatusBar } from 'expo-status-bar';
import { 

    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    LoginText,
    WelcomeContainer,
    WelcomeImage

} from './../components/style';

import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
//colors

// keyboard avoiding view



const Welcome = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true)
  return (
    
    <>
        <InnerContainer>
            <WelcomeImage source = {require('./../assets/logo.jpg')}/>
            <StatusBar style = "dark"/>
            <PageTitle> Tea Farm App</PageTitle>
            <SubTitle>Farm management & {'\n'}         To-Do list  </SubTitle>

            <WelcomeContainer>
                <StyledFormArea>
                    <StyledButton onPress = {()=>navigation.navigate('Login')}>
                        <LoginText>
                            Let's Start
                        </LoginText>
                    </StyledButton> 
                </StyledFormArea>
            
            </WelcomeContainer>
        </InnerContainer>
    </>
   
  );
};

export default Welcome;
