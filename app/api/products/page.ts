import { deflate } from "zlib";
import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/Product";
import { NextResponse } from "next/server";

export default async function GET() {
  await dbConnect();

  try {
    const products = await Product.find({});

    console.log(products);
    NextResponse.json({ success: true, data: products }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
// export async function POST(req: Request) {
//   await dbConnect();

//   try {
//     const product = await Product.create(
//       req.body
//     ); /* create a new model in the database */
//     NextResponse.json({ success: true, data: product }, { status: 201 });
//   } catch (error) {
//     NextResponse.json({ success: false }, { status: 400 });
//   }
// }
