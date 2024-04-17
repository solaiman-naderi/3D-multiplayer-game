import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

io.listen(3001);

const characters = [];

const generateRandomPosition = () => {
  return [Math.random() * 3, 0, Math.random() * 3];
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

  socket.emit("hello");
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
