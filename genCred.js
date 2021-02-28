// COPYRIGHT: Lenox1999
// this file should generate 'creds.js' file in root dir of prj
// you get id and secret by signing into https://developer.spotify.com/
// and creating a new project when signed in
// copy id and secret provided and run following command
// 'node genCred.js id=[your_api_id] secret=[your_api_secret]
// a creds.js file gets created and you are all set!
// this is nothing more than a standart Js Obj, which you
// can import into any file
// DISCLAIMER: include it in .gitignore and dont post secret anywhere
// anybody who has this data can crash your whole app

const fs = require("fs");

const args = [process.argv[2], process.argv[3]];

// TODO: add regex to validate string input
// check input for validity
if (args[0].slice(2, 3) != "=") {
  console.log(args[0].slice(5, 6));
  return new Error(
    "invalid syntax use 'id=[your_api_id] secret=[your_api_secret]' "
  );
} else if (args[1].slice(6, 7) != "=") {
  console.log(args[1].slice(6, 7), "lol");
  return new Error(
    "invalid syntax use 'id=[your_api_id] secret=[your_api_secret]' "
  );
}

const cred = `const creds = {
  id: ${args[0].split("=")[1]},
  secret: ${args[1].split("=")[1]},
};
`;
fs.writeFile("creds.js", cred, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("No errors when executing");
});
