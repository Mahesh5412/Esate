import React from 'react';
import {Button,FlatList,ActivityIndicator, Text, View,StyleSheet,Dimensions,Image,TouchableHighlight,TextInput } from 'react-native';
import { Icon } from 'native-base';
import { SearchBar } from 'react-native-elements';
import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';

export default class ListScreen extends React.Component {

 constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      data: [],      
      error: null, 
      phone : '',
      isFetching: false,
    }
    this.arrayholder = [];
  }

 onRefresh() {
        this.setState({ isFetching: true }, function() { this.listLandmarks() });
     }

     
     
      componentWillMount()
    {
     this.listLandmarks()
    }
  
listLandmarks =() => {

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
    return fetch('http://183.82.120.3:90/estate/ForLease/landmark.php')
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({
            isLoading: false,
            isFetching: false,
            data: responseJson.ForLeaseLand,
          }, function () {
     });
     this.arrayholder=responseJson.ForLeaseLand;
    })
    .catch((error) => {
      console.error(error);
    });
}
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


renderHeader = () => {    
  return ( 
 <SearchBar        
      placeholder="Type Here..."        
      lightTheme        
      round        
      onChangeText={text => this.searchFilterFunction(text)}
      value={this.state.text}
      autoCorrect={false}             
    />      
   /* <TextInput 
       style={styles.TextInputStyleClass}
       onChangeText={text => this.searchFilterFunction(text)}
       value={this.state.text}
       underlineColorAndroid='transparent'
       placeholder="Search Here"
      /> */
  );  
};


searchFilterFunction = text => {    
  const newData = this.arrayholder.filter(item => {      
    const itemData = `${item.saddress.toUpperCase()} ${item.city.toUpperCase()} ${item.state.toUpperCase()}`;  
    //${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
    
   
     const textData = text.toUpperCase();
      
     return itemData.indexOf(textData) > -1;    
  });
  
  this.setState({ data: newData, text:text });  
};

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
          data={this.state.data}
          refreshing={this.state.isFetching}
          onRefresh={() => this.onRefresh()}

       ItemSeparatorComponent = {this.FlatListItemSeparator} 
          renderItem={({item}) =>
               <View style={{flex:1, flexDirection: 'column',paddingTop:5,paddingBottom:13}}>

           
           <View style={{flex:1, flexDirection: 'row'}}>
              <Image source = {{ uri: item.image_path }} style={styles.imageView}                 />



              <View style={{flex:1, flexDirection: 'column',paddingTop:5,paddingLeft:15}}>
              
              <View><Text><Text style={styles.Price}>Address:</Text>{item.saddress}</Text></View>
               <View><Text>{item.city},{item.state}</Text></View>
               <View><Text><Text style={styles.Price}> Price:</Text>{item.price}</Text></View>
               
               </View>




          </View>



     <View>
     <Text>   {item.inner_property_type}    |    {item.sale_rent}   |   {item.size}   |   {item.direction}  </Text>
     </View>


     <View>
     <Text>   name:{item.name}              contact:{item.phone}</Text>
     </View>

 

</View>
          }
          keyExtractor={({saddress}, index) => saddress}
          ListHeaderComponent={this.renderHeader}
        />
    
      </View>
    );
  }
}

  const deviceWidth = Dimensions.get('window').width
    const deviceHeight = Dimensions.get('window').height
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
TextInputStyleClass:{
        
   textAlign: 'center',
   height: 40,
   borderWidth: 1,
   borderColor: '#009688',
   borderRadius: 7 ,
   backgroundColor : "#FFFFFF"
        
   }


});
