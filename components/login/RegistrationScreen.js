import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, Keyboard, View, StyleSheet,TouchableOpacity,KeyboardAvoidingView,Dimensions,ScrollView } from 'react-native';

import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';
const { width, height } = Dimensions.get('window');

export default class RegistrationScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      aadhar: '',
      permanat_address: '',
      password: '',
   
    }
  }

  
  isValid() {
    const { name, phone, email,  permanat_address, password ,repassword} = this.state;
    let valid= false;
    
    if (name.length>0 && phone.length>0 &&  email.length>0  && permanat_address.length>0 && password.length>0 && password==repassword) {
      valid=true;
    }
        if (name.length === 0) {
      alert("Enter name");
    } else if(!isNaN(name)){
      alert("Please Enter Only Characters");

    }else if(name.length<3 || name.length>15){
      alert("Username must be 3 to 15 Characters");
    }  
    else if(phone.length==0){
        alert('please put 10 digit phone number');
    }
    else if(phone.length !=10){
      alert('please check the phone number');
    }
    else if((email.length==0)){
        alert('please put @ in your email');
    }
 else if((email.length==0)){
        alert('please put @ in your email');
    }
 
    else if((permanat_address.length==0)){
        alert('please enter current adress');
    }
    else if((password.length==0)){
      alert('please fill the password');
    }
    else if((repassword.length==0))
    {
      alert('please fill the re-password');
    }
    else if((password != repassword )){
      alert('password and repassword mismatch');
    } 
      return valid;
  }

onRegister = () =>{
  if (this.isValid()) {

     const { phone }  = this.state ;


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

      fetch('http://183.82.120.3:90/estate/login/registration.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
 
      name : this.state.name,
 
       phone : this.state.phone,
 
        email : this.state.email,
 
        aadhar: this.state.aadhar,
        permanat_address: this.state.permanat_address,
        password: this.state.password,
      })
 
      }).then((response) => response.json())
          .then((responseJson) => {
 
          if(responseJson === 'Registered Successfully')
        {

            this.props.navigation.navigate('Sign', { phone: phone });
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

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',position:'relative',top:'10%' }}>
    
<ScrollView>
      <TextInput
          value={this.state.name}
          onChangeText={(name) => this.setState({ name})}
          placeholder={'name'}
          style={styles.input}
        />
        <TextInput
          value={this.state.phone}
          onChangeText={(phone) => this.setState({ phone})}
          placeholder={'phone'}
          style={styles.input}
        />
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email})}
          placeholder={'email'}
          style={styles.input}
        />
          
       
        <TextInput
          value={this.state.permanat_address}
          onChangeText={(permanat_address) => this.setState({ permanat_address})}
          placeholder={'Permanat_address'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.repassword}
          onChangeText={(repassword) => this.setState({ repassword })}
          placeholder={'Re-password'}
          secureTextEntry={true}
          style={styles.input}
        />
         <TouchableOpacity style={[styles.buttonContainer, styles.registerButton]}  
          onPress={this.onRegister.bind(this)}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
        <Text>or</Text>
<TouchableOpacity style={[styles.buttonContainer, styles.registerButton]}  
          onPress={() => this.props.navigation.navigate('Sign')}>
          <Text style={styles.registerText}>Sign In</Text>
        </TouchableOpacity>
         
   </ScrollView>      
      </View>

    );
  }
}

const styles = StyleSheet.create({
 
  input: {
    width: 250,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
     borderRadius: 30 ,
  },

 buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  registerButton: {
    backgroundColor: "#ED026E",
  },
  registerText: {
    color: 'white',
  }
  
});


