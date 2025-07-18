import { IconCloud } from '@/components/magicui/icon-cloud';

const slugs = [
  'typescript',
  'javascript',
  'java',
  'react',
  'reactnative',
  'android',
  'html5',
  'css3',
  'nodejs',
  'tailwindcss',
  'postgresql',
  'firebase',
  'vercel',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'figma',
  'sitecore',
  'umbraco',
  'astro',
  'spring',
  'wordpress',
  'dotnet',
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
