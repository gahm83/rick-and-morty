import { NextResponse } from 'next/server';

const API_ENDPOINT = new URL('https://rickandmortyapi.com/api/character');

export async function GET(request) {
  const search = request.nextUrl.search;
  console.log(search);
  console.log(`${API_ENDPOINT}${search}`);
  const response = await fetch(`${API_ENDPOINT}${search}`);
  const data = await response.json();
  return NextResponse.json({data});
}