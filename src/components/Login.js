import React, { useState } from 'react';
import axios from 'axios'; // axios import
import {Link, useNavigate} from 'react-router-dom';

function Login(props) {
  //1. 상태변수 선언
  const [form, setForm] = useState({
    username:'',
    password:''
  })
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange=(e)=>{
    setForm({...form, [e.target.name]: e.target.value});
    setError('');
  }

  const handleSubmit = async e => {
    e.preventDefault();

    try{
      const res = await axios.post('http://localhost:9070/login', form);

      //사용자 인증이 끝나면 '토큰생성'
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', form.username);

      alert('로그인 성공');
      navigate('/')

    }catch(err){
      setError('로그인실패 : 아이디 또는 비밀번호를 확인하세요.')
    }
  }  

  return (
    <section>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor='username'>아이디</label>
          <input type='text' onChange={handleChange} value={form.username}
           id='username'
          name='username'
           placeholder='아이디'
            required
          />
        </p>
        <p>
          <label htmlFor='password'>패스워드</label>
          <input type='password' onChange={handleChange} value={form.password}
          id='password'
          name='password' 
          required 
          placeholder='패스워드'
           />
        </p>
        <p>
          <input type='submit' value='로그인' />
        </p>
        <p className='btn-group'>
  <Link to='./id_search'>아이디 찾기</Link>
  &nbsp;&#10072;&nbsp;
  <Link to='./pw_search'>비번찾기</Link>
  &nbsp;&#10072;&nbsp;
  <Link to='./register'>회원가입</Link>
</p>

        {error&&<p style={{color:'red'}}>{error}</p>}
      </form>
    </section>
  );
}

export default Login;