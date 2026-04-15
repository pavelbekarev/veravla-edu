import "../styles/main.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
    >
      <body>
        { children }
        <div id="modal-root" />
      </body>
    </html>
  );
}
