import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import type { Props } from '@theme/BlogListPage';
import type { BlogPost } from '@docusaurus/plugin-content-blog';

import styles from './blog-list.module.css';

function BlogPostItem({ blogPost }: { blogPost: BlogPost }) {
  const { frontMatter, metadata } = blogPost;
  const { title, description, date, formattedDate, tags, readingTime } = metadata;
  const { permalink, authors } = metadata;

  return (
    <article className={styles.blogPostItem}>
      <div className={styles.blogPostCard}>
        <div className={styles.blogPostHeader}>
          <h2 className={styles.blogPostTitle}>
            <Link href={permalink}>{title}</Link>
          </h2>
          <div className={styles.blogPostDate}>
            <time dateTime={date}>{formattedDate}</time>
            {readingTime && (
              <span className={styles.readingTime}>
                {' • '}{Math.ceil(readingTime)} min read
              </span>
            )}
          </div>
        </div>
        
        {authors.length > 0 && (
          <div className={styles.blogPostAuthors}>
            {authors.map((author, idx) => (
              <div key={idx} className={styles.author}>
                {author.image_url && (
                  <img 
                    className={styles.authorImage} 
                    src={author.image_url} 
                    alt={author.name} 
                    width={40} 
                    height={40} 
                  />
                )}
                <span className={styles.authorName}>{author.name}</span>
              </div>
            ))}
          </div>
        )}
        
        {description && (
          <div className={styles.blogPostDescription}>
            {description}
          </div>
        )}
        
        {tags.length > 0 && (
          <div className={styles.blogPostTags}>
            {tags.map((tag) => (
              <Link
                className={styles.tag}
                key={tag.permalink}
                href={tag.permalink}>
                {tag.label}
              </Link>
            ))}
          </div>
        )}
        
        <div className={styles.blogPostReadMore}>
          <Link href={permalink} className={styles.readMoreButton}>
            Read Full Article →
          </Link>
        </div>
      </div>
    </article>
  );
}

function RecentPostsSection({ items }: { items: Props['items'] }) {
  return (
    <section className={styles.recentPostsSection}>
      <div className="container">
        <div className="text--center">
          <h2 className={styles.sectionTitle}>Recent Research Posts</h2>
          <p className={styles.sectionSubtitle}>
            Stay updated with the latest findings and insights in agentic AI research
          </p>
        </div>
        
        <div className={styles.recentPostsGrid}>
          {items.map(({ content: BlogPostContent }) => (
            <BlogPostItem key={BlogPostContent.metadata.permalink} blogPost={BlogPostContent} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlogListPage(props: Props): JSX.Element {
  const { metadata, items } = props;
  const { siteConfig } = useDocusaurusContext();
  const { listPageTitle } = metadata;

  return (
    <Layout
      title={listPageTitle ? `Blog - ${listPageTitle}` : 'Blog'}
      description="Research Blog for Agentic AI Systems">
      <RecentPostsSection items={items} />
      
      {items.length > 6 && (
        <div className="container">
          <div className="margin-vert--xl">
            <BlogPostPaginator
              metadata={metadata}
            />
          </div>
        </div>
      )}
    </Layout>
  );
}