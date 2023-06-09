import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';
import Footer2 from '../../footer/Footer2';
import Navbar from '../../navbar/Navbar';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/Auth-context.js';
import axios from "axios";
import Google from './Google.jsx';
import { auth } from "../../../firebase-config";



export default function SplitScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const { login, logout } = useAuth();

  const handleSubmit = async () => {
    setError("");
    try {
      await login(email, password);
      let response = await axios.get(`/getUserByEmail?email=${email}`)
      if (response.data.status === "ACTIVE") {
        localStorage.setItem("user", JSON.stringify(response.data))
        history.push("/");
      } else {
        await logout(auth);
        window.alert(`Acount ${response.data.status}.`)
      }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Log in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={'blue'} variant={'solid'}
                onClick={handleSubmit}>
                Log in
              </Button>
              <Button variant={'solid'}
                onClick={Google}>
                Log in with Google
              </Button>
              {error && <span>{error}</span>}
            </Stack>
            <Stack>
              <Link to="/signup" color={'blue.500'}>Don´t have account?</Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} >
          <Image width="500px" height="500px"
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
      <div>
        <Footer2 />
      </div>
    </div>
  );
}