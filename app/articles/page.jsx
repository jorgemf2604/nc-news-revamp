import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const Articles = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from("articles").select();

  return (
    <div className="h-full pt-20">
      <div className="p-8">
        <h2>Articles</h2>

        {data.map((article) => (
          <p key={article.id}>{article.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Articles;
