import { useRouter, BlitzPage } from "blitz"
import Link from "next/link"
import Layout from "app/core/layouts/Layout"
import { LoginForm } from "app/auth/components/LoginForm"
import { PageTransitionWrapper } from "app/core/components/zoom"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div className="bg-yellow-300">
      <body className="h-screen w-screen flex justify-center items-center overflow-hidden">
        <div>
          <Link href="/">
            <span className="absolute top-12 left-12 w-1/4 cursor-pointer">
              <span className="p-1 text-4xl font-black leading-none text-white select-none">
                <span>po</span>
                <span className="text-yellow-200">lll</span>
                <span>s</span>
              </span>
            </span>
          </Link>
        </div>
        <LoginForm
          onSuccess={() => {
            const next = (router.query.next as string) ?? "/"
            router.push(next)
          }}
        />
      </body>
    </div>
  )
}

LoginPage.redirectAuthenticatedTo = "/"
LoginPage.getLayout = (page) => <Layout title="Log In">{page}</Layout>

export default PageTransitionWrapper(LoginPage)
