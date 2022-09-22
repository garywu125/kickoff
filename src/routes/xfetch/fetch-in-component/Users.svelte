<script>
	import { onMount } from 'svelte';	
    let users=[]
	const getData = async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/users');
			if (response.headers.get('content-type')?.includes('application/json')) {
					const json = await response.json();
					return { response, json };
			} else {
					return { response };
			}
	};
	
	onMount(async ()=> {
        const {response,json}=await getData();             
        if (json) {
            console.log(JSON.stringify(json))
            users=json;   
        }    
    })
</script>
<!-- <div>
    {JSON.stringify(users,null,2)}    
    {data[1].name}
</div> -->
<ul>
    {#each users as user}
      <li>
        <strong>Name:</strong>{user.name}<br>
        <strong>Email:</strong>{user.email}<br>
        <strong>Web Site:</strong>{user.website}<br>
      </li>
    {/each}
</ul>