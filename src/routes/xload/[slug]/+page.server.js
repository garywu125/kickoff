import { error,redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */

export function load() { 
    return {
      from_server: 'page.server.js',      
      ps: "+page.server.js"
    };
  }
 
  
