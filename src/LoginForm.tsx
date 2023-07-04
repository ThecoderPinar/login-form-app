import React, { useState } from 'react';

interface LoginFormState {
  email: string;
  password: string;
  rememberMe: boolean;

}

const LoginForm: React.FC = () => {
  const [loginForm, setLoginForm] = useState<LoginFormState>({
    email: '',
    password: '',
    rememberMe: false

  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setLoginForm((prevState) => ({ ...prevState, [name]: inputValue }));
    setErrorMessage('');
  };
  
  const handleLogin = () => {
    // Giriş işlemlerini burada gerçekleştirin
    // Örnek olarak basit bir kontrol yapalım
    if (loginForm.email === 'user@example.com' && loginForm.password === 'password') {
      // Giriş başarılıysa başka bir sayfaya yönlendirme yapabilirsiniz
      // Örneğin: history.push('/projects')
      console.log('Giriş başarıyla yapıldı!');
      if (loginForm.rememberMe) {
        // Remember Me checkbox is checked, you can save the user session or token here.
        // For demo purposes, we are just logging it.
        console.log('Remember Me is checked');
      } else {
        console.log('Remember Me is NOT checked');
      }
    } else {
      setErrorMessage('E-posta veya şifre hatalı!');
    }
  };
  

  const handleLinkedInLogin = () => {
    // LinkedIn ile giriş işlemleri
  };

  const handleTwitterLogin = () => {
    // Twitter ile giriş işlemleri
  };

  const handleGitHubLogin = () => {
    // GitHub ile giriş işlemleri
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title mb-4">Giriş Yap</h3>
              <form>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={loginForm.email}
                    onChange={handleInputChange}
                  />
                  <div className="error-message">Geçerli bir e-posta adresi girin</div>
                </div>
                <div className="form-group">
                  <label>Şifre:</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={loginForm.password}
                    onChange={handleInputChange}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-block mt-4"
                  onClick={handleLogin}
                >
                  Giriş Yap
                </button>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <div className="success-message">Giriş başarıyla yapıldı!</div>
              </form>
              <div className="text-center mt-4">
                <p>veya</p>
                <button
                  type="button"
                  className="btn btn-linkedin mr-2"
                  onClick={handleLinkedInLogin}
                >
                  LinkedIn ile Giriş Yap
                </button>
                <button
                  type="button"
                  className="btn btn-twitter mr-2"
                  onClick={handleTwitterLogin}
                >
                  Twitter ile Giriş Yap
                </button>
                <button
                  type="button"
                  className="btn btn-github"
                  onClick={handleGitHubLogin}
                >
                  GitHub ile Giriş Yap
                </button>
<div className="form-group form-check">
  <input
    type="checkbox"
    className="form-check-input"
    name="rememberMe"
    checked={loginForm.rememberMe}
    onChange={handleInputChange}
  />
  <label className="form-check-label">Remember Me</label>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
