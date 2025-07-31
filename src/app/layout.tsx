import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata = {
  title: {
    template: '%s | Computer Repair Shop',
    default: 'Computer Repair Shop',
  },
  description: "Dan's Computer Repair Shop",
  applicationName: 'Computer Repair Shop',
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
