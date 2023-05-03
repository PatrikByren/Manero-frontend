//import image from '../../asset/images/swedenflag.png'
// InputSingel måste ligga i en = <div className='myprofile'>


const ProfileIntro = ({firstname, lastname, email, image }) => {
  return (
    <div className="profileintro">
      <div className="lineup30"></div>
      {image ? (<div className="profileImage" ><img src={image} alt="ProfileImages" /><i className="fa-light fa-pen-line"></i></div>) : (<div className="profileImage"><i className="fa-light fa-pen-line"></i></div>)}
      <div className="title-2 text-center">{firstname} {lastname}</div>
      <div className="text-center">{email}</div>
    </div>
  );
};

export default ProfileIntro;
