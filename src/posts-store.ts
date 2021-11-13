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
        // @ts-ignore
        const value = await POST.list();
        const response = [];
        for (let i = 0; i < value.keys.length; i++) {
            // @ts-ignore
            const id = value.keys[i].name;
            // @ts-ignore
            const post = await POST.get(id);
            response.push({ id, ...post });
        }

        return response;
    }
    async all() {
        return await this.getAllPosts();
    }
    async find(id: string) {
        // @ts-ignore
        return await POST.get(id);
    }
    async create(post: string) {
        const uuid = uuidv4();
        // @ts-ignore
        await POST.put(uuid, post);

        return await this.getAllPosts();
    }
}