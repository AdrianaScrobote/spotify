import faker from 'faker';
import getConfig from '../../src/config';

const mockedShema = jest.fn();




jest.mock('../../src/config/config-schema', () => ({
  validate: (vars: Partial<NodeJS.ProcessEnv>) => mockedShema(vars),
}));




describe('CONFIG - Units tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a valid object', () => {
      console.log("ok");  
      // fazer este teste   
  })

});
