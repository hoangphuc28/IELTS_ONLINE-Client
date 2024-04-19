import Nav from "./components/nav/nav"
import "@admin/styles/base/_reset.scss"
import "@admin/styles/base/_layout.scss"

export const metadata = {
  title: 'Admin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <div className="layout-cover">
            <Nav />
            <div className="page-contain">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
