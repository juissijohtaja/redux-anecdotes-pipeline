import React from 'react'

const Anecdote = ({ anecdote, handleVote, handleDelete }) => {
  return (
    <li key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={handleVote}>vote</button>
            <button onClick={handleDelete}>delete</button>
          </div>
    </li>
  )
}

export default Anecdote