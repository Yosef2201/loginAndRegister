import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = (props:any) => {

  return (
    <View style={styles.container}>
    
      <Text style={styles.pp}>{props.productName}</Text>
      <Text style={styles.pr}>{props.price}</Text>
      <Text >{props.Image}</Text>


    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        width:200,
        // height:200,

        justifyContent:'center',
        // flex:1,
        alignItems:'center',
        // left:60,
    
    },
    pp:{
        fontSize:24
    },
    pr:{
        fontSize:18,
        backgroundColor:'red',
        color:'white',
        borderRadius:50,
        padding:5
    }
})