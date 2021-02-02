// import './index.css';
// import { withRouter } from "react-router-dom";
// import Button from "../Button";

// function LoginForm(props) {
//     const history = useHistory();
//     console.log(props);

//     const onSubmit = (e) => {
//         e.preventDefault();
// console.log(e)
//         alert("About to leave");
//         props.history.replace("/");
//     };

//     return (
//         <div className="form-box">
//             <form method="POST" className="login-form" onSubmit={onSubmit}>
//                 <label>Username
//                     <input name="username" type="text" placeholder="Username" />
//                 </label>
//                 <label >Password
//                     <input name="password" type="password" placeholder="Password" />
//                 </label>
//                 {/* <Button big type="submit">Sign In</Button> */}
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// // export default Login;
// export default withRouter(LoginForm);