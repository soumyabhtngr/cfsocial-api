import Store from '../posts-store'

const GetHandler = async () => {
    const posts = new Store();
    const body = JSON.stringify(await posts.all());
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    };
    return new Response(body, { headers });
}

export default GetHandler;