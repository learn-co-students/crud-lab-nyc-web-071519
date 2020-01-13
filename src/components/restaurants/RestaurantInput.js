import React, { Component } from "react"

class RestaurantInput extends Component {
  state = { text: "" }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({ text: "" })
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.changeHandler}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default RestaurantInput
