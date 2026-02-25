import { useEffect, useState } from "react";
import { db } from "../../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function PlayersPage(){

const [players,setPlayers] = useState([]);

useEffect(()=>{

const fetchPlayers = async () => {

const querySnapshot = await getDocs(collection(db,"players"));

let data = [];

querySnapshot.forEach((doc)=>{
data.push({id:doc.id,...doc.data()});
});

setPlayers(data);

};

fetchPlayers();

},[]);

return(

<div>

<h1 className="text-2xl font-bold mb-6">
Players
</h1>

<table className="w-full bg-white shadow rounded">

<thead>

<tr className="bg-gray-200">

<th className="p-3">Name</th>
<th>Email</th>
<th>Matches Played</th>
<th>Matches Won</th>

</tr>

</thead>

<tbody>

{players.map((player)=>(

<tr key={player.id} className="border-b">

<td className="p-3">{player.name}</td>
<td>{player.email}</td>
<td>{player.matchesPlayed}</td>
<td>{player.matchesWon}</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

