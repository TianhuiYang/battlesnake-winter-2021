function handleIndex(request, response) {
  var battlesnakeInfo = {
    apiversion: "1",
    author: "POOOOOOOOOOOOOG",
    color: "#ff00ff",
    head: "gamer",
    tail: "weight",
  };
  console.log("INDEX");
  response.status(200).json(battlesnakeInfo);
}

module.exports = handleIndex;
