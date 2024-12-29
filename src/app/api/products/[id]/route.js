import { NextResponse } from 'next/server'
import clientPromise from '@/app/lib/mongodb'
import { ObjectId } from 'mongodb'

export async function GET(request, { params }) {
  try {    
    const client = await clientPromise
    const db = client.db("products")
    const product = await db.collection("inventory").findOne({ _id: new ObjectId(params.id) })    
    return NextResponse.json(product)
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 })
  }
}

