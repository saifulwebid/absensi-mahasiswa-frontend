import { AbsenMahasiswaPage } from './app.po';

describe('absen-mahasiswa App', () => {
  let page: AbsenMahasiswaPage;

  beforeEach(() => {
    page = new AbsenMahasiswaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
