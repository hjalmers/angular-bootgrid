import { Angular2BootgridPage } from './app.po';

describe('angular2-bootgrid App', function() {
  let page: Angular2BootgridPage;

  beforeEach(() => {
    page = new Angular2BootgridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
