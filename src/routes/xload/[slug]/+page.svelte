<script>
    import {page} from '$app/stores'
	import { dataset_dev } from 'svelte/internal';
    export let data
    console.log("$page data:",JSON.stringify($page.data,null,2))
</script>
<!-- <div>
    <p>$page data:{JSON.stringify($page.data)}</p>
</div> -->
<h1 style="color:red">資料合併&& 資料覆蓋: </h1>
<h2>若 data key 相同 ,資料覆蓋的順序</h2>
<ul> 
    <li>+page.js overwrite +page.server.js </li>
    <li>+layout.js overwrite +layout.server.js </li>
    <li>+page.js overwrite +layout.js </li>
</ul>
<h2>+page.server.js && +page.js 合併/覆蓋後的資料:{data.from_server}</h2>
<h2>+layout.js && +page.js 方合併/覆蓋後的資料:{data.from}</h2>
<h3>{data.title}</h3>
<div>{@html data.content}</div> 
<h1 style="color:red">透過$page.data 取得彙整後資料-</h1>
<!-- 透過$page.data 取得彙整後資料-->
<hr>

<div>
    <h2>from : {$page.data.from_server}</h2>
    <h2>from : {$page.data.from}</h2>
    <h2>to : {$page.data.title}</h2>
    <div>{@html $page.data.content}</div> 
    <ul>
        <li>{$page.data.lps}</li>
        <li>{$page.data.lpc}</li>
        <li>{$page.data.ps}</li>
        <li>{$page.data.pc}</li>
    </ul>

</div>

