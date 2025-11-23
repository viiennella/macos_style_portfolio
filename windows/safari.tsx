"use client";
import WindowControls from "@/components/windowControls";
import { blogPosts } from "@/constants/constants";
import WindowWrapper from "@/hoc/windowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";
import Image from "next/image";

/**
 * Safari Window Component
 *
 * Renders a mock Safari browser window with standard browser controls
 * (back/forward, search bar, share/add/copy) and displays a list of
 * developer blog posts.
 *
 * Features:
 * - Window controls (close/minimize/maximize)
 * - Mock browser navigation bar
 * - Blog post feed with images and links
 *
 * @returns {JSX.Element} The rendered Safari window component
 */
function Safari() {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />
        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>
        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>
      <div className="blog">
        <h2>My developer blog</h2>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <div className="col-span-2">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={500}
                />
              </div>
              <div className="content">
                <p>{post.date}</p>
                <h3>{post.title}</h3>
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  Read more
                  <MoveRight className="icon-hover" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
