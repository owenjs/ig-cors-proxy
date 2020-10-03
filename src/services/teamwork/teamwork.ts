import { Service, Inject } from 'typedi';
import { IAPIMetaData } from '../../interfaces/IPartyResponse';

@Service()
export default class Teamwork {
  constructor() { }

  @Inject('teamworkapi') public teamwork: any;

  public metaData = [] as IAPIMetaData;

  public prepare(results) {
    return {
      metaData: this.metaData,
      fields: results.map((result) => {
        let preparedResult = {};
        this.metaData.map((field) => {
          preparedResult[field.key] = result[field.apiMap];
        });
        return preparedResult;
      })
    }
  }
}