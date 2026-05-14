// src/store/usePostStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { DeltaOp } from '@/components/RenderEditorContent';

interface BasePost {
  _id: string;
  space: string;
  title: string;
  description?: string;
  createdAt: string;
  publishedAt?: string;
  image?: string | null;
  readingTime?: string;
}

export interface InternalPost extends BasePost {
  content: { ops: any[] };
  isExternal?: false;
}

export interface ExternalPost extends BasePost {
  content: string;
  isExternal: true;
  link: string;
}

export type Post = InternalPost | ExternalPost;

interface PostStore {
  blogPosts: Post[];
  interviewPosts: InternalPost[];
  resourcesPosts: InternalPost[];
  setBlogPosts: (posts: Post[]) => void;
  setInterviewPosts: (posts: InternalPost[]) => void;
  setResourcesPosts: (posts: InternalPost[]) => void;
  findBlogPost: (id: string) => Post | undefined;
  findinterviewPosts: (id: string) => InternalPost | undefined;
  findResourcesPosts: (id: string) => InternalPost | undefined;
  findAndDeletePost: (id: string, space: string) => Post | null;
}

const usePostStore = create<PostStore>()(
  persist(
    (set, get) => ({
      blogPosts: [],
      interviewPosts: [],
      resourcesPosts: [],

      setBlogPosts: (posts: Post[]) => set({ blogPosts: posts }),
      setInterviewPosts: (posts: InternalPost[]) => set({ interviewPosts: posts }),
      setResourcesPosts: (posts: InternalPost[]) => set({ resourcesPosts: posts }),

      findBlogPost: (id: string) => {
        return get().blogPosts.find((item: Post) => item._id === id)
      },
      findinterviewPosts: (id: string) => {
        return get().interviewPosts.find((item: InternalPost) => item._id === id)
      },
      findResourcesPosts: (id: string) => {
        return get().resourcesPosts.find((item: InternalPost) => item._id === id)
      },
      findAndDeletePost: (id: string, space: string) => {
        let deletedPost: Post | null = null;

        set((state) => {
          if (space === "blogs") {
            deletedPost = state.blogPosts.find(p => p._id === id) || null;
            return {
              blogPosts: state.blogPosts.filter(p => p._id !== id),
            };
          }

          if (space === "interviews") {
            deletedPost = state.interviewPosts.find(p => p._id === id) || null;
            return {
              interviewPosts: state.interviewPosts.filter(p => p._id !== id),
            };
          }

          if (space === "resources") {
            deletedPost = state.resourcesPosts.find(p => p._id === id) || null;
            return {
              resourcesPosts: state.resourcesPosts.filter(p => p._id !== id),
            };
          }

          return {};
        });

        return deletedPost;
      }



    }
    ),
    {
      name: 'space-storage', // localStorage key

    }
  )
);
export default usePostStore;
