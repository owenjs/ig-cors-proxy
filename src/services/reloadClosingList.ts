import { Service, Inject } from 'typedi';

@Service()
export default class ReloadClosingList {
  constructor(
    @Inject('logger') private logger
  ) {}

  public async reload(): Promise<void> {
    
  }
}