import { useTranslations } from 'next-intl';

export default function CapitalHumano() {
  const t = useTranslations('blogArticles.capitalHumano');

  return (
    <>
      <p className="lead">{t('lead')}</p>
      <p>{t('p1')}</p>

      <h2>{t('h1')}</h2>
      <p>{t('p2')}</p>
      <ul>
        <li><strong>{t('li1_title')}</strong>{t('li1_text')}</li>
        <li><strong>{t('li2_title')}</strong>{t('li2_text')}</li>
      </ul>

      <h2>{t('h1_2')}</h2>
      <p>{t('p3')}</p>
      <ul>
        <li><strong>{t('li3_title')}</strong>{t('li3_text')}</li>
        <li><strong>{t('li4_title')}</strong>{t('li4_text')}</li>
      </ul>

      <div className="overflow-x-auto my-12 border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full text-left text-sm whitespace-nowrap m-0">
          <thead className="uppercase tracking-wider border-b border-gray-200 bg-gray-50 text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-4 font-bold">{t('table.h1')}</th>
              <th scope="col" className="px-6 py-4 font-bold">{t('table.h2')}</th>
              <th scope="col" className="px-6 py-4 font-bold">{t('table.h3')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            <tr className="hover:bg-blue-50/50 transition-colors">
              <th scope="row" className="px-6 py-4 font-semibold text-gray-900">{t('table.r1_c1')}</th>
              <td className="px-6 py-4 text-gray-600">{t('table.r1_c2')}</td>
              <td className="px-6 py-4 font-medium text-[#002EC3]">{t('table.r1_c3')}</td>
            </tr>
            <tr className="hover:bg-blue-50/50 transition-colors">
              <th scope="row" className="px-6 py-4 font-semibold text-gray-900">{t('table.r2_c1')}</th>
              <td className="px-6 py-4 text-gray-600">{t('table.r2_c2')}</td>
              <td className="px-6 py-4 font-medium text-[#002EC3]">{t('table.r2_c3')}</td>
            </tr>
            <tr className="hover:bg-blue-50/50 transition-colors">
              <th scope="row" className="px-6 py-4 font-semibold text-gray-900">{t('table.r3_c1')}</th>
              <td className="px-6 py-4 text-gray-600">{t('table.r3_c2')}</td>
              <td className="px-6 py-4 font-medium text-[#002EC3]">{t('table.r3_c3')}</td>
            </tr>
            <tr className="hover:bg-blue-50/50 transition-colors">
              <th scope="row" className="px-6 py-4 font-semibold text-gray-900">{t('table.r4_c1')}</th>
              <td className="px-6 py-4 text-gray-600">{t('table.r4_c2')}</td>
              <td className="px-6 py-4 font-medium text-[#002EC3]">{t('table.r4_c3')}</td>
            </tr>
            <tr className="hover:bg-blue-50/50 transition-colors">
              <th scope="row" className="px-6 py-4 font-semibold text-gray-900">{t('table.r5_c1')}</th>
              <td className="px-6 py-4 text-gray-600">{t('table.r5_c2')}</td>
              <td className="px-6 py-4 font-medium text-[#002EC3]">{t('table.r5_c3')}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>{t('h2')}</h2>
      <p>{t('p4')}</p>

      <h2>{t('h2_2')}</h2>
      <p>{t('p5')}</p>
      <ul>
        <li>{t('li5')}</li>
        <li>{t('li6')}</li>
        <li>{t('li7')}</li>
      </ul>

      <h2>{t('h2_3')}</h2>
      <p>{t('p6')}</p>
    </>
  );
}