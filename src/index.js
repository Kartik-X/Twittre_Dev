const express = require("express");
const connect = require("./config/database");
const app = express();

const TweetRepository = require("./repository/tweet-repository");
const Comment = require("./models/comment");

app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("Mongodb connected");

  // const tweet = await Tweet.create({
  //   content: "Second Tweet",
  // });
  //const tweets = await Tweet.find({ userEmail: null });
  const tweetrepo = await new TweetRepository();
  const tweet = await tweetrepo.getWithComment("64f05872db0b2bd81ab67907");
  console.log(tweet);
});
