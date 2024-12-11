import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  services: defineTable({
    title: v.string(),
    description: v.string(),
    // id: v.id('services')
  }),
});