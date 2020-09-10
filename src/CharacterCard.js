// import React from 'react';
// export default function CharacterCard(props) {
//  return (
//  <div className = "card" >{props.value}</div>
// )
// }

import './App.css';
import React, { useState } from 'react';
export default function CharacterCard(props) {
 const [active, setActive] = useState(false);
 const activate = () => {
    if(!active){
    setActive(true)
    props.activationHandler(props.value)
    }
 }
 const className = `card ${active ? 'activeCard': ''}`
 return (
 <div className={className} onClick={activate}>{props.value}</div>
 )

}
