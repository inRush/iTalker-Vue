/*
 * @Author: inRush
 * @Date: 2017-08-19 15:42:45
 * @Last Modified by: inRush
 * @Last Modified time: 2017-08-20 14:59:13
 */
import * as types from './mutation-types';

const mutations = {
  [types.SET_USER](state, user) {
    state.user = user;
  },
};

export default mutations;
