import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown'; // Import react-markdown to render markdown content

export default async function Page({ params }) {
  // Get the slug from params
  const { slug } = params;

  // Construct the file path based on the slug (slug should match the file name without extension)
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return (
    <main className='bg-gray-100 dark:bg-gray-900 py-10'>
      <div className='max-w-3xl mx-auto px-6 py-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl'>
        {/* Blog Title and Header */}
        <h1 className='text-4xl font-bold text-blue-800 dark:text-white mb-6'>
          {data.title}
        </h1>

        {/* Author and Date */}
        <div className='flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4'>
          <p><strong>Author:</strong> {data.author}</p>
          <p><strong>Date:</strong> {data.date}</p>
        </div>

        {/* Blog Content using ReactMarkdown */}
        <div className='text-base text-gray-700 dark:text-gray-300'>
          <ReactMarkdown children={content} />
        </div>
      </div>
    </main>
  );
}
