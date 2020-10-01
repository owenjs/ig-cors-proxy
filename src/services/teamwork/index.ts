import { Service, Inject } from 'typedi';
import { I3rdPartyAPI } from '../../interfaces/IPartyResponse';

@Service()
export default class TeamworkAPI implements I3rdPartyAPI {
  constructor(
    @Inject('teamworkapi') private Teamwork?,
    @Inject('logger') private logger?,
  ) { }


}
