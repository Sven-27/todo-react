import React, { useState } from 'react'
import TodoItem from "./TodoItem"
import styled from 'styled-components'

const TodoList = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const addBtnHandler = () => {
    console.log("addBtnHandler")
    console.log(todo)
  }

  return (
    <Wrapper>
      <TodoCategoryHeader>
        <CategoryIcon style={{background: '#fd76a1'}}>
          <i className={'fas fa-user'} />
        </CategoryIcon>
        <Title>
          Personal
        </Title>
        <TodoInput value= {todo} onChange={e => setTodo(e.target.value)} />
        <AddTodo className="fas fa-plus" onClick={addBtnHandler} />
      </TodoCategoryHeader> 
        <TodoItem />
    </Wrapper>
  )
}

export default TodoList

const Wrapper = styled.div`
  background: #20212d;
  margin-bottom: 30px;
  border-radius: 20px;
  overflow: hidden;
`

const TodoCategoryHeader = styled.header`
  background: #272833;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
`

const CategoryIcon = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`

const Title = styled.div`
  flex: 1;
  font-size: 18px;
  font-weight: 600;

`

const TodoInput = styled.input`
  height: 30px;
  font-size: 18px;
  outline: none;
  border: none;
  background: #20212d;
  border-radius: 4px;
  color: #fff;
  padding: 4px 10px;
  margin-right: 4px;
`

const AddTodo = styled.i`
  padding: 10px 16px;
  border-radius: 4px;
  margin-right: -12px;

  &:hover{
    background: #20212d;
    cursor: pointer;
  }
`

const TodoListItems = styled.div`

`