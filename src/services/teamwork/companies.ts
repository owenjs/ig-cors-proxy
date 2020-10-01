import { Service, Inject } from 'typedi';
import { PartyResponse, I3rdPartyAPI, airTableFieldType } from '../../interfaces/IPartyResponse';
import TeamworkAPI from './';

@Service()
export default class TWCompanies implements I3rdPartyAPI {
  constructor(
    @Inject('teamworkapi') private Teamwork,
    @Inject('logger') private logger,
    @Inject('literal') private literal,
  ) { }

  public metaData = [
    {
      key: 'id',
      type: 'singleLineText' as 'singleLineText',
      fieldName: 'id',
      apiMap: 'id'
    },
    {
      key: 'name',
      type: 'singleLineText' as 'singleLineText',
      fieldName: 'Company Name',
      apiMap: 'name',
    }
  ];

  public async get(): Promise<PartyResponse> {
    let companies = await this.Teamwork.companies.get().then(results => (results.companies));
  }
}
