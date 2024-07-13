import { useState, useEffect } from 'react';
import yaml from 'yaml';

export function stripYamlFrontMatter(content: string): string {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---\n/;
  const match = content.match(frontMatterRegex);
  if (match) {
    return content.replace(frontMatterRegex, '');
  }
  return content;
}

const useArticle = (filename: string) => {
  const [content, setContent] = useState<string>('');
  useEffect(() => {
    fetch(filename)
      .then((res) => res.text())
      .then((text) => {
        setContent(stripYamlFrontMatter(text));
      });
  }, [filename]);

  return content;
};

export default useArticle;
