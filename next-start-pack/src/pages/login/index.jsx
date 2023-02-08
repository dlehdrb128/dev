import { TextField, Container, Box, Button } from '@mui/material';
import { useState } from 'react';

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({
        Id: '',
        password: '',
    });

    const { Id, password } = loginInfo;

    const onChangeInput = e => {
        const { name, value } = e.target;

        setLoginInfo(prev => ({ ...prev, [name]: value }));
    };

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
            }}
        >
            <Box
                onSubmit={e => {
                    e.preventDefault();
                    console.log(loginInfo);
                }}
                component={'form'}
                sx={{
                    bgcolor: '#cfe8fc',
                    width: '500px',
                    height: '500px',
                    display: 'flex',
                    flexFlow: 'column wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <TextField required label="아이디" value={Id} sx={{ width: 300 }} onChange={onChangeInput} name="Id" />
                <TextField
                    required
                    sx={{
                        width: 300,
                        margin: '15px 0 0 0',
                    }}
                    name="password"
                    label="비밀번호"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={onChangeInput}
                />

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        width: 300,
                        height: 50,
                        margin: '15px 0 0 0',
                    }}
                >
                    로그인
                </Button>
            </Box>
        </Container>
    );
};

export default Login;
