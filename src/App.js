import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from "react-transition-group";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  };

  showModal = (event) => {
    this.setState({ modalIsOpen: true });
  };

  hideModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={
            () =>
              this.setState((prevState) => ({
                showBlock: !prevState.showBlock
              }))
            // this.setState({ showBlock: !this.state.showBlock })
            // this.setState({ ...this.state, showBlock: !this.state.showBlock })
          }
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("onEnter")}
          onEntering={() => console.log("onEntering")}
          onEntered={() => console.log("onEntered")}
        >
          {(state) => (
            <div>
              <span>{state}</span>
              <div
                style={{
                  backgroundColor: "red",
                  width: 100,
                  height: 100,
                  margin: "auto",
                  transition: "all 1s ease-out",
                  opacity: state === "exiting" || state == "exited" ? 0 : 1
                }}
              ></div>
            </div>
          )}
        </Transition>

        {/* {this.state.modalIsOpen && (
          <Modal show={this.state.modalIsOpen} closed={this.hideModal} />
        )} */}
        {/* <Modal show={this.state.modalIsOpen} closed={this.hideModal} /> */}
        <Modal show={this.state.modalIsOpen} closed={this.hideModal} />
        <Backdrop show={this.state.modalIsOpen} />
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
