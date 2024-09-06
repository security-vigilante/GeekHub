import MePageTitle from '@/app/me/_components/MePageTitle';
import UserCard from '@/app/repos/_components/UserCard';
import UserInfo from '@/app/me/_components/UserInfo';
import MePageLinks from '@/app/me/_components/MePageLinks';

export default function MePage() {
  return (
    <div className="mx-auto flex min-h-screen w-[131.4rem] flex-col items-center gap-[8.3rem]">
      <MePageTitle title="Profile Information" />
      <UserCard hasLogoutButton />
      <UserInfo />
      <MePageLinks />
    </div>
  );
}
