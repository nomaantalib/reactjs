import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you'd have actual authentication logic here
    navigate("/");
  };

  return (
    <div className="container my-3 p-3" style={{ backgroundColor: "#f8f9fa" }}>
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input type="text" className="form-control" id="username" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};
