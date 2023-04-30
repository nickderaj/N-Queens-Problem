import BoardInput from '@/components/Board/BoardInput';
import Image from 'next/image';
import PrimaryLayout from 'src/components/layouts/PrimaryLayout';
import SampleModal from 'src/components/modals/SampleModal';
import { PageWithLayout } from 'src/types/page';

export default function Home(_: PageWithLayout) {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen w-screen">
        <p className="text-3xl mb-2 font-kalam">N Queens Solver</p>
        <p className="px-6 text-center relative pt-4 flex items-center mb-4 font-cairo">
          Github:
          <a
            href="https://github.com/nickderaj/N-Queens-Problem"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer wiggle ml-1"
          >
            <Image src="/svg/octocat.svg" alt="github" width="40" height="40" />
          </a>
        </p>
        <BoardInput />
      </section>
      <SampleModal />
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => <PrimaryLayout title="N Queens Solver">{page}</PrimaryLayout>;
