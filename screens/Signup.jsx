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
import {Octicons, Ionicons, Fontisto,Entypo} from '@expo/vector-icons';
//colors

const {brand, darklight, primary} = Colors;

// keyboard avoiding view


const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true)
  return (
    
    <StyledContainer>
       < StatusBar style = "dark"/>
        <InnerContainer>
            
            <PageTitle> Tea Farm App</PageTitle>
            <SubTitle>Account Signup</SubTitle>

            <Formik
                initialValues={{fullName : '', dateOfBirth:'',confirmpassword:'',email:'',password: ''}}
                onSubmit ={(values) => {
                    console.log(values);
                    
                  
                }}
            >{({handleChange,handleBlur,handleSubmit,values}) =>(
               
                <StyledFormArea>
                    <MyTextInput
                        
                        icon = "person"
                        placeholder = "Full name"
                        placeholderTextColor = {darklight}
                        onChangeText = {handleChange('fullName')}
                        onBlur = {handleBlur('fullName')}
                        value = {values.fullName}
                        
                    />
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
                        
                        icon = "calendar"
                        placeholder = "YYYY - MM - DD"
                        placeholderTextColor = {darklight}
                        onChangeText = {handleChange('dateOfBirth')}
                        onBlur = {handleBlur('dateOfBirth')}
                        value = {values.dateOfBirth}
                       
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
                    <MyTextInput
                       
                       icon = "lock"
                       placeholder = "Confirm password"
                       placeholderTextColor = {darklight}
                       onChangeText = {handleChange('confirmpassword')}
                       onBlur = {handleBlur('confirmpassword')}
                       value = {values.password}
                       secureTextEntry = {hidePassword}
                       isPassword={true}
                       hidePassword = {hidePassword}
                       setHidePassword = {setHidePassword}
                   />
                    
                    <StyledButton onPress = {handleSubmit}>
                        <LoginText>
                            Signup
                        </LoginText>

                    </StyledButton>
                    
                
                    
                    <ExtraView>
                        <ExtraText>Already have an account?</ExtraText>
                        <TextLink onPress = {() => navigation.navigate('Login')}>
                            <TextLinkContent> Login</TextLinkContent>
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

export default Signup;
