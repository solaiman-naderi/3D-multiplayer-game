import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAtom, atom } from "jotai";

export const socket = io("http://localhost:3001");
export const charactersAtom = atom([]);
export const mapAtom = atom(null);
export const userAtom = atom(null);

const SocketManager = () => {
  const [_characters, setCharacters] = useAtom(charactersAtom);
  const [_map, setMap] = useAtom(mapAtom);
  const [_user, setUser] = useAtom(userAtom);

  const onConnect = () => {
    console.log("Connect");
  };
  const onDisconnect = () => {
    console.log("disConnect");
  };
  const onHello = (value) => {
    console.log("say hello", value);
    setMap(value.map);
    setUser(value.id);
    setCharacters(value.characters);
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
