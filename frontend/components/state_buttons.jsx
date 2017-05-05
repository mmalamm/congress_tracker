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
        }, success: (data) => window.ajax_success(data)
      });

      ///////////////////////////////////////
      ///////////////////////////////////////
      ///////////////////////////////////////
      ///////////////////////////////////////
      window.ajax_success = function(data) {
      window.result_object = data.results;
      window.senators = data.results[0].members;
      mmm.forEach( state => {
        let sens = senators.filter(senator => senator.state === state.state_abbr);
        const partyColor = (sens) => {
          let repub = 0, dem = 0, othr = 0;
          sens.forEach(sen => {
            switch (sen.party) {
              case "R":
                repub++;
                break;
              case "D":
                dem++;
                break;
              default:
                othr++;
            }
          });
          switch ([repub,dem].toString()) {
            case '2,0':
              return 'red';
            case '1,1':
              return 'purple';
            case '0,2':
              return 'blue';
            default:
              return 'gray';
          }
        };
        state.color = partyColor(sens);
        state.style.fill = state.color;
      });
    };

  var statesGeoJSON = 'https://d3js.org/us-10m.v1.json';

  var svg = d3.select("svg");

  var path = d3.geoPath();

  d3.json(statesGeoJSON, function(error, us) {
    if (error) throw error;

    svg.append("g")
        .attr("class", "states")
      .selectAll("path")
      .data(topojson.feature(us, us.objects.states).features)
      .enter().append("path")
        .attr("d", path);

    window.mmm = Array.from($(".states")[0].children);

    const handleClick = (e) => {
      console.log(e.target.state_abbr);
      let stateName = e.target.state_abbr;
      let sens = senators.filter( senator => senator.state === stateName ).map( senator => senator.first_name + ' ' + senator.last_name );
      $('#header').replaceWith(`<h1 id='header'>${state_hash[stateName]}</h1>`);
      $('#state-info').replaceWith(`<h2 id='state-info'>${state_hash[stateName] + ' senators: ' + sens[0] + ' and ' + sens[1]}</h2>`);

      console.log(state_hash[stateName] + ' senators: ' + sens[0] + ' and ' + sens[1]);

      let formatted_name = sens[1].replace(' ', '%20');
      $.getJSON(`https://en.wikipedia.org/w/api.php?action=query&titles=${formatted_name}&format=json&prop=pageimages&origin=*`, function(data) {
          window.wiki_result = data.query.pages;
          test_dest_img(wiki_result[Object.keys(window.wiki_result)[0]]);
      });
      const test_dest_img = ({ thumbnail }) => {
        let piccy = thumbnail ? thumbnail.source : 'http://www.terry.uga.edu/digitalmarketing/images/icons/user.jpg';
        $('#test-img').attr('src', piccy);
      }
    };

    const state_ids_obj = { 0: "AR", 1: "CA", 2: "IL", 3: "KS", 4: "MS", 5: "OH", 6: "TX", 7: "AL", 8: "IA", 9: "LA", 10: "MN", 11: "MO", 12: "NE", 13: "AZ", 14: "CO", 15: "IN", 16: "MI", 17: "MT", 18: "NY", 19: "OR", 20: "VA", 21: "WY", 22: "NC", 23: "OK", 24: "TN", 25: "WI", 26: "AK", 27: "VT", 28: "ND", 29: "GA", 30: "ME", 31: "RI", 32: "WV", 33: "ID", 34: "SD", 35: "NM", 36: "WA", 37: "PA", 38: "FL", 39: "UT", 40: "KY", 41: "NH", 42: "SC", 43: "NV", 44: "HI", 45: "NY", 46: "CT", 47: "MD", 48: "MA", 49: "DE"};
    const state_hash = {
      "AL": "Alabama", "AK": "Alaska", "AS": "American Samoa", "AZ": "Arizona", "AR": "Arkansas", "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "DC": "District Of Columbia", "FM": "Federated States Of Micronesia", "FL": "Florida", "GA": "Georgia", "GU": "Guam", "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa", "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MH": "Marshall Islands", "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "MP": "Northern Mariana Islands", "OH": "Ohio", "OK": "Oklahoma", "OR": "Oregon", "PW": "Palau", "PA": "Pennsylvania", "PR": "Puerto Rico", "RI": "Rhode Island", "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont", "VI": "Virgin Islands", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming"
    };

    const handleHoverOn = (e) => {
      e.target.style.fill = 'yellow';
    };

    const handleHoverOff = (e) => {
      e.target.style.fill = e.target.color;
    };

    const handleFocus = (e) => {
      e.target.style.fill = 'orange';
    };

    let iter = 0;

    window.mmm.forEach( state => {
      state.special_id = iter;
      iter ++;
      state.state_abbr = state_ids_obj[state.special_id];
      state.onclick = handleClick;
      let abbr = state.state_abbr;
      state.onmouseover = handleHoverOn;
      state.onmouseout = handleHoverOff;
      state.onfocus = handleFocus;

    } );
    svg.append("path")
        .attr("class", "state-borders")
        .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));
  });
  //////////////////////////////////////
  //////////////////////////////////////
  //////////////////////////////////////
  //////////////////////////////////////
  //////////////////////////////////////
  //////////////////////////////////////






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


    ////////////////////
    ////////////////////
    ////////////////////
    ////////////////////
    ////////////////////
    ////////////////////
    ////////////////////
    ////////////////////
    ////////////////////
    ////////////////////
    ////////////////////
    ////////////////////
    ////////////////////
    ////////////////////
    ////////////////////
    ////////////////////


    return (
      <div>
        <ul>
          <div id='header'></div>
          <svg width="960" height="600"></svg>
          <div id='state-info'></div>
          <img id='test-img' />
        </ul>

      </div>
    );
  }
}

export default StateButtons;
