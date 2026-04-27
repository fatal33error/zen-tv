import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "zen+ TV | Home",
  description: "Experience the best home with zen+ TV.",
};

export default function Page() {
  return <ClientPage />;
}
