import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

const paragaph = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  blanditiis tenetur unde suscipit, quam beatae rerum inventore
                  consectetur, neque doloribus, cupiditate numquam dignissimos laborum
                  fugiat deleniti? Eum quasi quidem quibusdam.`;

export const BoldTypography: FC = () => (
  <section className='px-5 py-24 bg-gray-50'>
    <div className='container mx-auto grid gap-8 text-center'>
      <h1 className='text-title'>Typography - bold</h1>
      <div className='grid gap-8'>
        <h1 className='text-display-bold'>Text Display</h1>
        <h1 className='text-headline-bold'>Text Headline</h1>
        <h2 className='text-title-bold'>Text Title</h2>
        <h3 className='text-subtitle-bold'>Text Subtitle</h3>
        <h4 className='text-h1-bold'>H1. Heading One</h4>
        <h5 className='text-h2-bold'>H2. Heading Two</h5>
        <h6 className='text-h3-bold'>H3. Heading Three</h6>
        {['text-largeprint-bold', 'text-body-bold', 'text-fineprint-bold'].map(
          (className) => (
            <p
              key={className}
              className={twMerge('max-w-[48rem] mx-auto', className)}>
              {className.substring(5)}.{' '}
              <span className='text-gray-500'>{paragaph}</span>
            </p>
          )
        )}
        <span className='text-button-bold'>Button Text</span>
        <p className='text-caption-bold'>caption text</p>
      </div>
    </div>
  </section>
);
