/**
 *
 * 리스트를 클릭하면, '완료', '진행중' 을 토글 하는 기능입니다.
 * 그런데....
 * 동작을 안합니다.
 * 어떤 부분이 문제일까요?
 *
 *
 */

import React, { Component, PureComponent } from 'react'

export default class Q04 extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: '집 사러 가기',
        done: false
      },
      {
        id: 2,
        title: '반차 쓰기',
        done: false
      }
    ]
  }

  handleDone = id => {
    const { todos } = this.state
    const idx = todos.findIndex(todo => todo.id === id)

    console.log(idx, id)

    this.setState({
      todos: [
        ...todos.slice(0, idx),
        {
          ...todos[idx],
          done: !todos[idx].done
        },
        ...todos.slice(idx + 1, todos.length)
      ]
    })
  }

  render() {
    const { todos } = this.state
    const { id, title, done } = todos

    return (
      <>
        <Todos items={todos} handleDone={this.handleDone} done={done} />
      </>
    )
  }
}

class Todos extends PureComponent {
  render() {
    const { items, handleDone, done } = this.props
    console.log({ items })
    return (
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => handleDone(item.id)}>
            {item.title} - {item.done ? '완료' : '진행중'}
          </li>
        ))}
      </ul>
    )
  }
}
