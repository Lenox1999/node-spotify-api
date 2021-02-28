const Spotify = require("./src/index.js");
const creds = require("./creds");

// setup api class
const spotify = new Spotify(creds);
spotify
  .search({ type: "track", query: "Pumped up kicks" })
  .then((res) => {
    // this should output track id
    console.log(res.tracks.items[0].id);
  })
  .catch((err) => console.log(err));
