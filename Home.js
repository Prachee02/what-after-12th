import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, Flatlist } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {useNavigation} from '@react-navigation/native';

import Menu from '../main/menu';
import Maths from '../api/Maths';
import Biology from '../api/Biology';
import Commerce from '../api/Commerce';
import Arts from '../api/Arts'


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Home =() => {

  const navigation = useNavigation();
  return (
    

    <View style={styles.container}>
      <Text style={styles.paragraph}>
      HELLO STUDENTS!
      </Text>
      <Card>
      </Card>
   <View style={{ flex: 1,
      backgroundColor:'#C9D6DF',
      
        }}>
         <Image
          style={{ height:150,width:150,alignSelf:'center', paddingTop:20}}
          source={require('../../assets/11.png')}
        />
        
        <Text style={{ color:'#03045e',
          alignSelf:'center',
          fontSize:20,
          fontFamily:'monospace',
          marginTop:30
          
        }}>
          
          
       Hope you all are doing well. 
          Here we would like you to get prepared for further studies. 
        
        </Text>
     
      </View>
 <View style={styles.menustyle}>
 <View style = {styles.lineStyle}></View>
 <Menu/>
 <View style = {[styles.lineStyle, {marginVertical:8}]}></View>
 </View>

      </View>
    
      
  );
}

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
    backgroundColor: '#ecf0f1',
    padding: 2,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lineStyle:{
    marginBottom:10,
    borderWidth:0.5,
    borderColor:'grey',
 
  }
});
export default Home;