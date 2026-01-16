import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  getOnboardingStatus: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
      select: { role: true, onboardedAt: true },
    });
    return {
      needsOnboarding: !user?.onboardedAt,
      role: user?.role ?? "STUDENT",
    };
  }),

  completeOnboarding: protectedProcedure
    .input(
      z.object({
        role: z.enum(["STUDENT", "MENTOR"]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: {
          role: input.role,
          onboardedAt: new Date(),
        },
      });
      return { success: true, role: user.role };
    }),
});
