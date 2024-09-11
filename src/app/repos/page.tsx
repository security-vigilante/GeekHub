import { getServerSession } from 'next-auth';
import { authOptions } from '@/authOptions';
import ReposPageHeader from '@/app/repos/_components/ReposPageHeader';
import UserCard from '@/app/repos/_components/UserCard';
import RepositoryList from '@/app/repos/_components/RepositoryList';
import RepositoryActions from '@/app/repos/_components/RepositoryActions';
import NonLoginReposPage from '@/app/repos/_components/NonLoginReposPage';

export default async function ReposPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <NonLoginReposPage />;
  }

  return (
    <div className="mx-auto bg-opacity-70 bg-[url('/images/headerBackground.svg')] bg-contain bg-top bg-no-repeat">
      <div className="mx-auto flex w-[131.4rem] min-w-[131.4rem] flex-col items-center gap-[12.4rem]">
        <ReposPageHeader />
        <div className="flex flex-col gap-[2.8rem]">
          <UserCard />
          <RepositoryActions />
          <RepositoryList searchParams={searchParams} />
        </div>
      </div>
    </div>
  );
}
