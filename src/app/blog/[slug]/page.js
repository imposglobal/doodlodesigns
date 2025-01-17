import axios from 'axios';
// import Head from 'next/head';
import BlogMenu from '../BlogMenu';
import Image from 'next/image';
import styles from './slug.module.css';

// Fetch the post by its slug
const fetchPost = async (slug) => {
  try {
    const response = await axios.get(`https://doodlodesign.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
    return response.data[0];
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};

// Fetch categories for a post
const fetchCategories = async (categoryIds) => {
  try {
    const response = await axios.get(`https://doodlodesign.com/wp-json/wp/v2/categories?include[]=${categoryIds.join(',')}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

// This function generates metadata for the page
export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const postData = await fetchPost(slug);
    if (postData) {
      return {
        title: postData.title.rendered, // Dynamically set the title from the post title
        // description: postData.excerpt.rendered, 
        description: postData.yoast_head_json?.description || '',
        keywords: postData.yoast_head_json?.keywords || postData.title.rendered,
         
      };

    }
    return {
      title: 'Post not found',
      description: 'The requested post could not be found.',
      keywords: 'The requested post could not be found.',
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error',
      description: 'There was an error fetching the post metadata.',
      keywords:'Error',
    };
  }
}

// Add this function to provide static paths for each post
export async function generateStaticParams() {
  try {
    const response = await axios.get('https://doodlodesign.com/wp-json/wp/v2/posts');
    const slugs = response.data.map(post => post.slug);
    return slugs.map(slug => ({
      slug,
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function BlogDetail({ params }) {
  const { slug } = params;
  const postData = await fetchPost(slug);

  if (!postData) {
    return <p>Post not found</p>;
  }

  const categories = await fetchCategories(postData.categories);
  const categoryNames = categories.map(category => category.name).join(', ');

  return (
    <div>
      <BlogMenu />
      <div className={styles.bwrapper}>
        <h1 className={styles.blogtitle}>{postData.title.rendered}</h1>
        <p className={styles.author}>
          {postData._embedded.author[0].name} |  {new Date(postData.date).toLocaleDateString('en-US', {
           month: 'long', day: 'numeric', year: 'numeric', })} {" "} | {categoryNames}
        </p>
        <Image
        src={postData._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url}
        alt={postData.title.rendered}
        layout="responsive"
        width={1200} // You can set the width to a large value or the original image width
        height={675} // Set height to maintain the aspect ratio or calculate it based on the original width/height
        priority
        className={styles.blogimg}
      />

        <div className={styles.blogdesc} dangerouslySetInnerHTML={{ __html: postData.content.rendered }} />
      </div>
    </div>
  );
}
