import { ImageIdxType } from "@/app/_apis/ProfileAPI";

export const isValidNickName = (beforeNickName: string, afterNickName: string) => {
  if (afterNickName.length !== 0 && beforeNickName === undefined) {
    return true;
  }

  if (afterNickName !== beforeNickName && afterNickName.length !== 0) {
    return true;
  }
  return false;
};

export const isChangeAboutMe = (beforeAboutMe: string, afterAboutMe: string) => {
  if (beforeAboutMe === undefined) {
    return;
  }

  if (afterAboutMe !== beforeAboutMe) {
    return true;
  } else {
    return false;
  }
};

const CHANGE_PROFILE_CODE = {
  DEFAULT_PROFILE: 0,
  CHANGE_PROFILE: 2,
  STAY_PROFILE: 1,
};

export const isImageChange = (beforeImage: string, afterImage: string) => {
  if (!afterImage || afterImage === "default") {
    return CHANGE_PROFILE_CODE.DEFAULT_PROFILE as ImageIdxType;
  } else if (afterImage !== beforeImage) {
    return CHANGE_PROFILE_CODE.CHANGE_PROFILE as ImageIdxType;
  }
  return CHANGE_PROFILE_CODE.STAY_PROFILE as ImageIdxType;
};
