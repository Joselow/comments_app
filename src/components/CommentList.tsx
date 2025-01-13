import { Comment } from '../assets/interfaces/Comment'
import { useComments } from '../hooks/useComments'
import './CommentList.css'

interface Props {
    comments: Comment []
}

export function CommentList ({ comments }: Props ) {
    const { comments: xdf, isLoading } = useComments()
    
    return <>
        <div className="comment-list-container">
            <h1 className="comment-list-title">Lista de Comentarios
                {
                    isLoading && 'xd'
                }

            </h1>
            <div className="comment-cards">
                {comments.map((comment) => (
                    <div className="comment-card" key={comment.id}>
                        <h2 className="comment-card-title">{comment.name}</h2>
                        <p className="comment-card-description">{comment.message}</p>
                    </div>
                ))}
           
            </div>
        </div>
    </>
}