import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { AnimateMan } from "../AnimateMan";
const Experience = () => {
  return (
    <>
      <Environment
        environmentIntensity={1.5}
        files={["/hdr/potsdamer_platz_1k.hdr"]}
      />
      <ambientLight intensity={0.7} />
      <ContactShadows blur={2} />
      <OrbitControls />
      <AnimateMan />
      <AnimateMan position-x={2} hairColor="red" topColor="blue" />
    </>
  );
};
export default Experience;
