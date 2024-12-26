import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';

/**
 * This component fetches blog posts and displays them in a grid layout.
 * @returns {JSX.Element} The rendered list of blog posts.
 */
export default async function Page() {
  // Read the files from the 'content' directory on the server side
  const dirPath = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(dirPath);

  // Fetch and parse the frontmatter from each markdown file
  const blogs = files.map((file) => {
    const filePath = path.join(dirPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return {
      ...data,
      slug: file.replace('.md', '') // Ensure slug corresponds to file name
    };
  });

  return (
    <main className="bg-gray-100 dark:bg-gray-900 py-10">
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
          My Top Blogs
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <Image
  src={blog.image || '/nextjs.jpeg'}  
  alt={`Image for the blog post: ${blog.title}`}  // More descriptive alt text
  width={500}
  height={300}
  className="w-full h-48 object-cover rounded-t-lg mb-4"
/>

              <h3 className="text-lg font-bold text-blue-800 dark:text-gray-200">
                {blog.title}
              </h3>
              <p className="mt-2 dark:text-gray-400">{blog.description}</p>
              <p className="mt-2 text-sm text-gray-400">
                By {blog.author} on {new Date(blog.date).toLocaleDateString()}
              </p>
              <a
                href={`/blogpost/${blog.slug}`} // Dynamic link to individual blog post
                className="mt-4 inline-block text-violet-500 hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
