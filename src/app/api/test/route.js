// app/api/products/route.js
import { NextResponse } from 'next/server';

const DATABASE_URL = 'mongodb://localhost:27017/products'; // Replace with your actual database URL

export async function GET() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error('Failed to fetch products from the database.');
    }
    const products = await response.json();

    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
