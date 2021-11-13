import { v4 as uuidv4 } from 'uuid';

export default class PostsStore {
    async getAllPosts() {
        // @ts-ignore
        const value = await POST.list();
        const response = [];
        for (let i = 0; i < value.keys.length; i++) {
            // @ts-ignore
            const id = value.keys[i].name;
            // @ts-ignore
            const result = await POST.get(id);
            response.push({ id, result });
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