'use client';
import Link from 'next/link';
import { mockBlogPosts } from '../../lib/mockData'; // fixed path

export default function Blog() {
  return (
    <main className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-black">
          Blog & Magazine
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBlogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <Link href={`/blog/${post.id}`} className="text-[#2ca8e0] font-semibold mt-4 inline-block hover:text-[#1e75bb] transition-colors">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
