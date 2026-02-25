"use client";

import { useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Teams(){

  const [teamName,setTeamName] = useState("");

  const createTeam = async () => {
    await addDoc(collection(db,"teams"),{
      name:teamName
    });

    alert("Team Created");
  };

  return(

    <div className="p-10">

      <h1 className="text-2xl font-bold">Create Team</h1>

      <input
      className="border p-2 m-2"
      placeholder="Team Name"
      onChange={(e)=>setTeamName(e.target.value)}
      />

      <button
      className="bg-green-500 text-white p-2"
      onClick={createTeam}
      >
      Create
      </button>

    </div>

  )
}
