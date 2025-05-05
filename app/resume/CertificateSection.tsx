import { CertificateItem } from '@/data/resume';

export const CertificateSection = ({ list }: { list: CertificateItem[] }) => {
  return (
    <section>
      <ul>
        {list.map((item) => (
          <li key={item.title}>
            <h3 className="font-medium text-sm leading-8">{item.title}</h3>
            <div className="text-xs font-light text-slate-600 mb-4">
              {item.issuedBy} | {item.date}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
