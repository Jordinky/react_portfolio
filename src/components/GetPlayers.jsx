import React, {useState,useEffect} from "react";

export default function GetPlayers(){
    const [playerData, setData] = useState(null);
    const url = "https://www.balldontlie.io/api/v1/players"; 
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((playerData) => {
            setData(playerData.data);
        })
        .catch((error) => console.log(error));
    },[]);
    console.log(playerData);
    return(
        <ul>
            {playerData.map((data) => (<li key = {data.key}>{data.first_name}</li>))} 
        </ul>  
    )
}