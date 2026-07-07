import './globals.css';

export const metadata = {
  title: 'Pure Platinum Cleaning – Pure Clean. Pure Platinum',
  description: 'Commercial cleaning, facility management, hygiene, waste, supplies and maintenance services across Victoria.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
