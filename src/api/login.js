/*
 * @Author: inRush
 * @Date: 2017-08-19 20:58:09
 * @Last Modified by: inRush
 * @Last Modified time: 2017-08-19 21:34:24
 */
import axios from 'axios';
import { loginUrl } from './api';

export default function (account, password, pushId) {
  return axios.post(loginUrl, {
    account,
    password,
    pushId,
  });
}
