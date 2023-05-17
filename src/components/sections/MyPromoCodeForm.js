import React from "react";

const MyPromoCodeForm = () => {
  console.log("test");
  return (
    <div>
      <div id="discount-section">
        <h3>Ange din rabattkod:</h3>
        <form id="promo-code-form">
          <input type="text" id="promo-code-input" />
          <button type="submit">Använd kod</button>
        </form>
        <div id="promo-code-view"></div>
      </div>
      ;
    </div>
  );
};

export default MyPromoCodeForm;
