export const getPosts = (): Promise<any[] | undefined> => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const args: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        
      },
     
    };
  
    return fetch(url, args)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json() as Promise<any[]>;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        return undefined; // Return undefined in case of an error
      });
  };
  export const getAllUserId = (): Promise<any | undefined> => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const args = {
      method: 'get',
      headers: {'Content-Type': 'application/json',},
    };
    return fetch(url, args);
  }; 