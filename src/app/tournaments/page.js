"use client";

import { useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Tournaments(){

  const [tournamentName,setTournamentName] = useState("");

  const createTournament = async () => {
    await addDoc(collection(db,"tournaments"),{
      name:tournamentName
    });

    alert("Tournament Created");
  };

  return(

    <div className="p-10">

      <h1 className="text-2xl font-bold">Create Tournament</h1>

      <input
      className="border p-2 m-2"
      placeholder="Tournament Name"
      onChange={(e)=>setTournamentName(e.target.value)}
      />

      <button
      className="bg-green-500 text-white p-2"
      onClick={createTournament}
      >
      Create
      </button>

    </div>

  )
}
