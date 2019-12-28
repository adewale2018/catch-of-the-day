import React, { Component } from "react";

class AddFishForm extends Component {
  createFish = e => {
    e.preventDefault();
    console.log("CREATING FISH...");
  };

  render() {
    return (
      <form className='fish-edit' onSubmit={this.createFish}>
        <input type='text' name='name' placeholder='Name' required />
        <input type='text' name='price' placeholder='Price' required />
        <select name='status' required>
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <textarea name='desc' placeholder='Desc' required></textarea>
        <input type='text' name='image' placeholder='Image' required />
        <button type='submit'>+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
