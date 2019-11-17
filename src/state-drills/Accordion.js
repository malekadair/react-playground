import React from "react";

class Accordion extends React.Component {
  static defaultProps = {
    sections: []
  };

  state = {
    currentIndex: null
  };

  handleButtonClick(index) {
    this.setState({ currentIndex: index });
  }

  renderSections() {
    return this.props.sections.map((section, index) => {
      return (
        <div>
          <li key={index}>
            <button onClick={() => this.handleButtonClick(index)}>
              {section.title}
            </button>
            {this.renderContent(section, index)}
          </li>
        </div>
      );
    });
  }

  renderContent(section, index) {
    if (this.state.currentIndex === index) {
      return <p>{section.content}</p>;
    }
  }

  render() {
    return (
      <div>
        <ul>{this.renderSections()}</ul>
      </div>
    );
  }
}

export default Accordion;
