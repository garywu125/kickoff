<script>
    // cors error :CORS error: No 'Access-Control-Allow-Origin' header is present on the requested resource
	export let data;
    console.log(data)
</script>
<h2>sveltekit demo</h2>
<p>my name is gary,age : {data.age}</p>
<ul>
    {#each data.users as user}
     <li>
        {user.name}<br>
        {user.email}<br>
        {user.website}<br>
     </li>
     {/each}
</ul>
