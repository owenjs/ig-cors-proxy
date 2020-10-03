import { Service, Inject } from 'typedi';
import Teamwork from './teamwork';
import { literal } from '../literal';

@Service()
export default class TWCompanies extends Teamwork {
  constructor(
    @Inject('logger') private logger
  ) { super() }

  metaData = [
    {
      key: 'id',
      type: literal<'singleLineText'>('singleLineText'),
      fieldName: 'id',
      apiMap: 'id'
    },
    {
      key: 'name',
      type: literal<'singleLineText'>('singleLineText'),
      fieldName: 'Company Name',
      apiMap: 'name',
    }
  ]

  public async get() {
    let companies = await this.teamwork.companies.get().then(results => (results.companies));

    let preparedResults = this.prepare(companies);

    return preparedResults;
  }
}
