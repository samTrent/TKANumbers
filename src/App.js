import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';





// **** MAIN ****




class App extends Component {


//init a new row
  constructor()
  {

    super();
    this.addRow = this.addRow.bind(this);


    this.state = {


        key: "",
        driver: "N/A",
        coach: "N/A",
        time: "N/A",
        totalPeople: 0,
        amTrain: 0,
        pmTrain: 0,
        THEMEX: 0,
        Employees: 0,
        seatsLeft : 0,






      rows: []


    }
  }

componentDidMount()
{
  const logsRef = firebase.database().ref('logs');

  //snap for every log
  logsRef.on('child_added', snap => {


      const root = firebase.database().ref().child('logs/' + snap.getKey());
      const driverRef = root.child('Driver');
      const coachRef = root.child('Coach');
      const timeRef = root.child('Time');
      const totalPeopleRef = root.child('Total People');
      const AMTrainRef = root.child('AM Train');
      const PMTrainRef = root.child('PM Train');
      const MEXRef = root.child('MEX');
      const EmployeesRef = root.child('Employees');
      const seatsLeftRef = root.child('Seats Left');

      //build a new row for each childed that was added.



      //sync with DB in real time
      driverRef.on('value', valsnap => {
          this.setState({
            driver: valsnap.val()
            })
          });

      coachRef.on('value', valsnap => {
          this.setState({
            coach: valsnap.val()
            })
          });

      timeRef.on('value', valsnap => {
          this.setState({
            time: valsnap.val()
            })
          });

      totalPeopleRef.on('value', valsnap => {
          this.setState({
            totalPeople: valsnap.val()
            })
          });

      AMTrainRef.on('value', valsnap => {
          this.setState({
            amTrain: valsnap.val()
            })
          });
      PMTrainRef.on('value', valsnap => {
          this.setState({
            pmTrain: valsnap.val()
            })
          });
      MEXRef.on('value', valsnap => {
          this.setState({
            THEMEX: valsnap.val()
            })
          });
      EmployeesRef.on('value', valsnap => {
          this.setState({
            Employees: valsnap.val()
            })
          });
      seatsLeftRef.on('value', valsnap => {
          this.setState({
            seatsLeft: valsnap.val()
            })
          });


          //add keys to array
         this.addRow(snap.getKey(), this.state.driver);

      console.log("adding key: ", snap.getKey());

  }); //End "on add_child"
  console.log("loading rows...");


}

  render() {

    // var returnTableRow = this.state.data.map(function(row){
    //
    //   return (
    //     <h1>{row.id}<h1>
    //     <h1>{row.driver}<h1>
    //     <h1>{row.coach}<h1>
    //     <h1>{row.time}<h1>
    //     <h1>{row.amTrain}<h1>
    //     <h1>{row.pmTrain}<h1>
    //     <h1>{row.THEMEX}<h1>
    //     <h1>{row.Employees}<h1>
    //     <h1>{row.seatsLeft}<h1>
    //   );
    // })
    // let tableRows = this.state.data.map(rowKey => {
    //   return <AnewTableRow key = {
    //     rowKey.id,
    //     rowKey.driver
    //   }
    //
    //   data = { rowKey  } />
    // })
    return (
      <div className="App" id="start">

        <h1>Talkeetna Numbers</h1>
        <table id="numbers">
          <tbody>

            <tr>
              <th>Driver</th>
              <th>Coach</th>
              <th>Time</th>
              <th>Total People</th>
              <th>AM Train</th>
              <th>PM Train</th>
              <th>MEX</th>
              <th>Employees</th>
              <th>Seats Left</th>
            </tr>

            <tr>
            <td>{this.state.driver}</td>
             <td>{this.state.coach}</td>
             <td>{this.state.time}</td>
             <td>{this.state.totalPeople}</td>
             <td>{this.state.amTrain}</td>
             <td>{this.state.pmTrain}</td>
             <td>{this.state.THEMEX}</td>
             <td>{this.state.Employees}</td>
             <td>{this.state.seatsLeft}</td>
             </tr>



        </tbody>
      </table>



      </div>
    );
  }

  addRow(rowKey, driverData) {
       var nextState = this.state;
      // const currentDriver = this.state.driver;
      //nextState.data.push({key: rowKey ,driver: driverData});
       nextState.rows.push(rowKey);

       this.setState(nextState);

   }

}

// const PersonRow   = (props) => {
 const AnewTableRow = (props) => {
   return (
     <tr>
       <td>
         { props.data.driver }
       </td>
       <td>
         { props.data.coach }
       </td>
       <td>
         { props.data.time }
       </td>
       <td>
         { props.data.totalPeople }
       </td>
       <td>
         { props.data.amTrain }
       </td>
       <td>
         { props.data.pmTrain }
       </td>
       <td>
         { props.data.THEMEX }
       </td>
       <td>
         { props.data.Employees }
       </td>
       <td>
         { props.data.seatsLeft }
       </td>
     </tr>
   );
}

//  <td>{this.state.totalPeople}</td>
export default App;
