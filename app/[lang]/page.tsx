import Test from '@/components/Home/Test';
//== I18n
import getDictionary from '@/dictionaries/serverDictionary';
//= Types
import type { Locale } from '@/i18n.config';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { translations } = getDictionary();

  return (
    <main>
      <h1>this is home page</h1>
      {translations.welcome}
      <Test />
    </main>
  )
}
