import { v4 as uuidv4 } from 'uuid';

// const _posts = [
//     {
//         id: 1,
//         title: "My first blog post",
//         text: "Hello world! This is my first blog post on my new Cloudflare Workers + Pages blog.",
//         published_at: new Date("2020-10-23")
//     },
//     {
//         id: 2,
//         title: "Updating my blog",
//         text: "It's my second blog post! I'm still writing and publishing using Cloudflare Workers + Pages :)",
//         published_at: new Date("2020-10-26")
//     }
// ]

export default class PostsStore {
    async getAllPosts() {
        const keys = await POST.list().keys;
        const response = [];
        for (const key of keys) {
            response.push(await POST.get(key.name));
        }

        return response;
    }
    async all() {
        return await getAllPosts();
    }
    async find(id) {
        return await POST.get(id);
    }
    async create(post) {
        const uuid = uuidv4();
        await POST.put(uuid, JSON.stringify(post));

        return await getAllPosts();
    }
}