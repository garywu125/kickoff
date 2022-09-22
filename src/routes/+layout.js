// import { error,redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */

export function load() {
 
    return {
      from: '+layout.svelte',
      to: 'any page'
    };
}
 
 
