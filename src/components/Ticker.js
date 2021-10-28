import React, { useState, useEffect, useRef } from "react";

import { SocketContext } from "../context/Socket";

function Ticker() {
  const socket = React.useContext(SocketContext);

  const [socketConnected, setSocketConnected] = useState(false);
  const [tickerArrayData, setTickerArrayData] = useState([]);
  const [subscribeData, setSubscribeData] = useState(null);

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
        setSubscribeData(payload);
      });

      socket.on("tickerArray", (payload) => {
        const payloadData = JSON.parse(payload);
        if (payloadData != tickerArrayData) refreshTickerData(payloadData);
      });
    }
    return () => {
      if (socketConnected) socket.off("tickerArray");
    };
  }, [socket, socketConnected, tickerArrayData]);

  //Refresh and update currency data
  const refreshTickerData = (unProcessedTickerArrayData) => {
    if (tickerArrayData.length != 0) {
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
    } else {
      setTickerArrayData(unProcessedTickerArrayData);
    }
  };

  const subscribeToCurrency = (currencyTicker) => {
    if (socketConnected) {
      socket.emit("subscribe", currencyTicker);
    }
  };

  const allTickerCards = tickerArrayData.map((eachCurrency) => (
    <div className="col">
      <div className="card">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <span className="card-text">
            <strong>{eachCurrency.s}</strong> ₹ {eachCurrency.l}
          </span>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-4">{allTickerCards}</div>
    </>
  );
}

export default Ticker;
