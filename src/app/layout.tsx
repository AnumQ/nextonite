import "./globals.css";

export const metadata = {
  title: "Hola Next",
  description: "Next level",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
