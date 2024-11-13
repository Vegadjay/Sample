import Ping from "@/app/components/Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERYS } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from "node:test";
const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERYS, { id });
    
    after( async () => {
        await writeClient.patch(id).set({ views: (totalViews || 0) + 1 }).commit();
    } 
    )

    
    return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">Views: {totalViews}</span>
      </p>
    </div>
  );
};

export default View;
