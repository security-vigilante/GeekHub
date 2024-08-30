'use client';

import { TopIcon, ChatIcon } from '@/public/index';
import { twMerge } from 'tailwind-merge';

type FloatingButtonProps = {
  type: 'top' | 'ask';
  onClick?: () => void;
  className?: string;
};

export default function FloatingButton({ type, onClick, className }: FloatingButtonProps) {
  const handleClick = () => {
    if (type === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (type === 'ask' && onClick) {
      onClick();
    }
  };

  const IconComponent = type === 'top' ? TopIcon : ChatIcon;

  return (
    <button
      type="button"
      onClick={handleClick}
      className={twMerge(
        'group fixed bottom-4 flex h-[7.6rem] w-[7.6rem] items-center justify-center rounded-full shadow-lg focus:outline-none',
        'border border-primary-500 bg-white text-primary-500 hover:border-primary-500 hover:bg-primary-500 hover:text-white',
        className,
      )}
    >
      <div className="flex flex-col items-center justify-center">
        <IconComponent className="group-hover:brightness-0 group-hover:invert group-hover:filter" />
        {type === 'top' && <span className="text-[1.5rem] font-bold">TOP</span>}
      </div>
    </button>
  );
}
