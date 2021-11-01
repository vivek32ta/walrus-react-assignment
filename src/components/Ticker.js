import React, { useState, useEffect } from "react";

import { SocketContext } from "../context/Socket";
import CoinSection from "./CoinSection";

import SectionList from "../data/sections-list.json";

function Ticker() {
  const socket = React.useContext(SocketContext);

  const [socketConnected, setSocketConnected] = useState(false);
  const [tickerArrayData, setTickerArrayData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Refresh and update currency data
  const refreshTickerData = (unProcessedTickerArrayData) => {
    if (tickerArrayData.length !== 0) {
      const refreshedData = tickerArrayData.map((ticker) => {
        let temp = unProcessedTickerArrayData.find(
          (unProcessedTicker) => unProcessedTicker.s === ticker.s
        );
        if (temp) {
          ticker = temp;
          return ticker;
        } else {
          return ticker;
        }
      });
      setTickerArrayData(refreshedData);
      setIsLoading(false);
    } else {
      setTickerArrayData(unProcessedTickerArrayData);
      setIsLoading(false);
    }
    
  };


  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket connected to Server with ID :" + socket.id);
      setSocketConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected from server.");
      setSocketConnected(false);
    });

    socket.on("connect_error", (error) => {
      console.log("Error Connecting to the server");
      console.log(error);
      setSocketConnected(false);
    });

    if (socketConnected) {
      socket.on("subscribe", (payload) => {

      });

      socket.on("tickerArray", (payload) => {
        const payloadData = JSON.parse(payload);
        if (payloadData !== tickerArrayData) refreshTickerData(payloadData);
      });
    }
    return () => {
      if (socketConnected) socket.off("tickerArray");
    };
  }, [socket, socketConnected, tickerArrayData]);

  return (
    <>
      {isLoading ?
        <div class="d-flex justify-content-center loader">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        :
        <>
          {SectionList.map((section) =>
          (<CoinSection
            header={section.header}
            displayTickerArray={tickerArrayData.filter((ticker) => section.displayTickerArray.includes(ticker.s))}
          />)
          )}
          </>
      }
    </>
  );
}

export default Ticker;
