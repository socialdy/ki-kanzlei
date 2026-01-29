import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadBlogPosts } from "@/data/blogPostsLoader";
import { BlogPost } from "@/data/blogPosts";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BlogSectionHome = () => {
    const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        loadBlogPosts().then((posts) => {
            // Sort by date (newest first) and get the 3 latest posts
            const sortedPosts = [...posts].sort((a, b) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
            );
            setLatestPosts(sortedPosts.slice(0, 3));
        });
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("de-DE", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    if (latestPosts.length === 0) return null;

    return (
        <section className="section-spacing bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl space-y-4">
                        <div className="inline-flex px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium">
                            KI-Insights & Best Practices
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                            Aktuelles aus der Welt der <br />
                            <span className="text-primary italic">KI-Automatisierung.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Wir teilen unser Wissen aus echten Kundenprojekten, damit Sie Fehler vermeiden und das volle Potenzial von KI ausschöpfen können.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="hidden md:flex rounded-xl hover:bg-primary/5 hover:text-primary border-border font-bold transition-all">
                        <Link to="/blog" className="flex items-center gap-2">
                            Alle Beiträge lesen
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                {/* Grid - 1:1 format from Blog.tsx */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestPosts.map((post, index) => (
                        <article
                            key={post.slug}
                            className="group bg-card rounded-2xl border border-border hover-lift cursor-pointer overflow-hidden slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <Link to={`/blog/${post.slug}`} className="block">
                                {/* Image - 1:1 layout from Blog.tsx */}
                                {post.image && (
                                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                )}

                                {/* Content - 1:1 spacing/font from Blog.tsx */}
                                <div className="p-6">
                                    {/* Category Badge */}
                                    <div className="mb-3">
                                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-muted-foreground mb-4 line-clamp-4 text-base">
                                        {post.excerpt}
                                    </p>

                                    {/* Footer Section */}
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

                {/* Mobile Button */}
                <div className="mt-10 md:hidden">
                    <Button asChild variant="outline" className="w-full h-14 rounded-2xl border-border font-bold">
                        <Link to="/blog" className="flex items-center justify-center gap-2">
                            Alle Beiträge lesen
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};
