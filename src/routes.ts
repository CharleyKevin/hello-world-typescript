import { Request, Response } from 'express';
import creatUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = creatUser({
   email: 'charley@teste.com',
   password: '123',
   techs: ['Node', 'Php'],
  });

  console.log(user.email);

  return response.json({ message: 'Hello World' });
}