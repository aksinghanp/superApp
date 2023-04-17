import React,{useState} from 'react'
import styles from './Form.module.css'
import { useNavigate } from 'react-router-dom'
const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    username: '',
    email: '',
    mobile: '',
    shareData: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, username, email, mobile } = formValues;

    if (name && username && email && mobile) {
      localStorage.setItem('userData', JSON.stringify(formValues));
      console.log(formValues);
      navigate('/genre');
    } else {
      alert('Please fill in the form accurately');
    }
  };

  return (
    <div className={styles.body}>
      <p className={styles.super}>Super App</p>
      <p>Create a new Account</p>
      <p>Email <span style={{ color: "green" }}>|</span> Google</p>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name='name' placeholder="Name" />
        <input onChange={handleChange} type="text" name='username' placeholder="UserName" />
        <input onChange={handleChange} type="email" name='email' placeholder="Email" />
        <input onChange={handleChange} type="tel" name='mobile' placeholder="Mobile" />
        <label>
          <input onChange={handleChange} type="checkbox" name='shareData' />
          Share my registration data with Superapp
        </label>
        <button type='submit'>SIGN UP</button>
      </form>
      <footer className={styles.footer}>
        <p>By clicking on Sign up. you agree to Superapp<span style={{ color: "green" }}> Terms and Conditions of Use</span></p>
        <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp<span style={{ color: "green" }}> Privacy Policy</span></p>
      </footer>
    </div>
  );
};

export default SignUpForm;
