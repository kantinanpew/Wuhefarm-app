import React , {useState}from 'react'
import { StatusBar } from 'expo-status-bar';
import { 
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors, 
    StyledButton,
    ButtonText,
    MsgBox,
    LoginText,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent


} from './../components/style';

import {View} from 'react-native';
//formik
import {Formik} from 'formik';
//icons
import {Octicons, Ionicons, Fontisto, Entypo} from '@expo/vector-icons';
//colors

const {brand, darklight, primary} = Colors;



const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true)
  return (
    
    <StyledContainer>
        <InnerContainer>
            <StatusBar style = "dark"/>
            <PageLogo resizeMode = "cover" source = {require('./../assets/logo.jpg')}/>
            <PageTitle> Tea Farm App</PageTitle>
            <SubTitle>Account Login</SubTitle>

            <Formik
                initialValues={{email:'',password: ''}}
                onSubmit ={(values) => {
                    console.log(values);
                  
                }}
            >{({handleChange,handleBlur,handleSubmit,values}) =>(
                <StyledFormArea>
                    <MyTextInput
                        
                        icon = "mail"
                        placeholder = "Email address"
                        placeholderTextColor = {darklight}
                        onChangeText = {handleChange('email')}
                        onBlur = {handleBlur('email')}
                        value = {values.email}
                        keyboardType = "email-address"
                    />
                    <MyTextInput
                       
                        icon = "lock"
                        placeholder = "Password"
                        placeholderTextColor = {darklight}
                        onChangeText = {handleChange('password')}
                        onBlur = {handleBlur('password')}
                        value = {values.password}
                        secureTextEntry = {hidePassword}
                        isPassword={true}
                        hidePassword = {hidePassword}
                        setHidePassword = {setHidePassword}
                    />
                    <MsgBox>...</MsgBox>
                    <StyledButton onPress = {() => navigation.navigate('Homescreen')}> 
                        <LoginText>
                            Login
                        </LoginText>

                    </StyledButton>
                
                    <StyledButton google = {true} onPress = {handleSubmit}>
                        <Fontisto name = "google" color = {primary} size = {20} />
                        <ButtonText google = {true}>
                            Sign in with Google
                        </ButtonText>
                    </StyledButton>
                    <ExtraView>
                        <ExtraText>Not a memeber?</ExtraText>
                        <TextLink onPress = {() => navigation.navigate('Signup')}>
                            <TextLinkContent> Register now</TextLinkContent>
                        </TextLink>
                    </ExtraView>
                </StyledFormArea>
            )}
            </Formik>
        </InnerContainer>
    </StyledContainer>
   
  );
};
const MyTextInput = ({label,icon,isPassword, hidePassword,setHidePassword,...props}) =>{
    return(
        <View>
            <LeftIcon>
                <Octicons name = {icon} size= {30} color = {brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword &&(
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Entypo name = {hidePassword ? 'eye': 'eye-with-line'}size = {30} color = {darklight}/>
                </RightIcon>
            )}
        </View>
    )
}

export default Login;
