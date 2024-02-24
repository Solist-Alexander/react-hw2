const placeHolderUrl  = 'https://jsonplaceholder.typicode.com'

const users = '/users'
const posts = '/posts'
const comments = '/comments'

const urls = {
    users:{
        base: users,
        byId:(id)=> `${users}/${id}`,
        postsById:(userId) => `${users}/${userId}${posts}`,
        postById:(postId) => `${posts}/${postId}`,
        postCommentsById:(postId) => `${posts}/${postId}${comments}`

    }
}

export {
    placeHolderUrl, urls
}