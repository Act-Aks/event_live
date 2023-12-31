import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

type Props = {};

export default function RootPage({}: Props) {
  return (
    <>
      <section className='bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10'>
        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
          <div className='flex flex-col justify-center gap-8'>
            <h1 className='h1-bold'>
              Host, Connect, and Celebrate Events with Ease with Event-live!
            </h1>
            <p className='p-regular-20 md:p-regular-24'>
              Book and learn tips from top experts in world-class companies with
              our community. Host your own events with Event-live.
            </p>
            <Button size={'lg'} asChild className='button w-full sm:w-fit'>
              <Link href={'#events'}>Explore Now!</Link>
            </Button>
          </div>

          <Image
            src={'/assets/images/hero.png'}
            alt={'hero'}
            width={500}
            height={500}
            className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'
          />
        </div>
      </section>

      <section
        id='events'
        className='wrapper my-8 flex flex-col gap-8 md:gap-12'
      >
        <h2 className='h2-bold'>
          Trust by <br /> 1000+ Events
        </h2>
        <div className='flex flex-col w-full gap-5 md:flex-row'>
          Search CategoryFilter
        </div>
      </section>
    </>
  );
}
