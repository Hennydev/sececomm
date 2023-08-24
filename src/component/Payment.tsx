
import { useState, FC } from "react";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

type Props = {
  totalPrice: any
}

const Payment : FC<Props>=({ totalPrice}) => {
  const [amount, setAmount] = useState(totalPrice);
  

  const config = {
    public_key: "FLWPUBK_TEST-c136bac20a029395da907bc29f86cc50-X",
    tx_ref: Date.now().toLocaleString(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: 'anglbendgr8@gmail.com',
      phone_number: '08130337697',
      name: 'name',
    },
    customizations: {
      title: "Henny's Store",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response:any) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (  
    <div className ="App">
      <div className="container">
       
      <FlutterWaveButton {...fwConfig} />
      </div>
    </div>
  );
}



export default Payment