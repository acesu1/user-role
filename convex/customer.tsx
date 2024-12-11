import { query } from "./_generated/server";

export const getCustomer = query({
  args: {},
  async handler(ctx) {
    return await ctx.db.query("customer").collect();
  },
});