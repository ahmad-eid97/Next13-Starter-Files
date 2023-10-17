'use client';
//== I18n
import getDictionary from '@/dictionaries/clientDictionary';

function Test() {
  const { translations, locale } = getDictionary();

  return (
    <div>
      {translations.welcome}
    </div>
  )
}

export default Test