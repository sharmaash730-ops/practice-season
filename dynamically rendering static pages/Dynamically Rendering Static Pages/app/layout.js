export const metadata = {
  title: {
    template: "%s|technical world",
    default: "technical world",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
