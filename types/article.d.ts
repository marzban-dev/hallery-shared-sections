export { };

declare global {
    interface IArticle {
        id: number;
        owner: ISimpleUser;
        title: string;
        slug: string;
        thumbnail: string;
        published: string;
        created: string;
        content: string;
        art: number;
        categories: string[];
        tags: string[];
    }
}
