"use server";

import dbConnect from "@/lib/dbConnect";
import Autocare from "@/models/Autocare";
import Homecare from "@/models/Homecare";

export async function getHomecareProductsByCategory(category: string) {
  try {
    await dbConnect();

    const homecareProducts = await Homecare.find({ category });

    return { homecareProducts };
  } catch (error: any) {
    return { errMsg: error.message };
  }
}

export async function getHomecareProductsByCategoryAndId(
  category: any,
  id: any
) {
  try {
    await dbConnect();

    const homecareProducts = await Homecare.find({ category, href: id });

    return { homecareProducts };
  } catch (error: any) {
    return { errMsg: error.message };
  }
}

export async function getAutocareProducts() {
  try {
    await dbConnect();

    const autocareProducts = await Autocare.find({});

    // console.log("Autocare Products : ", autocareProducts);

    return { autocareProducts };
  } catch (error: any) {
    return { errMsg: error.message };
  }
}

export async function getAutocareProductsById(id: any) {
  try {
    await dbConnect();

    const autocareProductDetails = await Autocare.find({ href: id });

    console.log("Autocare Products : ", autocareProductDetails);
    

    return { autocareProductDetails };
  } catch (error: any) {
    return { errMsg: error.message };
  }
}
