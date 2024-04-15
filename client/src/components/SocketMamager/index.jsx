import { useEffect } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3001");
const SocketManager = () => {
  const onConnect = () => {
    console.log("Connect");
  };
  const onDisconnect = () => {
    console.log("disConnect");
  };
  const onHello = () => {
    console.log("say hello");
  };
  useEffect(() => {
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("hello", onHello);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("hello", onHello);
    };
  }, []);
  return null;
};
export default SocketManager;
