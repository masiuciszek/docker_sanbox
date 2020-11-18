import React from "react"
import { render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { mainTheme } from "@styled/index"
import "@testing-library/jest-dom"
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const AllTheProviders: React.FC = ({ children }) => {
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
}

const customRender = (ui: React.ReactElement, options: any = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }