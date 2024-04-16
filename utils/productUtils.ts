// // Inside utils/productUtils.ts

// import clientPromise from "../lib/dbConnect";
// import Product from "../models/Product";

// import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

// type ConnectionStatus = {
//   isConnected: boolean;
// };

// export const getServerSideProps: GetServerSideProps<
//   ConnectionStatus
// > = async () => {
//   try {
//     await clientPromise;
//     // `await clientPromise` will use the default database passed in the MONGODB_URI
//     // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
//     //
//     // `const client = await clientPromise`
//     // `const db = client.db("myDatabase")`
//     //
//     // Then you can execute queries against your database like so:
//     // db.find({}) or any of the MongoDB Node Driver commands

//     return {
//       props: { isConnected: true },
//     };
//   } catch (e) {
//     console.error(e);
//     return {
//       props: { isConnected: false },
//     };
//   }
// };

// export const fetchAllProducts = async () => {
//   await dbConnect()
//     .then(() => {
//       console.log("Mongodb connected!!!");
//     })
//     .catch(() => {
//       console.log("Mongodb connection failed!!!");
//     });

//   try {
//     const allProducts = await Product.find({});
//     return allProducts;
//   } catch (error) {
//     throw new Error("Failed to fetch products in utils");
//   }
// };
