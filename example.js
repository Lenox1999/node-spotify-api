const Spotify = require("./src/index.js");
const creds = require("./creds");

// setup api class
const spotify = new Spotify(creds);

spotify
  .search({ type: "track", query: "Pumped up kicks" })
  .then((res) => {
    console.log(res);
    console.dir(res.tracks.items);
  })
  .catch((err) => console.log(err));
