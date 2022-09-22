<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} - Something went wrong</title>
</svelte:head>

{#if $page.status === 404}
    <h1>404 - 網頁不存在</h1>
{:else}   
    <p>
        抱歉,出了點差錯
    </p> 
{/if}