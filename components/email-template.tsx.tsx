import * as React from "react";

interface EmailTemplate {
  name: string;
  email: string;
  phoneNo: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplate>> = ({
  name,
  email,
  phoneNo,
  message,
}) => (
  <div>
    <p>
      {name} has submitted the contact form on your website.
      <br />
      Their Email is {email} and Phone number is {phoneNo}
      <br />
      Message: {message}
    </p>
    <p>
      Regards,
      <br />
      Vinox Technologies
    </p>
  </div>
);
