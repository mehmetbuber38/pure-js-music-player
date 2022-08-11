class Music {
  constructor(title, singer, img, file, alternateText, lyrics) {
    this.alternateText = alternateText;
    this.file = file;
    this.img = img;
    this.lyrics = lyrics;
    this.singer = singer;
    this.title = title;
  }

  getName() {
    return this.title + ' - ' + this.singer;
  }
}

const musicList = [
  new Music(
    'Yaz Dostum',
    'Barış Manço',
    '4.jpeg',
    '4.mp3',
    'Yaz Dostum, Barış Manço',
    `Yaz dostum,
    Güzel sevmeyene adam denir mi?
    Yaz dostum,
    Selam almayana yiğit denir mi?
    Yaz dostum,
    Altı üstü beş metrelik bez için
    Yaz dostum,
    Boşa geçmiş ömre yaşam denir mi?
     
    Yaz tahtaya bir daha,
    Tut defteri kitabı
    Sarı çizmeli Mehmet Ağa
    Bir gün öder hesabı
     
    Yaz dostum,
    Yoksul görsen besle kaymak bal ile
    Yaz dostum,
    Garipleri giydir ipek şal ile
    Yaz dostum,
    Öksüz görsen sar kanadın’ kolunu
    Yaz dostum,
    Kimse göçmez bu dünyadan mal ile
     
    Yaz tahtaya bir daha,
    Tut defteri kitabı
    Sarı çizmeli Mehmet Ağa
    Bir gün öder hesabı
     
    Yaz dostum,
    Barış söyler, kendi bir ders alır mı?
    Yaz dostum,
    Su üstüne yazı yazsan kalır mı?
    Yaz dostum
    Bir dünya ki haklı haksız karışmış
    Yaz dostum
    Boşa koysan dolmaz, dolusu alır mı?
     
    Yaz tahtaya bir daha,
    Tut defteri kitabı
    Sarı çizmeli Mehmet Ağa
    Bir gün öder hesabı`
  ),
  new Music(
    'Boşver',
    'Nilüfer',
    '1.jpeg',
    '1.mp3',
    'Boşver - Nilüfer',
    `
  Bunların hepsini boşver
Boşver, boşver
Boşver
Boşver
İnsanlar duruma göre değişirler
Huyuna göre eğilirler
Oyuna getirebilirler
İnsanlar sebepsizce giderler
İnanma sonra hiçbir şey olmamış gibi
Bir de geri dönerler
Bunların hepsini boşver
Kendine bir daha şans ver
Tam şu an ne istiyorsan onu yap
Dünyayı görmezden gel
Bunların hepsini boşver
Kendine bin kere şans ver
Tam şu an ne istiyorsan onu yap
Dünyayı görmezden gel
Zamanla kendimi değiştirebildim
Her şeye üzülmeyi kestim
Kafama göre rota çizdim
Palavra kimse melek değil inanma
Kanma benzemez ki benimkine asla
Hiçbir DNA
Bunların hepsini boşver
Kendine bir daha şans ver
Tam şu an ne istiyorsan onu yap
Dünyayı görmezden gel
Bunların hepsini boşver
Kendine bin kere şans ver
Tam şu an ne istiyorsan onu yap
Dünyayı görmezden gel
Bunların hepsini boşver
Kendine bin kere şans ver
Tam şu an ne istiyorsan onu yap
Dünyayı görmezden gel
Bunların hepsini boşver
Kendine bin kere şans ver
Tam şu an ne istiyorsan onu yap
Dünyayı görmezden gel`
  ),
  new Music(
    'Bu da Geçer mi Sevgilim',
    'Yalın',
    '2.jpeg',
    '2.mp3',
    'Bu da Geçer mi Sevgilim - Yalın',
    `Bu da geçer mi, sevgilim?
    Yokluğundan mı sebep?
    Sustuğundan mı sebep?
    Buz gibi gecelerim
    Battaniyem, sıcağımdın sen benim
    Bu da geçer mi, sevgilim?
    Yatağı dert soğutur
    Kalbim elinde durur
    İyi ki var şiirlerim
    Battaniyem, sıcağımdın sen benim
    Bi' sonraki bayram
    Bi' hüzünlü yağmur
    Belki yine şansımız olur
    O zaman
    Bırak bütün şarkıları o söylesin
    Bıraktığın yaraları temizlesin
    Aramıza koyduğun o tatlı gönlün
    Hat'rı çok olsun
    Bırak bütün şarkıları o söylesin
    Bıraktığın yaraları temizlesin
    Aramıza koyduğun o tatlı gönlün
    Canı sağ olsun
    Bu da geçer mi, sevgilim?
    Yokluğundan mı sebep?
    Sustuğundan mı sebep?
    Buz gibi gecelerim
    Battaniyem, sıcağımdın sen benim
    Bi' sonraki bayram
    Bi' hüzünlü yağmur
    Belki yine şansımız olur
    O zaman
    Bırak bütün şarkıları o söylesin
    Bıraktığın yaraları temizlesin
    Aramıza koyduğun o tatlı gönlün
    Hat'rı çok olsun
    Bırak bütün şarkıları o söylesin
    Bıraktığın yaraları temizlesin
    Aramıza koyduğun o tatlı gönlün
    Canı sağ olsun
    Bu da geçer mi, sevgilim?`
  ),
  new Music(
    'Aramızda Uçurumlar',
    'Suat Suna',
    '3.jpeg',
    '3.mp3',
    'Aramızda Uçurumlar - Suat Suna',
    `Aramızda geçenleri
    Unutmak mümkün değil
    Nasıl da söndürdün, ah
    Sevgimizi, ah
    Bu son yeminim olsun
    Bir daha böyle sevmem
    Artık ağlamam, çünkü
    Hak etmedin, ah
    Hak etmedin
    Aramızda uçurumlar
    Yeniden seven o bakışlar
    Anlasana, içimdeki
    Duvarı yıkamazlar
    Aramızda uçurumlar
    Yeniden seven o bakışlar
    Anlasana, içimdeki
    Duvarı yıkamazlar
    Aramızda geçenleri
    Unutmak mümkün değil
    Nasıl da söndürdün, ah
    Sevgimizi, ah
    Bu son yeminim olsun
    Bir daha böyle sevmem
    Artık ağlamam, çünkü
    Hak etmedin, ah
    Hak etmedin
    Aramızda uçurumlar
    Yeniden seven o bakışlar
    Anlasana, içimdeki
    Duvarı yıkamazlar
    Aramızda uçurumlar
    Yeniden seven o bakışlar
    Anlasana, içimdeki
    Duvarı yıkamazlar
    Aramızda uçurumlar
    Yeniden seven o bakışlar
    Anlasana, içimdeki
    Duvarı yıkamazlar
    Aramızda uçurumlar
    Yeniden seven o bakışlar
    Anlasana, içimdeki
    Duvarı yıkamazlar`
  ),
];
