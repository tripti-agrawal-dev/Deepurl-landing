import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#features" className="hover:text-foreground transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-foreground transition">
                  Pricing
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="hover:text-foreground transition">
                  API Docs
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/docs" className="hover:text-foreground transition">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-foreground transition">
                  Blog
                </Link>
              </li>

            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition">
                  Contact
                </Link>
              </li>

            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition">
                  Terms of Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">© 2025 DeepURL. All rights reserved.</p>
            <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
              <a href="https://www.facebook.com/share/1DdWxZSX2Z/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                Facebook
              </a>
              <a href="https://x.com/Deepurltracking" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                X
              </a>
              <a href="https://www.instagram.com/deepurltracking?igsh=dGY2ZXB5eTI0MjNw" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                Instagram
              </a>
              <a href="https://youtube.com/@deepurl-g2p?si=TLvkdKLfzrBdhi5z" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                YouTube
              </a>
              <a href="https://pin.it/5fINpzFyz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                Pinterest
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
