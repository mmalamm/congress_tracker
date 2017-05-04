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
  componentDidMount() {

    this.state = {};
    $.ajax({
        url: 'https://api.propublica.org/congress/v1/115/senate/members.json',
        beforeSend: function(xhr) {
             xhr.setRequestHeader("X-API-Key", "zUfM4EKVMG0qQPHM6dFZ4p0x6X1XWfQ5fky8voBh");
        }, success: function(data){
            window.senators = data.results[0].members;
            console.log(data.results[0].members);
        }
      });
  }

  render() {

    const stateBtns = STATES.map(state => (
      <button
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
