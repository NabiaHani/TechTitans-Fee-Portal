import "../../styles/AuthStyles.css";

const Login = () => {

  return (
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form>
          <h4 className="title">LOGIN FORM</h4>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary" onClick={() => { navigate('/forgotpassword') }}>
              Forgot Password
            </button>
          </div>
          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
  )
}

export default Login
