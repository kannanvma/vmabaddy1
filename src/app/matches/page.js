"use client";

import { useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Matches(){

const [team1,setTeam1] = useState("");
const [team2,setTeam2] = useState("");

const scheduleMatch = async () => {

await addDoc(collection(db,"matches"),{

team1:team1,
team2:team2,
score1:0,
score2:0,
status:"scheduled"

});

alert("Match Scheduled");

};

return(

<div className="p-10">

<h1 className="text-2xl font-bold">Schedule Match</h1>

<input
className="border p-2 m-2"
placeholder="Team 1"
onChange={(e)=>setTeam1(e.target.value)}
/>

<input
className="border p-2 m-2"
placeholder="Team 2"
onChange={(e)=>setTeam2(e.target.value)}
/>

<button
className="bg-purple-500 text-white p-2"
onClick={scheduleMatch}
>
Schedule
</button>

</div>

)

}
