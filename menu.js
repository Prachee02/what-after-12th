import * as React from 'react';
import { Text, View, StyleSheet, Image, Button , TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
   return (
     <View style = {styles.menuContainer}>

     <TouchableOpacity style={styles.buttonStyle}
     onPress = {()=> navigation.navigate('Home')}>
    <Text style={styles.textStyle}> Home </Text>
     </TouchableOpacity>


<TouchableOpacity style={styles.buttonStyle}
     onPress = {()=> navigation.navigate('Course')}>
    <Text style={styles.textStyle}> Course </Text>
     </TouchableOpacity>


<TouchableOpacity style={styles.buttonStyle}
     onPress = {()=> navigation.navigate('About')}>
    <Text style={styles.textStyle}> About </Text>
     </TouchableOpacity>


     <TouchableOpacity style={styles.buttonStyle}
     onPress = {()=> navigation.navigate('More')}>
    <Text style={styles.textStyle}> More </Text>
     </TouchableOpacity>


     


     </View>
   );
};

export default Menu;

const styles = StyleSheet.create({
  menuContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    backgroundColor:'#d6ccc2',
    
  },

  textStyle:{
    textTransform:'uppercase',
    marginButton:50,
   
   
  }
})


