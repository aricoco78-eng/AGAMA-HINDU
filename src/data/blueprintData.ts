import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas 6) Mata Pelajaran Pendidikan Agama Hindu dan Budi Pekerti
 * Lingkup Materi:
 * 1. Memahami Weda Smerti (Catur Weda Samhita & Penyusunnya, Penerapan Catur Weda dalam Kehidupan Sehari-hari)
 * 2. Unsur-Unsur Pembentuk Bhuana Alit & Upaya Menyelaraskan Bhuana Alit dengan Bhuana Agung
 * 3. Memahami Ajaran Catur Asrama (Bagian-Bagian & Penerapan dalam Kehidupan Sehari-hari)
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 40 butir soal Agama Hindu (30 PG, 5 PGK, 5 PGK Kategori)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Kitab Suci Weda',
    tujuanPembelajaran:
      'Peserta didik memahami pengertian dan makna kata Weda Smerti sebagai kitab suci Agama Hindu.',
    indikatorSoal:
      'Disajikan gambar naskah suci Weda dan lontar, peserta didik dapat menentukan arti kata Smerti sebagai ingatan/tradisi suci yang ditulis para Maha Rsi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Kitab Suci Weda',
    tujuanPembelajaran:
      'Peserta didik menjelaskan kedudukan Weda Smerti terhadap Weda Sruti dalam ajaran Agama Hindu.',
    indikatorSoal:
      'Peserta didik dapat menentukan hubungan kedudukan Weda Smerti sebagai penjelas dan penafsir Weda Sruti secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Kitab Suci Weda',
    tujuanPembelajaran:
      'Peserta didik mengenal tokoh Maha Rsi penghimpun Catur Weda Samhita.',
    indikatorSoal:
      'Disajikan gambar ilustrasi Maha Rsi yang menuliskan ajaran suci, peserta didik dapat menentukan Maha Rsi Wyasa sebagai penghimpun Catur Weda Samhita.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Kitab Suci Weda',
    tujuanPembelajaran:
      'Peserta didik memahami bagian Regweda Samhita beserta penyusun dan isi pokoknya.',
    indikatorSoal:
      'Disajikan nama Maha Rsi Paila sebagai penyusun Regweda Samhita, peserta didik dapat menentukan isi pokok Regweda berupa kumpulan mantra pujian kepada Sang Hyang Widhi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Kitab Suci Weda',
    tujuanPembelajaran:
      'Peserta didik memasangkan bagian Catur Weda Samhita dengan Maha Rsi penyusunnya secara tepat.',
    indikatorSoal:
      'Peserta didik dapat memilih pasangan yang benar antara kitab Samaweda Samhita dan Maha Rsi Jaimini sebagai penyusunnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Kitab Suci Weda',
    tujuanPembelajaran:
      'Peserta didik menjelaskan isi dan fungsi kitab Yajurweda Samhita yang disusun Maha Rsi Waisampayana.',
    indikatorSoal:
      'Disajikan konteks pemimpin upacara yadnya, peserta didik dapat menentukan isi Yajurweda Samhita berupa mantra doa pengantar pelaksanaan yadnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Kitab Suci Weda',
    tujuanPembelajaran:
      'Peserta didik memahami kitab Atharwaweda Samhita yang disusun oleh Maha Rsi Sumantu.',
    indikatorSoal:
      'Disajikan gambar tanaman obat herbal, peserta didik dapat menentukan Atharwaweda Samhita sebagai kitab mantra pengobatan dan keselamatan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Kitab Suci Weda',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi dua kelompok besar pembagian kitab Weda Smerti.',
    indikatorSoal:
      'Peserta didik dapat menentukan dua kelompok utama Weda Smerti yaitu Wedangga dan Upaweda.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Acara',
    tujuanPembelajaran:
      'Peserta didik menerapkan ajaran Catur Weda dalam pelaksanaan persembahyangan dan yadnya sehari-hari.',
    indikatorSoal:
      'Disajikan gambar siswa bersembahyang dengan canang sari di pura, peserta didik dapat mengaitkannya dengan pengamalan Regweda dan Yajurweda.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Sraddha dan Bhakti',
    tujuanPembelajaran:
      'Peserta didik menganalisis penerapan nilai Samaweda dan Atharwaweda dalam kegiatan sehari-hari.',
    indikatorSoal:
      'Disajikan studi kasus siswa melantunkan Dharmagita dan merawat tanaman obat keluarga, peserta didik dapat menentukan penerapan nilai Samaweda dan Atharwaweda (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Sraddha dan Bhakti',
    tujuanPembelajaran:
      'Peserta didik memahami pengertian Bhuana Alit (mikrokosmos) dan Bhuana Agung (makrokosmos).',
    indikatorSoal:
      'Peserta didik dapat menentukan sebutan bagi tubuh manusia dan makhluk hidup sebagai alam kecil yaitu Bhuana Alit.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Sraddha dan Bhakti',
    tujuanPembelajaran:
      'Peserta didik mengenal lima unsur zat utama pembentuk Bhuana Alit dan Bhuana Agung.',
    indikatorSoal:
      'Disajikan gambar alam semesta, peserta didik dapat menentukan Panca Maha Bhuta sebagai lima unsur pembentuk Bhuana Agung dan Bhuana Alit.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Sraddha dan Bhakti',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi perwujudan unsur Pertiwi dan Apah di dalam tubuh manusia (Bhuana Alit).',
    indikatorSoal:
      'Peserta didik dapat menentukan wujud unsur Apah (zat cair) dalam tubuh manusia berupa darah, keringat, dan air liur.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Sraddha dan Bhakti',
    tujuanPembelajaran:
      'Peserta didik menghubungkan fenomena panas tubuh dengan unsur Teja dalam Panca Maha Bhuta.',
    indikatorSoal:
      'Disajikan ilustrasi tubuh terasa hangat setelah berolahraga, peserta didik dapat menentukan unsur Teja sebagai sumber suhu tubuh.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Sraddha dan Bhakti',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi perwujudan unsur Bayu dan Akasa dalam Bhuana Alit.',
    indikatorSoal:
      'Peserta didik dapat menentukan wujud unsur Bayu (napas/prana) dan Akasa (rongga-rongga tubuh) pada diri manusia.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Sraddha dan Bhakti',
    tujuanPembelajaran:
      'Peserta didik menganalisis tiga lapisan badan pembentuk Bhuana Alit (Tri Sarira).',
    indikatorSoal:
      'Peserta didik dapat mengklasifikasikan pikiran, perasaan, dan budhi pekerti sebagai lapisan Suksma Sarira (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Sraddha dan Bhakti',
    tujuanPembelajaran:
      'Peserta didik memahami Panca Tan Matra sebagai lima benih unsur halus pembentuk Panca Maha Bhuta.',
    indikatorSoal:
      'Peserta didik dapat menentukan kelima bagian Panca Tan Matra yaitu Sabda, Sparsa, Rupa, Rasa, dan Gandha.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Susila',
    tujuanPembelajaran:
      'Peserta didik memahami upaya menyelaraskan Bhuana Alit dengan Bhuana Agung melalui Tri Hita Karana.',
    indikatorSoal:
      'Disajikan gambar siswa menanam pohon dan merawat taman sekolah, peserta didik dapat menentukan penerapan bagian Palemahan dalam Tri Hita Karana.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Susila',
    tujuanPembelajaran:
      'Peserta didik menerapkan cara menjaga kebersihan unsur Apah dan Bayu demi keselarasan Bhuana Alit dan Bhuana Agung.',
    indikatorSoal:
      'Disajikan permasalahan pencemaran udara dan air, peserta didik dapat menentukan tindakan nyata memilah sampah, menjaga sungai, dan melakukan penghijauan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Acara',
    tujuanPembelajaran:
      'Peserta didik menjelaskan makna pelaksanaan upacara Tumpek Wariga dalam menyelaraskan manusia dengan alam.',
    indikatorSoal:
      'Peserta didik dapat menentukan makna upacara Tumpek Wariga sebagai ungkapan syukur dan pelestarian tumbuh-tumbuhan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Susila',
    tujuanPembelajaran:
      'Peserta didik memahami pengertian ajaran Catur Asrama dalam Agama Hindu.',
    indikatorSoal:
      'Peserta didik dapat menentukan arti Catur Asrama sebagai empat tahapan atau jenjang kehidupan manusia berdasarkan Dharma.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Susila',
    tujuanPembelajaran:
      'Peserta didik mengurutkan empat bagian ajaran Catur Asrama secara tepat.',
    indikatorSoal:
      'Peserta didik dapat menentukan urutan jenjang Catur Asrama yaitu Brahmacari, Grhastha, Wanaprastha, dan Bhiksuka.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Susila',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi jenjang Brahmacari Asrama sebagai masa menuntut ilmu.',
    indikatorSoal:
      'Disajikan gambar siswa kelas 6 tekun belajar bersama guru di kelas, peserta didik dapat menentukan tahapan Brahmacari Asrama.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Susila',
    tujuanPembelajaran:
      'Peserta didik membedakan pembagian kelompok dalam Brahmacari Asrama (Sukla, Sewala, Krsna).',
    indikatorSoal:
      'Peserta didik dapat menganalisis pengertian Sukla Brahmacari sebagai keputusan tidak menikah seumur hidup demi pengabdian ilmu dan spiritual.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Susila',
    tujuanPembelajaran:
      'Peserta didik memahami kewajiban utama pada tahapan Grhastha Asrama.',
    indikatorSoal:
      'Peserta didik dapat menentukan kewajiban tahap Grhastha yaitu membina keluarga harmonis, bekerja halal, dan mendidik anak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Susila',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi ciri kehidupan pada masa Wanaprastha Asrama.',
    indikatorSoal:
      'Disajikan ilustrasi orang tua menyerahkan urusan duniawi dan tekun mendalami spiritual, peserta didik dapat menentukan tahapan Wanaprastha Asrama.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Susila',
    tujuanPembelajaran:
      'Peserta didik mengaitkan peran anggota keluarga lintas generasi dengan tahapan Catur Asrama.',
    indikatorSoal:
      'Disajikan gambar keluarga harmonis lintas generasi, peserta didik dapat menentukan peran kakek-nenek membaca lontar suci sebagai cerminan Wanaprastha Asrama.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Sraddha dan Bhakti',
    tujuanPembelajaran:
      'Peserta didik memahami hakikat Bhiksuka Asrama (Sannyasa) sebagai puncak Catur Asrama.',
    indikatorSoal:
      'Peserta didik dapat menentukan ciri utama Bhiksuka Asrama yaitu melepaskan ikatan keduniawian sepenuhnya untuk mengabdi kepada Tuhan dan membimbing umat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Susila',
    tujuanPembelajaran:
      'Peserta didik menerapkan kewajiban Brahmacari Asrama dalam kehidupan pelajar sehari-hari.',
    indikatorSoal:
      'Peserta didik dapat menentukan sikap tepat siswa kelas 6 dalam menjalani Brahmacari seperti rajin belajar, hormat kepada guru/orang tua, dan disiplin Tri Sandhya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Susila',
    tujuanPembelajaran:
      'Peserta didik menganalisis keharmonisan keluarga berdasarkan penerapan Swadharma dalam Catur Asrama.',
    indikatorSoal:
      'Disajikan studi kasus ayah bekerja sebagai petani dan anak tekun belajar serta membantu orang tua, peserta didik dapat menyimpulkan keterpaduan Grhastha dan Brahmacari Asrama (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  31: {
    elemen: 'Kitab Suci Weda',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi bagian Catur Weda Samhita beserta Maha Rsi penyusunnya.',
    indikatorSoal:
      'Disajikan gambar naskah suci dan 3 pilihan pernyataan, peserta didik dapat memilih seluruh pernyataan yang benar tentang Regweda dan Samaweda beserta penyusunnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  32: {
    elemen: 'Acara',
    tujuanPembelajaran:
      'Peserta didik memilih wujud penerapan ajaran Catur Weda dan Weda Smerti dalam kehidupan pelajar.',
    indikatorSoal:
      'Disajikan 3 pilihan perilaku sehari-hari, peserta didik dapat memilih seluruh perilaku yang sesuai dengan ajaran Catur Weda dan Ayurweda.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  33: {
    elemen: 'Sraddha dan Bhakti',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi unsur Panca Maha Bhuta yang membentuk bagian tubuh manusia.',
    indikatorSoal:
      'Disajikan 3 pernyataan tentang wujud unsur Pertiwi, Apah, dan Bayu dalam Bhuana Alit, peserta didik dapat memilih seluruh pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  34: {
    elemen: 'Susila',
    tujuanPembelajaran:
      'Peserta didik menentukan sikap tepat dalam menyelaraskan Bhuana Alit dengan Bhuana Agung.',
    indikatorSoal:
      'Disajikan gambar siswa merawat tanaman dan 3 pilihan sikap, peserta didik dapat memilih seluruh upaya pelestarian alam serta kesehatan jasmani-rohani.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  35: {
    elemen: 'Susila',
    tujuanPembelajaran:
      'Peserta didik membedakan peran dan kewajiban setiap jenjang dalam ajaran Catur Asrama.',
    indikatorSoal:
      'Disajikan gambar pelajar di kelas dan 3 pilihan pernyataan, peserta didik dapat memilih seluruh pernyataan yang benar tentang Brahmacari dan Grhastha.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  36: {
    elemen: 'Kitab Suci Weda',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi konsep Weda Smerti, Catur Weda Samhita, serta Maha Rsi penyusunnya.',
    indikatorSoal:
      'Disajikan gambar Maha Rsi penyusun kitab suci dan 3 pernyataan, peserta didik dapat menentukan nilai Benar atau Salah pada tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  37: {
    elemen: 'Acara',
    tujuanPembelajaran:
      'Peserta didik menilai penerapan ajaran Regweda, Samaweda, dan Yajurweda dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan gambar siswa bersembahyang di pura dan 3 pernyataan, peserta didik dapat menentukan nilai Benar atau Salah pada tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  38: {
    elemen: 'Sraddha dan Bhakti',
    tujuanPembelajaran:
      'Peserta didik membedakan konsep Bhuana Alit, Bhuana Agung, serta unsur Teja dan Akasa.',
    indikatorSoal:
      'Disajikan gambar alam semesta dan 3 pernyataan mengenai Panca Maha Bhuta dalam tubuh manusia, peserta didik dapat menentukan nilai Benar atau Salah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  39: {
    elemen: 'Susila',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi tindakan manusia dalam menyelaraskan Bhuana Alit dengan Bhuana Agung.',
    indikatorSoal:
      'Disajikan konteks pelestarian alam dan kesehatan Tri Sarira beserta 3 pernyataan, peserta didik dapat menentukan nilai Benar atau Salah (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  40: {
    elemen: 'Susila',
    tujuanPembelajaran:
      'Peserta didik menilai penerapan ajaran Catur Asrama dalam kehidupan keluarga dan sekolah.',
    indikatorSoal:
      'Disajikan gambar keluarga harmonis lintas generasi dan 3 pernyataan tentang Catur Asrama, peserta didik dapat menentukan nilai Benar atau Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan ajaran Agama Hindu pada topik ${q.topic}.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('yadnya') || t.includes('tumpek') || t.includes('sembahyang')) {
    return 'Acara';
  }
  if (t.includes('bhuana') || t.includes('maha bhuta') || t.includes('bhakti') || t.includes('bhiksuka') || t.includes('tri sarira') || t.includes('tan matra')) {
    return 'Sraddha dan Bhakti';
  }
  if (t.includes('asrama') || t.includes('selaras') || t.includes('dharma') || t.includes('susila')) {
    return 'Susila';
  }
  return 'Kitab Suci Weda';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
