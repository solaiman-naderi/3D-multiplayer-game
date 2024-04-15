import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import SocketManager from "./components/SocketMamager";
function App() {
  return (
    <>
      <SocketManager />
      <Canvas shadows camera={{ position: [2, 2, 2] }}>
        <Experience />
      </Canvas>
    </>
  );
}
export default App;
