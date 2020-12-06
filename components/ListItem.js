import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
const ListItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity onPress={() => deleteItem(item.key)}>
      <View style={styles.listItem}>
        <Text style={styles.item}> {item.value} </Text>
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
