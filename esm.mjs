import Eris from "./index.js";

export default function (token, options) {
    return new Eris.Client(token, options);
}

export const {
    AutocompleteInteraction,
    Base,
    Bucket,
    CategoryChannel,
    Channel,
    Client,
    Collection,
    Command,
    CommandClient,
    CommandInteraction,
    ComponentInteraction,
    Constants,
    DiscordHTTPError,
    DiscordRESTError,
    ExtendedUser,
    Guild,
    GuildChannel,
    GuildIntegration,
    GuildPreview,
    GuildTemplate,
    Interaction,
    Invite,
    Member,
    Message,
    ModalSubmitInteraction,
    NewsChannel,
    NewsThreadChannel,
    Permission,
    PermissionOverwrite,
    PingInteraction,
    PrivateChannel,
    PrivateThreadChannel,
    PublicThreadChannel,
    RequestHandler,
    Role,
    SequentialBucket,
    Shard,
    StageChannel,
    StageInstance,
    StoreChannel,
    TextChannel,
    ThreadChannel,
    ThreadMember,
    UnavailableGuild,
    User,
    VERSION,
    VoiceChannel,
    VoiceState,
    GuildEvent,
} = Eris;
