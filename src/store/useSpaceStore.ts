// src/store/usePostStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { DeltaOp } from '@/components/RenderEditorContent';

export interface Post {
  _id: string;
  space: string;
  title: string;
  description?: string;
  content: { ops: DeltaOp[] }; // Fixed: Added [] for array type
}

interface PostStore {
  blogPosts: Post[];
  interviewPosts: Post[];
  resourcesPosts: Post[];
  setBlogPosts: (posts: Post[]) => void;
  setInterviewPosts: (posts: Post[]) => void;
  setResourcesPosts: (posts: Post[]) => void;
  findBlogPost : (id:string) => Post | undefined;
  findinterviewPosts : (id:string) => Post | undefined;
  findResourcesPosts : (id:string) => Post | undefined;
}

 const usePostStore = create<PostStore>()(
  persist(
    (set,get) => ({
      blogPosts: [],
      interviewPosts : [],
      resourcesPosts : [],

      setBlogPosts: (posts: Post[]) => set({ blogPosts: posts }),
      setInterviewPosts : (posts: Post[]) => set({ interviewPosts : posts }),
      setResourcesPosts:  (posts: Post[]) => set({ resourcesPosts : posts }),

      findBlogPost:(id:string)=> {
     return get().blogPosts.find((item:Post)=> item._id ===id)
      },
       findinterviewPosts:(id:string)=> {
     return  get().interviewPosts.find((item:Post)=> item._id ===id)
      },
       findResourcesPosts:(id:string)=> {
     return  get().resourcesPosts.find((item:Post)=> item._id ===id)
      },


    }
    ),
    {
      name: 'space-storage', // localStorage key

    }
  )
);
export default usePostStore;
