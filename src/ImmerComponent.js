import React, { Component } from 'react';

class ImmerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      price: 0,
      list: [
        { id: 1, name: "Item #1", price: 100 },
        { id: 2, name: "Item #2", price: 200 },
        { id: 3, name: "Item #3", price: 300 },
      ],
    };
  }
  handleSubmit = (e) => {
    console.log("huy");
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}></form>
        </div>
        <div>
          {this.state.list.length ? (
            this.state.list.map((item) => (
              <ul>
                <li key={item.id}>
                  <p>
                    {item.id}
                    {item.name}
                    {item.price}
                  </p>
                </li>
              </ul>
            ))
          ) : (
            <p>list is empty</p>
          )}
        </div>
      </>
    );
  }
}

export default ImmerComponent;
