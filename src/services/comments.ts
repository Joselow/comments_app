import { Comment } from "../assets/interfaces/Comment"

const END_POINT = 'https://api.jsonbin.io/v3/b/'
const BIN_ID = '677f4a81e41b4d34e4724956'

export const fetchComments = async() => {    
    const response = await fetch(END_POINT+BIN_ID,{
        method: 'GET',
        headers: {
            'Content-type': 'aplication/json',
            'X-Master-Key': import.meta.env.VITE_PUBLIC_API_KEY
        }
    })
    if (!response.ok) {
        throw Error('something was wrong')
    }

    const data = await response.json()
    return data.record as Comment []
}

export const postComment = async({ comment, comments} :{ comment: Comment, comments: Comment[] }) => {

    // await new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       reject(new Error('dsadsa')); // Rechazar la promesa con un error
    //     }, 3000);
    //   })    

    const response = await fetch(END_POINT+BIN_ID,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': import.meta.env.VITE_PUBLIC_API_KEY
        },
        body: JSON.stringify([...comments, comment])
    })
    if (!response.ok) {
        throw Error('something was wrong')
    }
    return comment
}