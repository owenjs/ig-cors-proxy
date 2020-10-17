import { Service, Inject } from 'typedi';
import { IAPIMetaData } from '../interfaces/IPartyResponse';
import { get } from '../util/get';
import { Logger } from 'winston';

@Service()
export default class PartyResponse {
  constructor() { }

  @Inject('logger') public logger: Logger;

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