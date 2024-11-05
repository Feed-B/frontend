import { setProjectAnnotations } from "@storybook/react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import * as globalStorybookConfig from "@/.storybook/preview";

setProjectAnnotations(globalStorybookConfig);

// beforeEach(() => {
//   jest.useFakeTimers();
// });

// afterEach(() => {
//   jest.runOnlyPendingTimers();
//   jest.useRealTimers();
//   cleanup();
// });

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

// override render export
export { customRender as render };
