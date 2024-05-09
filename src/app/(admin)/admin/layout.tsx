import Nav from "./components/nav/nav"
import "@admin/styles/base/_reset.scss"
import "@admin/styles/base/_layout.scss"
import ExamProvider from "./providers/examProvider"
import { Provider } from 'react-redux'
import store from "../lib/redux/store"
import ReduxProvider from "./providers/reduxProvider"

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
        <ReduxProvider>
        <div className="layout">
          <div className="layout-cover">
            <Nav />
            <div className="page-contain">
              <ExamProvider>
              {children}
              </ExamProvider>

            </div>
          </div>
        </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
