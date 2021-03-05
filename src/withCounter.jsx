import React from "react";

const withCounter = (Comp) => {
  class newComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    handleIncreament = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      const { count } = this.state;
      return <Comp count={count} increamentCount={this.handleIncreament} />;
    }
  }

  return newComponent;
};

export default withCounter;
