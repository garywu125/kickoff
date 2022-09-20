import { error,redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */

export function load({ params }) {
  if (params.slug === 'hello-world') {
    return {
      title: 'Hello world!',
      content: '<p style="color:red;">Welcome to our blog. <b>Lorem ipsum</b> dolor sit amet...</p>'
    };
  }
  if (params.slug === 'flee') {
    throw redirect(301, '/xjson');
  }  
 
  throw error(404, 'Not found');
}