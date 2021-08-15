import { useTheme } from 'next-themes';
import * as React from 'react';
import { annotate } from 'rough-notation';
import useIsMounted from '~/hooks/useIsMounted';

import type { RoughAnnotation } from 'rough-notation/lib/model';

function resolveAnnotationColor(theme: string) {
  return theme === 'dark' ? '#e2ff003b' : '#805de13b';
}

function Intro() {
  const ref = React.useRef<HTMLSpanElement>(null);
  const { resolvedTheme } = useTheme();
  const mounted = useIsMounted();

  const annotationRef = React.useRef<RoughAnnotation>(null);

  React.useEffect(() => {
    if (!resolvedTheme) return;
    if (!mounted) {
      setTimeout(() => {
        //@ts-ignore
        annotationRef.current = annotate(ref.current as HTMLSpanElement, {
          type: 'highlight',
          multiline: true,
          color: resolveAnnotationColor(resolvedTheme),
        });
        annotationRef.current.show();
      }, 700);
      // rerender color
    } else if (annotationRef.current) {
      annotationRef.current.color = resolveAnnotationColor(resolvedTheme);
    }
  }, [mounted, resolvedTheme]);

  return (
    <>
      <p className="text-20 mb12">
        Hi! I&apos;m Shubham. Looks like you’ve made it to my corner of the
        internet.
      </p>
      <h1 className="text-40 font-normal mb12 text-dark">
        I am a design-minded software developer with a{' '}
        <span ref={ref}>strong focus on interfaces and experiences</span>{' '}
        working remotely from India.
      </h1>
      <p className="text-20">
        I like to work on open-source projects, and have created a number of
        projects.
      </p>
    </>
  );
}

export default Intro;
