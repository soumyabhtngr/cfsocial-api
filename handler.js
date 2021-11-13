import { Router } from 'itty-router'
import GetHandler from './handlers/posts'
import CreateHandler from './handlers/create-posts'

const router = Router()

router
    .get('/api/posts', GetHandler)
    .post('/api/posts/', CreateHandler)
    .get('*', () => new Response("Not found", { status: 404 }))

export const handleRequest = request => router.handle(request)