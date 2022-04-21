# Store Class

### To run the test you need the following tools:

- Install [node](https://nodejs.org/es/) v16.14.0
- Install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) v1.22.17
- Instal [git](https://git-scm.com/downloads)

### Once the development environment is installed, clone the repository:

```
 git clone https://github.com/SevenPok/frogmi-problem.git
```

### Access to the project folder

```
cd frogmi-problem
```

### Install the project dependencies with:

```
 yarn
```

### To start the project use the command:

```
yarn start
```

### Another way to run the project is using the following commands:

```
yarn build
```

```
node build/index.js
```

# Class definition

## Class Incident

### This class contain following attributes:
  - Variable that stores the incidence
```typescript
private report: string;
```
  - Variable that stores the incidence solution
```typescript
private solution: string;
```
  - Variable that stores the incidence status 'open' or 'solved'
```typescript
private status: string;
```
  - Variable that stores the date incidence
```typescript
private date: Date;
```

### This class contain following methods:

```typescript
get_report() {
  return this.report;
}

get_solution() {
  return this.solution;
}

get_status() {
  return this.status;
}

get_date(): Date {
  return this.date;
}
```

## Class

### This class contain following attributes:
  -  Variable that stores a incident collection
```typescript
private incidents: Incident[];
```

### This class contain following methods:
  - Method that return an array
```typescript
  incident_status(first_date: Date, last_date: Date) { ... }
```
  - Method that returns an array filtered by date
```typescript
  private filter_incidents(first_date: Number, last_date: Number) {
    return this.incidents.filter((incident) => {
      return (
        incident.get_date().getTime() >= first_date &&
        incident.get_date().getTime() <= last_date
      );
    });
  }
```

# Test
### An example for the execution of the method incident_status can be:
```typescript
  let incidents: Incident[] = [
    new Incident("Report 1", "Solution 1", "open", new Date("2019-01-01")),
    new Incident("Report 2", "Solution 2", "solved", new Date("2019-01-04")),
    new Incident("Report 3", "Solution 3", "open", new Date("2019-01-02")),
    new Incident("Report 4", "Solution 4", "open", new Date("2019-01-03")),
    new Incident("Report 5", "Solution 5", "solved", new Date("2019-01-08")),
    new Incident("Report 6", "Solution 6", "open", new Date("2019-01-01")),
  ];

  let store = new Store(incidents);
```

### Output
```bash
Store 1:  {
  open_cases: 4,
  closed_cases: 2,
  average_solution: 6,
  maximum_solution: 7
}
```
