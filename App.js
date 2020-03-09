import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Cesar");
  const [person, setPerson] = useState({ name: "Gil", age: 31 });

  const clickHandler = () => {
    setName("Cesar Machado");
    setPerson({ name: 'Gilvanete', age: 32});
  };

  return (
    <View style={styles.container}>
      <Text >My name is {name}</Text>
      <Text>
        His name {person.name} and his age is {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
  buttonContainer: {
    marginTop: 20,
  }
});
