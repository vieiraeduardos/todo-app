import React, {Component} from 'react';

class AddTodo extends Component {

  state = {
    "code": "",
    "content": ""
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state);
    this.setState({
      content: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Insira novo todo:</label>
          <input type="text" onChange={this.handleChange} value={this.state.content} />
        </form>
      </div>
    )
  }


}
export default AddTodo;
