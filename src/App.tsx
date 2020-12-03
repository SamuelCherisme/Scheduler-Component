import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel} from '@syncfusion/ej2-react-schedule';
import {DataManager,WebApiAdaptor} from '@syncfusion/ej2-data'


class App extends React.Component{
  private localData: EventSettingsModel ={
    dataSource: [{
      Id: 1,
      End: new Date(2020, 0, 11, 6, 30),
      Start: new Date(2020, 0, 11, 4, 0),
      Summary: '',
      IsAllDay: true,
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=10',
      IsReadonly: false,
      IsBlock: false
    },
    {
      Id: 2,
      End: new Date(2020, 0, 21, 8, 30),
      Start: new Date(2020, 0, 21, 7, 0),
      Summary: '',
      IsReadonly: false
    
    }],
    fields: {
      subject: {name: 'Summary', default: 'Add an Event.'},
      startTime: {name: 'Start'},
      endTime: {name: 'End'}
    }
  };

private remoteData = new DataManager({
  url: 'http://js.syncfusion.com/demos.ejservices/api/Schedule/LoadData',
  adaptor: new WebApiAdaptor,
  crossDomain: true
});

public render(){
  return (<ScheduleComponent currentView='Month' selectedDate={new Date(2020, 0, 11)}
  eventSettings={this.localData}>
  <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
  </ScheduleComponent>)

  }

}
export default App;
