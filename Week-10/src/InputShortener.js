import React, { useState } from 'react';

export default function InputShortener({setInputvalue}){
    const [value, setvalue] = useState("");

    const handleclick = ()=>{
        setInputvalue(value);
        setvalue("");
    }

    return(
     <div className='inputcontainer'>
        <h1>URL <span>Shortener</span></h1>
        <input
        type="text"
        placeholder="paste a link to shorten it"
        value={value}
        onChange={e=>setvalue(e.target.value)}/>
        <button onClick={handleclick}>shorten</button>
     </div>
    )
}