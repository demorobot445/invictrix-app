import React from "react";

const CreditCardForm: React.FC = () => {
  return (
    <>
      {/* Cardholder Name */}
      <div>
        <label
          htmlFor="cardholder"
          className="text-dark block text-sm font-medium"
        >
          Cardholder Name
        </label>
        <input
          type="text"
          id="cardholder"
          placeholder="John Doe"
          className="border-dark focus block w-full border-b-2 p-2 text-lg focus:outline-none"
        />
      </div>

      {/* Card Number */}
      <div>
        <label
          htmlFor="cardNumber"
          className="text-dark block text-sm font-medium"
        >
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
          className="border-dark focus block w-full border-b-2 p-2 text-lg focus:outline-none"
        />
      </div>

      {/* Expiration & CVV */}
      <div className="flex space-x-4">
        <div className="flex-1">
          <label
            htmlFor="expiry"
            className="text-dark block text-sm font-medium"
          >
            Expiry Date
          </label>
          <input
            type="text"
            id="expiry"
            placeholder="MM/YY"
            className="border-dark focus block w-full border-b-2 p-2 text-lg focus:outline-none"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="cvv" className="text-dark block text-sm font-medium">
            CVV
          </label>
          <input
            type="password"
            id="cvv"
            placeholder="123"
            className="border-dark focus block w-full border-b-2 p-2 text-lg focus:outline-none"
          />
        </div>
      </div>
    </>
  );
};

export default CreditCardForm;
