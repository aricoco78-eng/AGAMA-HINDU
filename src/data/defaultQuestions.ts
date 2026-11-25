import { Question } from '../types';

import kitabWedaImg from '../assets/images/kitab_weda_lontar_1795573234722.jpg';
import maharsiImg from '../assets/images/maharsi_penyusun_weda_1795573235354.jpg';
import yadnyaSembahyangImg from '../assets/images/yadnya_sembahyang_pura_1795573236919.jpg';
import herbalUsadaImg from '../assets/images/herbal_usada_ayurweda_1795573236871.jpg';
import bhuanaAgungImg from '../assets/images/bhuana_agung_panca_maha_bhuta_1795573802427.jpg';
import selarasBhuanaImg from '../assets/images/selaras_bhuana_alit_agung_1795573803070.jpg';
import brahmacariBelajarImg from '../assets/images/brahmacari_asrama_belajar_1795573804534.jpg';
import grhasthaWanaprasthaImg from '../assets/images/grhastha_wanaprastha_keluarga_1795573803931.jpg';

/**
 * Bank Soal Tes Sumatif Pendidikan Agama Hindu & Budi Pekerti Kelas 6
 * Lingkup Materi:
 * 1. Memahami Weda Smerti (Catur Weda Samhita dan Penyusunnya, Penerapan Catur Weda dalam Kehidupan Sehari-hari)
 * 2. Unsur-Unsur Pembentuk Bhuana Alit (Unsur-Unsur Pembentuk Bhuana Alit, Upaya Menyelaraskan Bhuana Alit dengan Bhuana Agung)
 * 3. Memahami Ajaran Catur Asrama (Bagian-Bagian Catur Asrama, Catur Asrama dalam Kehidupan Sehari-hari)
 *
 * Komposisi: 30 Pilihan Ganda (PG), 5 Pilihan Ganda Kompleks (PGK - 3 opsi), 5 PGK Kategori Benar/Salah (3 pernyataan)
 */
export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // PILIHAN GANDA (1 - 30)
  // =========================================================================

  // --- LINGKUP 1: MEMAHAMI WEDA SMERTI & CATUR WEDA SAMHITA (SOAL 1 - 10) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Pengertian Weda Smerti',
    elemen: 'Kitab Suci Weda',
    difficulty: 'Mudah',
    imageUrl: kitabWedaImg,
    imageCaption: 'Ilustrasi naskah suci Weda dan lontar ajaran Hindu',
    text: 'Perhatikan gambar naskah suci di atas. Secara etimologi (bahasa Sanskerta), kata "Smerti" dalam Weda Smerti berasal dari urat kata "Smr" yang memiliki arti ....',
    options: [
      { id: 'A', text: 'Wahyu yang didengar secara langsung dari Tuhan' },
      { id: 'B', text: 'Ingatan atau tradisi suci yang ditulis kembali oleh para Maha Rsi' },
      { id: 'C', text: 'Lagu-lagu pujian yang dilantunkan saat upacara yadnya' },
      { id: 'D', text: 'Aturan hidup bertapa di hutan belantara' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kata Smerti berasal dari urat kata "Smr" yang berarti ingatan. Weda Smerti adalah kitab suci yang disusun berdasarkan ingatan para Maha Rsi untuk menjelaskan ajaran Weda Sruti.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Kedudukan Weda Sruti dan Smerti',
    elemen: 'Kitab Suci Weda',
    difficulty: 'Mudah',
    text: 'Dalam tata urutan kitab suci Agama Hindu, kitab Weda dibagi menjadi dua kelompok besar yaitu Weda Sruti dan Weda Smerti. Kedudukan Weda Smerti terhadap Weda Sruti adalah sebagai ....',
    options: [
      { id: 'A', text: 'Pengganti seluruh isi Weda Sruti agar lebih singkat' },
      { id: 'B', text: 'Kitab sejarah kerajaan kuno yang terpisah dari Weda' },
      { id: 'C', text: 'Penjelas, penafsir, dan pedoman pelaksanaan ajaran Weda Sruti' },
      { id: 'D', text: 'Buku cerita rakyat yang tidak berkaitan dengan yadnya' },
    ],
    correctAnswer: 'C',
    explanation:
      'Weda Sruti merupakan wahyu langsung Sang Hyang Widhi Wasa, sedangkan Weda Smerti berfungsi sebagai kitab penjelas, penafsir, dan pedoman penerapan ajaran Weda Sruti dalam kehidupan.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Penghimpun Catur Weda Samhita',
    elemen: 'Kitab Suci Weda',
    difficulty: 'Mudah',
    imageUrl: maharsiImg,
    imageCaption: 'Ilustrasi Maha Rsi yang menulis dan mengajarkan kitab suci kepada para muridnya',
    text: 'Perhatikan gambar di atas. Maha Rsi agung yang berjasa menghimpun dan mengkodifikasi ajaran Weda menjadi empat himpunan utama (Catur Weda Samhita) bersama empat orang muridnya adalah ....',
    options: [
      { id: 'A', text: 'Maha Rsi Walmiki' },
      { id: 'B', text: 'Maha Rsi Wyasa (Bagawan Byasa)' },
      { id: 'C', text: 'Maha Rsi Panini' },
      { id: 'D', text: 'Maha Rsi Manu' },
    ],
    correctAnswer: 'B',
    explanation:
      'Maha Rsi Wyasa (Krsna Dwaipayana Wyasa) adalah tokoh besar yang menghimpun dan membagi Weda ke dalam Catur Weda Samhita dibantu empat murid utamanya.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Catur Weda Samhita dan Penyusunnya',
    elemen: 'Kitab Suci Weda',
    difficulty: 'Sedang',
    text: 'Dalam penyusunan Catur Weda Samhita, Maha Rsi Wyasa menugaskan muridnya yang bernama Maha Rsi Paila untuk menghimpun kitab Regweda Samhita. Isi pokok dari kitab Regweda Samhita adalah ....',
    options: [
      { id: 'A', text: 'Mantra-mantra berupa doa pengantar upacara persembahan yadnya' },
      { id: 'B', text: 'Mantra-mantra pengobatan tradisional dan ketenteraman rumah tangga' },
      { id: 'C', text: 'Kumpulan mantra pujian (puja stawa) untuk memuja keagungan Sang Hyang Widhi Wasa' },
      { id: 'D', text: 'Lagu-lagu suci yang dilagukan dengan irama merdu' },
    ],
    correctAnswer: 'C',
    explanation:
      'Regweda Samhita disusun oleh Maha Rsi Paila dan merupakan kitab tertua yang memuat mantra-mantra pujian kepada Tuhan Yang Maha Esa beserta manifestasi-Nya.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Catur Weda Samhita dan Penyusunnya',
    elemen: 'Kitab Suci Weda',
    difficulty: 'Sedang',
    text: 'Pasangan yang tepat antara bagian Catur Weda Samhita dengan Maha Rsi penyusunnya adalah ....',
    options: [
      { id: 'A', text: 'Samaweda Samhita disusun oleh Maha Rsi Jaimini' },
      { id: 'B', text: 'Yajurweda Samhita disusun oleh Maha Rsi Sumantu' },
      { id: 'C', text: 'Atharwaweda Samhita disusun oleh Maha Rsi Paila' },
      { id: 'D', text: 'Regweda Samhita disusun oleh Maha Rsi Waisampayana' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pembagian penyusun Catur Weda: Regweda oleh Maha Rsi Paila, Samaweda oleh Maha Rsi Jaimini, Yajurweda oleh Maha Rsi Waisampayana, dan Atharwaweda oleh Maha Rsi Sumantu.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Catur Weda Samhita dan Penyusunnya',
    elemen: 'Kitab Suci Weda',
    difficulty: 'Sedang',
    text: 'Kitab Yajurweda Samhita yang disusun oleh Maha Rsi Waisampayana banyak dijadikan pedoman oleh para sulinggih atau pemangku ketika memimpin upacara persembahan. Hal ini karena Yajurweda berisi ....',
    options: [
      { id: 'A', text: 'Aturan perdagangan dan pemerintahan negara' },
      { id: 'B', text: 'Mantra-mantra doa pengantar tata cara upacara yadnya' },
      { id: 'C', text: 'Kisah kepahlawanan tokoh Rama dan Pandawa' },
      { id: 'D', text: 'Ilmu astronomi untuk meramal gerhana bulan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kata "Yajus" berarti upacara korban suci atau yadnya. Yajurweda Samhita (disusun Maha Rsi Waisampayana) memuat mantra-mantra doa yang mengiringi pelaksanaan upacara yadnya.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Catur Weda Samhita dan Penyusunnya',
    elemen: 'Kitab Suci Weda',
    difficulty: 'Sedang',
    imageUrl: herbalUsadaImg,
    imageCaption: 'Tanaman obat tradisional yang berkaitan dengan ajaran kesehatan dalam Weda',
    text: 'Perhatikan gambar tanaman obat di atas. Bagian Catur Weda Samhita yang disusun oleh Maha Rsi Sumantu dan banyak memuat mantra keselamatan, kesehatan, pengobatan, serta keharmonisan rumah tangga adalah ....',
    options: [
      { id: 'A', text: 'Regweda Samhita' },
      { id: 'B', text: 'Samaweda Samhita' },
      { id: 'C', text: 'Yajurweda Samhita' },
      { id: 'D', text: 'Atharwaweda Samhita' },
    ],
    correctAnswer: 'D',
    explanation:
      'Atharwaweda Samhita disusun oleh Maha Rsi Sumantu, berisi mantra-mantra perlindungan diri, pengobatan penyakit (cikal bakal Ayurweda), keselamatan, dan keharmonisan hidup.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Pembagian Weda Smerti',
    elemen: 'Kitab Suci Weda',
    difficulty: 'Mudah',
    text: 'Kitab Weda Smerti dikelompokkan menjadi dua bagian utama, yaitu kelompok kitab pembantu Weda (Wedangga) dan kelompok kitab Weda tambahan/ilmu terapan yang disebut ....',
    options: [
      { id: 'A', text: 'Upaweda' },
      { id: 'B', text: 'Brahmana' },
      { id: 'C', text: 'Aranyaka' },
      { id: 'D', text: 'Upanisad' },
    ],
    correctAnswer: 'A',
    explanation:
      'Weda Smerti terbagi atas dua kelompok besar yaitu Wedangga (enam cabang ilmu bantu Weda) dan Upaweda (Itihasa, Purana, Arthasastra, Ayurweda, Gandharwa Weda).',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Penerapan Catur Weda dalam Kehidupan',
    elemen: 'Acara',
    difficulty: 'Sedang',
    imageUrl: yadnyaSembahyangImg,
    imageCaption: 'Siswa bersembahyang dengan tertib dan tulus membawa sarana canang sari di pura',
    text: 'Perhatikan gambar siswa yang sedang melaksanakan persembahyangan di atas. Melantunkan Puja Tri Sandhya dengan penuh rasa syukur serta mempersembahkan canang sari dengan tulus ikhlas merupakan penerapan nyata dari ajaran ....',
    options: [
      { id: 'A', text: 'Regweda dan Yajurweda dalam wujud bhakti dan yadnya' },
      { id: 'B', text: 'Arthasastra dalam wujud kegiatan ekonomi pasar' },
      { id: 'C', text: 'Wyakarana dalam menulis huruf latin di papan tulis' },
      { id: 'D', text: 'Wanaprastha dalam meninggalkan seluruh anggota keluarga' },
    ],
    correctAnswer: 'A',
    explanation:
      'Memuja keagungan Sang Hyang Widhi dengan mantra pujian (Regweda) dan melaksanakan yadnya persembahan suci (Yajurweda) merupakan penerapan ajaran Catur Weda dalam keseharian.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Penerapan Catur Weda dalam Kehidupan',
    elemen: 'Sraddha dan Bhakti',
    difficulty: 'Sukar',
    text: 'Putu selalu melantunkan kidung suci Dharmagita saat ngayah di pura dengan hati yang tulus, sedangkan Made gemar merawat tanaman toga di halaman rumah untuk menjaga kesehatan keluarga. Sikap Putu dan Made berturut-turut mencerminkan penerapan nilai dari kitab ....',
    options: [
      { id: 'A', text: 'Yajurweda dan Regweda' },
      { id: 'B', text: 'Samaweda dan Atharwaweda' },
      { id: 'C', text: 'Regweda dan Yajurweda' },
      { id: 'D', text: 'Atharwaweda dan Samaweda' },
    ],
    correctAnswer: 'B',
    explanation:
      'Melantunkan nyanyian suci/kidung pujian mencerminkan Samaweda (Sama = lagu suci), sedangkan menjaga kesehatan dan pengobatan alami mencerminkan Atharwaweda.',
  },

  // --- LINGKUP 2: UNSUR-UNSUR PEMBENTUK BHUANA ALIT & PENYELARASANNYA (SOAL 11 - 20) ---
  {
    id: 11,
    type: 'pg',
    topic: 'Pengertian Bhuana Alit dan Bhuana Agung',
    elemen: 'Sraddha dan Bhakti',
    difficulty: 'Mudah',
    text: 'Dalam ajaran filsafat Agama Hindu, alam semesta beserta seluruh isinya (makrokosmos) disebut Bhuana Agung, sedangkan tubuh manusia dan makhluk hidup (mikrokosmos) disebut ....',
    options: [
      { id: 'A', text: 'Bhuana Alit' },
      { id: 'B', text: 'Sthula Purana' },
      { id: 'C', text: 'Catur Asrama' },
      { id: 'D', text: 'Weda Samhita' },
    ],
    correctAnswer: 'A',
    explanation:
      'Bhuana Alit berarti alam kecil (mikrokosmos), yaitu diri atau tubuh manusia beserta unsur-unsur pembentuknya yang selaras dengan alam semesta (Bhuana Agung).',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Unsur Panca Maha Bhuta Pembentuk Bhuana Alit',
    elemen: 'Sraddha dan Bhakti',
    difficulty: 'Mudah',
    imageUrl: bhuanaAgungImg,
    imageCaption: 'Keindahan alam semesta Bali yang mencerminkan lima unsur Panca Maha Bhuta',
    text: 'Perhatikan gambar alam semesta di atas. Baik Bhuana Agung maupun Bhuana Alit dibentuk oleh lima unsur zat utama alam semesta yang disebut ....',
    options: [
      { id: 'A', text: 'Panca Sradha' },
      { id: 'B', text: 'Panca Maha Bhuta' },
      { id: 'C', text: 'Panca Yama Brata' },
      { id: 'D', text: 'Panca Yadnya' },
    ],
    correctAnswer: 'B',
    explanation:
      'Panca Maha Bhuta adalah lima unsur zat material pembentuk alam semesta (Bhuana Agung) dan tubuh manusia (Bhuana Alit), yaitu Pertiwi, Apah, Teja, Bayu, dan Akasa.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Unsur Panca Maha Bhuta Pembentuk Bhuana Alit',
    elemen: 'Sraddha dan Bhakti',
    difficulty: 'Sedang',
    text: 'Di dalam tubuh manusia (Bhuana Alit), unsur Pertiwi (zat padat) berwujud sebagai tulang, daging, kulit, dan kuku. Sementara itu, unsur Apah (zat cair) di dalam tubuh manusia berwujud sebagai ....',
    options: [
      { id: 'A', text: 'Suhu panas tubuh dan cahaya penglihatan' },
      { id: 'B', text: 'Rongga mulut, rongga dada, dan pori-pori kulit' },
      { id: 'C', text: 'Darah, keringat, air liur, dan cairan tubuh lainnya' },
      { id: 'D', text: 'Hembusan napas keluar masuk paru-paru' },
    ],
    correctAnswer: 'C',
    explanation:
      'Unsur Apah adalah zat cair. Pada Bhuana Agung berwujud laut dan sungai, sedangkan pada Bhuana Alit (tubuh manusia) berwujud darah, keringat, air liur, dan cairan tubuh.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Unsur Panca Maha Bhuta Pembentuk Bhuana Alit',
    elemen: 'Sraddha dan Bhakti',
    difficulty: 'Sedang',
    text: 'Saat berlari mengelilingi lapangan sekolah, tubuh Kadek terasa hangat, berkeringat, dan napasnya menjadi lebih cepat. Rasa hangat atau suhu panas pada tubuh manusia tersebut berasal dari unsur Panca Maha Bhuta yaitu ....',
    options: [
      { id: 'A', text: 'Pertiwi' },
      { id: 'B', text: 'Teja' },
      { id: 'C', text: 'Bayu' },
      { id: 'D', text: 'Akasa' },
    ],
    correctAnswer: 'B',
    explanation:
      'Teja adalah unsur cahaya, api, atau panas. Di dalam tubuh manusia (Bhuana Alit), Teja berupa suhu/panas tubuh, sinar mata, dan energi pembakaran sari makanan.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Unsur Panca Maha Bhuta Pembentuk Bhuana Alit',
    elemen: 'Sraddha dan Bhakti',
    difficulty: 'Sedang',
    text: 'Di alam semesta terdapat udara yang berhembus dan ruang angkasa yang luas. Pada tubuh manusia (Bhuana Alit), unsur Bayu dan Akasa masing-masing diwujudkan dalam bentuk ....',
    options: [
      { id: 'A', text: 'Tulang belulang dan darah segar' },
      { id: 'B', text: 'Napas yang mengalir dan rongga-rongga dalam tubuh' },
      { id: 'C', text: 'Suhu tubuh dan rambut di kepala' },
      { id: 'D', text: 'Kuku jari dan air mata' },
    ],
    correctAnswer: 'B',
    explanation:
      'Unsur Bayu (angin/udara) di dalam tubuh berupa napas/prana yang menghidupkan, sedangkan unsur Akasa (ruang/ether) berupa rongga mulut, rongga dada, dan pori-pori.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Unsur Tri Sarira dan Panca Tan Matra',
    elemen: 'Sraddha dan Bhakti',
    difficulty: 'Sukar',
    text: 'Selain Panca Maha Bhuta, tubuh manusia tersusun atas tiga lapisan badan yang disebut Tri Sarira, yaitu Sthula Sarira, Suksma Sarira, dan Antahkarana Sarira. Bagian tubuh yang berupa pikiran, perasaan, dan budi pekerti termasuk dalam lapisan ....',
    options: [
      { id: 'A', text: 'Sthula Sarira (badan kasar)' },
      { id: 'B', text: 'Suksma Sarira (badan halus)' },
      { id: 'C', text: 'Panca Pertiwi (unsur tanah)' },
      { id: 'D', text: 'Bhuana Agung (alam semesta)' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tri Sarira terdiri dari Sthula Sarira (badan fisik/kasar dari Panca Maha Bhuta), Suksma Sarira (badan halus berupa pikiran, budhi, ahamkara, indriya), dan Antahkarana Sarira (Atman).',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Unsur Panca Tan Matra',
    elemen: 'Sraddha dan Bhakti',
    difficulty: 'Sukar',
    text: 'Sebelum terbentuk menjadi lima zat padat hingga ruang dalam Panca Maha Bhuta, terdapat lima benih unsur halus pembentuk Bhuana Alit dan Bhuana Agung yang disebut Panca Tan Matra. Kelima unsur halus tersebut adalah ....',
    options: [
      { id: 'A', text: 'Sabda, Sparsa, Rupa, Rasa, dan Gandha' },
      { id: 'B', text: 'Pertiwi, Apah, Teja, Bayu, dan Akasa' },
      { id: 'C', text: 'Siksa, Wyakarana, Chanda, Nirukta, dan Kalpa' },
      { id: 'D', text: 'Brahmacari, Grhastha, Wanaprastha, Bhiksuka, dan Moksa' },
    ],
    correctAnswer: 'A',
    explanation:
      'Panca Tan Matra adalah lima benih zat halus pembentuk Panca Maha Bhuta, yaitu Sabda (suara -> Akasa), Sparsa (sentuhan -> Bayu), Rupa (warna/cahaya -> Teja), Rasa (kecapan -> Apah), dan Gandha (bau -> Pertiwi).',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Upaya Menyelaraskan Bhuana Alit dengan Bhuana Agung',
    elemen: 'Susila',
    difficulty: 'Mudah',
    imageUrl: selarasBhuanaImg,
    imageCaption: 'Siswa SD menanam pohon dan menyiram tanaman untuk menjaga keharmonisan alam',
    text: 'Perhatikan gambar di atas. Kegiatan menanam pohon dan merawat taman sekolah seperti yang dilakukan siswa pada gambar merupakan wujud nyata menyelaraskan Bhuana Alit dengan Bhuana Agung dalam ajaran Tri Hita Karana pada bagian ....',
    options: [
      { id: 'A', text: 'Parahyangan' },
      { id: 'B', text: 'Pawongan' },
      { id: 'C', text: 'Palemahan' },
      { id: 'D', text: 'Sannyasa' },
    ],
    correctAnswer: 'C',
    explanation:
      'Tri Hita Karana memiliki tiga hubungan harmonis: Parahyangan (dengan Tuhan), Pawongan (dengan sesama), dan Palemahan (dengan lingkungan alam/Bhuana Agung).',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Upaya Menyelaraskan Bhuana Alit dengan Bhuana Agung',
    elemen: 'Susila',
    difficulty: 'Sedang',
    text: 'Jika Bhuana Agung tercemar asap kendaraan dan sampah plastik di sungai, maka unsur Bayu dan Apah menjadi kotor sehingga Bhuana Alit (tubuh manusia) mudah terserang penyakit. Upaya paling tepat yang dapat dilakukan siswa untuk menjaga keselarasan kedua unsur tersebut adalah ....',
    options: [
      { id: 'A', text: 'Membuang sampah plastik ke selokan agar cepat terbawa arus air' },
      { id: 'B', text: 'Memilah sampah, tidak membuang limbah ke sungai, dan giat melakukan penghijauan' },
      { id: 'C', text: 'Membakar seluruh sampah plastik di tengah lapangan sekolah setiap pagi' },
      { id: 'D', text: 'Menggunakan air bersih secara berlebihan saat mencuci tangan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menjaga kebersihan air (Apah) dengan tidak membuang sampah ke sungai serta memperbanyak pohon agar udara (Bayu) tetap segar adalah wujud menyelaraskan Bhuana Alit dan Bhuana Agung.',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Upaya Menyelaraskan Bhuana Alit dengan Bhuana Agung',
    elemen: 'Acara',
    difficulty: 'Sedang',
    text: 'Selain merawat alam sekitar, umat Hindu di Bali melaksanakan upacara Tumpek Wariga (Tumpek Uduh) sebagai bentuk rasa terima kasih kepada tumbuh-tumbuhan. Makna upacara ini dalam menyelaraskan Bhuana Alit dan Bhuana Agung adalah ....',
    options: [
      { id: 'A', text: 'Menebang pohon besar di hutan tanpa menanam kembali' },
      { id: 'B', text: 'Mengungkapkan rasa syukur dan menjaga kelestarian alam sumber kehidupan manusia' },
      { id: 'C', text: 'Membiarkan tanaman di pekarangan layu tanpa disiram' },
      { id: 'D', text: 'Mengharuskan manusia berhenti makan buah-buahan selamanya' },
    ],
    correctAnswer: 'B',
    explanation:
      'Upacara Tumpek Wariga mengajarkan manusia menghormati dan melestarikan tumbuh-tumbuhan yang menyuplai oksigen (Bayu) dan makanan bagi Bhuana Alit.',
  },

  // --- LINGKUP 3: MEMAHAMI AJARAN CATUR ASRAMA (SOAL 21 - 30) ---
  {
    id: 21,
    type: 'pg',
    topic: 'Pengertian Catur Asrama',
    elemen: 'Susila',
    difficulty: 'Mudah',
    text: 'Ajaran Catur Asrama merupakan pedoman hidup umat Hindu yang mengatur tentang ....',
    options: [
      { id: 'A', text: 'Empat tingkatan tempat suci di desa adat' },
      { id: 'B', text: 'Empat tahapan atau jenjang kehidupan manusia berdasarkan Dharma dan kewajibannya' },
      { id: 'C', text: 'Empat kitab mantra pujian dalam Catur Weda Samhita' },
      { id: 'D', text: 'Empat cara memasak makanan suci untuk persembahan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Catur berarti empat, Asrama berarti tempat atau jenjang kehidupan. Catur Asrama adalah empat tahapan hidup manusia yang dilandasi Dharma: Brahmacari, Grhastha, Wanaprastha, dan Bhiksuka.',
  },
  {
    id: 22,
    type: 'pg',
    topic: 'Bagian-Bagian Catur Asrama',
    elemen: 'Susila',
    difficulty: 'Mudah',
    text: 'Urutan empat jenjang kehidupan dalam ajaran Catur Asrama dari masa kanak-kanak/pelajar hingga masa tua yang tepat adalah ....',
    options: [
      { id: 'A', text: 'Grhastha - Brahmacari - Wanaprastha - Bhiksuka' },
      { id: 'B', text: 'Brahmacari - Wanaprastha - Grhastha - Bhiksuka' },
      { id: 'C', text: 'Brahmacari - Grhastha - Wanaprastha - Bhiksuka' },
      { id: 'D', text: 'Bhiksuka - Wanaprastha - Grhastha - Brahmacari' },
    ],
    correctAnswer: 'C',
    explanation:
      'Tahapan Catur Asrama secara berurutan adalah: (1) Brahmacari (menuntut ilmu), (2) Grhastha (berumah tangga), (3) Wanaprastha (menyepi/mendalami spiritual), dan (4) Bhiksuka/Sannyasa (melepas ikatan duniawi).',
  },
  {
    id: 23,
    type: 'pg',
    topic: 'Bagian-Bagian Catur Asrama (Brahmacari)',
    elemen: 'Susila',
    difficulty: 'Mudah',
    imageUrl: brahmacariBelajarImg,
    imageCaption: 'Siswa kelas 6 belajar dengan tekun bersama guru di dalam kelas',
    text: 'Perhatikan gambar para siswa yang sedang tekun belajar di atas. Berdasarkan ajaran Catur Asrama, anak-anak usia sekolah dasar hingga perguruan tinggi berada pada jenjang ....',
    options: [
      { id: 'A', text: 'Brahmacari Asrama' },
      { id: 'B', text: 'Grhastha Asrama' },
      { id: 'C', text: 'Wanaprastha Asrama' },
      { id: 'D', text: 'Bhiksuka Asrama' },
    ],
    correctAnswer: 'A',
    explanation:
      'Brahmacari Asrama adalah masa menuntut ilmu pengetahuan, membina budi pekerti, dan berdisiplin di bawah bimbingan guru sebelum berumah tangga.',
  },
  {
    id: 24,
    type: 'pg',
    topic: 'Bagian-Bagian Catur Asrama (Pembagian Brahmacari)',
    elemen: 'Susila',
    difficulty: 'Sukar',
    text: 'Dalam ajaran Brahmacari Asrama dikenal istilah Sukla Brahmacari, Sewala Brahmacari, dan Krsna Brahmacari. Pengertian dari Sukla Brahmacari adalah ....',
    options: [
      { id: 'A', text: 'Seseorang yang menikah hanya satu kali seumur hidupnya' },
      { id: 'B', text: 'Seseorang yang tidak menikah seumur hidup demi pengabdian ilmu dan kesucian spiritual' },
      { id: 'C', text: 'Seseorang yang bekerja keras mengumpulkan harta untuk keluarga' },
      { id: 'D', text: 'Seseorang yang telah pensiun dan hidup mengasingkan diri ke hutan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sukla Brahmacari berarti tidak kawin seumur hidup demi kesucian dan pengabdian (contohnya Dewi Saraswati, Bhisma, atau Hanuman). Sewala Brahmacari adalah menikah sekali seumur hidup.',
  },
  {
    id: 25,
    type: 'pg',
    topic: 'Bagian-Bagian Catur Asrama (Grhastha)',
    elemen: 'Susila',
    difficulty: 'Sedang',
    text: 'Setelah menyelesaikan masa menuntut ilmu, seseorang memasuki masa Grhastha Asrama. Kewajiban utama seseorang pada tahap Grhastha Asrama adalah ....',
    options: [
      { id: 'A', text: 'Mengembara tanpa rumah dan tidak boleh memiliki pekerjaan' },
      { id: 'B', text: 'Membina keluarga harmonis, bekerja mencari nafkah secara halal, dan mendidik anak' },
      { id: 'C', text: 'Berhenti mempelajari kitab suci dan hanya bermain sepanjang hari' },
      { id: 'D', text: 'Menolak segala bentuk tanggung jawab sosial di lingkungan desa adat' },
    ],
    correctAnswer: 'B',
    explanation:
      'Grhastha Asrama adalah masa berumah tangga dengan kewajiban mencari nafkah berdasarkan Dharma (Artha), membina rumah tangga sejahtera, mendidik anak suputra, dan melaksanakan Panca Yadnya.',
  },
  {
    id: 26,
    type: 'pg',
    topic: 'Bagian-Bagian Catur Asrama (Wanaprastha)',
    elemen: 'Susila',
    difficulty: 'Sedang',
    text: 'Ketika anak-anak sudah dewasa dan mandiri, orang tua yang mulai menyerahkan urusan pekerjaan rumah tangga kepada anak-anaknya lalu lebih fokus bermeditasi dan mendalami kerohanian telah memasuki tahapan ....',
    options: [
      { id: 'A', text: 'Brahmacari Asrama' },
      { id: 'B', text: 'Grhastha Asrama' },
      { id: 'C', text: 'Wanaprastha Asrama' },
      { id: 'D', text: 'Sukla Brahmacari' },
    ],
    correctAnswer: 'C',
    explanation:
      'Wanaprastha Asrama adalah masa persiapan diri memasuki ketenangan batin, mengurangi keterikatan pada harta duniawi, dan memperdalam ajaran spiritual serta menjadi penasihat keluarga.',
  },
  {
    id: 27,
    type: 'pg',
    topic: 'Penerapan Catur Asrama dalam Kehidupan',
    elemen: 'Susila',
    difficulty: 'Sedang',
    imageUrl: grhasthaWanaprasthaImg,
    imageCaption: 'Suasana keluarga Hindu yang harmonis lintas generasi di lingkungan rumah',
    text: 'Perhatikan gambar keluarga di atas. Dalam gambar terlihat orang tua bekerja/membimbing anak, anak tekun belajar, serta kakek-nenek tekun membaca lontar suci. Peran kakek-nenek pada gambar tersebut mencerminkan masa ....',
    options: [
      { id: 'A', text: 'Brahmacari Asrama karena baru masuk sekolah dasar' },
      { id: 'B', text: 'Grhastha Asrama karena masih mencari nafkah utama di pasar' },
      { id: 'C', text: 'Wanaprastha Asrama karena mendalami ajaran suci dan memberi teladan bijak' },
      { id: 'D', text: 'Bhiksuka Asrama karena harus meninggalkan keluarganya ke negeri jauh' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kakek-nenek yang mengurangi kesibukan duniawi serta memperdalam pengetahuan kitab suci dan menjadi panutan bagi anak cucu mencerminkan kehidupan Wanaprastha Asrama.',
  },
  {
    id: 28,
    type: 'pg',
    topic: 'Bagian-Bagian Catur Asrama (Bhiksuka)',
    elemen: 'Sraddha dan Bhakti',
    difficulty: 'Sedang',
    text: 'Tahapan keempat atau puncak dalam Catur Asrama adalah Bhiksuka Asrama (sering disebut Sannyasa). Ciri utama kehidupan seseorang pada masa Bhiksuka Asrama adalah ....',
    options: [
      { id: 'A', text: 'Mengumpulkan kekayaan sebanyak-banyaknya untuk usaha dagang' },
      { id: 'B', text: 'Melepaskan ikatan keduniawian sepenuhnya untuk mengabdi kepada Hyang Widhi dan membimbing umat' },
      { id: 'C', text: 'Menghabiskan waktu dengan berpesta pora bersama teman sebaya' },
      { id: 'D', text: 'Memulai masa pendidikan dasar bersama guru di sekolah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bhiksuka atau Sannyasa adalah jenjang tertinggi tempat seseorang melepaskan ikatan duniawi (tidak terikat harta/tahta), hidup suci, serta mengabdi membimbing umat mencapai kedamaian.',
  },
  {
    id: 29,
    type: 'pg',
    topic: 'Penerapan Catur Asrama dalam Kehidupan',
    elemen: 'Susila',
    difficulty: 'Mudah',
    text: 'Sebagai siswa kelas 6 SD yang sedang menjalani masa Brahmacari Asrama, sikap yang paling tepat dilakukan di rumah dan di sekolah adalah ....',
    options: [
      { id: 'A', text: 'Menunda mengerjakan PR agar bisa bermain gim sepanjang malam' },
      { id: 'B', text: 'Rajin belajar, hormat kepada orang tua dan guru, serta disiplin melaksanakan Tri Sandhya' },
      { id: 'C', text: 'Menuntut orang tua membelikan barang mewah tanpa mau membantu pekerjaan rumah' },
      { id: 'D', text: 'Memilih-milih teman dan mengabaikan nasihat guru kelas' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kewajiban utama (Swadharma) pelajar pada masa Brahmacari adalah tekun menuntut ilmu, menghormati Catur Guru (terutama orang tua dan guru di sekolah), serta berdisiplin dalam beribadah.',
  },
  {
    id: 30,
    type: 'pg',
    topic: 'Penerapan Catur Asrama dalam Kehidupan',
    elemen: 'Susila',
    difficulty: 'Sukar',
    text: 'Ayah Komang bekerja tekun sebagai petani untuk membiayai sekolah Komang dan rajin bergotong royong di banjar. Sementara itu, Komang selalu membantu ayah menyiram tanaman seusai belajar. Keharmonisan tersebut terwujud karena ayah dan Komang ....',
    options: [
      { id: 'A', text: 'Sama-sama menuntut ilmu di jenjang Wanaprastha Asrama' },
      { id: 'B', text: 'Menjalankan Swadharma sesuai jenjang Grhastha dan Brahmacari Asrama dengan tulus' },
      { id: 'C', text: 'Mengabaikan tugas sekolah demi bekerja di kebun setiap hari' },
      { id: 'D', text: 'Melaksanakan kewajiban Bhiksuka tanpa memperhatikan keluarga' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ayah menjalankan kewajiban Grhastha (bekerja halal, memelihara keluarga, bermasyarakat), sedangkan Komang menjalankan kewajiban Brahmacari (belajar dan berbakti kepada orang tua).',
  },

  // =========================================================================
  // PILIHAN GANDA KOMPLEKS (PGK - 3 PILIHAN JAWABAN, >1 BENAR) (31 - 35)
  // =========================================================================
  {
    id: 31,
    type: 'pgk',
    topic: 'Catur Weda Samhita dan Penyusunnya',
    elemen: 'Kitab Suci Weda',
    difficulty: 'Sedang',
    imageUrl: kitabWedaImg,
    imageCaption: 'Naskah suci Catur Weda Samhita dan pustaka lontar Hindu',
    text: 'Perhatikan gambar di atas. Pilihlah DUA pernyataan yang BENAR mengenai bagian Catur Weda Samhita beserta Maha Rsi penyusunnya!',
    options: [
      { id: 'A', text: 'Regweda Samhita disusun oleh Maha Rsi Paila dan berisi mantra pujian' },
      { id: 'B', text: 'Samaweda Samhita disusun oleh Maha Rsi Jaimini dan berisi nyanyian suci' },
      { id: 'C', text: 'Yajurweda Samhita disusun oleh Maha Rsi Walmiki dan berisi kisah Ramayana' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Regweda disusun oleh Maha Rsi Paila dan Samaweda oleh Maha Rsi Jaimini. Sedangkan kisah Ramayana ditulis oleh Maha Rsi Walmiki sebagai kitab Itihasa (bagian Upaweda), bukan Yajurweda.',
  },
  {
    id: 32,
    type: 'pgk',
    topic: 'Penerapan Catur Weda dalam Kehidupan',
    elemen: 'Acara',
    difficulty: 'Sedang',
    text: 'Manakah di antara perilaku berikut yang merupakan penerapan ajaran Catur Weda dan Weda Smerti dalam kehidupan sehari-hari siswa SD? (Pilih lebih dari satu jawaban benar)',
    options: [
      { id: 'A', text: 'Melantunkan doa Puja Tri Sandhya dan lagu keagamaan Hindu dengan khidmat' },
      { id: 'B', text: 'Menghaturkan sarana canang sari dan menjaga kesehatan tubuh sesuai ajaran Ayurweda' },
      { id: 'C', text: 'Menghindari semua kegiatan belajar di sekolah karena bertentangan dengan Weda' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Berdoa/Tri Sandhya (Regweda), melantunkan kidung suci (Samaweda), ber-yadnya (Yajurweda), dan menjaga kesehatan (Atharwaweda/Ayurweda) adalah penerapan Weda. Sebaliknya, Weda mewajibkan pelajar rajin menuntut ilmu.',
  },
  {
    id: 33,
    type: 'pgk',
    topic: 'Unsur-Unsur Pembentuk Bhuana Alit',
    elemen: 'Sraddha dan Bhakti',
    difficulty: 'Sedang',
    text: 'Berdasarkan ajaran tentang Bhuana Alit, pilihlah DUA pernyataan yang BENAR mengenai unsur pembentuk tubuh manusia!',
    options: [
      { id: 'A', text: 'Tulang, daging, dan kulit pada tubuh manusia terbentuk dari unsur Pertiwi' },
      { id: 'B', text: 'Darah, keringat, dan air liur pada tubuh manusia terbentuk dari unsur Apah' },
      { id: 'C', text: 'Napas yang keluar masuk paru-paru terbentuk dari unsur batu dan tanah' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pertiwi membentuk zat padat (tulang, daging, kulit) dan Apah membentuk zat cair (darah, keringat, air liur). Napas terbentuk dari unsur Bayu (udara), bukan Pertiwi.',
  },
  {
    id: 34,
    type: 'pgk',
    topic: 'Upaya Menyelaraskan Bhuana Alit dengan Bhuana Agung',
    elemen: 'Susila',
    difficulty: 'Mudah',
    imageUrl: selarasBhuanaImg,
    imageCaption: 'Siswa bersama-sama merawat tanaman di halaman sekolah',
    text: 'Perhatikan gambar kegiatan siswa di atas. Pilihlah DUA sikap yang tepat sebagai upaya menyelaraskan Bhuana Alit dengan Bhuana Agung!',
    options: [
      { id: 'A', text: 'Menanam pohon, merawat taman, dan menjaga kebersihan air sungai dari sampah' },
      { id: 'B', text: 'Menjaga kesehatan tubuh dengan makanan bergizi, olahraga, dan pikiran yang tenang' },
      { id: 'C', text: 'Membuang limbah plastik ke selokan agar pekarangan rumah terlihat cepat bersih' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Menyelaraskan Bhuana Alit dengan Bhuana Agung dilakukan melalui pelestarian alam (Palemahan) serta menjaga kesucian dan kesehatan jasmani-rohani diri sendiri.',
  },
  {
    id: 35,
    type: 'pgk',
    topic: 'Bagian-Bagian dan Penerapan Catur Asrama',
    elemen: 'Susila',
    difficulty: 'Sedang',
    imageUrl: brahmacariBelajarImg,
    imageCaption: 'Pelajar Hindu bersemangat menuntut ilmu di sekolah (Brahmacari Asrama)',
    text: 'Perhatikan gambar siswa di kelas di atas. Pilihlah DUA pernyataan yang BENAR tentang ajaran Catur Asrama!',
    options: [
      { id: 'A', text: 'Siswa pada gambar sedang menjalani masa Brahmacari Asrama dengan kewajiban utama belajar' },
      { id: 'B', text: 'Orang tua yang bekerja mencari nafkah dan mendidik anak berada pada tahap Grhastha Asrama' },
      { id: 'C', text: 'Tahapan Bhiksuka Asrama mewajibkan seseorang mengejar kekayaan harta duniawi tanpa batas' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pelajar berada pada tahap Brahmacari Asrama dan orang tua yang berumah tangga berada pada tahap Grhastha Asrama. Tahap Bhiksuka justru melepaskan keterikatan pada harta duniawi.',
  },

  // =========================================================================
  // PILIHAN GANDA KOMPLEKS KATEGORI (BENAR / SALAH, 3 PERNYATAAN) (36 - 40)
  // =========================================================================
  {
    id: 36,
    type: 'pgk_kategori',
    topic: 'Weda Smerti dan Catur Weda Samhita',
    elemen: 'Kitab Suci Weda',
    difficulty: 'Sedang',
    imageUrl: maharsiImg,
    imageCaption: 'Ilustrasi Maha Rsi yang menulis dan mengajarkan kitab suci Weda',
    text: 'Perhatikan gambar ilustrasi Maha Rsi penyusun kitab suci di atas. Tentukan kebenaran setiap pernyataan mengenai Weda Smerti dan Catur Weda Samhita berikut ini!',
    statements: [
      {
        id: 's1',
        text: 'Kata "Smerti" berarti ingatan suci yang ditulis para Maha Rsi sebagai penjelas ajaran Weda Sruti.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Maha Rsi Wyasa menghimpun Catur Weda Samhita dibantu empat muridnya: Paila, Jaimini, Waisampayana, dan Sumantu.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Atharwaweda Samhita adalah kitab yang khusus berisi tata cara perang dan tidak membahas kesehatan sama sekali.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 dan 2 Benar. Pernyataan 3 Salah karena Atharwaweda Samhita (oleh Maha Rsi Sumantu) berisi mantra kesehatan, pengobatan, keselamatan, dan ketenteraman hidup.',
  },
  {
    id: 37,
    type: 'pgk_kategori',
    topic: 'Penerapan Catur Weda dalam Kehidupan',
    elemen: 'Acara',
    difficulty: 'Sedang',
    imageUrl: yadnyaSembahyangImg,
    imageCaption: 'Siswa melaksanakan persembahyangan di pura dengan tertib',
    text: 'Perhatikan gambar siswa bersembahyang di atas. Tentukan apakah pernyataan berikut Benar atau Salah terkait penerapan ajaran Catur Weda dalam kehidupan sehari-hari!',
    statements: [
      {
        id: 's1',
        text: 'Mengucapkan Puja Tri Sandhya dengan penuh bhakti mencerminkan semangat mantra pujian dalam Regweda.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Menyanyikan kidung suci Dharmagita saat upacara keagamaan merupakan bentuk pengamalan nilai Samaweda.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Ajaran Yajurweda melarang umat Hindu mempersembahkan canang sari atau melaksanakan upacara yadnya.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 dan 2 Benar. Pernyataan 3 Salah karena Yajurweda justru menjadi pedoman doa-doa pelaksanaan upacara yadnya.',
  },
  {
    id: 38,
    type: 'pgk_kategori',
    topic: 'Unsur-Unsur Pembentuk Bhuana Alit',
    elemen: 'Sraddha dan Bhakti',
    difficulty: 'Mudah',
    imageUrl: bhuanaAgungImg,
    imageCaption: 'Pemandangan alam semesta sebagai wujud Bhuana Agung (Panca Maha Bhuta)',
    text: 'Perhatikan gambar Bhuana Agung di atas. Baik alam semesta maupun tubuh manusia (Bhuana Alit) tersusun oleh Panca Maha Bhuta. Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Bhuana Alit berarti alam kecil (tubuh manusia), sedangkan Bhuana Agung berarti alam besar (alam semesta).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Suhu hangat di dalam tubuh manusia dan cahaya mata merupakan perwujudan dari unsur Teja.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Unsur Akasa di dalam tubuh manusia berwujud sebagai darah, keringat, dan air liur.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 dan 2 Benar. Pernyataan 3 Salah karena darah, keringat, dan air liur merupakan perwujudan unsur Apah (zat cair), sedangkan Akasa berupa rongga-rongga dalam tubuh.',
  },
  {
    id: 39,
    type: 'pgk_kategori',
    topic: 'Upaya Menyelaraskan Bhuana Alit dengan Bhuana Agung',
    elemen: 'Susila',
    difficulty: 'Sukar',
    text: 'Menjaga keseimbangan antara diri sendiri (Bhuana Alit) dan alam semesta (Bhuana Agung) sangat penting agar tercipta kehidupan yang damai dan sehat. Tentukan Benar atau Salah setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Menjaga kebersihan lingkungan dengan tidak membuang sampah ke sungai membantu memelihara kesucian unsur Apah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Melatih pernapasan (pranayama), rajin berolahraga, dan berpikir positif menyehatkan Sthula Sarira dan Suksma Sarira.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Menebang hutan secara liar tanpa menanam kembali merupakan cara menyelaraskan Bhuana Alit dengan Bhuana Agung.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 dan 2 Benar. Pernyataan 3 Salah karena penebangan hutan secara liar merusak keseimbangan unsur Pertiwi dan Bayu pada Bhuana Agung yang berdampak buruk pada manusia.',
  },
  {
    id: 40,
    type: 'pgk_kategori',
    topic: 'Ajaran Catur Asrama dalam Kehidupan',
    elemen: 'Susila',
    difficulty: 'Sedang',
    imageUrl: grhasthaWanaprasthaImg,
    imageCaption: 'Kehidupan harmonis lintas generasi dalam keluarga Hindu',
    text: 'Perhatikan gambar keharmonisan keluarga di atas. Tentukan apakah pernyataan mengenai ajaran Catur Asrama dalam kehidupan sehari-hari berikut Benar atau Salah!',
    statements: [
      {
        id: 's1',
        text: 'Catur Asrama adalah empat tahapan kehidupan manusia yang terdiri atas Brahmacari, Grhastha, Wanaprastha, dan Bhiksuka.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pelajar SD kelas 6 berada pada masa Brahmacari Asrama sehingga kewajiban utamanya adalah belajar dan patuh kepada guru.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Pada masa Grhastha Asrama, seseorang dilarang bekerja dan harus meninggalkan rumah keluarganya ke hutan.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 dan 2 Benar. Pernyataan 3 Salah karena pada masa Grhastha Asrama seseorang justru wajib berumah tangga, bekerja mencari nafkah secara halal (Artha), serta mengasuh dan mendidik anak.',
  },
];
