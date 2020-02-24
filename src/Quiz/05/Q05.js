/**
 *
 * Q. 버튼을 클릭하면, count 가 증가합니다.
 * count 가 증가하면서, ChilrenComponent 도 불필요하게 렌더링이 되고 있습니다.
 * count 가 증가해도, ChilrenComponent가 렌더링 되지 않게 하려면 어떤 부분을 수정해야할까요?
 *
 *
 * 클릭할 때 마다 칠드런컴포넌트의 items값도 같이 렌더링되기 때문에
 * 방법은..?
 */
import React, { Component } from 'react'

export default class Q05 extends Component {
  state = {
    count: 0
  }
  onIncrement = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    const { count } = this.state
    return (
      <>
        <ChildrenComponent />
        {count}
        <button onClick={this.onIncrement}>+</button>
      </>
    )
  }
}

class ChildrenComponent extends Component {
  render() {
    const items = ['apple', 'banana', 'orange']
    // const { items } = this.props
    console.log('ChildrenComponent rendered!')
    return (
      <ul>
        {items.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    )
  }
}
