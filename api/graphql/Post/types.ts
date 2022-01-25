import { Context } from "../../context";
import { enumType, inputObjectType, intArg, objectType } from "nexus";

export const PostRelationCount = objectType({
  name: "PostRelationCount",
  definition(t) {
    t.int("likes");
  },
});
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
    t.nonNull.field("_count", {
      type: "PostRelationCount",
    });
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
    t.nonNull.list.nonNull.field("likes", {
      type: "User",
      args: {
        take: intArg(),
      },
      async resolve(root, { take }, ctx: Context) {
        try {
          const users = await ctx.db.user.findMany({
            where: {
              likePosts: {
                some: {
                  id: root.id,
                },
              },
            },
            take: take ? take : 1,
            select: {
              id: true,
              firstName: true,
            },
          });
          console.log(users);
          return users;
        } catch (error) {
          throw error;
        }
      },
    });

    t.field("hasAlreadyLiked", {
      type: "Boolean",
      async resolve(root, _args, ctx: Context) {
        if (!ctx.user) {
          return null;
        }
        try {
          const alreadyLike = await ctx.db.user.findUnique({
            where: {
              id: ctx.user.id,
            },
            select: {
              id: true,
              likePosts: {
                select: {
                  id: true,
                },
                where: {
                  id: root.id,
                },
              },
            },
          });

          if (alreadyLike?.likePosts.length) {
            return true;
          }
          return false;
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
    t.field("audience", {
      type: "PostAudienceEnum",
    });
    t.list.string("images");
    t.string("feeling");
    t.string("checkIn");
    t.string("gif");
    t.list.id("taggedFriends");
    t.list.id("specificAudienceFriends");
  },
});

export const CreatePostEdges = objectType({
  name: "CreatePostEdges",
  definition(t) {
    t.nonNull.field("node", {
      type: "Post",
    });
  },
});

export const CreatePostMutation = objectType({
  name: "CreatePostMutation",
  definition(t) {
    t.nonNull.field("edges", {
      type: "CreatePostEdges",
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
    t.id("endCursor");
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

// start post query type

export const FetchPostEdge = objectType({
  name: "FetchPostEdge",
  definition(t) {
    t.nonNull.field("node", {
      type: "Post",
    });
  },
});
export const FetchPostQuery = objectType({
  name: "FetchPostQuery",
  definition(t) {
    t.nonNull.field("edge", {
      type: "FetchPostEdge",
    });
  },
});

// toggle likes mutation

export const PostLikeEdge = objectType({
  name: "PostLikeEdge",
  definition(t) {
    t.nonNull.field("node", {
      type: "Post",
    });
  },
});
export const PostLikeMutation = objectType({
  name: "PostLikeMutation",
  definition(t) {
    t.nonNull.field("edge", {
      type: "PostLikeEdge",
    });
  },
});
