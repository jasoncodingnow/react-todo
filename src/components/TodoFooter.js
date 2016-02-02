'use strict';
import React from "react";

export default class TodoFooter extends React.Component {

  handlerAllState(event) {
  	this.props.changeTodoState(null, event.target.checked, true);
  }

  handlerClick() {
  	this.props.clearDone();
  }

  render() {
  	return (
  	  <div className = "clearfix todo-footer">
        <input checked = {this.props.isAllChecked} onChange = {this.handlerAllState.bind(this)} type="checkbox" className="f1"/>
        <span className="f1">{this.props.todoDoneCount}已完成 / {this.props.todoCount}总数</span>
        <button onClick={this.handlerClick.bind(this)} className="fr">清除已完成</button>
      </div>
  	);
  }
}
