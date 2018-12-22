import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import DayView from './../../lib/DayView';
import EventForm from './../eventForm/EventForm';
import './shell.css';

class Shell extends Component {
  constructor() {
    super();
    this.state = {
      timings: [],
      open: false,
    }
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onSubmit = (values) => {
    let { timings } = this.state;
    timings.push({...values});
    this.setState({ timings, open: false });
  }

  render() {
    let { timings, open } = this.state;
    return (
      <div className="container">
        <div className="header">
          <h4>Calender</h4>
          <p className="date">{new Date().toDateString()}</p>
          <button onClick={this.onOpenModal}>Add Event</button>
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <EventForm onSubmit={this.onSubmit}/>
        </Modal>
        <DayView timings={timings}/>
      </div>
    );
  }
}

export default Shell;
