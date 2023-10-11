import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";

const ArticleCard = ({ title, topic, author, votes, article_img_url }) => {
  let colorLabelClass = null;
  if (topic === "coding") {
    colorLabelClass = "coding-label";
  } else if (topic === "football") {
    colorLabelClass = "football-label";
  } else {
    colorLabelClass = "cooking-label";
  }

  // add sizes to lizard image and article cards
  // TODO add filter by topic
  // TODO add filter by date, number of votes, number of comments, asc, desc
  // TODO link every article with a full article route
  // TODO create full article page: show article, show comments, create a addComment form component, create a delete comment button
  return (
    <div className="group relative border-4 border-black p-4 rounded-md dark:bg-neutral-800/60 flex flex-col gap-4 hover:scale-105 hover:dark:bg-white hover:dark:text-neutral-600  hover:bg-neutral-800 hover:text-white transition">
      <div className="h-[250px] relative">
        <Image
          src={article_img_url}
          alt={title}
          fill
          className="object-cover rounded"
          sizes="(min-width: 2860px) calc(10vw - 75px), (min-width: 2580px) calc(11.15vw - 77px), (min-width: 2300px) calc(12.31vw - 71px), (min-width: 2020px) calc(14.23vw - 75px), (min-width: 1740px) calc(16.54vw - 75px), (min-width: 1460px) calc(20vw - 78px), (min-width: 1160px) calc(25vw - 80px), (min-width: 880px) calc(33.08vw - 80px), (min-width: 600px) calc(50vw - 88px), (min-width: 400px) calc(100vw - 104px), calc(82.5vw - 38px)"
        />
      </div>
      <div>
        <p className="text leading-5 font-semibold">{title}</p>
        <p className="text-sm mb-8 mt-2">by {author}</p>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <span className={`py-1 px-2 rounded text-white ${colorLabelClass}`}>
          {topic}
        </span>
        <span className="flex gap-1 items-center">
          <AiFillHeart className="text-red-600" />
          {votes}
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;
