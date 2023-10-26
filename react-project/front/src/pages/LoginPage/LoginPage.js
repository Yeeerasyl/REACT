import React from 'react';
import './LoginPage.css';
import {Link} from 'react-router-dom' 
export const LoginPage=()=>{
    return(
        <React.Fragment>
            <form className='LoginForm'>
            <h1>
                Войти
            </h1>
            <div>
                <input type="text" placeholder="Логин" name="login"/>
            </div>
            <div>
                <input type="password" placeholder="Пароль" name="password"/>
            </div>
            <div>
                <button>
                    <Link to='/home' style={{ color: '#ffffff' }}>Войти</Link>
                </button>
            </div>
        </form>
        </React.Fragment>
    )
}
export default LoginPage;