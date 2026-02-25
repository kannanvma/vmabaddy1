"use client";

import { useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Players() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");

  const addPlayer = async () => {
    await addDoc(collection(db,"players"),{
      name:name,
      phone:phone,
      email:email,
      matchesPlayed:0,
      matchesWon:0
    });

    alert("Player Added");
  };

  return (
    <div className="p-10">

      <h1 className="text-2xl font-bold">Add Player</h1>

      <input
        className="border p-2 m-2"
        placeholder="Player Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        className="border p-2 m-2"
        placeholder="Mobile Number"
        onChange={(e)=>setName(e.target.value)}
      />
  
      <input
        className="border p-2 m-2"
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white p-2"
        onClick={addPlayer}
      >
        Add Player
      </button>

    </div>
  );
}
