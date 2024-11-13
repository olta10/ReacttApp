import React from "react";
import {View, Text, FlatList, StyleSheet} from 'react-native'
import data from './data/dataProducts.json'

class CountriesScreen extends React.Component{ 

    constructor(){
        super();
        this.state = {
            countries: []
        }
    }
    componentDidMount(){
        this.setState({
            countries: data
        })
    }

    render(){
        return(
        <View>
            <Text style={StyleSheet.screenTitle}>Countries Screen</Text>
            <FlatList data={this.state.countries}
                        keyExtractor={({item}) => (
                        <View style={styles.cardWrapper}>
                            <Text>Name: {item.name}</Text>
                            <Text>Country Name: {item.country}</Text>
                            <Text>Price Name: {item.name}</Text>
                            <Text>Stock Name: {item.name}</Text>
                            <Text>Image Name: {item.name}</Text>
                            <Text>Description: {item.description}</Text>
                        </View>
                        )}
            ></FlatList>
        </View>
        )                                                                                                                          
    }
}

const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: 'bold'
    }
});

export default CountriesScreen;