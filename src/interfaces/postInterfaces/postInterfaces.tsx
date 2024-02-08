interface IPost {
    id: number;
    title: string,
    body: string
}
interface IPostProps {
    post: IPost;
    getPostDetails: (post: IPost) => void;

}
interface IPropsDetails{
    postDetails: IPost | null;
}

export type {
    IPost, IPostProps, IPropsDetails
}