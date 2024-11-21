import {ScrollView } from 'react-native';
import { FlatList } from 'react-native-web';
import Product from './Products';

class ProductScreen extends React.Component{
    constructor(props) {
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        this.setState({
            products: data
        })
    }

    render(){
        return (
            <ScrollView>
                <View style={StyleSheet.container}>
                    <Text style={StyleSheet.title}>Top Products of 2024</Text>
                    <FlatList data={this.state.products}
                                showsVerticalScrollIndication={false}
                                renderItem={({item}) => (
                                <View>
                                    <Product name={item} 
                                            category={item.category}
                                            price={item.price}
                                            stock={item.stock}    
                                            img={item.image}    
                                            desc={item.description}
                                    ></Product>
                                </View>
                            )}>
                    </FlatList>
                </View>
            </ScrollView>
        )
    }
}