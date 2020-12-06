import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  const textInputHandler = (text) => {
    setTask(text);
  };

  const addTask = () => {
    let index = items.length + 1;
    setItems((currentItems) => [
      ...currentItems,
      { key: index.toString(), value: task },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a task"
          onChangeText={textInputHandler}
          value={task}
        />
        <Button onPress={addTask} title="Add" />
      </View>
      <FlatList
        data={items}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text style={styles.item}> {itemData.item.value} </Text>
          </View>
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
  row: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  textInput: {
    borderBottomColor: "black",
    width: "80%",
    borderBottomWidth: 1,
  },
  listItem: {
    backgroundColor: "#000",
    padding: 10,
    marginVertical: 6,
    borderRadius: 10,
  },
  item: {
    color: "#fff",
  },
});
