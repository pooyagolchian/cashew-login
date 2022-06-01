import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { UserSubmitForm } from './../interfaces/ILogin'
import LoginService from '../services/LoginService'
import { useNavigate } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import { useDispatch } from 'react-redux'
import { userAction } from '../store/users'
import { ENV_CONFIG } from '../EnvConfig'

const Login = () => {
  const navigate = useNavigate()
  const { addToast } = useToasts()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(false)

  const handleEmail = (e: { target: { value: string } }) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e: { target: { value: string } }) => {
    setPassword(e.target.value)
  }
  const validationSchema = yup.object().shape({
    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(15, 'Password must not exceed 15 characters'),
  })

  const onSubmit = async (data: UserSubmitForm) => {
    try {
      setDisabled(true)
      const response = (await LoginService.LoginRequest(data)).data
      const token = response?.token
      if (token && token === ENV_CONFIG.TOKEN) {
        localStorage.setItem('token', token)
        await navigate('/dashboard')
        addToast('Login Successfully', { appearance: 'success' })
        await dispatch(userAction.setUser(data.email))
      }
      setDisabled(false)
    } catch (error: any) {
      addToast(error?.response?.data?.error, { appearance: 'error' })
      setDisabled(false)
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  })

  return (
    <div className="container pt-5">
      <div className="col col-12 col-sm-12 col-md-6 m-0 m-auto pt-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="col col-12">
            <label className="form-label">Email</label>
            <input
              data-testid="username"
              type="text"
              value={email}
              {...register('email')}
              onChange={handleEmail}
              placeholder="Email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              autoComplete="off"
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div className="col col-12 mt-3">
            <label className="form-label">Password</label>
            <input
              data-testid="password"
              {...register('password')}
              onChange={handlePassword}
              type="password"
              value={password}
              placeholder="Password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              autoComplete="off"
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>

          <div className="col col-12 mt-3">
            <button
              data-testid="login-btn"
              disabled={disabled}
              type="submit"
              className="btn btn-primary"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
