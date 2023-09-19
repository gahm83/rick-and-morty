import { NextResponse } from 'next/server';

const API_ENDPOINT = 'https://rickandmortyapi.com/api/character';

export async function GET(request) {
  const page = request.nextUrl.searchParams.get("page");
  // API_URL = page ? `${API_ENDPOINT}?page=${page}` :
  // const req = await request.json();
  // const { token } = await request.json();
  console.log(page);

  const API_URL = (page !== null) ? `${API_ENDPOINT}?page=${page}` : API_ENDPOINT;
  const response = await fetch(API_URL);
  const data = await response.json();
  return NextResponse.json({data});
}