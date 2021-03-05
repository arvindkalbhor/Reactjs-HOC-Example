import React from "react";

const withCounter = (Comp,incrBy=1) => {
  class newComponent extends React.Component {
    state = {
      count: 0,
    };

    handleIncreament = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrBy };
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
