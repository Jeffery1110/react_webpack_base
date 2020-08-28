import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Input from '../Input';
import styles from './Signin.scss';

const Signin = (props: any): JSX.Element => {
  const [acct, setAcct] = useState('');
  const [password, setPassword] = useState('');
  const [remeber, setRemeber] = useState(false);
  const [error, setError] = useState('');

  const verify = () => {
    if (acct === '123' && password === '123') {
      if (remeber) {
        Cookies.set('account', '123', { expires: 1, path: '' });
        Cookies.set('password', '123', { expires: 1, path: '' });
      }
      props.history.push('/courseList');
    } else {
      setError('帳密輸入錯誤!');
    }
  };

  useEffect(() => {
    if (Cookies.get('account') === '123' && Cookies.get('password') === '123') {
      props.history.push('/courseList');
    }
  }, []);

  return (
    <div className={styles.backGround}>
      <div className={styles.header}>選課系統</div>
      <div>
        <div>
          <h1 className={styles.title1}>請登入</h1>
          <div id="result">{error}</div>
          學號:
          <Input type="text" placeholder="學號" setValue={setAcct} />
          密碼:
          <Input type="password" placeholder="密碼" setValue={setPassword} />
          <div className="checkbox mb-3"></div>
          <Input type="checkbox" name="remeber" setValue={setRemeber} value={remeber} />
          <label htmlFor="remeber"> 記住我</label>
          <div>
            <button onClick={verify}>登入</button>
            <button className="btn btn-lg btn-primary btn-block">註冊</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
