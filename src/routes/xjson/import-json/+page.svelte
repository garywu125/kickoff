<script>
    // vite support json import
    // import the entire object
    //import json from './example.json'
    // import a root field as named exports - helps with tree-shaking!
    // import { field } from './example.json'


    import { person,talks,ticketsPrices } from "$lib/data/clientsSponsors.json";
   
    const regularTicketPrice = ticketsPrices.find(
      ({ type }) => type === "regular"
    ).price;
   
    // ... TRUNCATED
    //array destructure assignment
    const [speaker0,speaker1]=talks
    //nested object destructure assignment 
    const {name: n, family: {father: f}}=person
  </script>
  <svelte:head>
    <title>Import JSON</title>
  </svelte:head>
  <h3>nested object destructure assignment</h3>
  <p>person info: </p>
  <ul>    
    <li>name:{n}</li>
    <li>father:{f}</li>
  </ul>
  
  <h3>array destructure assignment</h3>
  <p>speaker[0],speaker[1]</p>
  <ul>
    <li>speaker0:{speaker0.speaker}</li>
    <li>speaker1:{speaker1.speaker}</li>
  </ul>
  
  <h3>list all speakers whole info </h3>
  <ul>
    {#each talks as {speaker,title}}
      <li>{speaker}:{title}</li>
    {/each}
  </ul>
  <h3>input parameter destructure assignment</h3>
  <p>get the regular ticket price</p>
  <p>regular ticket price : {regularTicketPrice}</p>
  