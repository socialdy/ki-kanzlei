import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { NavigationHome } from "@/components/NavigationHome";
import { Footer } from "@/components/Footer";
import { BlogPost } from "@/data/blogPosts";
import { loadBlogPosts, getBlogPostsSync } from "@/data/blogPostsLoader";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { injectInternalLinks } from "@/utils/blogLinkInjector";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(getBlogPostsSync());
  
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    // Lade CMS-Daten asynchron
    loadBlogPosts().then((loadedPosts) => {
      // Merge statische Posts mit CMS-Posts, behalte statische Posts falls vorhanden
      const staticPosts = getBlogPostsSync();
      const mergedPosts = [...staticPosts];
      
      // Füge CMS-Posts hinzu, die nicht bereits in statischen Posts sind
      loadedPosts.forEach((cmsPost) => {
        if (!mergedPosts.find((p) => p.slug === cmsPost.slug)) {
          mergedPosts.push(cmsPost);
        }
      });
      
      setBlogPosts(mergedPosts);
    });
  }, []);

  useEffect(() => {
    const currentPost = blogPosts.find((p) => p.slug === slug);
    if (currentPost) {
      document.title = `${currentPost.title} | KI Kanzlei Blog`;
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', currentPost.excerpt);
    } else {
      document.title = "Artikel nicht gefunden | KI Kanzlei Blog";
    }
  }, [blogPosts, slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const currentPost = blogPosts.find((p) => p.slug === slug);
  
  if (!currentPost) {
    return (
      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-4">Artikel nicht gefunden</h1>
            <p className="text-muted-foreground mb-8">
              Der gesuchte Artikel existiert nicht.
            </p>
            <Button size="lg" asChild>
              <Link to="/blog">Zur Blogübersicht</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      <NavigationHome />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Back Button */}
          <div className="mb-8 slide-up">
            <Link 
              to="/blog" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Blog
            </Link>
          </div>

          {/* Header */}
          <article className="bg-card rounded-2xl border border-border overflow-hidden slide-up">
            <div className="p-6 sm:p-8 md:p-12">
              {/* Category & Date */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  {currentPost.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {formatDate(currentPost.date)}
                </div>
                {currentPost.readTime && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {currentPost.readTime} Min. Lesezeit
                  </div>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {currentPost.title}
              </h1>

              {/* Blog Image (unter dem Titel) */}
              {currentPost.image && (
                <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl mb-8">
                  <img
                    src={currentPost.image}
                    alt={currentPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Divider */}
              <div className="w-20 h-1 bg-primary/20 rounded-full mb-8"></div>

              {/* Content */}
              <div 
                className="blog-content"
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.75',
                }}
                dangerouslySetInnerHTML={{ 
                  __html: injectInternalLinks(currentPost.content)
                }}
              />
            </div>
          </article>

          {/* CTA Section */}
          <div className="mt-12 p-6 sm:p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center slide-up">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Interessiert an KI-Automatisierung?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam herausfinden, wie KI Ihr Unternehmen voranbringen kann.
            </p>
            <Button 
              size="lg" 
              className="w-full sm:w-auto" 
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
            >
              Analysegespräch vereinbaren
            </Button>
          </div>

          {/* Related Posts */}
          {blogPosts.filter(p => p.slug !== currentPost.slug && p.category === currentPost.category).length > 0 && (
            <div className="mt-16 slide-up">
              <h2 className="text-2xl font-bold mb-8">Weitere Artikel</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts
                  .filter(p => p.slug !== currentPost.slug && p.category === currentPost.category)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      to={`/blog/${relatedPost.slug}`}
                      className="group block p-6 bg-card rounded-xl border border-border hover-lift transition-base"
                    >
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                          {relatedPost.category}
                        </span>
                        <span>{formatDate(relatedPost.date)}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;

