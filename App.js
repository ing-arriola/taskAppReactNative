import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import TaskInput from "./components/TaskInput";
import ListItem from "./components/ListItem";

export default function App() {
  const [items, setItems] = useState([]);

  const addTask = (enteredTask) => {
    let index = items.length + 1;
    setItems((currentItems) => [
      ...currentItems,
      { key: index.toString(), value: enteredTask },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>JAIME ARRIOLA TASK LIST APP</Text>
      <TaskInput addTask={addTask} />
      <FlatList
        data={items}
        renderItem={(itemData) => <ListItem item={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
  },

  textInput: {
    borderBottomColor: "black",
    width: "80%",
    borderBottomWidth: 1,
    fontSize: 20,
  },
});
