import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const data = await request.formData();

  const name = data.get("name");
  const email = data.get("email");
  const phoneNo = data.get("phoneNo");
  const message = data.get("message");

  console.log(name);
  console.log(email);
  console.log(phoneNo);
  console.log(message);

  return new NextResponse("Thank you");
}
