export declare namespace DY {

  /* eslint-disable */
  /** @format */


  export enum CommentTypeTag {
    COMMENTTYPETAGUNKNOWN = 'COMMENTTYPETAGUNKNOWN',
    COMMENTTYPETAGSTAR = 'COMMENTTYPETAGSTAR',
  }
  export interface Response {
    messagesList: Message[];
    cursor: string;
    //  @uint64
    fetchInterval: string;
    //  @uint64
    now: string;
    internalExt: string;
    //  @uint32
    fetchType: number;
    //  @string
    routeParams: { [key: string]: string };
    //  @uint64
    heartbeatDuration: string;
    //  @bool
    needAck: boolean;
    pushServer: string;
    liveCursor: string;
    //  @bool
    historyNoMore: boolean;
  }

  export interface Long {
    low: number;
    high: number;
    unsigned: boolean;
  }

  export interface Message {
    method: string;
    //  @bytes
    payload: string;
    //  @int64
    msgId: string;
    //  @int32
    msgType: number;
    //  @int64
    offset: string;
    //  @bool
    needWrdsStore: boolean;
    //  @int64
    wrdsVersion: string;
    wrdsSubKey: string;
  }

  // 聊天
  export interface ChatMessage {
    common: Common;
    user: User;
    content: string;
    //  @bool
    visibleToSender: boolean;
    backgroundImage: Image;
    fullScreenTextColor: string;
    backgroundImageV2: Image;
    publicAreaCommon: PublicAreaCommon;
    giftImage: Image;
    //  @uint64
    agreeMsgId: string;
    //  @uint32
    priorityLevel: number;
    landscapeAreaCommon: LandscapeAreaCommon;
    //  @uint64
    eventTime: string;
    //  @bool
    sendReview: boolean;
    //  @bool
    fromIntercom: boolean;
    //  @bool
    intercomHideUserCard: boolean;
    // repeated chatTagsList = 19;
    chatBy: string;
    //  @uint32
    individualChatPriority: number;
    rtfContent: Text;
  }

  export interface LandscapeAreaCommon {
    //  @bool
    showHead: boolean;
    //  @bool
    showNickname: boolean;
    //  @bool
    showFontColor: boolean;
    colorValueList: string[];
    commentTypeTagsList: CommentTypeTag[];
  }

  export interface RoomUserSeqMessage {
    common: Common;
    ranksList: RoomUserSeqMessageContributor[];
    //  @int64
    total: string;
    popStr: string;
    seatsList: RoomUserSeqMessageContributor[];
    //  @int64
    popularity: string;
    //  @int64
    totalUser: string;
    totalUserStr: string;
    totalStr: string;
    onlineUserForAnchor: string;
    totalPvForAnchor: string;
    upRightStatsStr: string;
    upRightStatsStrComplete: string;
  }

  export interface CommonTextMessage {
    common: Common;
    user: User;
    scene: string;
  }

  export interface UpdateFanTicketMessage {
    common: Common;
    roomFanTicketCountText: string;
    //  @uint64
    roomFanTicketCount: string;
    //  @bool
    forceUpdate: boolean;
  }

  export interface RoomUserSeqMessageContributor {
    //  @uint64
    score: string;
    user: User;
    //  @uint64
    rank: string;
    //  @uint64
    delta: string;
    //  @bool
    isHidden: boolean;
    scoreDescription: string;
    exactlyScore: string;
  }

  // 礼物消息
  export interface GiftMessage {
    common: Common;
    //  @uint64
    giftId: string;
    //  @uint64
    fanTicketCount: string;
    //  @uint64
    groupCount: string;
    //  @uint64
    repeatCount: string;
    //  @uint64
    comboCount: string;
    user: User;
    toUser: User;
    //  @uint32
    repeatEnd: number;
    textEffect: TextEffect;
    //  @uint64
    groupId: string;
    //  @uint64
    incomeTaskgifts: string;
    //  @uint64
    roomFanTicketCount: string;
    priority: GiftIMPriority;
    gift: GiftStruct;
    logId: string;
    //  @uint64
    sendType: string;
    publicAreaCommon: PublicAreaCommon;
    trayDisplayText: Text;
    //  @uint64
    bannedDisplayEffects: string;
    // GiftTrayInfo trayInfo = 21;
    // AssetEffectMixInfo assetEffectMixInfo = 22; @bool
    displayForSelf: boolean;
    interactGiftInfo: string;
    diyItemInfo: string;
    //  @uint64
    minAssetSetList: string[];
    //  @uint64
    totalCount: string;
    //  @uint32
    clientGiftSource: number;
    // AnchorGiftData anchorGift = 31; @uint64
    toUserIdsList: string[];
    //  @uint64
    sendTime: string;
    //  @uint64
    forceDisplayEffects: string;
    traceId: string;
    //  @uint64
    effectDisplayTs: string;
  }

  export interface GiftStruct {
    image: Image;
    describe: string;
    //  @bool
    notify: boolean;
    //  @uint64
    duration: string;
    //  @uint64
    id: string;
    // GiftStructFansClubInfo fansclubInfo = 6; @bool
    forLinkmic: boolean;
    //  @bool
    doodle: boolean;
    //  @bool
    forFansclub: boolean;
    //  @bool
    combo: boolean;
    //  @uint32
    type: number;
    //  @uint32
    diamondCount: number;
    //  @bool
    isDisplayedOnPanel: boolean;
    //  @uint64
    primaryEffectId: string;
    giftLabelIcon: Image;
    name: string;
    region: string;
    manual: string;
    //  @bool
    forCustom: boolean;
    // specialEffectsMap = 20;
    icon: Image;
    //  @uint32
    actionType: number;
  }

  export interface GiftIMPriority {
    //  @uint64
    queueSizesList: string[];
    //  @uint64
    selfQueuePriority: string;
    //  @uint64
    priority: string;
  }

  export interface TextEffect {
    portrait: TextEffectDetail;
    landscape: TextEffectDetail;
  }

  export interface TextEffectDetail {
    text: Text;
    //  @uint32
    textFontSize: number;
    background: Image;
    //  @uint32
    start: number;
    //  @uint32
    duration: number;
    //  @uint32
    x: number;
    //  @uint32
    y: number;
    //  @uint32
    width: number;
    //  @uint32
    height: number;
    //  @uint32
    shadowDx: number;
    //  @uint32
    shadowDy: number;
    //  @uint32
    shadowRadius: number;
    shadowColor: string;
    strokeColor: string;
    //  @uint32
    strokeWidth: number;
  }

  // 成员消息
  export interface MemberMessage {
    common: Common;
    user: User;
    //  @uint64
    memberCount: Long;
    operator: User;
    //  @bool
    isSetToAdmin: boolean;
    //  @bool
    isTopUser: boolean;
    //  @uint64
    rankScore: string;
    //  @uint64
    topUserNo: string;
    //  @uint64
    enterType: string;
    //  @uint64
    action: string;
    actionDescription: string;
    //  @uint64
    userId: string;
    effectConfig: EffectConfig;
    popStr: string;
    enterEffectConfig: EffectConfig;
    backgroundImage: Image;
    backgroundImageV2: Image;
    anchorDisplayText: Text;
    publicAreaCommon: PublicAreaCommon;
    //  @uint64
    userEnterTipType: string;
    //  @uint64
    anchorEnterTipType: string;
  }

  export interface PublicAreaCommon {
    userLabel: Image;
    //  @uint64
    userConsumeInRoom: string;
    //  @uint64
    userSendGiftCntInRoom: string;
  }

  export interface EffectConfig {
    //  @uint64
    type: string;
    icon: Image;
    //  @uint64
    avatarPos: string;
    text: Text;
    textIcon: Image;
    //  @uint32
    stayTime: number;
    //  @uint64
    animAssetId: string;
    badge: Image;
    //  @uint64
    flexSettingArrayList: string[];
    textIconOverlay: Image;
    animatedBadge: Image;
    //  @bool
    hasSweepLight: boolean;
    //  @uint64
    textFlexSettingArrayList: string[];
    //  @uint64
    centerAnimAssetId: string;
    dynamicImage: Image;
    //  @string
    extraMap: { [key: string]: string };
    //  @uint64
    mp4AnimAssetId: string;
    //  @uint64
    priority: string;
    //  @uint64
    maxWaitTime: string;
    dressId: string;
    //  @uint64
    alignment: string;
    //  @uint64
    alignmentOffset: string;
  }

  export interface Text {
    key: string;
    defaultPatter: string;
    defaultFormat: TextFormat;
    piecesList: TextPiece[];
  }

  export interface TextPiece {
    //  @bool
    type: boolean;
    format: TextFormat;
    stringValue: string;
    userValue: TextPieceUser;
    giftValue: TextPieceGift;
    heartValue: TextPieceHeart;
    patternRefValue: TextPiecePatternRef;
    imageValue: TextPieceImage;
  }

  export interface TextPieceImage {
    image: Image;
    //  @float
    scalingRate: number;
  }

  export interface TextPiecePatternRef {
    key: string;
    defaultPattern: string;
  }

  export interface TextPieceHeart {
    color: string;
  }

  export interface TextPieceGift {
    //  @uint64
    giftId: string;
    nameRef: PatternRef;
  }

  export interface PatternRef {
    key: string;
    defaultPattern: string;
  }

  export interface TextPieceUser {
    user: User;
    //  @bool
    withColon: boolean;
  }

  export interface TextFormat {
    color: string;
    //  @bool
    bold: boolean;
    //  @bool
    italic: boolean;
    //  @uint32
    weight: number;
    //  @uint32
    italicAngle: number;
    //  @uint32
    fontSize: number;
    //  @bool
    useHeighLightColor: boolean;
    //  @bool
    useRemoteClor: boolean;
  }

  // 点赞
  export interface LikeMessage {
    common: Common;
    //  @uint64
    count: Long;
    //  @uint64
    total: Long;
    //  @uint64
    color: string;
    user: User;
    icon: string;
    doubleLikeDetail: DoubleLikeDetail;
    displayControlInfo: DisplayControlInfo;
    //  @uint64
    linkmicGuestUid: string;
    scene: string;
    picoDisplayInfo: PicoDisplayInfo;
  }

  export interface SocialMessage {
    common: Common;
    user: User;
    //  @uint64
    shareType: string;
    //  @uint64
    action: string;
    shareTarget: string;
    //  @uint64
    followCount: string;
    publicAreaCommon: PublicAreaCommon;
  }

  export interface PicoDisplayInfo {
    //  @uint64
    comboSumCount: string;
    emoji: string;
    emojiIcon: Image;
    emojiText: string;
  }

  export interface DoubleLikeDetail {
    //  @bool
    doubleFlag: boolean;
    //  @uint32
    seqId: number;
    //  @uint32
    renewalsNum: number;
    //  @uint32
    triggersNum: number;
  }

  export interface DisplayControlInfo {
    //  @bool
    showText: boolean;
    //  @bool
    showIcons: boolean;
  }

  export interface EpisodeChatMessage {
    common: Message;
    user: User;
    content: string;
    //  @bool
    visibleToSende: boolean;
    // BackgroundImage backgroundImage = 5;
    // PublicAreaCommon publicAreaCommon = 6;
    giftImage: Image;
    //  @uint64
    agreeMsgId: string;
    colorValueList: string[];
  }

  export interface MatchAgainstScoreMessage {
    common: Common;
    against: Against;
    //  @uint32
    matchStatus: number;
    //  @uint32
    displayStatus: number;
  }

  export interface Against {
    leftName: string;
    leftLogo: Image;
    leftGoal: string;
    // LeftPlayersList leftPlayersList = 4;
    // LeftGoalStageDetail leftGoalStageDetail = 5;
    rightName: string;
    rightLogo: Image;
    rightGoal: string;
    // RightPlayersList rightPlayersList  = 9;
    // RightGoalStageDetail rightGoalStageDetail = 10; @uint64
    timestamp: string;
    //  @uint64
    version: string;
    //  @uint64
    leftTeamId: string;
    //  @uint64
    rightTeamId: string;
    //  @uint64
    diffSei2absSecond: string;
    //  @uint32
    finalGoalStage: number;
    //  @uint32
    currentGoalStage: number;
    //  @uint32
    leftScoreAddition: number;
    //  @uint32
    rightScoreAddition: number;
    //  @uint64
    leftGoalInt: string;
    //  @uint64
    rightGoalInt: string;
  }

  export interface Common {
    method: string;
    //  @uint64
    msgId: string;
    //  @uint64
    roomId: string;
    //  @uint64
    createTime: string;
    //  @uint32
    monitor: number;
    //  @bool
    isShowMsg: boolean;
    describe: string;
    // DisplayText displayText = 8; @uint64
    foldType: string;
    //  @uint64
    anchorFoldType: string;
    //  @uint64
    priorityScore: string;
    logId: string;
    msgProcessFilterK: string;
    msgProcessFilterV: string;
    user: User;
    // Room room = 16; @uint64
    anchorFoldTypeV2: string;
    //  @uint64
    processAtSeiTimeMs: string;
    //  @uint64
    randomDispatchMs: string;
    //  @bool
    isDispatch: boolean;
    //  @uint64
    channelId: string;
    //  @uint64
    diffSei2absSecond: string;
    //  @uint64
    anchorFoldDuration: string;
  }

  export interface User {
    //  @uint64
    id: string;
    //  @uint64
    Long: string;
    nickName: string;
    //  @uint32
    gender: number;
    Signature: string;
    //  @uint32
    Level: number;
    //  @uint64
    Birthday: string;
    Telephone: string;
    AvatarThumb: Image;
    AvatarMedium: Image;
    AvatarLarge: Image;
    //  @bool
    Verified: boolean;
    //  @uint32
    Experience: number;
    city: string;
    //  @int32
    Status: number;
    //  @uint64
    CreateTime: string;
    //  @uint64
    ModifyTime: string;
    //  @uint32
    Secret: number;
    ShareQrcodeUri: string;
    //  @uint32
    IncomeSharePercent: number;
    BadgeImageList: Image[];
    FollowInfo: FollowInfo;
    // PayGrade PayGrade = 23;
    // FansClub FansClub = 24;
    // Border Border = 25;
    SpecialId: string;
    AvatarBorder: Image;
    Medal: Image;
    RealTimeIconsList: Image[];
    displayId: string;
    secUid: string;
    //  @uint64
    fanTicketCount: string;
    idStr: string;
    //  @uint32
    ageRange: number;
  }

  export interface FollowInfo {
    //  @uint64
    followingCount: Long;
    //  @uint64
    followerCount: Long;
    //  @uint64
    followStatus: string;
    //  @uint64
    pushStatus: string;
    remarkName: string;
    followerCountStr: string;
    followingCountStr: string;
  }

  export interface Image {
    urlListList: string[];
    uri: string;
    //  @uint64
    height: string;
    //  @uint64
    width: string;
    avgColor: string;
    //  @uint32
    imageType: number;
    openWebUrl: string;
    content: ImageContent;
    //  @bool
    isAnimated: boolean;
    FlexSettingList: NinePatchSetting;
    TextSettingList: NinePatchSetting;
  }

  export interface NinePatchSetting {
    settingListList: string[];
  }

  export interface ImageContent {
    name: string;
    fontColor: string;
    //  @uint64
    level: string;
    alternativeText: string;
  }

  export interface PushFrame {
    //  @uint64
    seqId: string;
    //  @uint64
    logId: string;
    //  @uint64
    service: string;
    //  @uint64
    method: string;
    headersList: HeadersList[];
    payloadEncoding: string;
    payloadType: string;
    //  @bytes
    payload: string;
  }

  export interface kk {
    //  @uint32
    k: number;
  }

  export interface SendMessageBody {
    conversationId: string;
    //  @uint32
    conversationType: number;
    //  @uint64
    conversationShortId: string;
    content: string;
    ext: ExtList[];
    //  @uint32
    messageType: number;
    ticket: string;
    clientMessageId: string;
  }

  export interface ExtList {
    key: string;
    value: string;
  }

  // This the module of Rsp
  export namespace Rsp {
    export interface F {
      //  @uint64
      q1: string;
      //  @uint64
      q3: string;
      q4: string;
      //  @uint64
      q5: string;
    }
  }
  export interface Rsp {
    //  @int32
    a: number;
    //  @int32
    b: number;
    //  @int32
    c: number;
    d: string;
    //  @int32
    e: number;
    f: Rsp.F;
    g: string;
    //  @uint64
    h: string;
    //  @uint64
    i: string;
    //  @uint64
    j: string;
  }

  export interface PreMessage {
    //  @uint32
    cmd: number;
    //  @uint32
    sequenceId: number;
    sdkVersion: string;
    token: string;
    //  @uint32
    refer: number;
    //  @uint32
    inboxType: number;
    buildNumber: string;
    sendMessageBody: SendMessageBody;
    // 字段名待定
    aa: string;
    devicePlatform: string;
    headers: HeadersList[];
    //  @uint32
    authType: number;
    biz: string;
    access: string;
  }

  export interface HeadersList {
    key: string;
    value: string;
  }

}
