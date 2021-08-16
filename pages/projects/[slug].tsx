import * as React from 'react';
import fs from 'fs';
import { join } from 'path';

import Projects from '~/scenes/Projects/Projects';
import { getParsedFileContentBySlug, renderMarkdown } from '~/lib/markdown';

const PROJECTS_PATH = join(process.cwd(), 'data', 'projects');

function ProjectPage(props: any) {
  return <Projects {...props} />;
}

export default ProjectPage;

export async function getStaticProps({ params }: any) {
  // read markdown file into content and meta
  const articleMarkdownContent = getParsedFileContentBySlug(
    params.slug,
    PROJECTS_PATH,
  );
  let renderedHTML;

  // generate HTML
  if (articleMarkdownContent.content) {
    renderedHTML = await renderMarkdown(articleMarkdownContent.content);
  }

  return {
    props: {
      meta: articleMarkdownContent.meta || null,
      content: renderedHTML || null,
    },
  };
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(PROJECTS_PATH)
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: true,
  };
}
