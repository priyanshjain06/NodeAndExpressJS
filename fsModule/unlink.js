//used to delete any file
const express = require("express");
const fs = require("fs");

fs.unlink("../first.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file deleted");
  }
});
