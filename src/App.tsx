
import './App.css'
import { CommentForm } from './components/CommentForm'
import { CommentList } from './components/CommentList'
import { useComments } from './hooks/useComments'

function App() {
  const { comments, isError, isLoading,  } = useComments()

  console.log('renders');
  
  return (
    <>
    <main>
      <section>
          { isLoading && 'LOADING...' }
          { isError && 'Ocurrio un error' }
      </section>
      <div className='container'>
        <section className='list'>      
          <CommentList comments={comments}/>
        </section>
        <section className='form'>
          <CommentForm/>
        </section>
      </div>
    </main>
    </>
  )
}

export default App
