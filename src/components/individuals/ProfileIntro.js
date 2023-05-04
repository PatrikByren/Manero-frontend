import { Link } from "react-router-dom";

const ProfileIntro = ({path, firstname, lastname, email, image }) => {
  return (
    <div className="myprofileintro">
      <div className="profileintro">
        <div className="lineup30"></div>
        {image ? (<div className="profileImage" ><img src={image} alt="ProfileImages" /><Link to={path}><i className="fa-light fa-pen-line"></i></Link></div>) : (<div className="profileImage"><Link to={path}><i className="fa-light fa-pen-line"></i></Link></div>)}
        <div className="title-2 text-center">{firstname} {lastname}</div>
        <div className="text-center">{email}</div>
      </div>
    </div>
  );
};

export default ProfileIntro;
