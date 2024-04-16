import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import Product from "../../../../models/Product";

export default async function handler(req: Request, res: NextResponse) {
  const method = req.method;
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const product = await Product.findById(id);
        if (!product) {
          return NextResponse.json({ success: false }, { status: 400 });
        }
        NextResponse.json({ success: true, data: product }, { status: 200 });
      } catch (error) {
        NextResponse.json({ success: false }, { status: 400 });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const product = await Product.findByIdAndUpdate(id, {
          new: true,
          runValidators: true,
        });
        if (!product) {
          return NextResponse.json({ success: false }, { status: 400 });
        }
        NextResponse.json({ success: true, data: product }, { status: 200 });
      } catch (error) {
        NextResponse.json({ success: false }, { status: 400 });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deleteProduct = await Product.deleteOne({ _id: id });
        if (!deleteProduct) {
          return NextResponse.json({ success: false }, { status: 400 });
        }
        NextResponse.json({ success: true, data: {} }, { status: 200 });
      } catch (error) {
        NextResponse.json({ success: false }, { status: 400 });
      }
      break;

    default:
      NextResponse.json({ success: false }, { status: 400 });
      break;
  }
}
