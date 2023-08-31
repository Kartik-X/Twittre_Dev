const express = require("express");
const connect = require("./config/database");
const app = express();
const { PORT } = require("./config/serverconfig");

const TweetRepository = require("./repository/tweet-repository");
const Comment = require("./models/comment");

app.listen(PORT, async () => {
  console.log(`server started at ${PORT}`);

  await connect();
  console.log("Mongodb connected");

  // const tweet = await Tweet.create({
  //   content: "Second Tweet",
  // });
  //const tweets = await Tweet.find({ userEmail: null });
  const tweetrepo = await new TweetRepository();
  const tweet = await tweetrepo.getAll(0, 1);
  console.log(tweet[0].contentWithEmail);
});
