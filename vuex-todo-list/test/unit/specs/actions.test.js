import * as actions from '@/store/actions.js';

describe('actions', () => {

  it('reduce_price_action', async () => {
    const commit = jest.fn();

    await actions.reduce_price_action({ commit }, 10);
    expect(commit).toHaveBeenCalledWith('reducePrice', 10);
  });
})
