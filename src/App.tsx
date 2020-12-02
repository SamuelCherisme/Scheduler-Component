import React from 'react'
import './App.css';
//import {MongoClient} from 'mongodb'

import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, 
  EventSettingsModel} from '@syncfusion/ej2-react-schedule';

import {DataManager,WebApiAdaptor} from '@syncfusion/ej2-data'


// class Main{
//     static main(){
//      Main.insert();
//     }

//     //Insert Demo
//     static async insert(){
//       const url = 'mongodb://localhost:3000';
//       const client  = await MongoClient.connect(url); // Connect the server
//       const db =  client.db('cdac'); // Connecting to database

//       const output = await db.collection('task').insert({todo: 'Hello Mongo'})
//       console.log(output);
//     }
// }

// Main.main();



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
      subject: {name: 'Summary', default: 'Go to the gym.'},
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
