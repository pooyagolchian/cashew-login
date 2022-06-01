import { AxiosResponse } from 'axios'
import http from '../helper/Http'
import { UserSubmitForm } from '../interfaces/ILogin'

const LoginRequest = async (data: UserSubmitForm): Promise<AxiosResponse> => {
  return await http.post<UserSubmitForm>('/login', data)
}

const LoginService = {
  LoginRequest,
}

export default LoginService
