"use server";

import dbConnect from "@/lib/dbConnect";
import Product from "@/models/Product";

export async function getProductById(href: any) {
  try {
    await dbConnect();

    const product = await Product.findOne({ href: href });

    return { product };
  } catch (error: any) {
    return { errMsg: error.message };
  }
}
