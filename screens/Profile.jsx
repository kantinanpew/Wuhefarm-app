import React from 'react';
import{View,Text,Image,SafeAreaView,StyleSheet,TouchableOpacity} from 'react-native';
import { AntDesign,Ionicons ,MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';

const Profile = () => {
  return (
    <View style = {styles.container}>
      <SafeAreaView style = {styles.safeArea}>
        <View style = {styles.topSection}>
          <View style= {styles.propicArea} >
            <Image resizeMode = "cover" source = {require('./../assets/no_pic.jpg')} style={styles.propic}/>
          </View>
          <Text style = {styles.name}>Name</Text>
          <Text style = {styles.description}>Owner</Text>
        </View>

        <TouchableOpacity style = {styles.buttonSection}>
          <View style= {styles.buttonArea} >
          <View style = {styles.iconArea}>
            <MaterialCommunityIcons name = "account-circle-outline" size = {30} style={styles.iconStyle} resizeMode = "contain" />
          </View>
          <Text style = {styles.buttonName}>Account</Text> 
          </View>
          <View style={styles.sp}></View>
          
        </TouchableOpacity>

        <TouchableOpacity style = {styles.buttonSection}>
          <View style= {styles.buttonArea} >
          <View style = {styles.iconArea}>
            <AntDesign name = "infocirlceo" size = {30} style={styles.iconStyle} resizeMode = "contain" />
          </View>
          <Text style = {styles.buttonName}>Notifications</Text> 
          </View>
          <View style={styles.sp}></View>
          
        </TouchableOpacity>


        
        <TouchableOpacity style = {styles.buttonSection}>
          <View style= {styles.buttonArea} >
          <View style = {styles.iconArea}>
            <AntDesign name = "setting" size = {30} style={styles.iconStyle} resizeMode = "contain" />
          </View>
          <Text style = {styles.buttonName}>Settings</Text> 
          </View>
          <View style={styles.sp}></View>
          
        </TouchableOpacity>


        <TouchableOpacity style = {styles.buttonSection}>
          <View style= {styles.buttonArea} >
          <View style = {styles.iconArea}>
            <Ionicons name = "notifications-outline" size = {30} style={styles.iconStyle} resizeMode = "contain" />
          </View>
          <Text style = {styles.buttonName}>Help</Text> 
          </View>
          <View style={styles.sp}></View>
          
        </TouchableOpacity>


        <TouchableOpacity style = {styles.buttonSection}>
          <View style= {styles.buttonArea} >
          <View style = {styles.iconArea}>
            <MaterialIcons name = "logout" size = {30} style={styles.iconStyle} resizeMode = "contain" />
          </View>
          <Text style = {styles.buttonName}>Logout</Text> 
          </View>
          <View style={styles.sp}></View>
          
        </TouchableOpacity>
        <View style={styles.buttonList}></View>


      </SafeAreaView>
    </View>
  )
}

export default Profile;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
   
  },
  safeArea:{
    flex:1,
  },
  propicArea:{
    width:140,
    height:140,
    borderRadius:'100%',
    marginLeft:'auto',
    marginRight:'auto',
    borderWidth: 4,
    borderColor: '#000000',
  
   
  },
  topSection:{
    height:300,
    justifyContent: 'center',
    alignContent: 'center',
    
   
  },
  propic:{
    width:'100%',
    height:'100%',
    borderRadius: '100%',
  },
  name:{
    color:'#000000',
    fontSize:32,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:20,
  },
  description:{
    color:'#000000',
    fontSize:20,
    marginLeft:'auto',
    marginRight:'auto',

  },
  buttonSection: {
    paddingTop: 4,
    paddingLeft:25,
    paddingRight:25,
    paddingBottom: 4,
  },
  buttonArea:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  iconArea:{
    width:40,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',


  },
  iconStyle:{
    width: 30,
    height: 30,

  },
  buttonName:{
    width:270,
    marginLeft:20,
    fontSize:20,
  },
  sp:{
    width:320,
    marginTop:5,
    height:0.5,
    backgroundColor:"#a4a4a4",
  },
  buttonList:{
    
  }

});

