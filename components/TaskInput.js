import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal, Text } from "react-native";

const TaskInput = ({ addTask, isVisible }) => {
  const [task, setTask] = useState("");
  const textInputHandler = (text) => {
    setTask(text);
  };
  const addTaskHandler = () => {
    addTask(task);
    setTask("");
  };
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.row}>
        <Text style={styles.title}>Create a new task</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a task"
          onChangeText={textInputHandler}
          value={task}
        />
        <Button onPress={addTaskHandler} title="Add" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 33,
    marginBottom: 25,
    fontWeight: "bold",
  },
  textInput: {
    borderBottomColor: "#fff",
    width: "80%",
    borderBottomWidth: 1,
    fontSize: 25,
    color: "#fff",
    marginBottom: 20,
  },
  row: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});

export default TaskInput;
