const MyContext = React.createContext(defaultValue);

class Parent extends React.Component {
  setValue = (value) => {
    this.setState({ value });
  };

  state = {
    setValue: this.setValue,
    value: localStorage.getItem("parentValueKey"),
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value !== prevState.value) {
      // Whatever storage mechanism you end up deciding to use.
      localStorage.setItem("parentValueKey", this.state.value);
    }
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
