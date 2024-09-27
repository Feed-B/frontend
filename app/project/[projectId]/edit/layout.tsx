import Providers from "@/app/_context/queryProviders";

export default function EditProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}
