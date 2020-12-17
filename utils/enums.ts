// PRO TIP: In VSCode you can hover over variable name to see actual value ;)

export enum Flags {
  developer = 1 << 0,
  admin = 1 << 1,
  supporter = 1 << 2,
  bestmod = 1 << 3,
}

export enum Ranks {
  PLAYER = "PLAYER",
  VIP = "VIP",
  PREMIUM = "PREMIUM",
  HOLY = "HOLY",
  IMMORTAL = "IMMORTAL",
  BUILDER = "BUILDER",
  MAPLEAD = "MAPLEAD",
  YOUTUBE = "YOUTUBE",
  DEV = "DEV",
  ORGANIZER = "ORGANIZER",
  MODER = "MODER",
  WARDEN = "WARDEN",
  CHIEF = "CHIEF",
  ADMIN = "ADMIN",
}
