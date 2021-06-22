import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useFormik } from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));

    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">Name</label> : <input id="name" type="text" onChange={formik.handleChange} value={formik.values.name} /> <br />
      <label htmlFor="password">password</label> : <input id="password" type="password" onChange={formik.handleChange} value={formik.values.password} /> <br />
      <input type="submit" value="submit" />
    </form>
  );
}

export default App;
