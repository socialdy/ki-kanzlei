import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavigationHome } from "@/components/NavigationHome";
import { Footer } from "@/components/Footer";
import { BlogPost, blogCategories, blogPosts as staticBlogPosts } from "@/data/blogPosts";
import { loadBlogPosts, getBlogPostsSync } from "@/data/blogPostsLoader";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(getBlogPostsSync());
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Blog | KI Kanzlei";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'KI-Insights, Best Practices und Case Studies rund um KI-Automatisierung für Unternehmen. Bleiben Sie auf dem Laufenden mit KI Kanzlei.');

    // Lade CMS-Daten asynchron
    loadBlogPosts().then((posts) => {
      // Sort by date (newest first)
      const sortedPosts = [...posts].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setBlogPosts(sortedPosts);
    });
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Filtere Blog-Posts nach ausgewählter Kategorie
  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <div className="min-h-screen gradient-bg">
      <NavigationHome />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12 slide-up">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium">
                KI-Insights & Best Practices
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Unser Blog
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Wissenswertes rund um KI-Automatisierung, Case Studies und praktische Tipps für Ihr Unternehmen
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12 slide-up">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-base ${selectedCategory === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
              >
                Alle Kategorien
              </button>
              {blogCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-base ${selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-muted-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.slug}
                  className="group bg-card rounded-2xl border border-border hover-lift cursor-pointer overflow-hidden slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    {/* Image */}
                    {post.image && (
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      {/* Category */}
                      <div className="mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground mb-4 line-clamp-4">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          {post.readTime && (
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime} Min.
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Keine Artikel in dieser Kategorie gefunden.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

