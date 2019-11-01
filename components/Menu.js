import React, { Component } from 'react';
import Entypo from "react-native-vector-icons/Entypo";
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions,TouchableHighlight } from 'react-native';
import FsaleScreen1 from './forsale/FsaleScreen1';
import MarkOnMap from './forsale/MarkOnMap';
import FsaleScreen2 from './forsale/FsaleScreen2';
import FsaleScreen3 from './forsale/FsaleScreen3';
import ProfilePage from './ProfilePage';
import LogoutScreen from './LogoutScreen';
import SortList from './forlease/sorting/SortList';
import CityScreen from './forlease/sorting/CityScreen';  

import ListScreen from './forlease/ListScreen';
import SelectLocationScreen from './forlease/SelectLocationScreen';

import Ionicons from "react-native-vector-icons/Ionicons";
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import { createAppContainer, createMaterialTopTabNavigator,createBottomTabNavigator, createDrawerNavigator, createStackNavigator } from "react-navigation";
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



  
   
   <TouchableHighlight underlayColor="lightgray"  onPress={() => { this.props.navigation.navigate('Second') }}   >

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft:10,marginBottom:10,padding:10 }}>

               <Entypo name={'location'} color={'black'} size={25} />
              <Text style={styles.menuText}  > Estatse </Text>

            </View>
     </TouchableHighlight>

 <TouchableHighlight underlayColor="lightgray"  onPress={() => { this.props.navigation.navigate('Fs1') }}    >

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft:10,marginBottom:10,padding:10}}>

             <Entypo name={'circle-with-plus'} color={'black'} size={25}/>
             
              
              <Text style={styles.menuText}  > Add Listing </Text>

            </View>


</TouchableHighlight>






 <TouchableHighlight underlayColor="lightgray"  onPress={() => { this.props.navigation.navigate('City') }} >

 <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft:10,marginBottom:10,padding:10}}>

              <Entypo name={'select-arrows'} color={'black'} size={25}/>

              <Text style={styles.menuText}  > Filter</Text>


            </View>

</TouchableHighlight>




 <TouchableHighlight underlayColor="lightgray" onPress={() => { this.props.navigation.navigate('MyLandmarks') }} >

          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft:10,marginBottom:10,padding:10}}>

               <Ionicons name={'ios-star'} color={'black'} size={25}/>
              <Text style={styles.menuText}  > MyListings </Text>

            </View>
     </TouchableHighlight>

      
 <TouchableHighlight underlayColor="lightgray" onPress={() => { this.props.navigation.navigate('Third') }} >

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft:10,marginBottom:10,padding:10}}>

              <Ionicons name={'ios-person'} color={'black'} size={25}/>

              <Text style={styles.menuText}  > MyProfile </Text>

            </View>
  </TouchableHighlight>

  <TouchableHighlight    underlayColor="lightgray" onPress={() => { this.props.navigation.navigate('Four') }}  >

  <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft:10,marginBottom:10,padding:10}}>

             
<Ionicons name={'ios-log-out'} color={'black'} size={25}/>
              <Text style={styles.menuText}  > Logout </Text>

            </View>

 </TouchableHighlight>
       </View>

       <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />


      </View>
    );
  }
}




const Forlease = createAppContainer(createBottomTabNavigator(
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
      activeTintColor: '#EC1B85',
      inactiveTintColor: 'gray',
    },
  }


));
 createAppContainer(Forlease);



class MyProfile extends Component {

  constructor(props) {

    super(props);

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);

  }

  render() {
    return (

      <View style={styles.MainContainer}>
         <ProfilePage/>
      </View>
    );
  }
}
class Logout extends Component {

  constructor(props) {

    super(props);

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);

  }

  render() {
    return (

      <View style={styles.MainContainer}>
          <LogoutScreen/>
      </View>
    );
  }
}
const Forsale_StackNavigator =  createStackNavigator ({
  Fs1: {
    screen: FsaleScreen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Listing',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#ED026E'
      },
      headerTintColor: '#fff',
    })
  },
 MarkOnMap: {
      screen: MarkOnMap,
      navigationOptions: {
        title: 'MarkOnMap',
       // header: null //this will hide the header


      headerStyle: {
        backgroundColor: '#ED026E'
      },
      headerTintColor: '#fff',
    
      },
    },
});


const Forlease_StackNavigator =  createStackNavigator ({
  Second: {
    screen: Forlease,
    navigationOptions: ({ navigation }) => ({
      title: 'Estatse',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#ED026E'
      },
      headerTintColor: '#fff',
    })
  },
});


const Myprofile_StackNavigator =  createStackNavigator ({
  Third: {
    screen: MyProfile,
    navigationOptions: ({ navigation }) => ({
      title: 'MyProfile',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#ED026E'
      },
      headerTintColor: '#fff',
    })
  },
});
const Logout_StackNavigator =  createStackNavigator ({
  Four: {
    screen: Logout,
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

const MyLandmarks_StackNavigator =  createStackNavigator ({
  MyLandmarks: {
    screen: FsaleScreen2,
    navigationOptions: ({ navigation }) => ({
      title: 'MyListing',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#ED026E'
      },
      headerTintColor: '#fff',
    })
  },
  Fs3: {
    screen: FsaleScreen3,
   navigationOptions: {
      title: 'Update landmark',
     // header: null //this will hide the header


      headerStyle: {
        backgroundColor: '#ED026E'
      },
      headerTintColor: '#fff',
    
    },
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



const MyDrawerNavigator = createDrawerNavigator({



  SecondStack: {
    screen: Forlease_StackNavigator
  },

  MainStack: {
    screen: Forsale_StackNavigator
  },

 Sorting: {
    screen: Sorting_StackNavigator
  },

  MyLandmarks:{
  screen: MyLandmarks_StackNavigator
 },
 ThirdStack: {
    screen: Myprofile_StackNavigator
  },
  FourStack: {
    screen: Logout_StackNavigator
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
    marginLeft:'10%',

  }

});
