import './CommentList.css'

export function CommentList () {
    const comments = [
        { title: 'Comentario 1', description: 'Este es el primer comentario, con algo de detalle aquí.' },
        { title: 'Comentario 2', description: 'Otro comentario interesante con algo más de contenido.' },
        { title: 'Comentario 3', description: 'Comentario final, con un poco más de explicación sobre el tema.' }
    ];
    return <>
        <div className="comment-list-container">
            <h1 className="comment-list-title">Lista de Comentarios</h1>
            <div className="comment-cards">
                {comments.map((comment, index) => (
                    <div className="comment-card" key={index}>
                        <h2 className="comment-card-title">{comment.title}</h2>
                        <p className="comment-card-description">{comment.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
}