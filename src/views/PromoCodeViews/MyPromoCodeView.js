import React from "react";
import BaseRoundePicture from "../../components/sections/BaseRoundePicture";
import pictures from "../../asset/images/promocodepicture.png";

const MyPromoCodeView = () => {
  /*const [promoCode, setPromoCode] = useState("");
  const [validPromoCode, setValidPromoCode] = useState("");*/

  /*const handlePromoCodeChange = (event) => {
    setPromoCode(event.target.value);
  };

  const handleApplyPromoCode = () => {
    setValidPromoCode(promoCode);
  };*/
  
  return (
    <div>
      <BaseRoundePicture
        Image={pictures}
        content={"You dont have promocodes yet!"}
        submitname={"ENTER THE VOUCHER"}
        headline={"My promocode"}
        btntext={"SUBMIT"}
        //value={promoCode}
        //setvalue={setPromoCode}
      ></BaseRoundePicture>
    </div>
  );
};

export default MyPromoCodeView;
