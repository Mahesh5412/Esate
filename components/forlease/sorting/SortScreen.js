



import * as React from 'react';
import { Text,Button, View, StyleSheet,Alert } from 'react-native';
import CheckBox from 'react-native-check-box'

export default class SortScreen extends React.Component {
  constructor(props){
    super(props);{
        this.state={
          cityIsChecked:false,
          defaultChecked:true,
        }
    }
  }
onSortIn() {
  if(this.state.cityIsChecked == true){
  this.props.navigation.navigate('City');
  }
  else if(this.state.defaultChecked == true)
 {
   this.props.navigation.navigate('Default');
 }  
}
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:0.1}} >
       <CheckBox
    style={{flex:1, padding:10}}
    onClick={()=>{
      this.setState({
          cityIsChecked:!this.state.cityIsChecked,    
          defaultChecked:false,
      }) 
    }}
    isChecked={this.state.cityIsChecked}
    leftText={"city"}
/>
</View>

 <View style={{flex:0.1}} >
       <CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          defaultChecked:!this.state.defaultChecked,
          cityIsChecked:false, 
      })
    }} 
    isChecked={this.state.defaultChecked}
    leftText={"default"}
/>
</View>
<Button
         title="ok"
         color="#ED026E"
          onPress={this.onSortIn.bind(this)}
         
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },

});
