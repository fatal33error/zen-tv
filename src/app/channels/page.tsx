import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "zen+ TV | Channels",
  description: "Experience the best channels with zen+ TV.",
};

export default function Page() {
  return <ClientPage />;
}
