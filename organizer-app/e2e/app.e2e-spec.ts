import { OrganizerAppPage } from './app.po';

describe('organizer-app App', () => {
  let page: OrganizerAppPage;

  beforeEach(() => {
    page = new OrganizerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
