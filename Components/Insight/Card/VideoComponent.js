import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const VideoComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true when the component is mounted
  }, []);

  return (
    <div className="overflow-hidden rounded-lg">
      {isClient && (
        <ReactPlayer 
          url='https://s3-figma-videos-production-sig.figma.com/video/1206271963499789170/TEAM/30af/2fc0/-4b58-408c-b88b-66e92b5fcdaa?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i6WD0h2yPLXDoOqMqRq4v1oP8M07lBPT6NVoHo7TxPHQA5QSKkyy2fzZv4G28glzgvkLprQccc7FgJcG1H73Zw~CrUxdGbB-RCPATQEgbLDQReASk5w4SAIULA90x0xYNcS9TdQ8aMd0Rb7eG1CSqp04jp0Pvx9ySoW84aZu78D9habA-s7jIiu5V8nnAd6UfkVnW3QOlRTXaUyauLmQAo2Oz7yUy8ZnXzATaJmwuHc17QQ~pCfzNBzuf5EQAO5AGSDv0Pqd09hmqGfR~ENGh7kynzjCnMQjS-~UlCC4tlHcm3crV9hn7tdmGYXhdChu753Z9a5zitDEOwB7ijc6MQ__' 
          width='100%' 
          height='100%' 
          loop={true}
          playing={true}
        // Add rounded corners to the video
        />
      )}
    </div>
  );
};

export default VideoComponent;
