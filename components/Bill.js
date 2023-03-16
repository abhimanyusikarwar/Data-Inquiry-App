import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList
} from "react-native";
import {  ListItem, Icon } from "react-native-elements";
import db from "../config";

export default class TractorSale extends Component {
  constructor(props) {
    super(props);
    this.state = {
        amount:"",
      invoisenumber:"",
      model:"" ,
      chachis:"",
      date:"",
      name:"",
      allTransactions: [],
      searchText: "",
      lastVisibleTransaction: null,
    };
  }
  componentDidMount = async () => {
    this.getTransactions();
  };

  getTransactions = () => {
    db.collection("Transactions2")
      .limit(10)
      .get()
      .then(snapshot => {
        snapshot.docs.map(doc => {
          this.setState({
            allTransactions: [...this.state.allTransactions, doc.data()],
            lastVisibleTransaction: doc
          });
        });
      });
  };

  renderItem = ({ item, i }) => {
    var date = this.state.date

   
    return (
      <View style={{ borderWidth: 1 }}>
        <ListItem key={i} bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>
              {`${item.serial}.  ${item.date}   ${item.name} ( ${item.model} )  ${item.chachis}     (Rs.${item.amount}/-)`}
            </ListItem.Title>
            
          </ListItem.Content>
        </ListItem>
      </View>
    );
  };

   handleSearch = async text => {
    var enteredText = text.toUpperCase().split("");
    text = text.toUpperCase();
    console.log(enteredText,text)
    this.setState({
      allTransactions: []
    });
    if (!text) {
      this.getTransactions();
    }

    if (enteredText[0] === "D") {
      db.collection("Transactions2")
        .where("model", "==", text)
        .get()
        .then(snapshot => {
          snapshot.docs.map(doc => {
            this.setState({
              allTransactions: [...this.state.allTransactions, doc.data()],
              lastVisibleTransaction: doc
            });
          });
        });
    } else if (enteredText[0] === "S") {
      db.collection("Transactions2")
        .where("chachis", "==", text)
        .get()
        .then(snapshot => {
          snapshot.docs.map(doc => {
            this.setState({
              allTransactions: [...this.state.allTransactions, doc.data()],
              lastVisibleTransaction: doc
            });
          });
        });
    }
  };

fetchMoreTransactions = async text => {
    var enteredText = text.toUpperCase().split("");
    text = text.toUpperCase();

    const { lastVisibleTransaction, allTransactions } = this.state;
    if (enteredText[0] === "D") {
      const query = await db
        .collection("Transactions2")
        .where("model", "==", text)
        .startAfter(lastVisibleTransaction)
        .limit(10)
        .get();
      query.docs.map(doc => {
        this.setState({
          allTransactions: [...this.state.allTransactions, doc.data()],
          lastVisibleTransaction: doc
        });
      });
    } else if (enteredText[0] === "S") {
      const query = await db
        .collection("Transactions2")
        .where("chachis", "==", text)
        .startAfter(this.state.lastVisibleTransaction)
        .limit(10)
        .get();
      query.docs.map(doc => {
        this.setState({
          allTransactions: [...this.state.allTransactions, doc.data()],
          lastVisibleTransaction: doc
        });
      });
    }
  };

  render() {
    const { searchText, allTransactions } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
        <Text style={styles.textinput}>Tractor Sale</Text>
        </View>
        <View style={styles.lowerContainer}>
          <FlatList
            data={allTransactions}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
             onEndReached={() => this.fetchMoreTransactions(searchText)}
            onEndReachedThreshold={0.7}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5653D4"
  },
  upperContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  textinputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#9DFD24",
    borderColor: "#FFFFFF"
  },
  textinput: {
    width: "57%",
    height: 50,
    padding: 10,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "#5653D4",
    fontFamily: "Rajdhani_600SemiBold",
    color: "#FFFFFF"
  },
  scanbutton: {
    width: 100,
    height: 50,
    backgroundColor: "#9DFD24",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  scanbuttonText: {
    fontSize: 24,
    color: "#0A0101",
    fontFamily: "Rajdhani_600SemiBold"
  },
  lowerContainer: {
    flex: 0.8,
    backgroundColor: "#FFFFFF"
  },
  title: {
    fontSize: 20,
    fontFamily: "Rajdhani_600SemiBold"
  },
 
});
