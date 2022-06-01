import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../store'
import { useDispatch } from 'react-redux'
import { userAction } from '../store/users'
import { useEffect } from 'react'
import { ENV_CONFIG } from '../EnvConfig'

const DashboardPage = () => {
  const userEmail: string = useSelector(
    (state: RootState) => state?.users.users
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogOut = async () => {
    await localStorage.removeItem('token')
    await dispatch(userAction.setUser(''))
    await navigate('/login')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token !== ENV_CONFIG.TOKEN) {
      localStorage.removeItem('token')
      dispatch(userAction.setUser(''))
      navigate('/login')
    }
  }, [navigate])

  return (
    <div>
      <div className="bg-white border-bottom border-1 p-2">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col col-auto">
              {userEmail ? userEmail : 'Dashboard'}
            </div>
            <div className="col col-auto">
              <button
                onClick={handleLogOut}
                className="btn btn-sm small btn-primary"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5 text-center">
        <h3>Cashew Dashboard</h3>
      </div>
    </div>
  )
}

export default DashboardPage
