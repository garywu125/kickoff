<script>
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
