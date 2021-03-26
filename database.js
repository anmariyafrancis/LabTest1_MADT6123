var sqlite3 = require("sqlite3").verbose();
var md5 = require("md5");

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE field (
            id INTEGER PRIMARY KEY ,
            name text
            )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO field (id,name) VALUES (?,?)";
          db.run(insert, [1,"FarmField1" ]);
          db.run(insert, [2, "FarmField2"]);
          db.run(insert, [3, "FarmField3"]);
          db.run(insert, [4, "FarmField4"]);
        }
      }
    );

    db.run(
      `CREATE TABLE vegetables (
            id INTEGER PRIMARY KEY ,
            farmField text,
            crop text,
            amount INTEGER
            )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO vegetables (id,farmField,crop,amount) VALUES (?,?,?,?)";
          db.run(insert, [1,"FarmField1", 'peas', 1000]);
          db.run(insert, [2, "FarmField2", "carrots", 500]);
          db.run(insert, [3, "FarmField3", "corn", 750]);
          db.run(insert, [4, "FarmField4", "broccoli", 1000]);
          db.run(insert, [5, "FarmField5", "zucchini", 1000]);
        }
      }
    );

    db.run(
      `CREATE TABLE price (
            id INTEGER PRIMARY KEY ,
            name text,
            price INTEGER
            )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert = "INSERT INTO price (id,name, price) VALUES (?,?,?)";
          db.run(insert, [1, "peas" ,14]);
          db.run(insert, [2, "carrots", 17]);
          db.run(insert, [3, "corn", 10]);
          db.run(insert, [4, "broccoli", 23]);
          db.run(insert, [4, "zucchini", 25]);

        }
      }
    );
  }
});

module.exports = db;
