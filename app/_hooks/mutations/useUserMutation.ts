import { useMutation, useQueryClient } from "@tanstack/react-query";
import { profileApi, signUpApi } from "@/app/_apis/userApi";
import { UserDataParams } from "@/app/_types/UserType";
import { userQueryKey } from "@/app/_queryFactory/userQuery";
import { UserResponse } from "@/app/_apis/schema/userResponse";
import { setToken } from "@/app/_utils/handleToken";
import { SignUpRequest } from "@/app/_apis/schema/userResponse";

const useUserMutation = (profileData?: UserResponse, handleModalClose?: () => void) => {
  const queryClient = useQueryClient();

  const changeProfileMutation = useMutation({
    mutationFn: (newProfileData: UserDataParams) => {
      if (profileData?.id !== undefined) {
        return profileApi.putUserData({
          userId: profileData.id,
          userData: newProfileData,
        });
      }
      throw new Error("User ID is undefined");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userQueryKey.profile(Number(profileData?.id)).queryKey });
      handleModalClose && handleModalClose();
    },
  });

  const signUpMutation = useMutation({
    mutationFn: (userData: SignUpRequest) => {
      const response = signUpApi.postSignUp(userData);
      return response;
    },
    onSuccess: data => {
      console.log("Sign up Successful");
      const accessToken = data.token;
      setToken(accessToken);
      window.location.reload(); // 회원가입 후 새로고침
    },
    onError: error => {
      console.error("Sign up failed", error);
    },
  });

  return {changeProfileMutation, signUpMutation};
};

export default useUserMutation;