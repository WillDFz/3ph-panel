import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const cookies = req.cookies;
    const token = cookies.get('token')?.value;

    if (!token) {
        console.log('Usuário não autenticado, redirecionando para a página inicial');
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/'],
};