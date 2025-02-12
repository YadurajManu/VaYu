import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from '@/components/navigation'
import { ParticleBackground } from '@/components/particle-background'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VaYu - Cutting-edge iOS & Android App Development',
  description: 'VaYu delivers high-quality, innovative mobile solutions for businesses. Expertise in iOS and Android app development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <ParticleBackground />
            <div className="relative z-10">
              <Navigation />
              <main className="flex-1">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

