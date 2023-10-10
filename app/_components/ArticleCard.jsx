import Image from "next/image";

const ArticleCard = ({ title, topic, author, votes, article_img_url }) => {
  return (
    <div className="border-4 border-black p-4 rounded-md dark:bg-neutral-800/60">
      <div className="h-[250px] relative">
        <Image
          src={article_img_url}
          alt={title}
          fill
          className="object-cover grayscale hover:grayscale-0 rounded"
        />
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default ArticleCard;
