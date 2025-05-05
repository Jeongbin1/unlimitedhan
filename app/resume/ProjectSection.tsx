import { ProjectItem } from '@/data/resume';

export const ProjectSection = ({ list }: { list: ProjectItem[] }) => {
  return (
    <section>
      <div className="flex gap-4 items-center">
        <h3 className="text-xl font-medium text-slate-700">Coworkers</h3>
        <div className="text-sm text-slate-700">
          <a
            href="https://github.com/Team-7-Coworkers/coworkers"
            className="underline"
          >
            GitHub
          </a>{' '}
          |{' '}
          <a href="https://coworkers-11-4-7.vercel.app/" className="underline">
            Demo
          </a>
        </div>
      </div>
      <p className="text-xs text-slate-600 mt-2 mb-8">
        Todo List 기반 팀 단위 업무 배정 및 현황 공유 서비스
        <br />팀 프로젝트(5명) | 2025.01 - 2025.02
      </p>
      <div className="flex flex-col gap-8">
        {list.map((item) => (
          <div key={item.title} className="flex gap-2 text-xs ">
            <div className="w-1/5 ">{item.title}</div>
            <div className="w-4/5 ">{item.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
