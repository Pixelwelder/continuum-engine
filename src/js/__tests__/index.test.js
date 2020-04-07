import {
  Currency, Engine, Entity, EventEmitter, Modifier, Producer, Reactor, Resource,
  formatAbstractNumber, formatDictionaryNumber, formatScientificNumber
} from '../index';

describe('exports', () => {
  test('it should export everything correctly', () => {
    expect(Currency).toBeFunction();
  });
});
