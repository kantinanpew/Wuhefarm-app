import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#FFFFFF",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darklight: "#9CA3AF",
    brand: "#000000",
    green: "#248f5c",
    red : "#EF4444",
    greenlight:"#8ec542",
    cyan: "#1a50f2"
};

const {primary, secondary, tertiary,darklight,brand,green,red,greenlight,cyan} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content:center;
`;

export const PageLogo = styled.Image`
    width: 200px;
    height: 200px;
`;

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    margin:auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
    height:50%;
    min-width: 50%;
   
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 30px;
    margin-top:-30px;
  
    ${(props) => props.welcome &&`
        font-size: 35px;
    `}
`;

export const SubTitle = styled.Text`
    font-size: 13px;
    margin-top: -40px;
    letter-spacing: 1px;
    padding: 20px;
    color: ${tertiary};
    justify-content: center;
    ${(props) => props.welcome &&`
        margin-bottom: 5px;
        font-weight: normal;
    `}
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 15px;
    font-size: 16px;
    height: 60px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
    margin-top: -7px;

`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
    margin-top: -7px;
`;
export const StyledButtonContainer = styled.View`
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 10px;
  background-color:transparent;

`;

export const StyledButton = styled.TouchableOpacity`
    background-color: ${greenlight};
    padding: 15px;
    justify-content: center;
    border-radius: 16px;
    align-items: center;
    height: 50px;
    margin-bottom: 10px;
    ${(props) => props.google == true && `
    background-color:${green};
    flex-direction: row;
    margin-bottom: 10px;
    justify-content: center;
   
    `}
`;

export const LoginText = styled.Text`
    color: ${primary};
    font-size: 15px;
    font-weight: bold;
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-weight:bold;
    font-size: 16px;
    justify-content: center;
    margin-top:-9px;
    ${(props) => props.google == true && `
    padding: 10px;

    `}
`;


export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    margin-bottom:5px;
    margin-top: -5px;
`;

export const ExtraView = styled.View`
    justify-content:center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    margin-top: -10px;
`;

export const ExtraText = styled.Text`
    justify-content:center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;

`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-left: 2px;
`;

export const TextLinkContent = styled.Text`
    color: ${cyan};
    font-size:15px;
    font-weight: bold;
`;


export const theme = {
    bgWhite: opacity => `rgba(255,255,255,${opacity})`,
    bgBlack: opacity => `rgba(0,0,0,${opacity})`
}