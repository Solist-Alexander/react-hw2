const placeHolderUrl = 'https://jsonplaceholder.typicode.com'

const todos = '/todos'
const albums = '/albums'
const comments = '/comments'
const posts = '/posts'

const urls = {
    todos:{
        base: todos
    },
    albums:{
        base: albums
    },
    comments:{
        base: comments,
        byId:(postId) => `${posts}/${postId}`
    }
}

export {
    placeHolderUrl, urls
}