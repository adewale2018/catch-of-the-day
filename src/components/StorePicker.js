import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: "" };
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  goToStore = e => {
    e.preventDefault();

    const storeName = this.state.inputValue;
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className='store-selector' onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type='text'
          placeholder='Store Name'
          required
          // defaultValue={getFunName()}
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button type='submit'>Visit Store → </button>
      </form>
    );
  }
}

export default StorePicker;
