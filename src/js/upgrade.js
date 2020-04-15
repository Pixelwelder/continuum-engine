import EventEmitter from './eventemitter';

/**
 * One-shot item.
 */
export default class Upgrade extends EventEmitter {
  constructor(opts) {
    super(opts);

    this.state = {
      ...this.state,
      key: opts.key,
      meta: opts.meta || {},
      isActive: opts.isActive || false,
      cost: opts.cost || {}
    }

    this.engine = opts.engine;
  }

  get key()               { return this.state.key }
  get meta()              { return this.state.meta }
  get isActive()          { return this.state.isActive }
  get cost()              { return this.state.cost }

  set isActive(value) {
    this.state.isActive = value
    this.emit('UPGRADE_ACTIVATED', {
      obj: this,
      key: this.state.key
    });
  }

  serialise() {
    return this.state;
  }

  deserialise(o) {
    this.state = o;
  }
}
