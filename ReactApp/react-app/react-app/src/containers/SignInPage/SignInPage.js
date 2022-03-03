import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import  { loginService }  from 'services'
//import { useNavigate } from 'react-router-dom';


function LoginPage() {
	// const navHistory = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

	const handleEmailChange = event => {
        setEmail(event.target.value);
    };

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(email);
		console.log(password);
		const data = {
			email: email,
			password: password
		}
		const response = loginService.login(data);
     	response.then(res => {
			 console.log(res);
			//navHistory('/projects')
		});

	}
    return (
		<div>
            <Container component="main" maxWidth="xs"> {/*The container centers your content horizontally. It's the most basic layout element. */}
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">  {/*Use typography to present your design and content, use the h5 tag but want to use the h1 style */}
						Sign in
					</Typography>
					<Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}> {/*The Box component serves as a wrapper component for most of the CSS utility needs. */}
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							value= {email}
							onChange= {handleEmailChange}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							value= {password}
							onChange= {handlePasswordChange}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
							>
							Sign In
						</Button>
						<Grid container> {/*grid adapts to screen size and orientation, ensuring consistency across layouts. */}
							<Grid item xs> {/* 	If true, the component will have the flex item behavior */}
								<Link href="#" variant="body2">
								Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
								{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
            </Container>
		</div>
    )
}

export default LoginPage
