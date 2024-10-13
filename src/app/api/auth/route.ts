import { NextResponse } from 'next/server';
import crypto from 'crypto';

// getting private key
const privateKey: string = process.env.PRIVATE_KEY!!; // will always be here

// typical get request
export async function GET(request: Request) {

  console.log('typeof request: ', typeof request);
  // using the URL object native to js
  // we assume the request comes with a url prop
  const { searchParams } = new URL(request.url);

  // using the searchParams object to extract the string token from the request or using the crypto library to get a random UUID
  const token = searchParams.get('token') || crypto.randomUUID();

  // here we get use the same technique to get an expiration date, or we make one
  const expire = searchParams.get('expire') || (Math.floor(Date.now() / 1000) + 2400).toString();

  // using our key
  const privateAPIKey: string = privateKey;
  // using crypto library to create a shaw encription - signature

  const signature = crypto.createHmac('sha1', privateAPIKey).update(token + expire).digest('hex');

  // sending the token, expiration date, and crypto signature
  return NextResponse.json({
    token,
    expire,
    signature
  });
}
