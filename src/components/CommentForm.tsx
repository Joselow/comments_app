import { formatCommentTypes } from '../helpers/formatCommentTypes'
import { useComments } from '../hooks/useComments'
import './CommentForm.css'

export function CommentForm () {
    const { createPost, comments, isLoadingCreate, isErrorCreate } = useComments()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isLoadingCreate) return

        const form = e.target as HTMLFormElement
        const data = Object.fromEntries(new FormData(form))
        const comment = formatCommentTypes(data)
        createPost({ comment, comments });
    }

    return <>
      <div className="form-container">
            { isErrorCreate && 'Ocurrio un error al crear el comentario' }
            <h2 className="form-title">Deja tu comentario</h2>
            <form onSubmit={handleSubmit} className="comment-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Nombre:</label>
                    <input
                        type="text"
                        name='name'
                        id="name"
                        className="form-input"
                        placeholder="Escribe tu nombre"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message" className="form-label">Mensaje:</label>
                    <textarea
                        name='message'
                        id="message"
                        className="form-textarea"
                        placeholder="Escribe tu comentario"
                        required
                    />
                </div>

                <button type="submit" className="submit-btn"
                    disabled={isLoadingCreate}
                >
                    { isLoadingCreate ? 'Guardando...' : 'Guardar' }
                </button>
            </form>
        </div>
        
    </>
}
