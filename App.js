import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { useState } from 'react';
export default function App() {
  let [data, setdata] = useState("Hello world")
  let [data2, setdata2] = useState([
    {name:"ken"},
    {name:"ken"},
    {name:"ken"},
    {name:"ken"},
  ])
  return (
    <View style={styles.container}>
      <Text>{data}</Text>
      <TextInput 
        multiline
        style={styles.input}
        placeholder="e.g. Ken"
        onChangeText={(val)=>{
          setdata(val)
        }}
      />
      {data2.map((val) => {
        return <Text> {val.name} </Text>
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor:"#777",
    width: 200
  }
});
