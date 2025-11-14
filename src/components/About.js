// import UserContext from "../utils/UserContext.js";
import User from "./User.js";
// import UserClass from "./UserClass.js";
// import { Component } from "react";

// class About extends Component {
//     constructor(props){
//         super(props);
//         console.log("Parent Constructor");
//     }
//     componentDidMount(){
//         console.log("Component is Mounted Parent"); 
//     }
//   render() {
//     console.log("Parent Render");
//     return (
//       <div className="about-component">
//         <h1>About Us</h1>
//         <div>
//           <UserContext.Consumer>
//             {(data)=><h2 className="text-xl font-bold ">{data.loggedInUser}</h2>}
//           </UserContext.Consumer>
//         </div>
//         <User />
//         <UserClass name="Pawan T." location={"India"} contact={"pawan.hills"}/>
//         <UserClass name="Elon M." location={"Antartica"} contact={"elonmusk.mind"} />
//         <UserClass name="Klon M." location={"Antartica"} contact={"elonmusk.mind"} />
//       </div>
//     );
//   }
// }



const About = () => {
  return (
    <div className="about-component min-h-fit text-center my-4">
      <h1 className="text-2xl">About Us</h1>
      <User/>
      {/* <UserClass name="Pawan T." location={"Ghaziabad"} /> */}
    </div>
  );
};

export default About;
