import { Service, Inject } from 'typedi';
import { IAPIMetaData } from '../../interfaces/IPartyResponse';
import { get } from '../../util/get'; // Move this to Container.get()

@Service()
export default class Hubspot {
  constructor() { }

  @Inject('hubspotapi') public hubspot: any;

  public metaData = [] as IAPIMetaData;

  public prepare(results) {
    return {
      metaData: this.metaData,
      fields: results.map((result) => {
        let preparedResult = {};
        this.metaData.map((field) => {
          preparedResult[field.key] = get(result, field.apiMap);
        });
        return preparedResult;
      })
    }
  }
}