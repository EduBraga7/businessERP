import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/login",
  },
})

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/clients/:path*",
    "/sales/:path*",
    "/finance/:path*",
    "/settings/:path*",
    "/", // A rota principal redireciona pro dashboard
  ],
}
