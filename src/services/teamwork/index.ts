import { Service } from 'typedi';
import { Container } from 'typedi';

interface ITeamworkEndPoints {
  // Needs redoing
  [key: string]: any
};

function createEndPoints() {
  const apiEndPoints = {
    teamwork: require('./teamwork').default,
    companies: require('./companies').default
  };

  const base = Container.get(apiEndPoints['teamwork']) as object;

  return new TeamworkAPI(new Proxy(base, {
    get: (target, name) => {
      return apiEndPoints[name] ? 
        Container.get(apiEndPoints[name]) : 
        base[name]
    }
  }));
}

@Service({factory: createEndPoints})
export default class TeamworkAPI {
  constructor(public api: ITeamworkEndPoints) {}
}
