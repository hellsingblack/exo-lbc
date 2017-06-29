import React, { Component } from "react";
import Message from '../Forms/Message';

export default class Home extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }
  
  save = (value) => {
    this.props.saveMessage(value);
  }

  render() {
    const { messages } = this.props.list;

    const privateMessagesCount = messages.filter((value) => value.isPrivate).length;

    return (
      <div class="page-header">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <span>
              Private messages <span class="badge">{ privateMessagesCount }</span>
            </span>
          </div>
          <div className="col-md-6 col-md-offset-3">
            <ul className="list-group">
              {
                messages.filter((value) => !value.isPrivate).map((message, key) => (
                  <li key={key} className="list-group-item">{message.text}</li>
                ))
              }
            </ul>
            <Message save={this.save} />
          </div>
        </div>
      </div>
    )
  }
}
