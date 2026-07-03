import Navbar from "@/src/components/navbar/navbar";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
    >
      <body>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;