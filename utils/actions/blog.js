import { connectToDB } from "@utils/db"
import Blog from "@models/blog";

export async function fetchBlogs(){
 try {
    await connectToDB();
    
    const blogs = await Blog.find({});
        return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
        throw new Error("Could not fetch blogs");
  }
}

export async function fetchBlogById(blogId) {
    await connectToDB(); 
    try {
        const blog = await Blog.findById(blogId);
        return blog;
    } catch (error) {
        console.error("Error fetching blog by ID:", error);
        throw new Error("Could not fetch blog");
    }
}

export async function createBlog(blogData) {
    await connectToDB(); 
    try {
        const newBlog = new Blog(blogData);
        await newBlog.save();
        return newBlog;
    } catch (error) {
        console.error("Error creating blog:", error);
        throw new Error("Could not create blog");
    }
}

export async function deleteBlog(blogId) {
    await connectToDB();
    try {
        await Blog.findByIdAndDelete(blogId);
        return { message: "Blog deleted successfully" };
    } catch (error) {
        console.error("Error deleting blog:", error);
        throw new Error("Could not delete blog");
    }
}

export async function updateBlog(blogId, blogData) {
    await connectToDB();
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(blogId, blogData, { new: true });
        return updatedBlog;
    } catch (error) {
        console.error("Error updating blog:", error);
        throw new Error("Could not update blog");
    }
}