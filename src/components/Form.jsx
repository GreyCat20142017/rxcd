import React from 'react';

import Button from './Button';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const title = this.state.title;
    if (title) {
      this.props.onAdd(title);
      this.setState({title: ''});
    }
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  render() {
    const disabled = !this.state.title;

    return (
      <form className="todo-add-form" onSubmit={this.handleSubmit}>
      <input
        type="text"
        value={this.state.title}
        placeholder="Что нужно сделать?"
        onChange={this.handleChange}
      />
      <Button type="submit" disabled={disabled}>Добавить</Button>
      </form>
      );
  }
}

export default Form;
