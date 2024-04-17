import {
  ContactShadows,
  Environment,
  OrbitControls,
  useCursor,
} from "@react-three/drei";
import { AnimateMan } from "../AnimateMan";
import { useAtom } from "jotai";
import { charactersAtom, mapAtom, socket } from "../SocketMamager";
import { useState } from "react";
import { Vector3 } from "three";
import Item from "../Items";
const Experience = () => {
  const [characters] = useAtom(charactersAtom);
  const [onFloor, setOnFloor] = useState(false);
  const [map] = useAtom(mapAtom);
  console.log(map);
  useCursor(onFloor);
  return (
    <>
      <Environment
        environmentIntensity={1.5}
        files={["/hdr/potsdamer_platz_1k.hdr"]}
      />
      <ambientLight intensity={0.7} />
      <ContactShadows blur={2} />
      <OrbitControls />
      {map.items.map((item, i) => (
        <Item key={`${item.name}-${i}`} item={item} />
      ))}

      <mesh
        rotation-x={-Math.PI / 2}
        position-y={-0.001}
        onClick={(e) => socket.emit("move", [e.point.x, 0, e.point.z])}
        onPointerEnter={() => setOnFloor(true)}
        onPointerLeave={() => setOnFloor(false)}
        position-x={map.size[0] / 2}
        position-z={map.size[1] / 2}
      >
        <planeGeometry args={map.size} />
        <meshStandardMaterial color={"#f0f0f0"} />
      </mesh>
      {characters.map((item) => (
        <AnimateMan
          key={item.id}
          position={
            new Vector3(item.position[0], item.position[1], item.position[2])
          }
          topColor={item.topColor}
          hairColor={item.hairColor}
        />
      ))}
    </>
  );
};
export default Experience;
