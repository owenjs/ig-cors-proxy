import { Service, Container } from 'typedi';

interface ITeamworkEndPoints {
  // Needs redoing
  [key: string]: any
};

function createEndPoints() {
  const apiEndPoints = {
    hubspot: require('./hubspot').default,
    deals: require('./deals').default
  };

  const base = Container.get(apiEndPoints['hubspot']) as object;

  return new HubspotAPI(new Proxy(base, {
    get: (target, name) => {
      return apiEndPoints[name] ? 
        Container.get(apiEndPoints[name]) : 
        base[name]
    }
  }));
}

@Service({factory: createEndPoints})
export default class HubspotAPI {
  constructor(public api: ITeamworkEndPoints) {}
}