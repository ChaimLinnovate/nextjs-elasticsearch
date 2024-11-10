import { Navbar } from "@/ui/Navbar";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "🚀 messages",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className=" bg-[#333] bg-no-repeat bg-center bg-cover">
        <Navbar />
        {children}
      </div>
    </html>
  );
}
