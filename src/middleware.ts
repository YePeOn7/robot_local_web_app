import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request : NextRequest ) {
  // console.log("Here")
  // if(request)
  return NextResponse.redirect(new URL('/dashboard', request.url))
  // return NextResponse.json({test: 'Hello'});
}

export const config = {
  matcher: ['/']
}