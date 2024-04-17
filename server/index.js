import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

io.listen(3001);

const characters = [];
const items = {
  desk: {
    name: "Desk",
    size: [3, 6],
  },
  Chair: {
    name: "Chair",
    size: [2, 2],
  },
  Lounge: {
    name: "Lounge",
    size: [3, 2],
  },
};
const map = {
  size: [10, 10],
  gridDivision: 2,
  items: [{ gridPosition: [4, 4], ...items.Chair }],
};
const generateRandomPosition = () => {
  return [Math.random() * map.size[0], 0, Math.random() * map.size[1]];
};

const generateRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

io.on("connection", (socket) => {
  console.log("user connected");

  characters.push({
    id: socket.id,
    position: generateRandomPosition(),
    hairColor: generateRandomColor(),
    topColor: generateRandomColor(),
  });
  io.emit("characters", characters);

  socket.on("move", (position) => {
    const character = characters.find((item) => item.id === socket.id);
    console.log("SSSSSSSS", character);
    character.position = position;
    io.emit("characters", characters);
  });

  socket.emit("hello", { map, characters, id: socket.id, items });

  socket.on("disconnect", () => {
    console.log("user disconnect");

    characters.splice(
      characters.findIndex((characters) => characters.id === socket.id),
      1
    );
    console.log(characters);
    io.emit("characters", characters);
  });
});
