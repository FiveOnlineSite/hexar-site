import Navbar from "@/src/components/Navbar";

export default function AlbumsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <main> 
        <Navbar/>
          {children}
      </main>
  );
  
}
