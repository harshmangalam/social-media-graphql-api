import { Context } from "../../context";
import { enumType, inputObjectType, objectType } from "nexus";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("title");
    t.string("content");
    t.nonNull.field("audience", {
      type: PostAudienceEnum,
    });
    t.nonNull.list.string("images");
    t.string("feeling");
    t.string("checkIn");
    t.string("gif");
    t.nonNull.string("createdAt");
    t.nonNull.string("updatedAt");
    t.nonNull.id("authorId");
    t.nonNull.field("author", {
      type: "User",
      async resolve(root, args, ctx: Context) {
        try {
          const user = await ctx.db.user.findUnique({
            where: {
              id: root.authorId,
            },
          });
          return user;
        } catch (error) {
          throw error;
        }
      },
    });
    t.nonNull.list.nonNull.field("specificAudienceFriends", {
      type: "User",
      async resolve(root, args, ctx: Context) {
        try {
          const users = await ctx.db.user.findMany({
            where: {
              specificAudienceInPosts: {
                some: {
                  id: root.id,
                },
              },
            },
          });
          return users;
        } catch (error) {
          throw error;
        }
      },
    });
    t.nonNull.list.nonNull.field("taggedFriends", {
      type: "User",
      async resolve(root, args, ctx: Context) {
        try {
          const users = await ctx.db.user.findMany({
            where: {
              taggedInPosts: {
                some: {
                  id: root.id,
                },
              },
            },
          });
          return users;
        } catch (error) {
          throw error;
        }
      },
    });
  },
});

export const PostAudienceEnum = enumType({
  name: "PostAudienceEnum",
  members: ["PUBLIC", "FRIENDS", "ONLY_ME", "SPECIFIC"],
  description: "Who can see your post",
});

// start create post type
export const CreatePostInputType = inputObjectType({
  name: "CreatePostInputType",
  definition(t) {
    t.nonNull.string("title");
    t.string("content");
    t.nonNull.field("audience", {
      type: "PostAudienceEnum",
    });
    t.nonNull.list.string("images");
    t.string("feeling");
    t.string("checkIn");
    t.string("gif");
    t.nonNull.list.id("taggedFriends");
    t.nonNull.list.id("specificAudienceFriends");
  },
});

export const CreatePostResponseNodesType = objectType({
  name: "CreatePostResponseNodesType",
  definition(t) {
    t.nonNull.field("post", {
      type: "Post",
    });
  },
});

export const CreatePostResponseType = objectType({
  name: "CreatePostResponseType",
  definition(t) {
    t.nonNull.string("message"), t.nonNull.int("status");
    t.nonNull.field("nodes", {
      type: "CreatePostResponseNodesType",
    });
  },
});

// end create post type

// start posts query type
export const FetchPostsEdges = objectType({
  name: "FetchPostsEdges",
  definition(t) {
    t.nonNull.field("node", {
      type: "Post",
    });
    t.nonNull.id("cursor");
  },
});
export const FetchPostsPageInfo = objectType({
  name: "FetchPostsPageInfo",
  definition(t) {
    t.nonNull.boolean("hasNextPage");
    t.nonNull.id("endCursor");
  },
});
export const FetchPostsQuery = objectType({
  name: "FetchPostsQuery",
  definition(t) {
    t.nonNull.list.nonNull.field("edges", {
      type: "FetchPostsEdges",
    });
    t.nonNull.field("pageInfo", {
      type: "FetchPostsPageInfo",
    });
  },
});
// end posts query type