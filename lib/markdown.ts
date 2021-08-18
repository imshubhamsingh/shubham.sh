// https://juristr.com/blog/2021/06/read-render-markdown-nextjs-and-nx/
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { remark } from 'remark';
import html from 'remark-html';

export const getParsedFileContentBySlug = (slug: string, postsPath: string) => {
  const postFilePath = join(postsPath, `${slug}.mdx`);
  let data, content;
  try {
    const fileContents = fs.readFileSync(postFilePath);
    const info = matter(fileContents);
    data = info.data;
    content = info.content;
  } catch (err) {
    console.log(err);
  }
  return {
    meta: data,
    content,
  };
};

export async function markdownToHtml(markdown: any) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export const renderMarkdown = async (
  markdownContent: string,
): Promise<string> => {
  return await markdownToHtml(markdownContent || '');
};
