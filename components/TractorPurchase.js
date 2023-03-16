import { Text, View, StyleSheet,TextInput,ScrollView,TouchableOpacity } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import React, { Component } from "react";
import DatePicker from 'react-native-custom-datetimepicker'
import DropDownPicker from "react-native-dropdown-picker";

import db from '../config'



export default class TractorP extends Component {
  constructor(props){
    super(props)
    this.state = {
      consigner:"",
      amount:"",
      invoisenumber:"",
      model:"" ,
      chachis:"",
      date:"",
      serial:"",
      dropdownHeight:40,
      previewConsigner: "itl"
    }
  }
 submitInfo =()=> {
     const {consigner,amount,invoisenumber,model,chachis,date,serial}=this.state
      db.collection("Transactions").add({
     serial:serial,
     amount:amount,
     invoisenumber:invoisenumber,
     model:model,
     chachis:chachis,
     date:date
     })
  
  this.setState({
    serial:"",
    consigner:"",
    amount:"",
    invoisenumber:"",
    model:"",
    chachis:"",
    date:""
    })
  
  alert("Details saved successfully")
  
  };
 


render(){
    const {consigner,amount,invoisenumber,model,chachis,date,serial}=this.state
    let previewConsigner = {
       itl:db.collection("ITL"),
       "pragati enterprises":db.collection("Pragati Enterprises")
      };
    
  return (

    <View style={styles.container}>
 
      <Text style={styles.appTitleTextLight}>Bill</Text>
      
      
        <DropDownPicker
                    items = {[
                      {label: "ITL", value: "itl"},
                      {label: "Pragati Enterprises", value: "pragati enterprises"}
                    ]}
                    consigner={this.state.consigner}   
                    value={consigner}                 
                     defaultValue = {this.state.previewConsigner}
                    containerStyle = {{height: 40,
                      borderRadius: 20,
                      marginTop:300
                      }}
                    onOpen = {() => {this.setState({dropdownHeight: 170});}}
                    onClose = {() => {this.setState({dropdownHeight: 40});}}
                    style = {{backgroundColor: "transparent"}}
                    itemStyle = {{justifyContent: "flex-start"}}
                   dropDownStyle={{
                    backgroundColor:"#2f345d"
                  }}
                  labelStyle={
                   styles.dropdownLabelLight
                  }
                  arrowStyle={styles.dropdownLabel}
                    onChangeItem = {item => {
                      this.setState({previewConsigner: item.value})
                    }}
                  />

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
        style={styles.input}
        placeholder={"Serial no."}
        placeholderTextColor={"white"}
        value={serial}
        onChangeText={text => this.setState({serial:text})}  
      />
      <TextInput 
        style={styles.input}
        placeholder={"Amount"}
        placeholderTextColor={"white"}
        value={amount}
        onChangeText={text => this.setState({amount:text})}  
      />

       <TextInput 
        style={styles.input}
        placeholder={"InvoiseNumber"}
        placeholderTextColor={"white"}
        value={invoisenumber}
        onChangeText={text => this.setState({invoisenumber:text})}  
      />

        <TextInput 
        style={styles.input}
        placeholder={"Model"}
        placeholderTextColor={"white"}
        value={model}
        onChangeText={text => this.setState({model:text})}  
      />

        <TextInput 
        style={styles.input}
        placeholder={"ChachisNo."}
        placeholderTextColor={"white"}
        value={chachis}
        onChangeText={text => this.setState({chachis:text})}  
      />
                 
      <TouchableOpacity 
        style={styles.submit} 
        onPress={()=>this.submitInfo()}
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
    marginTop:50,
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
