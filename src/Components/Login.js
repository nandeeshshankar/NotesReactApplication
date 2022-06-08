import React,{Fragment, useState} from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [errorMessage, SetErrorMessage] = useState('');
    let navigate = useNavigate();

    const loginCredentials =[
        {username: 'user1', password: 'abcd'},
        {username: 'user2', password: 'abcd'},
        {username: 'user3', password: 'abcd'}
    ];
    function submitHandler() {
       
        const userData = loginCredentials.find((user) => user.username === username);
        if(!userData || (userData && userData.password !== password)){
            SetErrorMessage('Invalid Credentials. Enter correct credentials.')
        } else {
            navigate('/notes');
        }
    }

    return(
        <Fragment>
            <div className="bg-primary">
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
                            <div className="card-body p-5 text-center">
                                <h1 className="mb-5" style={{color:'#B22222'}}>Notes Application Login</h1>
                                <div className="form-outline mb-4">
                                <input type="text" id="uname" name="uname" placeholder="Enter Username" 
                                    className="form-control" onChange={(e)=>{
                                        SetErrorMessage('');
                                        setUsername(e.target.value)}}/>
                                </div>
                                <div className="form-outline mb-4">
                                <input type="password" id="password" name="password" placeholder="Enter Password" 
                                    className="form-control" onChange={(e)=>{
                                        SetErrorMessage('');
                                        setPassword(e.target.value)}}/>
                                </div>
                                {errorMessage ? <div className="form-outline mb-4 text-danger">{errorMessage}</div> : null}
                                <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={submitHandler}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default Login;