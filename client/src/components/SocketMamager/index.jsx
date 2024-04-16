import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAtom, atom } from "jotai";

export const socket = io("http://localhost:3001");
export const charactersAtom = atom([]);

const SocketManager = () => {
  const [_characters, setCharacters] = useAtom(charactersAtom);

  const onConnect = () => {
    console.log("Connect");
  };
  const onDisconnect = () => {
    console.log("disConnect");
  };
  const onHello = () => {
    console.log("say hello");
  };

  const onCharacters = (value) => {
    console.log("character", value);
    setCharacters(value);
  };
  useEffect(() => {
    console.log("Solix");
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("hello", onHello);
    socket.on("characters", onCharacters);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("hello", onHello);
      socket.off("characters", onCharacters);
    };
  }, []);
  return null;
};
export default SocketManager;
