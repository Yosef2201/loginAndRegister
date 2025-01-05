import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { createUser } from '@/API/fechApi'
import { useNavigation } from 'expo-router'
const Register = () => {
    const Nav=useNavigation()
   const [userName,setUserName]=useState('')
   const [email,setEmail]=useState('')
   const [phone,setPhone]=useState('')
   const [password,setPassword]=useState('')
   const regiisterUser=()=>{
    const body={
        userName,
        email,
        phone,
        password
    }
    createUser(body)
    .then((Response)=>{
        if(Response.success==true)
Nav.navigate('Home')
        else
        alert('משהוא לא תקין')
    })
   }
  return (
    <View>
     <Text>Name (Phone)</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUserName}  // עדכון מצב שם
        value={userName}
        placeholder="Enter your phone number"
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}  // עדכון מצב סיסמה
        value={password}
        placeholder="Enter your password"
        secureTextEntry={true}  // להסתיר את הסיסמה
      /> 
       <Text> (Phone)</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPhone}  // עדכון מצב שם
        value={phone}
        placeholder="Enter your phone number"
      />
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}  // עדכון מצב סיסמה
        value={email}
        placeholder="Enter your password"
      /> 
      
      <Button title='reigister' onPress={regiisterUser}/>
      
         </View>
  )
}

export default Register

const styles = StyleSheet.create({})