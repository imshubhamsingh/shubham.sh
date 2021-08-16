import * as React from 'react';
import { useRouter } from 'next/dist/client/router';
import Modal from '~/components/Modal/Modal';

import projectList from '~/data/project';

interface IProject {
  project: any;
}

function Project({ project }: IProject) {
  const router = useRouter();
  const bodyRef = React.useRef<HTMLDivElement>(null);
  if (process.browser) {
    //@ts-ignore
    bodyRef.current = document.getElementById?.('main');
  }
  function onClose() {
    router.push('/');
  }
  if (!project) return null;
  return (
    <Modal bodyRef={bodyRef} onClose={onClose}>
      <pre>{JSON.stringify(project, null, 2)}</pre>
    </Modal>
  );
}

export default Project;

export async function getStaticProps({ params }: any) {
  let project = projectList.find((x) => x.id === params.slug);

  return {
    props: {
      project: project || null,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      ...projectList.map((el) => ({
        params: {
          slug: el.id,
        },
      })),
    ],
    fallback: true,
  };
}
