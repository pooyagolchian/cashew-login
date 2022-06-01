import { useNavigate } from 'react-router-dom'

const DashboardPage = () => {
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div>
      <div className="bg-white border-bottom border-1 p-2">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col col-auto">Dashboard</div>
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
        <h3>Dashboard</h3>
      </div>
    </div>
  )
}

export default DashboardPage
