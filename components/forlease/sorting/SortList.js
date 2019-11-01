import React from 'react';
import {Button, FlatList,ActivityIndicator, Text,Image, View,StyleSheet    } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';
export default class SortList extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      propertytype:this.props.navigation.state.params.propertytype,
      city:this.props.navigation.state.params.city,
      minprice:this.props.navigation.state.params.minprice,
      maxprice:this.props.navigation.state.params.maxprice,
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
  

    listLandmarks =() =>  {
    const { propertytype,city,minprice,maxprice }  = this.state ;


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


    return fetch('http://183.82.120.3:90/estate/sorting/sortinglandmark.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      
      propertytype:propertytype,
      city:city,
      minprice:minprice,
      maxprice:maxprice,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({
            isLoading: false,
            isFetching: false,
            dataSource: responseJson.ForLeaseLand,
          }, function () {
     });
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
               <View><Text>{item.city},{item.state}</Text></View>
               <View><Text><Text style={styles.Price}> Price:</Text>{item.price}</Text></View>
               
               </View>




          </View>



     <View>
     <Text>   {item.inner_property_type}    |    {item.sale_rent}   |   {item.size}   |   {item.direction}  </Text>
     </View>


     <View>
     <Text>name:{item.name}              contact:{item.phone}</Text>
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


});
