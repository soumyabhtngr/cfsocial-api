import Store from '../posts-store'

const CreateHandler = async (request: any) => {
    const posts = new Store();
    const postContent = request.body;

    const response = JSON.stringify(await posts.create(postContent));
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    };
    return new Response(response, { headers });
}

export default CreateHandler;