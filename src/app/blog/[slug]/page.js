import Head from 'next/head';
import axios from 'axios';
import styles from "./slug.module.css";
import BlogMenu from '../BlogMenu';
import Image from "next/image";



// this function fetches all the available slugs (URLs) of blog posts from the WordPress API
// The response contains an array of posts. The map function extracts the slug from each post
const fetchPostSlugs = async () => {
  try {
    const response = await axios.get('https://doodlodesign.com/wp-json/wp/v2/posts?_embed');
    return response.data.map(post => post.slug); // Extract slugs from the posts
  } catch (error) {
    console.error("There was an error fetching slugs:", error);
    return [];
  }
};

// This function is used for static generation (SSG) in Next.js. It is called during the build process to generate a list of dynamic paths (for each blog post based on its slug).
// The fetchPostSlugs function is called to get all slugs, and then for each slug, it returns an object with that slug.
export async function generateStaticParams() {
  const slugs = await fetchPostSlugs(); // Get all slugs
  return slugs.map(slug => ({
    slug, // The dynamic route parameter
  }));
}

// This function fetches the detailed data of an individual post based on its slug by making a GET request to the WordPress API 
const fetchPost = async (slug) => {
  try {
    const response = await axios.get(`https://doodlodesign.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
    return response.data[0]; // Since the response is an array, return the first item
  } catch (error) {
    console.error("There was an error fetching the data:", error);
    return null;
  }
};

// Fetch categories data for a post
const fetchCategories = async (categoryIds) => {
  try {
    // Fetch category data using the IDs from the post
    const response = await axios.get(`https://doodlodesign.com/wp-json/wp/v2/categories?include[]=${categoryIds.join(',')}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};



export default async function BlogDetail({ params }) {
  const { slug } = params; // Get the slug from the dynamic route
  const post = await fetchPost(slug);  // Fetch the post based on the slug

  if (!post) {
    return <p>Post not found</p>;  // Handle the case where the post is not found
  }

  // Yoast Head JSON data (extracted from the post object)
  const yoastMeta = post.yoast_head_json || {};

 const metadata = {
    title: yoastMeta.title || post.title.rendered,  // Use the Yoast title if available
    description: yoastMeta.description || post.excerpt.rendered,  // Use the Yoast description if available
    
  };
  


  // Fetch category data based on category IDs
  const categories = await fetchCategories(post.categories); // Fetch the categories for the post

  // You can extract category names or slugs from the fetched categories
  const categoryNames = categories.map(category => category.name).join(", ");
  return (
    <div>
       <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={post.yoast_head_json?.keywords} />
      </Head>
      <BlogMenu/>
     <div className={styles.bwrapper}>  
     <h1 className={styles.blogtitle}>{post.title.rendered}</h1>
     <p className={styles.author}>{post._embedded.author[0].name} | {new Date(post.date).toLocaleDateString()} | {categoryNames}  </p>
     <Image
                src={post._embedded['wp:featuredmedia'][0].source_url} 
                alt={post.title.rendered} 
                layout="responsive"
                width={100} 
                height={100}
                priority
                className={styles.blogimg}
                />
      <div className={styles.blogdesc} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      {/* <h5 className={styles.blogdesc}>{yoastMeta.title}</h5>
      <h5 className={styles.blogdesc}>{yoastMeta.description}</h5> */}

 
    
        
     </div>    
    </div>
  );
}
