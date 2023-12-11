interface IlearnData {
  img: string;
  text: string;
}

export default function LearnData() {
  const learnContents: IlearnData[] = [
    {
      img: "/image/learn-1.png",
      text: " Use HDFS & Map Reduce for storing & analyzing data at scale.",
    },
    {
        img: "/image/learn-2.png",
        text: "Consume streaming data using Spark Streaming, Flink, and Storm.",
      },
      {
        img: "/image/learn-3.png",
        text: "Choose an appropriate data storage technology for your application",
      },
      {
        img: "/image/learn-4.png",
        text: "Analyze non-relational data using HBase, Cassandra, and MongoDB.",
      },
  ];

  return { learnContents };
}
