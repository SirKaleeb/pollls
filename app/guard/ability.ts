import db from "db"
import { GuardBuilder, PrismaModelsType } from "@blitz-guard/core"

type ExtendedResourceTypes = "user" | "poll" | PrismaModelsType<typeof db>

type ExtendedAbilityTypes = "send email"

const Guard = GuardBuilder<ExtendedResourceTypes, ExtendedAbilityTypes>(
  async (ctx, { can, cannot }) => {
    cannot("manage", "all")
    // Your rules go here, you can start by removing access to everything
    // and gradually adding the necessary permissions

    cannot("manage", "poll")
    cannot("manage", "user")

    can("read", "user")
    can("read", "poll")

    if (ctx.session.$isAuthorized()) {
      can("create", "user")
      can("create", "poll")
      can("send email", "poll")

      can("delete", "poll", async (_args) => {
        return (await db.poll.count({ where: { userId: ctx.session.userId } })) === 1
      })
    }
  }
)

export default Guard
