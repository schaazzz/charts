// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by charts.js.
import { name as packageName } from "meteor/schaazzz:charts";

// Write your tests here!
// Here is an example.
Tinytest.add('charts - example', function (test) {
  test.equal(packageName, "charts");
});
