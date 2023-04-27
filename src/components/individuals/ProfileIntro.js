//import image from '../../asset/images/swedenflag.png'


const ProfileIntro = ({ image }) => {
  return (
    <div className="profileintro">
      <div className="lineup30"></div>
      {image ? (<div><img className="profileImage" src={image} alt="ProfileImages" /></div>) : (<div className="profileImage"><i className="fa-light fa-pen-line"></i></div>)}
      <div className="title-2 text-center">Firstname Lastname</div>
      <div className="text-center">name@domain.com</div>
    </div>
  );
};

export default ProfileIntro;
