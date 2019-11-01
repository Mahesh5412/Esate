import * as React from 'react';

import { Picker, View, StyleSheet, Text,TextInput,ScrollView,TouchableOpacity,Alert,Image,PixelRatio,ImageBackground} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import SearchableDropdown from 'react-native-searchable-dropdown';

var items = [
 
  { id: 1, name: 'pune' },
  { id: 2, name: 'kolkata' },
  { id: 3, name: 'Delhi' },
  { id: 4, name: 'Ahmedabad' },
  { id: 5, name: 'Surat' },
  { id: 6, name: 'mumbai' },
  { id: 7, name: 'Hyderabad' },
  { id: 8, name: 'Bengaluru' },
  { id: 9, name: 'Chennai' },
  { id: 10, name: 'Srikakulam' },
   { id: 11, name: 'Vishakapatnam' },
];


export default class App extends React.Component {
  state ={
    propertytype:"sale",
    city:'',
    minprice:'',
     maxprice:'',
  }

  
 isValid() {
    const { propertytype,city,minprice,maxprice} = this.state;
    let valid= false;

if (propertytype.length!='' && city.length!='' &&  minprice.length!=''&& maxprice.length!=0  ) {
      valid=true;
    }
        if (propertytype.length === 0) {
      alert("select propertytype");
    } 
    else if(city.length==0){
        alert(' please select  city');
    }
    
 else if((minprice.length==0)){
        alert('please enter Minprice');
    }
    
 else if(( maxprice.length==0)){
        alert('please enter Maxprice');
    }
   return valid;
}



    
  onSortCityIn = () => {
if(this.isValid()) {

    const { propertytype,city,minprice,maxprice }  = this.state ;
    this.props.navigation.navigate('SortList',{
      city:city,
      propertytype:propertytype,
      minprice:minprice,
      maxprice:maxprice,
    }); 
}
  }

 priya(item){
    var text=JSON.stringify(item);
    var obj = JSON.parse(text);
   var  city1=obj.name;
   this.setState({city:city1})
   console.log(this.state.city);

  }


  render() {
    let data1 = [{value: 'sale',}, {value: 'rent',}];
    let data2= [{value: 'Delhi',}, {value: 'Ahmedabad',},{value: 'Kolkata',},{value: 'Surat',},{value: 'mumbai',},{value: 'Pune',},{value: 'Hyderabad',},{value: 'Vishakapatnam',},{value: 'Bengaluru',},{value: 'Chennai',},{value: 'Srikakulam',},{value: 'others',}]; 
    return (
      <View style={styles.container}>
      
      <View style={{marginTop:8}}>
         <View  style={{height: 50,width:"90%", position:'relative',left:'4%', }}
   >
        <Dropdown 
       //label={this.state.saleLabel}     
       data={data1}  
       value={this.state.propertytype}      
       onChangeText={ propertytype => this.setState({ propertytype: propertytype})}
      />
        </View>
     <View   >
     <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          //onTextChange={city => this.setState({ city: city})}
         // value={this.state.city}    
          onItemSelect={item => this.priya(item)}
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 25 }}
          
          textInputStyle={{
            //inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#fff',
            borderRadius:10,
          }}
          itemStyle={{
            //single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#fff',
            borderColor: '#bbb',
            borderWidth: 1,
            
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: '#222',
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            height: '50%',
            
          }} 
        
          placeholder={"----Select City-----"}
        
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          items={items}
          //mapping of item array
          
          //To remove the underline from the android input
        />
       
        </View>
       
     < View  style={{marginTop:4}}>
        <Text style={{fontSize:20 ,position:'relative',left:'7%',top:'-2%', }}> Price :</Text>
<Text  style={{ position:'relative',left:'7%',top:'2%' }}
          >min:</Text>
      <TextInput style={{height: 50,width:"40%",borderWidth: 1/ PixelRatio.get(),backgroundColor:'#fff', position:'relative',left:'7%',top:'2%' , borderRadius:10,}}
          
          // Adding hint in Text Input using Place holder.
          placeholder="please enter price"
          onChangeText={(minprice) => this.setState({minprice})}
          value={this.state.minprice}
          keyboardType = 'numeric'
        
          />
          </View>
          < View  style={{marginTop:-58}}>
<Text  style={{position:'relative',left:'57%',top:'-9%' }} >max:</Text>

 <TextInput style={{height: 50,width:"40%",borderWidth: 1/ PixelRatio.get(),backgroundColor:'#fff', position:'relative',left:'57%',top:'-9%', borderRadius:10, }}
          
          // Adding hint in Text Input using Place holder.
          placeholder="please enter price"
 
          onChangeText={(maxprice) => this.setState({maxprice})}
          value={this.state.maxprice}
          keyboardType = 'numeric'
         
         
        />
        </View>
<View style={{paddingTop:0, position:'relative',
top:'-8%',left:'16%'}}>
        <TouchableOpacity  onPress={this.onSortCityIn.bind(this)} activeOpacity={0.6} style={styles.button} >
 
          <Text style={styles.TextStyle}> Submit </Text>
 
        </TouchableOpacity>
        
</View>
</View>      
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
   // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    paddingTop: 18,
  },
   button: {
 
   width: '50%',
   backgroundColor: '#EC1B85',

   borderRadius: 7,
   position:'relative',
   marginTop:"8%",
   marginLeft:"10%",
 
 
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
   padding: 10,
   
  }
 
});

