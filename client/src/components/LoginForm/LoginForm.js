import { useState, useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { APIURLContext } from 'context/APIURLContext';
import axios from 'axios';
import useToken from 'hooks/useToken';

export default function LoginForm() {
    const [inputs, setInputs] = useState({});
    const apiURL = useContext(APIURLContext);
    const { token, setToken } = useToken();
    const navigate = useNavigate();

    if (token) {
        return <Navigate replace to='/profile' />;
    }

    async function loginUser(credentials) {
        try {
            const response = await axios.post(`${apiURL}/users/login`, credentials);
            return response.data;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const loginResponse = await loginUser(inputs);
            setToken(loginResponse.accessToken);
            navigate('/profile');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert('Invalid email or password');
            } else {
                alert('An unexpected error occurred');
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Email:
                <input type="text" name="email" 
                value={inputs.email || ''} 
                onChange={handleChange} />
            </label><br />
            <label>Password:
                <input type="password" name="password" value={inputs.password || ''} onChange={handleChange} />
            </label><br />
            <button type="submit">Login</button>
        </form>
    );
}