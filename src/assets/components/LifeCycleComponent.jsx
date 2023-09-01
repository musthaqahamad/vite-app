 class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Header />, document.getElementById('root'));
  
  class Header extends React.Component {
   shouldComponent() {
      console.log("component should update")
      return true;
    }
    componentDidMount() {
      console.log("Complete mount")
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log
    3{"previous state and props"}
    console,log
    {prevProps,prevState}
    return null
}
    componentDidUpdate() {
      document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
      return (
        <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <div id="div1"></div>
          <div id="div2"></div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Header />, document.getElementById('root'));