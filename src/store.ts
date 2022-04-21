export class Store {
  private incidents: Incident[];

  constructor(incidents: Incident[] = []) {
    this.incidents = incidents;
  }

  incident_status(first_date: Date, last_date: Date) {
    const incidents = this.filter_incidents(
      first_date.getTime(),
      last_date.getTime()
    );

    const OPEN = "open";
    const SOLVED = "solved";

    const open_cases = incidents
      .map((incident) => incident.get_status())
      .reduce(
        (previus, current) => (current === OPEN ? (previus += 1) : previus),
        0
      );

    const closed_cases = incidents
      .map((incident) => incident.get_status())
      .reduce(
        (previus, current) => (current === SOLVED ? (previus += 1) : previus),
        0
      );

    const total_solvable_cases = incidents
      .filter((incident) => incident.get_status() === SOLVED)
      .map((incident) =>
        last_date.getTime() === incident.get_date().getTime()
          ? last_date.getTime() - first_date.getTime()
          : last_date.getTime() - incident.get_date().getTime()
      )
      .reduce((prev, curr) => prev + curr, 0);

    const CONVERT_TO_DAYS = 1000 * 60 * 60 * 24;

    const average_solution = Math.ceil(
      total_solvable_cases / CONVERT_TO_DAYS / closed_cases
    );

    const total_cases_opened = incidents
      .filter((incident) => incident.get_status() === OPEN)
      .map((incident) =>
        last_date.getTime() === incident.get_date().getTime()
          ? last_date.getTime() - first_date.getTime()
          : last_date.getTime() - incident.get_date().getTime()
      )
      .reduce((prev, curr) => prev + curr, 0);

    const maximum_solution = Math.ceil(
      total_cases_opened / CONVERT_TO_DAYS / open_cases
    );

    return { open_cases, closed_cases, average_solution, maximum_solution };
  }

  private filter_incidents(first_date: Number, last_date: Number) {
    return this.incidents.filter((incident) => {
      return (
        incident.get_date().getTime() >= first_date &&
        incident.get_date().getTime() <= last_date
      );
    });
  }
}

export class Incident {
  private report: string;
  private solution: string;
  private status: string;
  private date: Date;

  constructor(report: string, solution: string, status: string, date: Date) {
    this.report = report;
    this.solution = solution;
    this.status = status;
    this.date = date;
  }

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
}
