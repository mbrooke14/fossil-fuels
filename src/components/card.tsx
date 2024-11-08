// @ts-nocheck

import React, { useEffect, useRef } from "react";

import "./card.css"

export default function Card({ scalar, unit, precision, cardname, id }: {[key: string]: any}) {
    const reference = useRef(null)

    const update = function (ms) {
        reference.current.innerText = `${(String((scalar * (ms ?? 0) / 1000).toFixed(precision))).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}` 
        requestAnimationFrame(update)
    }

    useEffect(update, [])

    return <div className="card" id={id} >
        <h2 className="cardname">{cardname}</h2>
        <h3 className="cardvalue" ref={reference}>0</h3>
        <p className="cardunit">{unit}</p>
    </div>
}
