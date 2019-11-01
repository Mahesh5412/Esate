import React from 'react';

import { Picker, View, StyleSheet, Text,TextInput,ScrollView,TouchableOpacity,Alert,Image,PixelRatio} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import RNFetchBlob from 'rn-fetch-blob';

import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';

export default class FsaleScreen1 extends React.Component {
  state = {
 phone:'',
  propertyLabel: '', 
  typeLabel:'',
  priceLabel:'',
  sizeLabel:'acres',
  directionLabel:'',
  countryLabel:'india',
  cityLabel:'',
  stateLabel:'',
  saddress:'',
  size:'',
  price:'',
 othercity:'',
  saleLabel:'Sale',
  DocumentSource: null,
   documentdata:'',
  ImageSource: null,
 
      data: '',
 
  };
 
 


  isValid() {
    const { propertyLabel, typeLabel, price, size, directionLabel,saddress, cityLabel ,data,documentdata, stateLabel} = this.state;
    let valid= false;
    
    if (propertyLabel.length!='' && typeLabel.length!='' &&  price.length!=''&& size.length!=0 &&  directionLabel.length!='' && saddress.length!='' && cityLabel.length!='' && stateLabel.length!='' && data.length!='' ) {
      valid=true;
    }
        if (propertyLabel.length === 0) {
      alert("select propertytype");
    } 
    else if(typeLabel.length==0){
        alert('select type');
    }
     else if(isNaN(price)){
        alert('please enter price only numbers');
    }

 else if((size.length==0)){
        alert('please enter size');
    }
    
 else if(( directionLabel.length==0)){
        alert('select facing');
    }
else if(( saddress.length==0)){
        alert('enter address');
    }
    else if((cityLabel.length==0)){
      alert('select city');
    }
    else if((stateLabel.length==0))
    {
      alert('select state');
    }

    
   
     else if((data.length==0))
    {
      alert('select image');
    }

      return valid;
  }
selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
  
      storageOptions: {
        skipBackup: true
      }
    };
 
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
 
        this.setState({
 
          ImageSource: source,
          data: response.data
 
        });
      }
    });
  }

selectDocumentTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
  
      storageOptions: {
        skipBackup: true
      }
    };
 
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
 
        this.setState({
 
          DocumentSource: source,
          documentdata: response.data
 
        });
      }
    });
  }



 componentDidMount = () => AsyncStorage.getItem('phone').then((value) => this.setState({ 'phone': value }))
 
  uploadImageToServer = () => {
  if (this.isValid()) {

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

  RNFetchBlob. fetch('POST','http://183.82.120.3:90/estate/ForSale/upload_image.php', {
      Authorization: "Bearer access-token",
      otherHeader: "foo",
      'Content-Type': 'multipart/form-data',
    }, [
        { name: 'image', filename: 'image.png', type: 'image/png', data: this.state.data },
       { name: 'document', filename: 'image.png', type: 'image/png', data: this.state.documentdata },

      { name: 'propertyLabel', data: this.state.propertyLabel},

      { name: 'typeLabel', data: this.state.typeLabel},
        { name: 'priceLabel', data: this.state.priceLabel},
{ name: 'price', data: this.state.price},
       { name: 'size', data: this.state.size},
       { name: 'sizeLabel', data: this.state. sizeLabel},   
     { name: 'directionLabel', data: this.state.directionLabel},
     { name: 'countryLabel', data: this.state.countryLabel},
     { name: 'cityLabel', data: this.state.cityLabel},
     { name: 'saddress', data: this.state.saddress},
      { name: 'stateLabel', data: this.state.stateLabel},
     { name: 'saleLabel', data: this.state.saleLabel},
  { name: 'othercity', data: this.state.othercity},
     
     { name: 'phone', data: this.state.phone},
     
      ]).then((resp) => {
 
        var tempMSG = resp.data;
 
        tempMSG = tempMSG.replace(/^"|"$/g, '');
 
        //Alert.alert(tempMSG);
       if(tempMSG=="Success Added"){
      this.props.navigation.navigate('MarkOnMap', { saddress: this.state.saddress, phone:this.state.phone });

      this.setState({
 
    
        propertyLabel: '', 
        propertyindex: '',
        typeLabel:'',
        typeindex:'',
        priceLabel:'thousand',
        priceindex:'',
        sizeLabel:'acres',
        sizeindex:'',
        directionLabel:'',
        directionindex:'',
        countryLabel:'india',
        countryindex:'',
        cityLabel:'',
        cityIndex:'',
        stateLabel:'',
        stateIndex:'',
        saddress:'',
        size:'',
        price:'',
        saleLabel:'Sale',
        DocumentSource: null,
        documentdata:'',
        ImageSource: null,
       
            data: '',


      });
        }
 
      }).catch((err) => {
        // ...
      })
 
  
}
});
}

}
handleOnPress(value){
    this.setState({value:value})
}

  
  render() {
    
 let data1 = [{value: 'sale',}, {value: 'rent',}];
let data2 = [{value: 'commericial',}, {value: 'residencial',}];
let data3= [{value: 'industries',}, {value: 'offices',}];
let data4= [{value: 'home',}, {value: 'villa',}];
let data5= [{value: 'acres',}, {value: 'units',},{value: 'squares',},{value: 'cents',},];
let data6= [{value: 'east',}, {value: 'west',},{value: 'north',},{value: 'south',},{value: 'Northeast',},{value: 'Northwest',},{value: 'Southeast',},{value: 'Southwest',},];
 let data7= [{value: 'Delhi',}, {value: 'Ahmedabad',},{value: 'Kolkata',},{value: 'Surat',},{value: 'mumbai',},{value: 'Pune',},{value: 'Hyderabad',},{value: 'Vishakapatnam',},{value: 'Bengaluru',},{value: 'Chennai',},{value: 'Srikakulam',},{value: 'others',}]; 
let data8= [{value: 'Andhrapradesh'}, {value: 'Arunachalpradesh'},{value: 'Assam'},{value: 'Bihar'},{value: 'Chhattisgarh '},{value: 'Goa'},{value: 'Gujarat'},{value: 'Haryana'},{value: 'Himachal Pradesh'},{value: 'Jammu and Kashmir'},{value: 'Jharkhand'},{value: 'Karnataka'},{value: 'Kerala'},{value: 'Madhya Pradesh '},{value: 'Maharashtra'},{value: ' Manipur '},{value: ' Meghalaya'},{value: ' Mizoram '},{value: 'Nagaland'},{value: 'Odisha'},{value: 'Punjab '},{value: 'Rajasthan'},{value: 'Sikkim '},{value: 'Tamil Nadu '},{value: 'Telangana '},{value: 'Tripura'},{value: 'Uttar Pradesh '},{value: 'Uttarakhand'},{value: 'West Bengal'},];
let data9 = [{value: 'india',}, ];
 
  
 
    return (
  	<ScrollView 
						>
      <View style={styles.container}>
     
    <View  style={{height: 50,width:"90%", position:'relative',left:'4%',marginTop:'10%' }}
   >
        <Dropdown 
       //label={this.state.saleLabel}     
       data={data1}  
       value={this.state.saleLabel}      
       onChangeText={ saleValue => this.setState({ saleLabel: saleValue,})}
      />
        </View>
    
      
     
       
       <View  style={{height: 50,width:"40%", position:'relative',left:'4%',top:'0%' }}
   >
        <Dropdown 
       //label={this.state.saleLabel}     
       data={data2}  
       value={this.state.propertyLabel}      
       onChangeText={itemValue=> this.setState({  propertyLabel: itemValue,})}
      />

        </View>
      
     
       <View  style={{height: 50,width:"40%",position:'relative',left:'49%',
       top:'-6.5%'}}>
       
      {this.state.propertyLabel == 'commericial'? 
        <Dropdown 
       //label={this.state.saleLabel}     
       data={data3}  
       value={this.state.typeLabel}      
       onChangeText={ typeValue=> this.setState({  typeLabel: typeValue, })}
      />
    
     : null}

     {this.state.propertyLabel == 'residencial'? 
      <Dropdown 
       //label={this.state.saleLabel}     
       data={data4}  
       value={this.state.typeLabel}      
       onChangeText={ typeValue=> this.setState({  typeLabel: typeValue, })}
      />
    
     : null }
     
      
        </View>
          
         <TextInput style={{height: 50,width:"90%",borderBottomWidth: 1/ PixelRatio.get(), position:'relative',left:'4%',top:'-5%' }}
          
          // Adding hint in Text Input using Place holder.
          placeholder="please enter price"
 
          onChangeText={price => this.setState({price})}
          keyboardType = 'numeric'
          value={this.state.price}
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'/>
          
    
   
         <TextInput style={{height: 50,width:"40%",borderBottomWidth: 1/ PixelRatio.get(),position:'relative',left:'5%',top:'-4%' }}
          // Adding hint in Text Input using Place holder.
          placeholder="please enter size"
 
          onChangeText={size => this.setState({size})}
           keyboardType = 'numeric'
          value={this.state.size}
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'/>

  

          <View  style={{height: 50,width:"40%", position:'relative',left:'54%',top:'-11%' }}
   >
         <Dropdown 
       //label={this.state.saleLabel}     
       data={data5}  
       value={this.state.sizeLabel}      
       onChangeText={  sizeValue=> this.setState({  sizeLabel: sizeValue, })}
      />

        </View>
         
 
       
           <View  style={{height: 50,width:"90%", position:'relative',left:'4%',top:'-10%' }}
   >
          <Dropdown 
       label='select facing'    
       data={data6}  
       //value='select one'     
       onChangeText={  directionValue=> this.setState({  directionLabel: directionValue, })}
      />

        </View>
  

 <TextInput
       style={{height: 50,width:"90%", borderBottomWidth: 1/ PixelRatio.get(),position:'relative',left:'4%',top:'-9%' }}
        placeholder="please enter address"
        onChangeText={(saddress) => this.setState({saddress})}
        value={this.state.saddress}
      />
           
<View>
<View style={{position:'relative',
   top:"-50%",}} >
          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
 
          <View style={styles.ImageContainerstyle}>
 
            {this.state.ImageSource === null ? <Text style={{color:'black', textAlign: 'center',position:'relative',top:3}}> Image </Text> :
              <Image style={styles.ImageContainer} source={this.state.ImageSource} />
            }
 
          </View>
 
        </TouchableOpacity>
 </View>
 </View>


 <View  style={{height: 50,width:"45%",position:'relative',left:'45%',top:'-23%' }}
   >
{this.state.cityLabel == 'others'?

 <View>
  <TextInput  style={{height: 50,width:"90%",borderBottomWidth: 1/ PixelRatio.get(), position:'relative',left:'4%',top:'-5%' }}
          
           
          
          // Adding hint in Text Input using Place holder.
          placeholder="please enter city"
 
          onChangeText={othercity=>  this.setState({othercity})}
     
          value={this.state.othercity}
          // Making the Under line Transparent.
          />
      </View>
      
:

     <View>
       <Dropdown 
       label='select city'    
       data={data7}  
      value={this.state.cityLabel}     
       onChangeText={  cityValue=> this.setState({ cityLabel: cityValue})}
      />
        </View>
   
}

        </View>    
    <View  style={{height: 50,width:"45%", position:'relative',left:'45%',top:'-22%' }}
   >  
<Dropdown 
       label='select state'    
       data={data8}  
       //value='select one'     
       onChangeText={  stateValue=> this.setState({  stateLabel: stateValue})}
      />
        </View>
             
 

       
     
         <View  style={{height: 50,width:"90%",position:'relative',left:'4%',top:'-19%' }}
   >
        <Dropdown 
       label='select country'    
       data={data9}  
       //value='select one'     
       onChangeText={  countryValue=> this.setState({ countryLabel:countryValue})}
      />


        </View>
        
<View style={{paddingTop:0, position:'relative',
top:'-20%',}}>
        <TouchableOpacity onPress={this.uploadImageToServer} activeOpacity={0.6} style={styles.button} >
 
          <Text style={styles.TextStyle}> Mark On Map </Text>
 
        </TouchableOpacity>
        
</View>
      
         </View>
       
       </ScrollView>
     
   
    );  
  } 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  
  },
  
    ImageContainer: {
     borderRadius: 10,
   width: 110,
    height: 110,
   // top:'-40%',
   // paddingTop:50,
    left:'7%',
    borderColor: 'black',
     borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#CDDC39',
     position:'relative',
   //top:"-18%",
  //padding: 50
  },
  ImageContainerstyle: {
    borderRadius: 10,
   width: 100,
    height: 110,
   // top:'-40%',
   // paddingTop:50,
    left:'3%',
    borderColor: 'black',
     borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#CDDC39',
     position:'relative',
   //top:"10%",
  //padding: 40
  },
 

  button: {
 
   width: '80%',
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

