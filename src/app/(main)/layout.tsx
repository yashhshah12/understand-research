
import { AuthLinks } from "../../components/AuthLinks";

 export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showAuthlinks = process.env.NEXT_PUBLIC_SHOW_AUTH === 'true';
  return (
    <>
          {showAuthlinks && (
        <AuthLinks /> 
          )
          }
        <main>{children}</main>
   </>
  );
}
