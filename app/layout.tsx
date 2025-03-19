import '@/app/ui/global.css';
import { lusitana, pacifico } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pacifico.className} antialiased`}>{children}</body>
      <div className={`${lusitana.className} text-xl text-gray-600 flex w-full justify-center items-center pb-10`}>
      <p>JOJO lOGI</p>

      </div>
      
    </html>
  );
}