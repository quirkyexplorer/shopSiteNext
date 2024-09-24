import { NextRequest, NextResponse } from 'next/server';
import { prisma, Prisma } from '@/prisma/index';
import { Product } from '@/prisma/index'

export async function POST(request: NextRequest) {
      
      try {
        const data = await request.json();

        console.log('request', data)
        
        const result = await prisma.product.create({
          data
        });

        return NextResponse.json(JSON.stringify(result), { status: 201 });
      } catch(error) {
        console.log('Error processing request: ', error);

        return NextResponse.json({error: error}.error, {status: 400});
      }
}

/// TODO FIX 
export async function PUT(request: NextRequest) {

  try {
    const data = await request.json();

    console.log('request', data)
    
    const result = await prisma.product.create({
      data
    });

    return NextResponse.json(JSON.stringify(result), { status: 201 });
  } catch(error) {
    console.log('Error processing request: ', error);

    return NextResponse.json({error: error}.error, {status: 400});
  }
}


// TODO FIX 
export async function GET(request: NextRequest) {
  let result;
  try {
    const data = await request.json();

    console.log('request', data)
    
    const result = await prisma.product.create({
      data
    });

    return NextResponse.json(JSON.stringify(result), { status: 201 });
  } catch(error) {
    console.log('Error processing request: ', error);

    return NextResponse.json({error: error}.error, {status: 400});
  }
}

export async function DELETE(request: NextRequest) {
  let result;
  try {
    const data = await request.json();

    console.log('request', data)
    
    const result = await prisma.product.delete({
      where: {
        id: data.id
      }
    }) 

    return  new NextResponse(null, { status: 204 });
  } catch(error) {
    console.log('Error processing request: ', error);

    return NextResponse.json({error: error}.error, {status: 400});
  }
}