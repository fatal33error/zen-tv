import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "zen+ TV | Pricing",
  description: "Experience the best pricing with zen+ TV.",
};

export default function Page() {
  return <ClientPage />;
}
