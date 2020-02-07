const state = {
  funds: 1000,
  stocks: []
};

const mutations = {
  BUY_STOCKS(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record) {
      record.quantity += parseInt(quantity);
    } else {
      state.stocks.push({
        id: stockId,
        quantity: parseInt(quantity)
      });
    }

    state.funds -= parseInt(stockPrice) * parseInt(quantity);
  },
  SELL_STOCKS(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record.quantity > quantity) {
      record.quantity -= parseInt(quantity);
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += parseInt(stockPrice) * parseInt(quantity);
  },
  SET_PORTFOLIO(state, portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
};

const actions = {
  sellStocks({ commit }, order) {
    commit("SELL_STOCKS", order);
  }
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: record.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
