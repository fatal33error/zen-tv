import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "zen+ TV | Tutorials",
  description: "Experience the best tutorials with zen+ TV.",
};

export default function Page() {
  return <ClientPage />;
}
