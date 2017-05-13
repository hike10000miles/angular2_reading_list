import { BookappPage } from './app.po';

describe('bookapp App', () => {
  let page: BookappPage;

  beforeEach(() => {
    page = new BookappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
