import React from 'react';

const STATES = [ "AK",
                      "AL",
                      "AR",
                      "AS",
                      "AZ",
                      "CA",
                      "CO",
                      "CT",
                      "DC",
                      "DE",
                      "FL",
                      "GA",
                      "GU",
                      "HI",
                      "IA",
                      "ID",
                      "IL",
                      "IN",
                      "KS",
                      "KY",
                      "LA",
                      "MA",
                      "MD",
                      "ME",
                      "MI",
                      "MN",
                      "MO",
                      "MS",
                      "MT",
                      "NC",
                      "ND",
                      "NE",
                      "NH",
                      "NJ",
                      "NM",
                      "NV",
                      "NY",
                      "OH",
                      "OK",
                      "OR",
                      "PA",
                      "PR",
                      "RI",
                      "SC",
                      "SD",
                      "TN",
                      "TX",
                      "UT",
                      "VA",
                      "VI",
                      "VT",
                      "WA",
                      "WI",
                      "WV",
                      "WY"];

class StateButtons extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {

    this.state = {};
    $.ajax({
        url: 'https://api.propublica.org/congress/v1/115/senate/members.json',
        beforeSend: function(xhr) {
             xhr.setRequestHeader("X-API-Key", "zUfM4EKVMG0qQPHM6dFZ4p0x6X1XWfQ5fky8voBh");
        }, success: function(data){
            window.senators = data.results[0].members;
        }
      });
  }

  handleClick(e) {
    let stateName = e.target.innerHTML;
    let sens = senators.filter( senator => senator.state === stateName ).map( senator => senator.first_name + ' ' + senator.last_name );
    console.log(stateName + ' senators: ' + sens[0] + ' and ' + sens[1]);
  }

  render() {

    const stateBtns = STATES.map(state => (
      <button
        onClick={this.handleClick}
        key={state}>
        {state}
      </button>
    ));



    return (
      <div>
        <ul>
          {stateBtns}
        </ul>

      </div>
    );
  }
}

export default StateButtons;
