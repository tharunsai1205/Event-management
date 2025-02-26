import  { useState } from 'react';

const SignInCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    
    console.log(`Signed in with: ${email} / ${password}`);
  };

  return (
    <div className="card signin-card">
      <h2>Sign-in Page</h2>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  );
};

export default SignInCard;
