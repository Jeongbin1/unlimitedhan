import Image from 'next/image';

export default function IntroSection() {
  return (
    <>
      <h1 className=" text-2xl font-semibold text-[#f27405]">About me.. </h1>
      <div className="flex justify-between px-8 pt-6 pb-8 mt-4 gap-4 bg-[#feedde90] rounded-2xl ">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-medium ">
            JEONGBIN HAN{' '}
            <span className="text-sm text-gray-400 italic">
              frontend developer
            </span>
          </h2>
          <p className="text-sm">멋지고 재미있게 살고 싶은 사람🍊</p>
          <p className="text-sm text-gray-600">
            I’m based in: Seoul, Korea
            <br />I work with this tech/tools:{' '}
            <span className="bg-gray-300 px-1 rounded text-xs">
              React
            </span>,{' '}
            <span className="bg-gray-300 px-1 rounded text-xs">JavaScript</span>
            <br />I really love: gym, swimming, and traveling
            <br />
            Find me on:{' '}
            <a
              className="underline hover:text-[#f27405]"
              href="https://github.com/Jeongbin1"
              target="_blank"
            >
              GitHub
            </a>{' '}
          </p>
        </div>
        <Image
          src="/images/profile.jpeg"
          alt="프로필"
          width={160}
          height={120}
          className="opacity-85"
        />
      </div>
    </>
  );
}
