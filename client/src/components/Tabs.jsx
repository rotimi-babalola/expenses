import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 'tab1',
      activeTabIndex: this.props.defaultActiveTabIndex, // hard code for now
    };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(tabIndex) {
    this.setState({
      activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex,
    });
  }

  renderChildrenWithTabsApiAsProps() {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onChange: this.handleTabChange,
        tabIndex: index,
        isChecked: index === this.state.activeTabIndex,
      });
    });
  }

  renderActiveTabContent() {
    const { children } = this.props;
    const { activeTabIndex } = this.state;
    if (children[activeTabIndex]) {
      return children[activeTabIndex].props.children;
    }
  }

  render() {
    return (
      <main>
        {this.renderChildrenWithTabsApiAsProps()}
        {this.renderActiveTabContent()}
      </main>
    );
  }
}

Tabs.propTypes = {
  defaultActiveTabIndex: PropTypes.number,
  children: PropTypes.array,
};

Tabs.defaultProps = {
  defaultActiveTabIndex: 0,
};

export default Tabs;
