import { error,redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */



export function load({ data,params }) {
  if (params.slug === 'hello-world') {
    // ({data}) input parameter : data from +page.server.js    
    // console.log(JSON.stringify(data,null,2))
    
    return {
      ...data,    
      pc: "+page.js",
      from: '+page.js' , 
      title: 'Hello world!',
      content: '<p style="color:blue;">Welcome to our blog. <b>Lorem ipsum</b> dolor sit amet...</p>'
    };
  }
 
  if (params.slug === 'xxx') {
    throw error(400, 'xxx route path not exist');
  }  

  if (params.slug === 'redirect') {
    throw redirect(301, '/xjson');
  }  
 
  throw error(404, 'Not found');
}