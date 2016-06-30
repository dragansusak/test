import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions'

let AddTodo = ({ dispatch }) => {
    let input2

    return (
        <div>
            <form onSubmit={e => {
        e.preventDefault()
        if (!input2.value.trim()) {
          return
        }
        dispatch(addTodo(input2.value))
        input2.value = ''
      }}>
                <input ref={node55 => {input2 = node55}} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}
AddTodo = connect()(AddTodo)

export default AddTodo