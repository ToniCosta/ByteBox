import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import TitleSection from './components/TitleSection.jsx'
import CardItem from './components/CardItem.jsx'

export default function App() {

  const Products = [
    {
      title: 'Beef Burguer',
      calories: 70,
      value: '10.00',
      sourceImage: 'https://img.icons8.com/arcade/100/null/hamburger.png'
    },
    {
      title: 'Pancakes',
      calories: 60,
      value: '15.00',
      sourceImage: 'https://img.icons8.com/stickers/100/null/pancake.png'
  
    }
  ]
  
  return (
    <View style={styles.container}>
      
      <TitleSection Titulo="Delivery Senac" />
      
      <CardItem Product={Products[0]} />
      <CardItem Product={Products[1]} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    padding: 10
  },
  titleSection: {
    fontSize: 24,
  }
});
