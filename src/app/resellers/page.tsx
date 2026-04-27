import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "zen+ TV | Resellers",
  description: "Experience the best resellers with zen+ TV.",
};

export default function Page() {
  return <ClientPage />;
}
