import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import TaskInput from "./components/TaskInput";
import ListItem from "./components/ListItem";

export default function App() {
  const [items, setItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const addTask = (enteredTask) => {
    let index = items.length + 1;
    setItems((currentItems) => [
      ...currentItems,
      { key: index.toString(), value: enteredTask },
    ]);
    setIsVisible(false);
  };

  const deleteItem = (taskId) => {
    setItems((currrentItems) => {
      console.log(taskId);
      return currrentItems.filter((item) => item.key !== taskId);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <Text style={styles.title}>By Jaime Arriola</Text>
      <Button title="Add New Task" onPress={() => setIsVisible(true)} />
      <TaskInput addTask={addTask} isVisible={isVisible} />
      <FlatList
        data={items}
        renderItem={(itemData) => (
          <ListItem deleteItem={deleteItem} item={itemData.item} />
        )}
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
