import BlogCategory from "./BlogCategory";
import BlogList from "./BlogList";

export default function InsightBlog() {
  return (
    <div>
      <div className='flex flex-wrap -mx-4'>
        <div className='w-full sm:w-1/2 md:w-7/12 px-4 mb-4'>
          <BlogList />
        </div>
        <div className='w-full sm:w-5/12 md:w-5/12 px-4 mb-4'>
          <BlogCategory />
        </div>
      </div>
    </div>
  );
}
