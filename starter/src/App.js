import './App.css';
import SlidingBox from './SlidingBox';

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#'
  let i = 0;
  while(i < 6){
    color += letters[Math.floor(Math.random() * 16)];
    i++
  }
  return color
}

const generateColorArray = () => {
  let colorArray = [];
  let i = 0;
  while( i < 7){
    colorArray.push(generateRandomColor())
    i++
  }
  return colorArray
}

const slides = generateColorArray().map((slide , i) => {
  return(
    <SlidingBox color={slide} key ={i} zIndex = {i} />
  )
})

function App() {
  return (
<>
{slides}
</>
  );
}

export default App;
