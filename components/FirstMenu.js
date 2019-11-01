import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity,TouchableHighlight , YellowBox, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import RegistrationScreen from './login/RegistrationScreen';
import SignScreen from './login/SignScreen';
import SortList from './forlease/sorting/SortList';
import CityScreen from './forlease/sorting/CityScreen';
import ListScreen from './forlease/ListScreen';
import SelectLocationScreen from './forlease/SelectLocationScreen';
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
//import ForLease from './ForLease';
import { StackNavigator } from 'react-navigation'
import { createAppContainer, createMaterialTopTabNavigator, createBottomTabNavigator,createDrawerNavigator, createStackNavigator } from "react-navigation";
class HamburgerIcon extends Component {

  toggleDrawer = () => {

    console.log(this.props.navigationProps);

    this.props.navigationProps.toggleDrawer();

  }

  render() {

    return (

      <View style={{ flexDirection: 'row' }}>

        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >

          <Entypo name={'menu'} color={'white'} size={35}/>
           
        </TouchableOpacity>


      </View>

    );


  }
}

class Custom_Side_Menu extends Component {

  render() {

    return (

      <View style={styles.sideMenuContainer}>

        <Image source={require('./assets/estatselogo.png')}
          style={styles.sideMenuProfileIcon} />

        <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />

        <View style={{width: '100%'}}>

<TouchableHighlight  underlayColor={'lightgrey'} onPress={() => { this.props.navigation.navigate('Estatse') }}  >


              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft:10,marginBottom:10,padding:10 }}>

          
               <Entypo name={'location'} color={'black'} size={25}/>
              
              <Text style={styles.menuText}  > Estatse </Text>

            </View>
         </TouchableHighlight>

            <TouchableHighlight  underlayColor={'lightgrey'} onPress={() => { this.props.navigation.navigate('City') }}  >

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft:10,marginBottom:10,padding:10 }}>

            <Entypo name={'select-arrows'} color={'black'} size={25}/>
            

              <Text style={styles.menuText}  > Filter</Text>


            </View>

            </TouchableHighlight>

            
            <TouchableHighlight  underlayColor={'lightgrey'} onPress={() => { this.props.navigation.navigate('Sign')}}  >

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft:10,marginBottom:10,padding:10 }}>

          <Ionicons  name={'ios-log-in'} color={'black'} size={25}/>
            
            
            
              <Text style={styles.menuText} > Login</Text>

            </View>
              </TouchableHighlight>

       </View>

       <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />


      </View>
    );
  }
}


const Estatse = createAppContainer(createBottomTabNavigator(
  {
    Map: { screen: SelectLocationScreen },
    List: { screen: ListScreen },
  },
   
  {
 
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Map') {
          return (
            <Ionicons  name={'ios-map'} color={'#ED026E'} size={25}/>
          );
        } else if (routeName === 'List') {
          return (
            <Ionicons  name={'md-list-box'} color={'#ED026E'} size={25}/>
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ED026E',
      inactiveTintColor: 'gray',
    },
  }


));
 createAppContainer(Estatse);


const Forlease_StackNavigator =  createStackNavigator ({
  Estatse: {
    screen: Estatse,
    navigationOptions: ({ navigation }) => ({
      title: '',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,
      
      headerStyle: {
        backgroundColor: '#ED026E'
      },
      headerTintColor: '#fff',
    })
  },
});



const Sorting_StackNavigator =  createStackNavigator ({

  City: {
    screen: CityScreen,
    navigationOptions: ({ navigation }) => ({
      title: '',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#ED026E'
      },
      headerTintColor: '#fff',
    })
  },



  SortList:{
    screen:SortList,
    navigationOptions: {
      title: 'SortList',
//header: null //this will hide the header


      headerStyle: {
        backgroundColor: '#ED026E'
      },
      headerTintColor: '#fff',
    
    },
  },

});


const Forlogin_StackNavigator =  createStackNavigator ({
 
  Sign:{
    screen:SignScreen,
    navigationOptions: {
      title: 'Login',
header: null //this will hide the header
    },
  },
  Reg:{
    screen:RegistrationScreen,
    navigationOptions: {
      title: 'Registration',
//header: null //this will hide the header
    },
  },
});




const MyDrawerNavigator = createDrawerNavigator({

  MainStack: {
    screen: Forlease_StackNavigator
  },
  
  SortScreen: {
    screen: Sorting_StackNavigator
  },

  SecondStack: {
    screen: Forlogin_StackNavigator
  },


 
},
  {
    contentComponent: Custom_Side_Menu,
    drawerWidth: Dimensions.get('window').width - 130,
  });

export default createAppContainer(MyDrawerNavigator);
const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
  },

  sideMenuContainer: {

    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20
  },

  sideMenuProfileIcon:
  {
    resizeMode: 'center',
    width: 150, 
    height: 150, 
    borderRadius: 150/2
  },

  sideMenuIcon:
  {
    resizeMode: 'center',
    width: 38, 
    height: 38, 
    marginRight: 10,
    marginLeft: 20
    
  },

  menuText:{

    fontSize: 20,
    color: '#222222',
    
  }

});
