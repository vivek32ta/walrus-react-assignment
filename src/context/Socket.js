import io from "socket.io-client";
import React from 'react';

export const socket = io("https://stg.walrusmoney.com");
export const SocketContext = React.createContext();