import React from 'react'
import { Container, Icon, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormBotton, Text } from './Signin Elements'

const SignIn = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to = '/'>esusu<span className='span'>Save</span></Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your account.</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormBotton type='submit'>Submit</FormBotton>
                            <Text to = '/'><Text>Forgot password? | </Text><Text>Sign-up</Text></Text>
                        </Form>
                    </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default SignIn