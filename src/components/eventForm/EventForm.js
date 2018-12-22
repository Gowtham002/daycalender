import React from 'react';
import moment from 'moment';
import MaskedInput from 'react-text-mask'
import './eventForm.css';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
      start: "",
      end: ""
    }
  }

  onValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = () => {
    let { label, start, end } = this.state;
    if(label.length > 0 && moment(start, "HH:mm", true).isValid() && moment(end, "HH:mm", true).isValid()) {
      if(moment(start, "HH:mm", true).isBefore(moment(end, "HH:mm", true)))
        this.props.onSubmit({...this.state});
    }
  }

  render() {
    return(
      <div className="event-form">
        <ul>
          <li>
            <label>Event Name</label>
            <input type="text" value={this.state.label} onChange={this.onValueChange} name="label" placeholder="name"/>
          </li>
          <li>
            <label>Start Time (24H)</label>
            <MaskedInput mask={[/[0-9]/,/[0-9]/,':',/[0-5]/, /[0-9]/]} value={this.state.start} onChange={this.onValueChange} name="start" placeholder="HH:mm"/>
          </li>
          <li>
            <label>End Time (24H)</label>
            <MaskedInput mask={[/[0-9]/,/[0-9]/,':',/[0-5]/, /[0-9]/]} value={this.state.end} onChange={this.onValueChange} name="end" placeholder="HH:mm"/>
          </li>
        </ul>
        <div className="submit">
          <button onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

export default EventForm;