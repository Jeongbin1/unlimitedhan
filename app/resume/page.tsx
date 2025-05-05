import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { IntroduceSection } from './IntroduceSection';
import { certificateItems, IntroduceItems, skills } from '@/data/resume';
import { ProjectSection } from './ProjectSection';
import { ProjectItems } from '@/data/resume';
import { SkillsSection } from './SkillsSection';
import { CertificateSection } from './CertificateSection';

export default function Resume() {
  return (
    <div className="flex flex-col px-4 py-8 md:px-10 md:py-16 min-h-screen">
      <h1 className=" text-[2.6rem] font-cooper mb-6 text-primary">Resume</h1>
      <div className="bg-slate-50 flex flex-col gap-6 tracking-tight">
        <div className="mt-8 mb-0 md:mt-12 md:mb-4 px-4 md:px-8">
          <h2 className="text-3xl font-semibold">한정빈</h2>
          <p className="text-sm text-slate-600 leading-6">프론트엔드 개발자</p>
        </div>
        <Card>
          <CardContent>
            <IntroduceSection list={IntroduceItems} />
          </CardContent>
        </Card>
        <div className="border-t mx-8" />
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectSection list={ProjectItems} />
          </CardContent>
        </Card>
        <div className="border-t mx-8" />
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <SkillsSection stack={skills} />
          </CardContent>
        </Card>
        <div className="border-t mx-8" />
        <Card>
          <CardHeader>
            <CardTitle>Certificate</CardTitle>
          </CardHeader>
          <CardContent>
            <CertificateSection list={certificateItems} />
          </CardContent>
        </Card>
        <div className="border-t border-transparent" />
      </div>
    </div>
  );
}
