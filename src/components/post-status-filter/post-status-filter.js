import React from "react";

import "./post-status-filter.css";

export default class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: "all", label: "Все" },
      {
        name: "like",
        label: "Понравилось",
      },
    ];
  }
  render() {
    const { filter, changeFilter } = this.props;
    const buttons = this.buttons.map((btn) => {
      const active = filter === btn.name;
      const ourClass = active ? "btn-info" : "btn-outline-secondary";
      return (
        <button key={btn.name} type="button" className={`btn ${ourClass}`} onClick={() => changeFilter(btn.name)}>
          {btn.label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
