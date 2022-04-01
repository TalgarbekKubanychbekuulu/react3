// function App() {
//   const example1 = ["pear", "yellow", "small"];
//   const example2 = ["toyota", "camry", "black", "expensive"];


//   const example3 = { name: "pear", color: "yellow", size: "small" };
//   const example4 = { make: "toyota", model: "camry", price: "expensive", carColor:'black' };

//   const [name, color, size] = example1;
//   const [make, model, price, carColor] = example2;

// // const { name, color, size } = example3;
// // const { carColor } = example4;

//   return ( 
//     <div className="App">
//       This {name} is {color} and {size}.
//       This {make} {model} is {price}  and {carColor}.
//     </div>
//    );
// }

// export default App;

import Example from "./Components/Example/Example";

function App() {
  
  return (
    <div className="App">
      <Example/>
    </div>
  );
}

export default App;