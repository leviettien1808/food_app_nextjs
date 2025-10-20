type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{slug}</p>
    </main>
  );
}
