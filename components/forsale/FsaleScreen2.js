
import React from 'react';
import { Button,FlatList,Image, View,Text,TextInput,StyleSheet,Alert,ScrollView,ListView,ActivityIndicator,TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';
export default class FsaleScreen2 extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      isLoading: true,
      phone : '',
      isFetching: false,
    }
}

onRefresh() {
  this.setState({ isFetching: true }, function() { this.listLandmarks() });
}

componentWillMount()
{
this.listLandmarks()
}

  async listLandmarks(){
 const value = await AsyncStorage.getItem('phone');

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
 
  return fetch('http://183.82.120.3:90/estate/ForSale/slandmark.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    phone : value,
  })
 
}).then((response) => response.json())
         .then((responseJson) => {

           this.setState({
             isLoading: false,
             isFetching: false,
             dataSource: responseJson.slandmarks,
           }, function() {
             // In this block you can do something with new state.
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }
            });
  }
     Deletesellerlandmark =(saddress) =>{

     
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
      fetch('http://183.82.120.3:90/estate/ForSale/deletesellerlandmark.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
    
        saddress : saddress
    
      })
    
      }).then((response) => response.json())
      .then((responseJson) => {
    
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      this.listLandmarks();
       
      }).catch((error) => {
         console.error(error);
      });

    
 }
   });
  
      this.props.navigation.navigate('Home');
  
  }

     
GetsellerlandmarkFunction=(saddress, latitude,longitude)=>{

          this.props.navigation.navigate('Fs3', { 

            saddress : saddress,
            phone  : this.state.phone,
            latitude : latitude,
            longitude : longitude,
         
          });

     }

 
 
 
 FlatListItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
 }
 
render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.MainContainer}>
       
        <FlatList
          data={this.state.dataSource}
          refreshing={this.state.isFetching}
          onRefresh={() => this.onRefresh()}

       ItemSeparatorComponent = {this.FlatListItemSeparator} 
          renderItem={({item}) =>
                <View style={{flex:1, flexDirection: 'column',paddingTop:5,paddingBottom:13}}>

           
           <View style={{flex:1, flexDirection: 'row'}}>
              <Image source = {{ uri: item.image_path }} style={styles.imageView}                 />




              <View style={{flex:1, flexDirection: 'column',padding:15}}>
              
              <View><Text><Text style={styles.Price}>Address:</Text>{item.saddress}</Text></View>
             
                <View><Text><Text style={styles.Price}> Price:</Text>{item.price}</Text></View>
               
               </View>





          </View>

     <View>
     <Text>   {item.property_type}    |    {item.sale_rent}   |   {item.size}   |   {item.direction}  </Text>
     </View>  

 <View style={{flex:1, flexDirection: 'row',justifyContent: 'flex-end'}}>
 <View >
<TouchableOpacity activeOpacity = { .4 }  
    style={[styles.deleteTouchableOpacityStyle, styles.registerButton]} 
    onPress={this.GetsellerlandmarkFunction.bind(this,item.saddress,
      item.latitude, 
      item.longitude,
     )} >
     <Text style={styles.TextStyle}> Update </Text>
    </TouchableOpacity>   
    </View>   
    <View  >
    <TouchableOpacity activeOpacity = { .4 }  
    style={[styles.deleteTouchableOpacityStyle, styles.registerButton]} 
    onPress={this.Deletesellerlandmark.bind(this,item.saddress)} >
     <Text style={[styles.TextStyle,styles.Delete]}> Delete </Text>
    </TouchableOpacity>
    </View>
</View>
</View>
          }
          keyExtractor={({saddress}, index) => saddress}
        />


    
      </View>
    );
  }
}
const styles = StyleSheet.create({
MainContainer :{

justifyContent: 'center',
flex:1,
margin: 10,
 backgroundColor: 'white',
},

imageView: {

    width: '50%',
    height: 100 ,
    margin: 7,
    borderRadius : 7
 
},
Price:{
  color: 'green'
},
TextStyle:{
  backgroundColor:'#EC1B85',
  marginLeft:7,
  padding:5,
  paddingTop:3,
  paddingBottom:3,
}


});


 
 
