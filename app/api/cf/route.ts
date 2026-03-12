import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { token } = await request.json();
    const secret = process.env.TURNSTILE_SECRET_KEY;
    const ip = request.headers.get('x-forwarded-for');

    if (!secret || !ip || !token) {
        return NextResponse.json(
            { error: 'Missing required parameters' },
            { status: 400}
        );
    }

    const formData = new FormData();
    formData.append('secret', secret);
    formData.append('response', token);
    formData.append('remoteip', ip);

    try {
        const response = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                body: formData,
            },
        );

        const { success } = await response.json();
        return NextResponse.json({ success });
    } catch (error) {
        console.error("Turnstile validation error:", error);

        return NextResponse.json(
            { 
                success: false, 
                "error-codes": ["internal-error"],
                message: "Error interno al validar el captcha" 
            }, 
            { status: 500 }
        );
    }
}