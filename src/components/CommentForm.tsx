import './CommentForm.css'

export function CommentForm () {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const { name, description } = Object.fromEntries(new FormData(form))
        console.log({ name, description });
    }

    return <>
      <div className="form-container">
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
                    <label htmlFor="description" className="form-label">Descripción:</label>
                    <textarea
                        name='description'
                        id="description"
                        className="form-textarea"
                        placeholder="Escribe tu comentario"
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">Guardar</button>
            </form>
        </div>
        
    </>
}
