
import './App.css';
import SlidingBox from './SlidingBox';


function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const arr =[generateRandomColor(), generateRandomColor(), generateRandomColor(), generateRandomColor(), generateRandomColor(), generateRandomColor() ]

let slides = arr.map((slide, i) => {
  return(
    <SlidingBox color={slide} zIndex={i} />
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
