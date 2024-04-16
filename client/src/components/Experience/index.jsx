import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { AnimateMan } from "../AnimateMan";
import { useAtom } from "jotai";
import { charactersAtom } from "../SocketMamager";
const Experience = () => {
  const [characters] = useAtom(charactersAtom);
  console.log(characters);
  return (
    <>
      <Environment
        environmentIntensity={1.5}
        files={["/hdr/potsdamer_platz_1k.hdr"]}
      />
      <ambientLight intensity={0.7} />
      <ContactShadows blur={2} />
      <OrbitControls />

      {characters.map((item) => (
        <AnimateMan
          key={item.id}
          position={item.position}
          topColor={item.topColor}
          hairColor={item.hairColor}
        />
      ))}
    </>
  );
};
export default Experience;
