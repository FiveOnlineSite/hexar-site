import BlogContent from '@/src/components/Blog/BlogContent';

export default async function BlogPage({
  params,
}: {
  params: Promise<{ blog: string }>;
}) {
  const { blog } = await params;

  return <BlogContent blogSlug={blog} />;
}
