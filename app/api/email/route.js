import { NextResponse } from "next/server";
import 'dotenv/config'
require('dotenv').config()
console.log(process.env)
export async function POST(request) {
  const template_params = await request.json();
 console.log(process.env)
  // Prepare the data required for EmailJS API request
  const emailJSData = {
    service_id:"service_rnuf9u8",
    template_id:"template_h47405i",
    user_id: "b9IPWOAd2xCebHu5l",
    template_params,
    accessToken:"Lb0x4kCywdrlxYBBtLzSd",
  };

  try {
    // Send a POST request to the EmailJS API endpoint
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailJSData),
    });

    // If response is successful, return a JSON response with success status code,
    // otherwise, throw an error containing the client error response status code
    if (response.ok) {
      console.log("success")
      return NextResponse.json({ status: response.status });
    } else {
      const error = new Error();
      error.status = response.status;
      throw error;
    }
  } catch (error) {
    // Based on the error, return a JSON response with the client or a default server error status code
    return NextResponse.json({ status: error.status || 500 });
  }
}
