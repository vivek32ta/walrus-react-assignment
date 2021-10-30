import React from "react";
import tickerNames from '../data/ticker-names.json';

function CoinSection(props) {
    return (
        <>
            <div className="container coin-section-container">
                <div className="coin-section-header">
                    {props.header}
                </div>
                <div className="container coin-array-container">
                    {props.displayTickerArray.map((ticker) => {
                        return (
                            <div className="col-md-5">
                                <div className="card ticker-container">
                                    <div className="row">
                                        <span className="ticker-logo col-2">
                                            <img src={`./assets/crypto-icons/${ticker.s.slice(0, -3).toLowerCase()}.svg`}
                                                className="float-start" alt=".." />
                                        </span>
                                        <div className="col-10">
                                            <div className="row">
                                                <span className="ticker-name col-5">
                                                    {tickerNames[ticker.s.slice(0, -3)]}
                                                </span>
                                                <span className="ticker-price col-7">
                                                    ₹ {Number(ticker.c).toLocaleString('en-IN')}
                                                </span>
                                            </div>
                                            <div className="row">
                                                <span className="ticker-code col-5">
                                                    {ticker.s.slice(0, -3)}
                                                </span>
                                                <span className={ticker.p >= 0 ? "ticker-cop up col-7" : "ticker-cop down col-7 "}>
                                                    {ticker.p >= 0 ?
                                                        <i className="bi bi-caret-up-fill"></i>
                                                        :
                                                        <i className="bi bi-caret-down-fill"></i>

                                                    }
                                                    &nbsp; {ticker.P}%
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    );
}
export default CoinSection;