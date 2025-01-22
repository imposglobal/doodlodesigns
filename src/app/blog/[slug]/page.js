import axios from 'axios';
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



const getCategoryFromClassList = (classList) => {
  if (Array.isArray(classList)) {
    const categoryClass = classList.find((className) =>
      className.startsWith("category-")
    );
    return categoryClass ? categoryClass.replace("category-", "") : "No Category";
  }
  return "No Category";
};

// This function generates metadata for the page
export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const postData = await fetchPost(slug);
    if (postData) {
      return {
        title: postData.yoast_head_json?.title || '',
        description: postData._yoast_wpseo_metadesc || '',
        keywords: postData._yoast_wpseo_focuskw || '',         
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


export async function generateStaticParams() {
  try {
    // Fetch posts with a higher per_page limit to ensure all posts are returned
    const response = await axios.get('https://doodlodesign.com/wp-json/wp/v2/posts', {
      params: {
        per_page: 100,  // Fetch up to 100 posts
      }
    });

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

  return (
    <div>
      <BlogMenu />
      <div className={styles.bwrapper}>
        <h1 className={styles.blogtitle}>{postData.title.rendered}</h1>
        <p className={styles.author}>
          {postData._embedded.author[0].name} |  {new Date(postData.date).toLocaleDateString('en-US', {
           month: 'long', day: 'numeric', year: 'numeric', })} {" "} | {getCategoryFromClassList(postData.class_list)}
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
