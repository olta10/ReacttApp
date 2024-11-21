import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, StyleSheet, Button } from "react-native-web";

const MenuScreen = (props) => {

    return(
        <View>
            <Text style={styles.text}>OLTA 10</Text>
            <Button title="Go to List Screen" onPress={()=> props.navigation.navigate('List')}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    }
})

export default MenuScreen;