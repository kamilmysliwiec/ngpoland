import { Test, TestingModule } from '@nestjs/testing';
import { BeersController } from './beers.controller';

describe('Beers Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [BeersController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: BeersController = module.get<BeersController>(BeersController);
    expect(controller).toBeDefined();
  });
});
