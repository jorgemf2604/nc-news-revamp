import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";

const ArticleCard = ({ title, topic, author, votes, article_img_url }) => {
  return (
    <div className="group relative border-4 border-black p-4 rounded-md dark:bg-neutral-800/60 flex flex-col gap-4 hover:scale-105 hover:dark:bg-white hover:dark:text-neutral-600  hover:bg-neutral-800 hover:text-white transition">
      <div className="h-[250px] relative">
        <Image
          src={article_img_url}
          alt={title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 rounded"
        />
      </div>
      <div>
        <p className="text leading-5 font-semibold">{title}</p>
        <p className="text-sm mb-8 mt-2">by {author}</p>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <span className=" py-1 px-2 bg-black text-white rounded group-hover:bg-sky-500">
          {topic}
        </span>
        <span className="flex gap-1 items-center">
          <AiFillHeart className="group-hover:text-red-600" />
          {votes}
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;
