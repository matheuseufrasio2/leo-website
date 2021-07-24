import type { NextApiRequest, NextApiResponse } from 'next';
import { resolve } from 'path';

interface Data {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
}

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'enviadordecontatos@gmail.com',
      pass: process.env.PASSWORD_EMAIL_ENVIADOR,
    },
    secure: true,
  });

  const mailData = {
    from: 'enviadordecontatos@gmail.com',
    // to: 'matheuseufrasio2@gmail.com',
    to: ['leonardobvercoza@gmail.com', 'matheuseufrasio2@gmail.com'],
    subject: `Nova mensagem no site de: ${req.body.name}`,
    text: req.body.message,
    html: `<div>
            <p>Nome e Sobrenome: ${req.body.name}</p>
            <p>E-mail: ${req.body.email}</p>
            <p>Telefone: ${req.body.phone}</p>
            <p>Quanto gasta normalmente: ${req.body.budget}</p>
            <p>Mensagem: ${req.body.message}</p>
           </div>`,
  };

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200).json(req.body);
  // res.status(200).json({ name: 'John Doe' });
}
