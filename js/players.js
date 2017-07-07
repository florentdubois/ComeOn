var players = [];
var teams = [];


function addPlayer(p){
  players.push(p);
}

function createTeam(name){
  var team = {};
  team.name = name;
  team.teammate = [];
  teams.push(team);
}

function addTeamMate(teamName, name){
  for (var i = 0; i < players.length; i++) {
    if(players[i] === name){
      players.splice(i,i+1);
    }
  }
  for (var j = 0; j < teams.length; j++) {
    if (teams[j].name === teamName) {
      teams[j].teammate.push(name);
    }
  }
}
function deleteTeamMate(name){
  for (var i = 0; i < teams.length; i++) {
    for (var j = 0; j < teams[i].teammate.length; j++) {
      if (teams[i].teammate[j] === name) {
        teams[i].teammate.splice(j,j+1);
      }
    }
  }
}
