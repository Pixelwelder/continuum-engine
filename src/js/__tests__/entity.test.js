import Engine from '../engine';
import Entity from '../entity';

describe('Entity', () => {
  test('the meta should survive normal instantiation', () => {
    const meta = { prop: 'val' };
    const entity = new Entity('type', { meta });
    expect(entity.meta).toBe(meta);
  });

  test('the meta should survive being created by the engine', () => {
    const meta = { prop: 'val' };
    const engine = new Engine();
    const producer = engine.createProducer({ key: 'key0', meta });
    expect(producer.meta).toBe(meta);

    const resource = engine.createResource({ key: 'key1', meta });
    expect(resource.meta).toBe(meta);

    const currency = engine.createCurrency({ key: 'key2', meta });
    expect(producer.meta).toBe(meta);

    const modifier = engine.createModifier({ key: 'key3', meta });
    expect(producer.meta).toBe(meta);
  });

  test('the entity should emit an event when its meta is updated', () => {
    const meta = { prop: 'val' };
    const engine = new Engine();
    const producer = engine.createProducer({ key: 'key0', meta });
    const listener = jest.fn();
    producer.on('PRODUCER_META_UPDATED', listener);
    producer.meta = { prop: 'val2' };
    expect(listener).toHaveBeenCalled();
  });
});
