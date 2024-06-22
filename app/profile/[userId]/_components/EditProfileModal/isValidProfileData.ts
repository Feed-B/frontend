export const isValidNickName = (beforeNickName: string | undefined, afterNickName: string) => {
  if (afterNickName.length !== 0 && beforeNickName === undefined) {
    return true;
  }

  if (afterNickName !== beforeNickName && afterNickName.length !== 0) {
    return true;
  }
  return false;
};

export const isChangeAboutMe = (beforeAboutMe: string | undefined, afterAboutMe: string) => {
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

export const isImageChange = (beforeImage: string | undefined, afterImage: string) => {
  if (beforeImage === undefined) {
    return;
  }

  if (!afterImage || afterImage === "default") {
    return CHANGE_PROFILE_CODE.DEFAULT_PROFILE;
  } else if (afterImage !== beforeImage) {
    return CHANGE_PROFILE_CODE.CHANGE_PROFILE;
  }
  return CHANGE_PROFILE_CODE.STAY_PROFILE;
};
