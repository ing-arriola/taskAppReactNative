import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");
  const textInputHandler = (text) => {
    setTask(text);
  };
  return (
    <View style={styles.row}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter a task"
        onChangeText={textInputHandler}
        value={task}
      />
      <Button onPress={() => addTask(task)} title="Add" />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: "black",
    width: "80%",
    borderBottomWidth: 1,
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

export default TaskInput;
