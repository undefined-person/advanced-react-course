import { IUser } from './../models/IUser'
import axios, { AxiosResponse } from 'axios'

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<Array<IUser>>> {
    return axios.get<Array<IUser>>('./users.json')
  }
}
