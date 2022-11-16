import { StyleSheet, View, Text, Image } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'; 

export default function CardItem(props) {

    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.title}>
                    {props.Product.title}
                </Text>
                <Text style={styles.titleCalories}>
                    <FontAwesome5 name="fire" size={24} color="gold" style={styles.icon} />
                    {props.Product.calories} Calories
                </Text>
                <Text style={styles.value}>
                    $ {props.Product.value}
                </Text>
            </View>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={{uri: props.Product.sourceImage}} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    
    card: {
        width: 320,
        backgroundColor: '#fff',
        borderRadius: 8,
        margin: 10,
        display: 'flex',
        flexFlow: 'row',
        
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100,
    },
    title: {
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#34495e',
    },
    titleCalories: {
        margin: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#34495e',
    },
    icon: {
        marginRight: 5
    },
    value: {
        margin: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ff7600',
    },
  });

