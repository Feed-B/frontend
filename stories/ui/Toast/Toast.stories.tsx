import { Meta, StoryObj } from "@storybook/react";
import { ToastProvider, useToast } from "@/app/_context/ToastContext";
import ToastContainer from "@/app/_components/Toast/ToastContainer";
import Button from "@/app/_components/Button/Button";

const meta: Meta<typeof ToastProvider> = {
  component: ToastProvider,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ToastProvider>;

const Example = () => {
  const { addToast } = useToast();

  return (
    <div className=" flex gap-10">
      <Button buttonSize="normal" bgColor="yellow" onClick={() => addToast("성공 성공", "success")}>
        Success Toast
      </Button>
      {/* <Button buttonSize="normal" bgColor="yellow" onClick={() => addToast("에러 발생", "error")}>
        Error Toast
      </Button> */}
    </div>
  );
};

export const ToastStory: Story = {
  render: () => (
    <ToastProvider>
      <Example />
      <ToastContainer />
    </ToastProvider>
  ),
};
