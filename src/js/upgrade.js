/**
 * One-shot item.
 */

/*
{
  key: UPGRADE_00_00
  meta: {
    name: 'Advanced Hygiene',
    description: <p>+1<PriCurrencyIcon/> per launch</p>,
    flavor: `Turns out we can seat them even closer together!`,
  },
  isActive: false,
  cost: {
    [CURRENCIES.PRIMARY]: 10,
    [CURRENCIES.SECONDARY]: 1
  },
  applyFunc: (engine) => {
    console.log('ACTIVATED');
  },
  removeFunc: (engine) => {
    console.log('DEACTIVATED');
  }
}
 */
export default class Upgrade {
  constructor(opts) {
    this.state = {
      key: opts.key,
      meta: opts.meta || {},
      isActive: opts.isActive || false,
      cost: opts.cost || {},
      applyFuncName: opts.applyFuncName
    }

    this.engine = opts.engine;
  }

  get key()               { return this.state.key }
  get meta()              { return this.state.meta }
  get isActive()          { return this.state.isActive }
  set isActive(value)     { this.state.isActive = value }
  get cost()              { return this.state.cost }
  get applyFuncName()     { return this.state.applyFuncName }

  serialise() {
    return this.state;
  }

  deserialise(o) {
    this.state = o;
  }
}
