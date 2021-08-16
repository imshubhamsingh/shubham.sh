import * as React from 'react';

import Projects from '~/scenes/Projects/Projects';
import projectList from '~/data/project';

function ProjectPage(props: any) {
  return <Projects {...props} />;
}

export default ProjectPage;

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
