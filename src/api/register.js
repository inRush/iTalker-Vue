/*
 * @Author: inRush
 * @Date: 2017-08-19 20:58:09
 * @Last Modified by: inRush
 * @Last Modified time: 2017-08-20 15:06:53
 */
import axios from 'axios';
import { registerUrl } from './api';

export default function (account, password, name, pushId) {
  return axios.post(registerUrl, {
    account,
    password,
    name,
    pushId,
  });
}
