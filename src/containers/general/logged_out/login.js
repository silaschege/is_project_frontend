import LoggedOutNavbar from "./navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../service/auth_service";
import axios from "axios";




const LoginPage =()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  
  const login_routing=()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    var is_farmer;
    var is_delivery;
    var is_manufacturer;
   
    // login routing to specific page
    axios.get("http://127.0.0.1:8000/user/me",{headers:{Authorization: 'Bearer ' + user} }).then((response)=>
    {
        is_farmer = response.data.user.is_farmer ;
        is_manufacturer = response.data.user.is_manufacturer;
        is_delivery = response.data.user.is_delivery;

        if (is_farmer){
          navigate("/farmer_installments");
          window.location.reload();
        }


        if(is_delivery){
          navigate("/delivery");
          window.location.reload();

        }

        if(is_manufacturer){
         
          navigate("/manufacturer");
          window.location.reload();
        }
    })
  };
  const handleLogin = async (e) => {
    // login page 
    e.preventDefault();
    try {
      
      await AuthService.login(email, password).then(
        () => {

          // navigate("/farmer_installments");
          // window.location.reload();
          login_routing();
         
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
    return (
        <>
        <LoggedOutNavbar/>
        
        <div  class="jumbotron d-flex align-items-center min-vh-100">
        <div  class="container text-center">
        <Form className="mt-5" onSubmit={handleLogin}>
      <Form.Group className="mb-100" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"   value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
    

        </>
    );
};

export default LoginPage;
