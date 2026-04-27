import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "zen+ TV | Free Trial",
  description: "Experience the best free trial with zen+ TV.",
};

export default function Page() {
  return <ClientPage />;
}
