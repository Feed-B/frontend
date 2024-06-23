import Providers from "@/app/_queryFactory/providers";

export default function EditProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}
