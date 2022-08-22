import React, { useEffect } from 'react';
import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from 'axios';

export default function LinkResult({inputValue}){
   console.log(inputValue);
    const [linkresult, setlinkresult] = useState("");
    const [copy, setCopy] = useState(false);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(false);

    const dataFetch = async ()=>{
        try {
            setloading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            setlinkresult(res.data.result.full_short_link);
            console.log(linkresult);
        } catch(err) {
            setError(err);
        } finally {
            setloading(false);
        }
    }

    useEffect(()=>{
        if(inputValue?.length){
            console.log('input length');
            dataFetch(); 
        }
    });

    if(loading){
        return <p>Loading...</p>;
    }
    if(error) {
        return <p className="noData">Something went wrong </p>
      }

    return(
    
        <div className='resultcontainer'>
            <p>{linkresult}</p>

            <CopyToClipboard 
            text={linkresult}
            onCopy={()=>setCopy(true)}>
            <button className={copy ? 'copy':""}>copy to clipboard</button>
             </CopyToClipboard>
            
             
        </div>
    
       
    )
}