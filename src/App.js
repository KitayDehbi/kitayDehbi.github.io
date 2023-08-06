import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { FruitListComponent } from "./component/FruitListComponent/FruitListComponent";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <FruitListComponent/>
      </div>
    </ChakraProvider>
  );
}

export default App;
