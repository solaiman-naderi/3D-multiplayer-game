import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
function App() {
  return (
    <Canvas shadows camera={{ position: [2, 2, 2] }}>
      <Experience />
    </Canvas>
  );
}
export default App;
