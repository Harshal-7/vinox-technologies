"use server";

import dbConnect from "@/lib/dbConnect";
import Product from "@/models/Product";

export async function getProducts() {
  try {
    await dbConnect();

    const products = await JSON.parse(JSON.stringify(await Product.find()));

    return { products };
  } catch (error: any) {
    return { errMsg: error.message };
  }
}
