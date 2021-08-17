const fs = require('fs');
const { join } = require('path');
const matter = require('gray-matter');

const path = join(process.cwd(), 'data', 'projects');

const getParsedFile = (slug, postsPath) => {
  const postFilePath = join(postsPath, `${slug}.mdx`);
  let data, content;
  try {
    const fileContents = fs.readFileSync(postFilePath);
    const info = matter(fileContents);
    data = info.data;
    content = info.content;
  } catch (err) {}
  return {
    meta: data,
    content,
  };
};

function extractProjectMetaData() {
  const projectMetaData = fs
    .readdirSync(join(process.cwd(), 'data', 'projects'))
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((el) => ({
      slug: el,
      ...getParsedFile(el, path).meta,
    }));
  return projectMetaData;
}

module.exports = {
  extractProjectMetaData,
};
