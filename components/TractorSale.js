import { Text, View, StyleSheet,TextInput,ScrollView,TouchableOpacity,FlatList } from 'react-native';
import Constants from 'expo-constants';
import { RFValue } from "react-native-responsive-fontsize";
import React, { Component } from "react";
import DatePicker from 'react-native-custom-datetimepicker'
import DropDownPicker from "react-native-dropdown-picker";
import db from '../config'
import {  ListItem, Icon } from "react-native-elements";



export default class TractorS extends Component {
   constructor() 
  {
    super();
    this.state = { consigner:"",
      amount:"",
      invoisenumber:"",
      model:"" ,
      chachis:"",
      date:"",
      name:"",
       serial:"",
      fontsLoaded: false,
        dropdownHeight: 40,
         allTransactions: [],
      preview:"chachisno",
      
        };
  }
  
  submitInfo2 =()=> {
     const {consigner,amount,invoisenumber,model,chachis,date,name,serial}=this.state
      db.collection("Transactions2").add({
     model:model,
     chachis:chachis,
     date:date,
     name:name,
     amount:amount,
      serial:serial
     })
  
  this.setState({
    amount:"",
    invoisenumber:"",
    model:"",
    chachis:"",
    date:"",
    name:"",
     serial:"",
    })
  
  alert("Details saved successfully")
  
  };
  
  render(){
    const {serial,name,consigner,amount,invoisenumber,model,chachis,date,allTransactions,searchText}=this.state
    
return (
  
    <View style={styles.container}>
    
     

       <DatePicker
        style={styles.datePicker}
        date={this.state.date}
        value={date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="2016-05-01"
        maxDate="2050-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      <TextInput 
        style={styles.inputFont}
        placeholder={"Amount"}
        placeholderTextColor={"white"}
        value={amount}
        onChangeText={text => this.setState({amount:text})}  
      />

       <TextInput 
        style={styles.inputFont}
        placeholder={"Name of Customer"}
        placeholderTextColor={"white"}
        value={name}
        onChangeText={text => this.setState({name:text})}  
      />

        <TextInput 
        style={styles.inputFont}
        placeholder={"Model"}
        placeholderTextColor={"white"}
        value={model}
        onChangeText={text => this.setState({model:text})}  
      />

        <TextInput 
        style={styles.inputFont}
        placeholder={"ChachisNo."}
        placeholderTextColor={"white"}
        value={chachis}
        onChangeText={text => this.setState({chachis:text})}  
      />
              <TextInput 
        style={styles.inputFont}
        placeholder={"Seial no."}
        placeholderTextColor={"white"}
        value={serial}
        onChangeText={text => this.setState({serial:text})}  
      />
                 
      <TouchableOpacity 
        style={styles.submit} 
        onPress={()=>this.submitInfo2()}
      >
        <Text style={styles.submitText}>submit</Text>
      </TouchableOpacity>
    </View>
     
  );
  }
  
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop:10,
    backgroundColor: 'blue',
    padding: 8,
  },
  appTitleTextLight: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
marginTop:-100,
    marginLeft:100
  },
  inputFontLight: {
    height: RFValue(40),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(100),
    paddingLeft: RFValue(10),
    color: "white",
     marginTop:50,
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    marginTop:50,
  },
  input: {
   height: RFValue(40),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    marginTop:10,
  },
  submit:{
   borderColor: "black",
    borderWidth: 10,
    borderRadius: 50,
    paddingLeft: RFValue(10),
    backgroundColor:"red",
    marginTop:10,
    width:200,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:50
  },
  submitText:{
    color:"white",
    fontStyle:"italic",
    alignItems:"center",
    justifyContent:"center"
  },
  datePicker:{
     height:40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    color: "white",
    marginTop:10,
  },
  appTitleTextLight: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
    marginTop:-500,
    marginLeft:100
  },
  inputFontLight: {
    height: RFValue(40),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
     marginTop:200,
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    marginTop:1,
  },
  input: {
    height: RFValue(40),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    marginTop:1,
  },
  find:{
    borderColor: "black",
    borderWidth: RFValue(10),
    borderRadius: RFValue(100),
    paddingLeft: RFValue(10),
    backgroundColor:"red",
    marginTop:50,
    width:100,
    height:100,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:100
  },
  submitText:{
    color:"white",
    fontStyle:"italic",
    alignItems:"center",
    justifyContent:"center"
  },
   dropdownLabelLight: {
    color: "black",
  },
   dropdownLabel: {
    color: "white",
  },
});
