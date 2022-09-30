import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';
import { FC } from 'react';

const subtitle = 'Styled using Tailwind';

const title = 'A demonstration of typography';

const body = `Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
              voluptatum cupiditate veritatis in accusamus quisquam.`;

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export const TypographyDemo: FC = () => (
  <section className='bg-white px-5 py-24'>
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <h2 className='text-subtitle text-indigo-600'>{subtitle}</h2>
        <p className='mt-2 text-title text-gray-900'>{title}</p>
        <p className='mt-4 max-w-2xl text-largeprint text-gray-500 mx-auto'>
          {body}
        </p>
      </div>
      <div className='mt-10'>
        <dl className='space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0'>
          {features.map((feature) => (
            <div key={feature.name} className='relative'>
              <dt>
                <div className='absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white'>
                  <feature.icon className='h-6 w-6' aria-hidden='true' />
                </div>
                <p className='ml-16 text-h2 text-gray-900'>{feature.name}</p>
              </dt>
              <dd className='mt-2 ml-16 text-body text-gray-500'>
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);
