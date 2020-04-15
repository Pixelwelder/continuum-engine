import Engine from '../engine';
import Upgrade from '../upgrade';

describe('Upgrade', () => {
  beforeEach(() => {
    window.localStorage.setItem = jest.fn();
  });

  test('it should create and activate an upgrade', () => {
    const engine = new Engine();
    const funcMap = { upgrade1: () => console.log('upgrade!') };
    const upgrade = engine.createUpgrade({
      key: 'upgrade1'
    });
    engine.activateUpgrade('upgrade1', funcMap);
  });

  test('it should save an upgrade', () => {
    // const engine = new Engine();
    // const upgrade = engine.createUpgrade({
    //   key: 'upgrade1'
    // });
    // engine.saveState();
    // expect(window.localStorage.setItem).toHaveBeenCalled();
  });
});
