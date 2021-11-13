import { Router } from 'itty-router';
import GetHandler from './handlers/get-post-handler';
import CreateHandler from './handlers/create-posts-handler';

const router = Router()

router
    .get('/api/posts', GetHandler)
    .post('/api/posts/', CreateHandler)
    .post('/api/posts/comment', CreateHandler)
    .get('*', () => new Response("Not found", { status: 404 }))

export const handleRequest = (request: any) => router.handle(request)