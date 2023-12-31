import Image from 'next/image';
import Link from 'next/link';

import { routes } from '@/constants';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className='border-t'>
      <div className='wrapper flex items-center flex-between flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href={routes.HOME}>
          <Image
            src={'/assets/images/logo.svg'}
            alt={'logo'}
            width={128}
            height={38}
          />
        </Link>
        <p>2024 Event-live. All rights reserved.</p>
      </div>
    </footer>
  );
}
