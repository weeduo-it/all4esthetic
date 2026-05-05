// app/redirector/page.js
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const c = params?.c;

  if (!c) {
    return <p>Missing query parameter "c".</p>; // simple fallback
  }

  redirect(
    `http://localhost:7777/index.php?module=IFE_Report&action=index&record=e5066d95-55fa-08fb-9ffb-61fe4eb7a95d&name=Agendamentos&type=tasks&qrcode=${encodeURIComponent(c)}`
  );
}
