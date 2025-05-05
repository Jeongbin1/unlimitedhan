import { IntroduceItem } from '@/data/resume';

export const IntroduceSection = ({ list }: { list: IntroduceItem[] }) => {
  return (
    <section>
      <ul>
        {list.map((item) => (
          <li key={item.title}>
            <h3 className="font-medium text-sm my-2">{item.title}</h3>
            <div className="text-xs font-light mb-6">{item.content}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};
