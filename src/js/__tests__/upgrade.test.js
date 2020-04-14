import Engine from '../engine';
import Upgrade from '../upgrade';

describe('Upgrade', () => {
  test('it should create and activate an upgrade', () => {
    const engine = new Engine();
    const funcMap = { someFunc: () => console.log('someFunc!') };
    const upgrade = engine.createUpgrade({
      key: 'upgrade1',
      applyFuncName: 'someFunc'
    });
    engine.activateUpgrade('upgrade1', funcMap);
  });
});
