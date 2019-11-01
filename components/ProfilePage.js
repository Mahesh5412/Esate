import React from 'react';
import { FlatList,AsyncStorage, ActivityIndicator, Text,StyleSheet, View,Image  } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
export default class ProfilePage extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      phone : '',
    }
  }

  async componentDidMount(){
    const value = await AsyncStorage.getItem('phone');
    try {
      const response = await fetch('http://183.82.120.3:90/estate/login/profilepage.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: value,
        })
      });
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson.profile,
      }, function () {
      });
    }
    catch (error) {
      console.error(error);
    }
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
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) =><View  style={styles.main}>

<Ionicons name={'ios-person'} color={'gray'} size={255}/>


 <Text>
<Text style={styles.data}>{item.name}{"\n"}{"\n"}</Text>
<Text  style={styles.data}>{item.email}{"\n"}{"\n"}</Text>
<Text  style={styles.data}>{item.phone}</Text>
</Text>

</View>
}
          keyExtractor={({sno}, index) => sno}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
data:{
  position:'relative',
  top:'5',
    
},
image:{

   
}

})

