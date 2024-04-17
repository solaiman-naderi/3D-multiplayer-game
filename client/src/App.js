import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import SocketManager from "./components/SocketMamager";
function App() {
  return (
    <>
      <SocketManager />
      <Canvas shadows camera={{ position: [6, 6, 6] }}>
        <Experience />
      </Canvas>
    </>
  );
}
export default App;
