
import { useEffect } from 'react'
import './App.css'
import { CommentForm } from './components/CommentForm'
import { CommentList } from './components/CommentList'
import { fetchComments, postComment } from './services/comments'

function App() {

  useEffect(()=> {
    // fetchComments().then((res)=>{
    //   console.log(res);
    //   postComment({ name: 'xd', message: 'owo' }, res)  
    // })
    
  },[])
  return (
    <>
    <main>
      <div className='container'>
        <section className='list'>      
          <CommentList/>
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
