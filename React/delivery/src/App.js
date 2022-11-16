import { CardItem } from './components/CardItem'
import './App.css';

function App() {
  const products = [
    {
      title: 'Roasted steak with garnish vegetables potatoes rice',
      value: '40.00',
      sourceImage: 'https://img.freepik.com/premium-photo/picanha-rice-tropeiro-beans-french-fries_538646-11363.jpg'
    },
    {
      title: 'Flat lay assortment with delicious brazilian food',
      value: '45.00',
      sourceImage: 'https://img.freepik.com/free-photo/flat-lay-assortment-with-delicious-brazilian-food_23-2148739179.jpg'
  
    },
    {
      title: 'Chicken steak with lemon, tomato, chili, and carrot on white plate',
      value: '35.00',
      sourceImage: 'https://img.freepik.com/free-photo/chicken-steak-with-lemon-tomato-chili-carrot-white-plate_1150-25887.jpg'
  
    },
    {
      title: 'Picanha rice tropeiro beans and french fries',
      value: '65.00',
      sourceImage: 'https://img.freepik.com/premium-photo/picanha-rice-tropeiro-beans-french-fries_538646-11363.jpg'
  
    },
    {
      title: 'Fried roll filled with musrhooms and cheese',
      value: '35.00',
      sourceImage: 'https://img.freepik.com/free-photo/fried-roll-filled-with-musrhooms-cheese_140725-6205.jpg'
  
    },
    
  ]
  return (
    <div className="App">
      <h1>Delivery Senac</h1>
      <main className="content">
        <CardItem product={products[0]}/>
        <CardItem product={products[1]}/>
        <CardItem product={products[2]}/>
        <CardItem product={products[3]}/>
        <CardItem product={products[4]}/>
      </main>
      
    </div>
  );
}

export default App;
