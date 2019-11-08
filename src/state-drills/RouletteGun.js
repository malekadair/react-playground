import React from "react";

class RouletteGun extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chamber: null,
      spinningTheChamber: false
    };
  }
  static defaultProps = {
    bulletInChamber: 8
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleClick = () => {
    this.setState({
      spinningTheChamber: true
    });
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8);

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false
      });
    }, 2000);
  };

  renderDisplay() {
    const { chamber, spinningTheChamber } = this.state;
    const { bulletInChamber } = this.props;
    console.log(chamber);
    if (spinningTheChamber) {
      return "spinning the chamber and pulling the trigger! ...";
    } else if (chamber == bulletInChamber) {
      return "BANG!!!!!";
    } else {
      return "you're safe!";
    }
  }

  render() {
    return (
      <div className="RouletteGun">
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleClick}>Pull the trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;
