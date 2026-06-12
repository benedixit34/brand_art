import LoaderWrapper from "@/components/LoaderWrapper";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <LoaderWrapper>{children}</LoaderWrapper>;
}