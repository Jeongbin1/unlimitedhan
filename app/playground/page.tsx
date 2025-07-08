import ItemCard from './ItemCard';
import { projects } from './projects';

export default function Playground() {
  return (
    <div className="flex flex-col px-4 py-8 md:px-10 md:py-16 min-h-screen">
      <h1 className=" text-[2.6rem] font-cooper mb-6 text-primary">
        Playground
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ItemCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
