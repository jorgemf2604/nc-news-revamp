import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import ArticleCard from "../_components/ArticleCard";
import FilterByTopic from "../_components/FilterByTopic";

export const dynamic = "force-dynamic";

const Articles = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from("articles").select();

  return (
    <div className="h-full pt-20">
      <div className="p-8">
        <FilterByTopic />
        <div className="grid gap-8 grid-cols-gallery">
          {data.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
