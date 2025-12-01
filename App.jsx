import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, Pressable, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const theme =useColorScheme();
  console.log(theme,'theme')
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello Bhaiya </Text>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <Image style={{width:250,height:250, top:20}} source={{uri:'https://images.unsplash.com/photo-1574539602047-548bf9557352?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
         <Button title="Click Me" onPress={() => alert('Button Pressed!')} />
   
    <Pressable onPress={() => alert('Pressed!')} style={{marginTop:20, padding:10, backgroundColor:'#DDDDDD', borderRadius:5}}>
      <Text style={{marginTop:20, fontSize:16, color:'blue'}}>This is Pressable</Text>
    </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
