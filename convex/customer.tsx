import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const newService = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    // id: v.id('services')
  },

  async handler(ctx, args) {
    // const { id } = args
    await ctx.db.insert('services', {
      title: args.title,
      description: args.description,
      // id: id,
    })
  }
})

export const getCustomer = query({
  args: {},
  async handler(ctx) {
    return await ctx.db.query("services").collect();
  },
});