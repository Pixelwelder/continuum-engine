import {
  Currency, Engine, Entity, EventEmitter, Modifier, Producer, Reactor, Resource,
  formatAbstractNumber, formatDictionaryNumber, formatScientificNumber
} from '../index';

/**
 * This test does absolutely nothing of interest except ensuring that I didn't screw up the exports.
 * It is, furthermore, hard to keep up to date.
 */
describe('exports', () => {
  test('it should export everything correctly', () => {
    expect(Currency).toBeFunction();
    expect(Engine).toBeFunction();
    expect(Entity).toBeFunction();
    expect(EventEmitter).toBeFunction();
    expect(Modifier).toBeFunction();
    expect(Producer).toBeFunction();
    expect(Reactor).toBeFunction();
    expect(Resource).toBeFunction();
    expect(formatAbstractNumber).toBeFunction();
    expect(formatDictionaryNumber).toBeFunction();
    expect(formatScientificNumber).toBeFunction();
  });
});
