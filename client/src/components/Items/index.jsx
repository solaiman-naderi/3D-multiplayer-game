import { useGLTF } from "@react-three/drei";
import { useAtom } from "jotai";
import { mapAtom } from "../SocketMamager";

const Item = ({ item }) => {
  console.log(item);
  const { name, size, gridPosition } = item;
  const map = useAtom(mapAtom);
  console.log(map);
  const { scene } = useGLTF(`/models/items/${name}.glb`);
  return (
    <primitive
      object={scene}
      position={[
        size[0] / map[0].gridDivision / 2 +
          gridPosition[0] / map[0].gridDivision,
        0,
        size[1] / map[0].gridDivision / 2 +
          gridPosition[1] / map[0].gridDivision,
      ]}
    />
  );
};
export default Item;
