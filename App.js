import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  const textInputHandler = (text) => {
    setTask(text);
  };

  const addTask = () => {
    setItems((currentItems) => [...currentItems, task]);
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
      <View>
        {items.map((item, index) => (
          <Text key={index}> {item} </Text>
        ))}
      </View>
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
  },
  textInput: {
    borderBottomColor: "black",
    width: "80%",
    borderBottomWidth: 1,
  },
});
