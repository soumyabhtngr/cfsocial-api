import { Router } from 'itty-router';
import GetHandler from './handlers/get-post-handler';
import GetPostByIdHandler from './handlers/get-post-by-id-handler';
import CreateHandler from './handlers/create-posts-handler';
import { handleOptions } from './handlers/options-handler';

const router = Router()

router
    .get('/api/posts', GetHandler)
    .post('/api/posts/', CreateHandler)
    .get('/api/posts/:id', GetPostByIdHandler)
    .get('*', () => new Response("Not found", { status: 404 }))

export const handleRequest = (request: any) => request.method === "OPTIONS" ? handleOptions(request) : router.handle(request)