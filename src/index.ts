import { Store, Incident } from "./store";

let incidents: Incident[] = [
  new Incident("Report 1", "Solution 1", "open", new Date("2019-01-01")),
  new Incident("Report 2", "Solution 2", "solved", new Date("2019-01-04")),
  new Incident("Report 3", "Solution 3", "open", new Date("2019-01-02")),
  new Incident("Report 4", "Solution 4", "open", new Date("2019-01-03")),
  new Incident("Report 5", "Solution 5", "solved", new Date("2019-01-08")),
  new Incident("Report 6", "Solution 6", "open", new Date("2019-01-01")),
];

let store = new Store(incidents);

console.log(
  "Store 1: ",
  store.incident_status(new Date("2019-01-01"), new Date("2019-01-08"))
);

let incidents2: Incident[] = [
  new Incident("Report 1", "Solution 1", "open", new Date("2019-01-11")),
  new Incident("Report 2", "Solution 2", "solved", new Date("2019-01-04")),
  new Incident("Report 3", "Solution 3", "open", new Date("2019-01-02")),
  new Incident("Report 4", "Solution 4", "open", new Date("2019-01-13")),
  new Incident("Report 5", "Solution 5", "solved", new Date("2019-01-28")),
  new Incident("Report 6", "Solution 6", "open", new Date("2019-01-01")),
];

let store2 = new Store(incidents2);

console.log(
  "Store 2: ",
  store2.incident_status(new Date("2019-01-01"), new Date("2019-01-20"))
);
