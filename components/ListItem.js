import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
const ListItem = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.listItem}>
        <Text style={styles.item}> {item} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#000",
    padding: 10,
    marginVertical: 6,
    borderRadius: 10,
  },
  item: {
    color: "#fff",
    fontSize: 20,
  },
});

export default ListItem;
