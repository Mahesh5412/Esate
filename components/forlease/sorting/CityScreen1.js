import * as React from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity,ScrollView,TextInput } from 'react-native';
import CheckBox from 'react-native-check-box'
import { SearchBar } from 'react-native-elements';
export default class CityScreen extends React.Component {
  constructor(props){
    super(props);{
        this.state={
          dheliIsChecked:false,
          ahmedabadIsChecked:false,
          kolkataIsChecked:false,
          suratIsChecked:false,
          puneIsChecked:false,
          hyderabadIsChecked:false,
          vishakapatnamIsChecked:false,
          chennaiIsChecked:false,
          srikakulamIsChecked:false,
          mumbaiIsChecked:false,
          bengaluruIsChecked:false,
          checkallIsChecked:false,
text:'',
        }
    }
  }

  onSortCityIn = () => {
    const { dheliIsChecked,ahmedabadIsChecked,srikakulamIsChecked,chennaiIsChecked,vishakapatnamIsChecked,puneIsChecked,kolkataIsChecked,suratIsChecked,hyderabadIsChecked,mumbaiIsChecked,bengaluruIsChecked }  = this.state ;
    this.props.navigation.navigate('SortList',{
      dheli:dheliIsChecked,
      ahmedabad:ahmedabadIsChecked,
      kolkata:kolkataIsChecked,
      surat:suratIsChecked,
      mumbai:mumbaiIsChecked,
      pune:puneIsChecked,
      hyderabad:hyderabadIsChecked,
      vishakapatnam:vishakapatnamIsChecked,
      chennai:chennaiIsChecked,
      srikakulam:srikakulamIsChecked,
      bengaluru:bengaluruIsChecked,
    
    });
  }

 /* 
 
priya() {
    const { checkallIsChecked ,dheliIsChecked,
          ahmedabadIsChecked,
          kolkataIsChecked,
          suratIsChecked,
          puneIsChecked,
          hyderabadIsChecked,
          vishakapatnamIsChecked,
          chennaiIsChecked,
          srikakulamIsChecked,
          mumbaiIsChecked,
          bengaluruIsChecked} = this.state;
    
    
 if (checkallIsChecked ==false){
  
  alert("true");
     this.setState={
          dheliIsChecked:true,
          ahmedabadIsChecked:true,
          kolkataIsChecked:true,
          suratIsChecked:true,
          puneIsChecked:true,
          hyderabadIsChecked:true,
          vishakapatnamIsChecked:true,
          chennaiIsChecked:true,
          srikakulamIsChecked:true,
          mumbaiIsChecked:true,
          bengaluruIsChecked:true,
          checkallIsChecked:true,
        }
  
     //all true
   }
   else if(checkallIsChecked==true)
  { 
    alert("false");
   this.state={
          dheliIsChecked:false,
          ahmedabadIsChecked:false,
          kolkataIsChecked:false,
          suratIsChecked:false,
          puneIsChecked:false,
          hyderabadIsChecked:false,
          vishakapatnamIsChecked:false,
          chennaiIsChecked:false,
          srikakulamIsChecked:false,
          mumbaiIsChecked:false,
          bengaluruIsChecked:false,
          checkallIsChecked:false,
        } // all false
   } 
 }
*/

  render() {
    return (
      <View style={styles.container}>
<ScrollView>
      <View >
      
        <View style={{flex:0.1}} >

       <CheckBox
    style={{flex: 1, padding: 20}}
    onClick={()=>{

     {this.state.checkallIsChecked==false  ?
      this.setState({
          checkallIsChecked:!this.state.checkallIsChecked,  
          dheliIsChecked:true,
          ahmedabadIsChecked:true,
          kolkataIsChecked:true,
          suratIsChecked:true,
          puneIsChecked:true,
          hyderabadIsChecked:true,
          vishakapatnamIsChecked:true,
          chennaiIsChecked:true,
          srikakulamIsChecked:true,
          mumbaiIsChecked:true,
          bengaluruIsChecked:true,
      }) 
 :
      this.setState({
          checkallIsChecked:!this.state.checkallIsChecked,  
            dheliIsChecked:false,
          ahmedabadIsChecked:false,
          kolkataIsChecked:false,
          suratIsChecked:false,
          puneIsChecked:false,
          hyderabadIsChecked:false,
          vishakapatnamIsChecked:false,
          chennaiIsChecked:false,
          srikakulamIsChecked:false,
          mumbaiIsChecked:false,
          bengaluruIsChecked:false,
      }) 

     }

          
    }}
    isChecked={this.state.checkallIsChecked}
    leftText={"Select all"}
/>
</View>
  <View style={{flex:0.1}} >
       <CheckBox
    style={{flex: 1, padding: 20}}
    onClick={()=>{
     
      this.setState({
          dheliIsChecked:!this.state.dheliIsChecked,   
      }) 
          
    }}
    isChecked={this.state.dheliIsChecked}
    leftText={"Dheli"}
/>
</View>



 <View style={{flex:0.1}} >
     <CheckBox
    style={{flex: 1, padding: 20}}
    onClick={()=>{
      this.setState({
          ahmedabadIsChecked:!this.state.ahmedabadIsChecked,    
      })    
    }}
    isChecked={this.state.ahmedabadIsChecked}
    leftText={"ahmedabad"}
/>
</View>


<View style={{flex:0.1}} >
       <CheckBox
    style={{flex: 1, padding: 20}}
    onClick={()=>{
      this.setState({
          kolkataIsChecked:!this.state.kolkataIsChecked,    
      })    
    }}
    isChecked={this.state.kolkataIsChecked}
    leftText={"kolkata"}
/>
</View>

<View style={{flex:0.1}} >
       <CheckBox
    style={{flex: 1, padding: 20}}
    onClick={()=>{
      this.setState({
          suratIsChecked:!this.state.suratIsChecked,    
      })    
    }}
    isChecked={this.state.suratIsChecked}
    leftText={"surat"}
/>
</View>


 <View style={{flex:0.1}} >
       <CheckBox
    style={{flex: 1,padding:20 }}
    onClick={()=>{
      this.setState({
          mumbaiIsChecked:!this.state.mumbaiIsChecked,
      })
    }} 
    isChecked={this.state.mumbaiIsChecked}
    leftText={"mumbai"}
/>
</View>


 <View style={{flex:0.1}} >
       <CheckBox
    style={{flex: 1,padding:20 }}
    onClick={()=>{
      this.setState({
          puneIsChecked:!this.state.puneIsChecked,
      })
    }} 
    isChecked={this.state.puneIsChecked}
    leftText={"pune"}
/>
</View>

 <View style={{flex:0.1}} >
       <CheckBox
    style={{flex: 1, padding: 20}}
    onClick={()=>{
      this.setState({
          hyderabadIsChecked:!this.state.hyderabadIsChecked,
      })
    }} 
    isChecked={this.state.hyderabadIsChecked}
    leftText={"hyderabad"}
/>
</View>

<View style={{flex:0.1}} >
       <CheckBox
    style={{flex: 1, padding: 20}}
    onClick={()=>{
      this.setState({
          vishakapatnamIsChecked:!this.state.vishakapatnamIsChecked,
      })
    }} 
    isChecked={this.state.vishakapatnamIsChecked}
    leftText={"vishakapatnam"}
/>
</View>



 <View style={{flex:0.1}} >
       <CheckBox
    style={{flex: 1, padding: 20}}
    onClick={()=>{
      this.setState({
          bengaluruIsChecked:!this.state.bengaluruIsChecked, 
      })
    }} 
    isChecked={this.state.bengaluruIsChecked}
    leftText={"bengaluru"}
/>
</View>


<View style={{flex:0.1}} >
       <CheckBox
    style={{flex: 1, padding: 20}}
    onClick={()=>{
      this.setState({
          chennaiIsChecked:!this.state.chennaiIsChecked, 
      })
    }} 
    isChecked={this.state.chennaiIsChecked}
    leftText={"chennai"}
/>
</View>

<View style={{flex:0.1}} >
       <CheckBox
    style={{flex: 1, padding: 20}}
    onClick={()=>{
      this.setState({
          srikakulamIsChecked:!this.state.srikakulamIsChecked, 
      })
    }} 
    isChecked={this.state.srikakulamIsChecked}
    leftText={"srikakulam"}
/>
</View>

       
      </View>
</ScrollView>


   <View >

<Button
title="ok"
color="#ED026E"style={styles.input}
 onPress={this.onSortCityIn.bind(this)}
   
 />
</View>

</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFF',

  },

input:{
    backgroundColor:'#ED026E',
    //position:'fixed',
 width:"30%",
 },
});
