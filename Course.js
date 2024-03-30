import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';


import Menu from '../main/menu';
import Maths from '../api/Maths';
import Biology from '../api/Biology';
import Commerce from '../api/Commerce';
import Arts from '../api/Arts'



const Course =()=> {
  const navigation = useNavigation();
  return(
    <View>
        <Text style={{
          fontSize:20,
          alignSelf:'center',
          alignContent:'center',
          alignItems:'center',
          color:'#4a4e69',
          fontFamily:'Roboto',
          fontWeight:'bold',
          marginTop:30
          
          }}>SELECT YOUR STREAM</Text>
        

        
        
        <View style={{flex:2, flexDirection:'column',backgroundColor:'#EEEEEE',borderRadius:50,margin:8,marginTop:'20%' }}>
        <TouchableOpacity>
         <Button title= 'Maths' color={'#00ADB5'} 
     onPress = {()=> navigation.navigate('Maths')}/> 
     </TouchableOpacity>
      </View>
       
        <View style={{flex:2, flexDirection:'column',backgroundColor:'#EEEEEE',borderRadius:50,margin:8}}>
        <TouchableOpacity>
         <Button title= 'Biology' color={'#00ADB5'} 
     onPress = {()=> navigation.navigate('Biology')}/> 
     </TouchableOpacity>
      </View>
        <View style={{flex:2, flexDirection:'column',backgroundColor:'#EEEEEE',borderRadius:50,margin:8}}>
        <Button
        title="Commerce" color={'#00ADB5'}
        onPress={() => navigation.navigate('Commerce')}
      />
      </View>
        <View style={{flex:2, flexDirection:'column',backgroundColor:'#EEEEEE',borderRadius:50,margin:8}}>
        <Button
        title="Arts/Other" color={'#00ADB5'}
        onPress={() => navigation.navigate('Arts')}
      />
      
      </View>
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({

  
})




