import React from 'react'
import { Form, Button, Container, Alert } from 'react-bootstrap'
import { _Api, END_POINT } from '../api/Api'

function LoginScreen() {
    const [isLoading, setLoading] = React.useState(false)
    const [email, setEmail] = React.useState('')
    const [password, setPaaword] = React.useState('')
    const [error, setError] = React.useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        if (email.trim() == "")
            setError("*Please enter email.")
        else if (password.trim() == "")
            setError("*Please enter password.")

        else {
            setError('')
            setLoading(true)
            let req = {
                email,
                password
            }
            _Api(END_POINT.LOGIN.method, END_POINT.LOGIN.endPoint, req).then(resp => {
                const { result, message, token } = resp
                setLoading(false)
                alert(message)
                localStorage.setItem("accessToken", token)

                console.log("login", result)

            }).catch(error => {
                console.log("login",  error.response.data.message ? error.response.data.message : error.message)
                setLoading(false)
            })

        }
    }


    return (
        <Container className="card my-5 p-3">
            {error && <Alert variant={"danger"}>
                {error}
            </Alert>}
            <Form onSubmit={onSubmit}>
                <h1 className="logo_login">Tyagi shop...</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                     </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPaaword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit"

                    disabled={isLoading}

                >
                    {isLoading ? 'Loading...' : 'Submit'}
                </Button>
            </Form>

        </Container>
    )
}

export default LoginScreen
