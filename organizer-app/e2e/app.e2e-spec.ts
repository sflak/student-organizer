import { AngularFirebasePage } from './app.po';

describe('angular-firebase App', function() {
  let page: AngularFirebasePage;

  beforeEach(() => {
    page = new AngularFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
