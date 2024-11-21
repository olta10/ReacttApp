import React from 'react';
import { View } from 'react-native-web';

const StudentDetails = () =>{
    return(
        <View>
            <Text style={StyleSheet.text}>Student Details Component</Text>
        </View>
    )}
    const styles=StyleSheet.create({
    text:{
        textAlign:'center',
        fontSize:20,
        marginVertical:20
    }
})


export default StudentDetails;