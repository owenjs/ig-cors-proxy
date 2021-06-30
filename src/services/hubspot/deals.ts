import { Service, Inject } from 'typedi';
import Hubspot from './hubspot';
import { literal } from '../../util/literal';

@Service()
export default class HSDeals extends Hubspot {
  constructor(
    @Inject('logger') private logger
  ) { super() }

  metaData = [
    {
      key: 'id',
      type: literal<'singleLineText'>('singleLineText'),
      fieldName: 'id',
      apiMap: 'dealId'
    },
    {
      key: 'name',
      type: literal<'singleLineText'>('singleLineText'),
      fieldName: 'Deal Name',
      apiMap: 'properties.dealname.value',
    },
    {
      key: 'dealstage',
      type: literal<'singleLineText'>('singleLineText'), // To be changed to Single Select
      fieldName: 'Stage',
      apiMap: 'properties.dealstage.value',
    }
  ]

  public async get() {
    let deals = await this.hubspot.deals.getRecentlyModified(/*{properties: ['dealname', 'dealstage']}*/).then(results => (results.results));

    let preparedResults = this.prepare(deals);

    return preparedResults;
  }
}
