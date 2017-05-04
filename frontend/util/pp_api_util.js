export const fetchSenators = () => {

  return $.ajax({
    url: 'https://api.propublica.org/congress/v1/115/senate/members.json',
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-API-Key", "zUfM4EKVMG0qQPHM6dFZ4p0x6X1XWfQ5fky8voBh");
    }, success: function(data){
      senators = data.results[0].members;
      console.log(senators);
    }
  });
};
