import { useState } from "react";

export function Accordion({ title, val, isOpen, openAccordion }) {
    console.log(val , "this is nasa");
    // console.log(title, "this is title");
    

    // if(typeof val === function()) console.log("");

    return (
        <div>
            <button className="title" onClick={openAccordion}>click me</button>
             {isOpen &&  val.map((it, index) => (
                    <div className="rows"  key={index}>{it.name}</div>
            ))}
        </div>
  );
}

