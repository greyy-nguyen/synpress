import type { Page } from "@playwright/test";
import Selectors from "../../../selectors/pages/SessionConnectPage";
import { getSessionConnectPageAndWaitForLoad } from "../../utils/getSessionConnectPageAndWaitForLoad";
import { connectToDapp } from "./actions/connectToDapp";

export class SessionConnectPage {
  static readonly selectors = Selectors;
  readonly selectors = Selectors;

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async connectToDapp(accounts?: string[]) {
    const sessionConnectPage = await getSessionConnectPageAndWaitForLoad(
      this.page.context()
    );

    await connectToDapp(sessionConnectPage, accounts);
  }
}
