import React from 'react';
import { Button, View, Text,TextInput,StyleSheet,Alert,ScrollView,ListView,ActivityIndicator,TouchableOpacity,Image,Dimensions } from 'react-native';
//import { Entypo, Ionicons } from 'react-native-vector-icons';
import Entypo from "react-native-vector-icons/Entypo";
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';

const { width, height } = Dimensions.get('window');
export default class SignScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: '',
      password: '',
       showPass:true,
      press:false,
    }
  }
  showPass = () => {
    if(this.state.press== false){
      this.setState({showPass:false,press:true,})
    }
    else{
      this.setState({showPass:true,press:false,})
    }
  }
 isValid() {
    const { phone, password } = this.state;
    let valid= false;

    if (phone.length>0 && password.length>0) {
      valid=true;
    }
    if(phone.length=== 0) {
      alert('please fill the phone');}

    else if(isNaN(phone)){
        alert('please put 10 digit phone number');
    }
    else if(phone.length !=10){
      alert('please check the phone number');
    }
    else if(password.length===0){
      alert('please fill the password');
    }
      return valid; 
  }

UserLoginFunction = () =>{
  if(this.isValid()){
    
 
 const { phone }  = this.state ;
 const { password }  = this.state ;


  NetInfo.fetch().then(state => {
                console.log("Connection type", state.type);
                console.log(state);
                console.log("Is connected?", state.isConnected);
            
              // NetInfo.getConnectionInfo().then((connectionInfo) => {
      
            //console.log(connectionInfo);
      
                if (state.type=="none") {
      
                  console.log(state.type);
      
                  Snackbar.show({
                    title: 'No Internet Connection',
                    backgroundColor: 'black',
                    duration: Snackbar.LENGTH_LONG,
                  });
        
                }




 else{
fetch('http://183.82.120.3:90/estate/login/Login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    phone: phone,
 
    password: password
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {

       if(responseJson === 'Data Matched')
        {

          this._signInAsync();
           // this.props.navigation.navigate('Menu', { phone: phone });
           //alert("Instructions\n1)you can sell your land through our App\n2)You should have details of plot no,city,state,country\n3)Adjust the marker on map ,exact to that location\n4)your details will be verifed");
        }
        else{
          Alert.alert(responseJson);
        }
      }).catch((error) => {
        console.error(error);

         });
}
 
});
  }  
}
  render() {
    return (
 
 <View style={styles.container}>
 <Text style={{fontSize:45,position:'relative',top:'-10%',color: "#ED026E",}}>Estatse</Text>
   <View style={styles.inputContainer}>
   
<Entypo name={'phone'} size={30}  color="black"/>
        <TextInput style={styles.inputs}
           placeholder="Enter phone number"
 
          onChangeText={phone => this.setState({phone})}
 
         
          underlineColorAndroid='transparent'
 
       
        />
    </View>
      <View style={styles.inputContainer}>
<Entypo name={'lock'} size={30}  color="black" />
        <TextInput style={styles.inputs}
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Password"
 
          onChangeText={password => this.setState({password})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
       secureTextEntry={this.state.showPass}
        />
        <TouchableOpacity style={styles.eyeIcon} 
          onPress={this.showPass.bind(this)}>
               <Entypo 
               name={this.state.press== false?'eye-with-line':'eye'}
               size={22} color="black" />
          </TouchableOpacity>
          </View>
  <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}  
         onPress={this.UserLoginFunction} color="#2196F3" >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

<Text>----Or----</Text>
     
       
          <TouchableOpacity  style={[styles.buttonContainer1, ]} 
         onPress={() => this.props.navigation.navigate('Reg')}>
            <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>

</View>
            
    );
  }

  _signInAsync = async () => {
    const { phone }  = this.state ;
    await AsyncStorage.setItem('isLoggedIn', '1');
    await AsyncStorage.setItem('phone', phone);
    this.props.navigation.navigate('Menu', { phone: phone });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 backgroundColor:'white',
 marginTop:40,
  },
  inputContainer: {
    
      backgroundColor: '#FFFFFF',
      //borderRadius:10,
      borderBottomWidth: 1,
      width:'70%',
      height:45,
      marginBottom:10,
      flexDirection: 'row',
      alignItems:'center'
  },
 
inputs:{
      height:45,
      marginLeft:16,
      //border: '#090202',
      flex:1,
  },
  


  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:'65%',
    borderRadius:10,
  },
  buttonContainer1: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:'60%',
   
  },
  loginButton: {
    backgroundColor: "#ED026E",
  },
  loginText: {
    color: 'black',
    fontSize:20,
  },
   

  
});
