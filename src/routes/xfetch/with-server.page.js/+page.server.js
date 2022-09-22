import { error,redirect } from '@sveltejs/kit';

export async function load() {
    const res=await fetch("https://jsonplaceholder.typicode.com/users")                        
    const users=await res.json()

      if (res.ok) {
        return {
            age:28,
            users
        }   
      }  
                         
      throw error(404, 'Not found')                            
    
    
}