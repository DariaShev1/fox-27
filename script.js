/* =========================================================================
   ВСЕ ТЕКСТЫ САЙТА — ЗДЕСЬ
   Меняй только значения в кавычках. Кавычки, запятые и скобки не трогай.
   Если в тексте нужен апостроф или кавычки — используй «ёлочки».
   Метки в квадратных скобках [ВОТ ТАКИЕ] — места, которые точно нужно заменить.
   ========================================================================= */
const CONTENT = {
  // --- Общее -----------------------------------------------------------------
  name: 'Антон',
  nickname: 'Хитрый Рыжий Лис',
  age: 27,                          // сколько свечей на торте
  birthday: '29.09.2026',           // дата в финале
  friendsSince: '2021-10-01',       // когда познакомились (ГГГГ-ММ-ДД) — для счётчика дней дружбы
  friendsSinceText: 'с октября 2021-го, когда мы оказались в одной команде',
  signature: '— Твоя подруга, [ТВОЁ ИМЯ]', // подпись под главным письмом

  // --- 1. Экран-вход -----------------------------------------------------------
  intro: {
    kicker: 'Журнал заданий · том XXVII',
    hint: 'Прикоснись к медальону',
  },

  // --- 2. Торт -----------------------------------------------------------------
  cake: {
    lead: '27 свечей — по одной за каждый год. Задуй все до одной, и желание засчитается.',
    hintClick: 'Нажимай на огоньки по одному',
    micButton: 'Дунуть по-настоящему',
    micListening: 'Слушаю… дуй! (нажми, чтобы выключить)',
    wish: 'С днём рождения, Хитрый Рыжий Лис',
    afterWish: 'Желание загадано. Дальше — карта твоих земель.',
  },

  // --- 3. Карта ----------------------------------------------------------------
  map: {
    title: 'Земли Хитрого Лиса',
    lead: 'Пять локаций, в каждой что-то спрятано. Нажми на точку — карта сама отнесёт.',
  },

  // --- 4. Павлодар -------------------------------------------------------------
  pavlodar: {
    lead: 'Родной город, лучшая набережная Иртыша и, по мнению одного человека, центр мира.',
    // Каждая строка массива — отдельный абзац
    text: [
      'Я знаю Павлодар лучше многих его жителей, хотя сама там почти не бывала. Всё благодаря Антону: набережная на закате, набережная на рассвете, набережная зимой, снова набережная — но теперь с другого ракурса.',
      '[ПОДПИСЬ ПРО ПАВЛОДАР] Например: как ты впервые услышала от него про Павлодар, куда он обещал тебя сводить и что ты там уже видела (хотя бы в рилсах).',
    ],
    reelsJoke: 'Рилсов про Павлодар, присланных мне за сегодня:',
    reelsNote: '…и это только до обеда. Счётчик честный, проверь.',
    // Фото: положи файлы в папку images/ и впиши пути сюда.
    // Если файла нет — вместо фото будет аккуратная рамка-заглушка.
    photos: [
      { src: 'images/pavlodar-1.jpg', caption: 'Та самая набережная — фото из его сорок седьмого рилса' },
      { src: 'images/pavlodar-2.jpg', caption: '[ПОДПИСЬ К ФОТО] Например: «Мы в Павлодаре, лето 2024-го»' },
    ],
  },

  // --- 4½. Лисёнок (детские фото) ----------------------------------------------
  childhood: {
    lead: 'Каждый великий герой начинал с первого уровня. Архивные кадры из тех времён, когда STM32 ещё даже не придумали.',
    // Детские фото: положи в images/ и впиши пути. Лучше чётное количество — они стоят по два в ряд.
    photos: [
      { src: 'images/child-1.jpg', caption: '[ПОДПИСЬ] Например: «1999. Первый уровень»' },
      { src: 'images/child-2.jpg', caption: '[ПОДПИСЬ] Например: «Уже тогда с мячом»' },
      { src: 'images/child-3.jpg', caption: '[ПОДПИСЬ] Например: «Первое сентября»' },
      { src: 'images/child-4.jpg', caption: '[ПОДПИСЬ] Например: «Павлодар, лето, Иртыш»' },
    ],
    text: [
      '[ПОДПИСЬ ПРО ДЕТСТВО] Например: что ты знаешь о его детстве — где рос, во что играл, каким был в школе.',
    ],
  },

  // --- 5. Поле -----------------------------------------------------------------
  field: {
    lead: 'Пять ударов, один вратарь, никаких VAR. Выбирай угол и бей.',
    scarfMadrid: '¡HALA MADRID!',
    scarfIrtysh: 'ИРТЫШ · ПАВЛОДАР',
    // Цвета шарфа «Иртыша»: [основной, полосы и надпись]. Поправь, если хочешь другие.
    irtyshColors: ['#1f4fb8', '#f6f1e4'],
    text: [
      'Антон не только болеет, но и выходит на поле сам. В будни — «Реал» и еврокубки, по выходным — свой матч, а в сердце всегда место для павлодарского «Иртыша».',
      '[ПОДПИСЬ ПРО ЕГО ФУТБОЛ] Например: на каком он играет месте, какой гол ты запомнила, как он разбирает матчи «Реала» лучше комментаторов.',
    ],
    // Итог серии: ключ — сколько голов забито
    results: {
      0: 'Вратарь сегодня в ударе. Реванш?',
      1: 'Гол престижа есть. Ещё серия?',
      2: 'Борьба до конца. Попробуй ещё!',
      3: 'Победа по пенальти! Трибуны довольны.',
      4: 'Почти идеально — стадион аплодирует стоя.',
      5: 'Пять из пяти! Мадрид и Павлодар гордятся.',
    },
  },

  // --- 6. Мастерская -----------------------------------------------------------
  workshop: {
    lead: 'Здесь пахнет канифолью, а осциллограф видел больше, чем мы все вместе.',
    ledHint: 'Нажми на светодиод LD2.',
    led27: '27 вспышек в минуту — по одной за каждый год.',
    text: [
      'Днём Антон пишет прошивки для STM32, а потом объясняет студентам, почему регистры — это не страшно, а прерывания — не повод паниковать. Объяснять сложное просто умеют немногие.',
      'А ещё он работает в команде, которая делает источник для ускорителя частиц. Когда меня спрашивают, чем занимаются мои друзья, отвечаю: один из них ускоряет частицы. Звучит как фэнтези, но это правда.',
      '[ПОДПИСЬ ПРО РАБОТУ] Например: как вы познакомились на работе в октябре 2021-го и что ты тогда о нём подумала.',
    ],
    // Код прошивки. Поздравление спрятано в комментариях.
    firmware: `/**
 * main.c — прошивка «Anton», версия 27.0
 * Target: STM32F4, но по сути — хороший человек.
 */
#include "main.h"

#define AGE          27U          /* лет в продакшене без критических багов */
#define FRIENDSHIP   UINT32_MAX   /* переполнения не ожидается */
#define BLINKS_PM    AGE          /* мигаем по разу за каждый год */

static volatile uint32_t happiness = 0;

int main(void)
{
  HAL_Init();
  SystemClock_Config();     /* разгоняем праздник до максимума */
  MX_GPIO_Init();

  /* С днём рождения, Антон!
   * Пусть прерывания будут
   * только приятными, стек
   * не переполняется, а watchdog
   * никогда не понадобится. */

  while (1)
  {
    HAL_GPIO_TogglePin(LED_GPIO_Port, LED_Pin);
    HAL_Delay(60000U / BLINKS_PM / 2U);  /* ровно 27 вспышек в минуту */
    happiness++;                         // работает без остановки
  }
}`,
  },

  // --- 7. Миры -----------------------------------------------------------------
  worlds: {
    lead: 'Средиземье, Континент и Вестерос — он был везде. Вытяни книгу с полки.',
    // series: 'lotr' | 'witcher' | 'got' — задаёт оформление корешка
    books: [
      { series: 'lotr', title: 'Братство Кольца', vol: 'I',
        note: 'Наше братство собралось в октябре 2021-го: без эльфов и гномов, зато с дедлайнами. Спасибо, что тогда пошёл в этот поход.' },
      { series: 'lotr', title: 'Две крепости', vol: 'II',
        note: 'Две твои крепости — работа и футбол. Обе держишь уверенно. [ДОПИШИ СВОЁ]' },
      { series: 'lotr', title: 'Возвращение короля', vol: 'III',
        note: 'Каждая твоя поездка в Павлодар — маленькое возвращение короля. Правда, без орлов, но с рилсами.' },
      { series: 'witcher', title: 'Ведьмак', vol: '1–8',
        note: 'Все книги прочитаны, игра пройдена сто раз. Геральт бы одобрил: ты тоже берёшься за контракты, от которых другие отказываются, — только вместо утопцев у тебя баги в прерываниях.' },
      { series: 'got', title: 'Игра престолов', vol: 'I',
        note: 'Наконец-то дочитал! Зима близко, но у тебя день рождения — так что пока тепло. [ДОПИШИ СВОЁ]' },
    ],
    diablo: {
      title: 'Пройти Diablo 4',
      status: 'в процессе',
      progress: 60, // процент на полоске
      objectives: [
        { text: 'Создать персонажа и полчаса выбирать ему бороду', done: true },
        { text: 'Пережить первый акт', done: true },
        { text: 'Добраться до финального босса', done: false },
        { text: 'Не уснуть на работе после ночного рейда', done: false },
      ],
      reward: 'Награда: легендарный предмет «Выходной без будильника».',
    },
  },

  // --- 7½. Инвентарь: кола (карточка предмета в разделе «Миры») ------------------
  cola: {
    kicker: 'Инвентарь · предмет',
    name: 'Эликсир шипучей бодрости',
    rarity: 'Легендарное зелье · всегда холодное',
    stats: [
      '+27 к настроению',
      '+15% к скорости отладки прошивок',
      'Мгновенно восстанавливает силы после матча',
      'Лёд: обязателен',
    ],
    flavor: 'Антон может отказаться от многого, но только не от холодной кока-колы. [ДОПИШИ СВОЁ]',
    drink: 'Выпить',
    refill: 'Достать ещё одну',
    // Что пишется после каждого глотка (их четыре, последний опустошает бутылку)
    sips: [
      'Пш-ш-ш! +27 к настроению.',
      'Ледяная. Как надо.',
      'Ещё глоток — и можно в рейд.',
      'Бутылка пуста. Хорошо, что в инвентаре всегда есть ещё одна.',
    ],
    refilled: 'Новая бутылка из инвентаря. Холодная.',
  },

  // --- 8. Журнал заданий (пожелания) --------------------------------------------
  questLog: {
    lead: 'Задания на двадцать восьмой год. Принимать можно в любом порядке.',
    // status: 'active' — «Активно», 'new' — «Новое задание», 'legendary' — «Легендарное»
    items: [
      { status: 'active', title: 'Здоровье героя', text: '[ПОЖЕЛАНИЕ 1] Например: чтобы здоровье было как у паладина на полном хилле, а колени пережили ещё сотню матчей.' },
      { status: 'active', title: 'Мастерская', text: '[ПОЖЕЛАНИЕ 2] Например: чтобы прошивки собирались с первого раза, а ускоритель заработал ровно тогда, когда нужно.' },
      { status: 'new', title: 'Новые земли', text: '[ПОЖЕЛАНИЕ 3] Например: побывать там, где ещё не был, и прислать мне рилсы уже не только про Павлодар.' },
      { status: 'new', title: 'Трибуна', text: '[ПОЖЕЛАНИЕ 4] Например: увидеть «Реал» вживую, а «Иртыш» — в еврокубках.' },
      { status: 'legendary', title: 'Свои люди', text: '[ПОЖЕЛАНИЕ 5] Например: чтобы рядом всегда были люди, с которыми не нужно притворяться.' },
      { status: 'legendary', title: 'Главный квест', text: '[ПОЖЕЛАНИЕ 6] Самое важное пожелание — оставь на конец.' },
    ],
  },

  // --- 9. Дорога (музыка) -------------------------------------------------------
  music: {
    title: '[НАЗВАНИЕ ТРЕКА]',          // например: «Исполнитель — Название»
    src: 'audio/track.mp3',              // путь к файлу
    lead: 'Для ночной трассы, для долгой дороги домой и просто для хорошего вечера.',
    text: [
      'Любимый голос Антона — Крис Ри, а где-то рядом в плейлисте всегда Стинг. Музыка, под которую хорошо ехать: пустое шоссе, фары, спешить некуда.',
      '[ПОДПИСЬ ПРО МУЗЫКУ] Например: почему ты выбрала именно этот трек.',
    ],
  },

  // --- 10. Финал ---------------------------------------------------------------
  final: {
    title: 'Главное',
    // Твоё большое поздравление. Каждая строка массива — отдельный абзац.
    text: [
      '[ГЛАВНЫЙ ТЕКСТ]',
      'Здесь будет моё большое личное поздравление. Пиши сколько хочешь: каждый абзац — отдельная строка в кавычках, через запятую.',
    ],
    // Фото «хроник» над медальоном. Оставь пустой массив [], если не нужно.
    photos: [
      { src: 'images/us-1.jpg', caption: '[ПОДПИСЬ] Например: «Первый корпоратив, 2021»' },
      { src: 'images/us-2.jpg', caption: '[ПОДПИСЬ] Например: «Тот самый матч»' },
    ],
  },
};

/* =========================================================================
   Дальше — логика. Для правки текстов сюда заходить не нужно.
   ========================================================================= */
(function () {
  'use strict';

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const rand = (a, b) => a + Math.random() * (b - a);

  document.documentElement.classList.add('js');

  /* ---------- Тексты из CONTENT ---------- */
  function get(path) {
    return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), CONTENT);
  }
  function fillTexts() {
    $$('[data-text]').forEach((el) => {
      const v = get(el.dataset.text);
      if (v != null) el.textContent = v;
    });
    $$('[data-paras]').forEach((el) => {
      let v = get(el.dataset.paras);
      if (typeof v === 'string') v = [v];
      el.textContent = '';
      (v || []).forEach((t) => {
        const p = document.createElement('p');
        p.textContent = t;
        el.append(p);
      });
      // буквица не нужна, если текст начинается с [ЗАГЛУШКИ]
      el.classList.toggle('starts-bracket', /^\s*\[/.test((v || [])[0] || ''));
    });
    const [c1, c2] = CONTENT.field.irtyshColors || [];
    if (c1) document.documentElement.style.setProperty('--irtysh-1', c1);
    if (c2) document.documentElement.style.setProperty('--irtysh-2', c2);
  }

  function plural(n, one, few, many) {
    const m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
    return many;
  }

  /* ---------- Появление разделов при прокрутке ---------- */
  function initReveal() {
    const items = $$('.reveal');
    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach((el) => io.observe(el));
  }

  /* =======================================================================
     1. Экран-вход
     ======================================================================= */
  function initIntro() {
    const intro = $('#intro');
    const medal = $('#introMedallion');
    const done = () => {
      intro.classList.add('is-gone');
    };
    medal.addEventListener('click', () => {
      unlockAudio();
      document.body.classList.remove('is-locked');
      $('#player').classList.add('is-ready');
      if (reduced) {
        intro.classList.add('is-open');
        done();
        return;
      }
      medal.classList.add('is-shudder');
      setTimeout(() => intro.classList.add('is-open'), 520);
      setTimeout(done, 520 + 1150);
    }, { once: true });
  }

  /* =======================================================================
     2. Торт и свечи
     ======================================================================= */
  const cake = { lit: 0, candles: [], mic: null };

  function svgEl(tag, attrs) {
    const el = document.createElementNS(SVG_NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    return el;
  }

  function initCake() {
    const group = $('#candles');
    const n = CONTENT.age || 27;
    const cx = 180, cy = 170, rx = 122, ry = 36;
    const colors = ['#efe3c8', '#d4a74a', '#b8433b'];
    const pos = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 - Math.PI / 2;
      pos.push({ i, x: cx + rx * Math.cos(a), y: cy + ry * Math.sin(a) });
    }
    pos.sort((a, b) => a.y - b.y); // задние свечи рисуем первыми

    pos.forEach(({ i, x, y }) => {
      const depth = (y - (cy - ry)) / (2 * ry);
      const s = 0.9 + depth * 0.22;
      const color = colors[i % colors.length];
      const g = svgEl('g', {
        class: 'candle', transform: `translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${s.toFixed(3)})`,
        role: 'button', tabindex: '0', 'aria-label': `Свеча ${i + 1}`,
      });
      g.append(
        svgEl('rect', { class: 'candle__hit', x: -12, y: -64, width: 24, height: 68 }),
        svgEl('ellipse', { cx: 0, cy: 0, rx: 6, ry: 2.2, fill: 'rgba(0,0,0,.35)' }),
        svgEl('rect', { class: 'candle__body', x: -3.6, y: -32, width: 7.2, height: 32, rx: 1.6, fill: color }),
        svgEl('path', { d: 'M-3.6 -22 l7.2 -4 M-3.6 -12 l7.2 -4', stroke: color === '#b8433b' ? '#efe3c8' : '#8e2a2a', 'stroke-width': 1.8, opacity: 0.7 }),
        svgEl('line', { x1: 0, y1: -32, x2: 0, y2: -36, stroke: '#2a1a10', 'stroke-width': 1.2 }),
        svgEl('circle', { class: 'candle__glow', cx: 0, cy: -43, r: 14, fill: 'url(#g-glow)' }),
        svgEl('path', { class: 'candle__flame', d: 'M0 -35 C-4.5 -38 -4.5 -44 0 -51 C4.5 -44 4.5 -38 0 -35 Z', fill: 'url(#g-flame)' }),
        svgEl('path', { class: 'candle__smoke', d: 'M0 -38 q-3 -5 0 -10 q3 -5 0 -10' }),
      );
      const delay = `${-rand(0, 1.4).toFixed(2)}s`;
      g.children[5].style.animationDelay = delay;
      g.children[6].style.animationDelay = delay;
      group.append(g);
      cake.candles.push(g);
    });
    cake.lit = n;
    updateCounter();

    group.addEventListener('click', (e) => {
      const c = e.target.closest('.candle');
      if (c) blowOut(c);
    });
    group.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const c = e.target.closest('.candle');
      if (c) { e.preventDefault(); blowOut(c); }
    });

    $('#relightBtn').addEventListener('click', relight);
    initMic();
  }

  function updateCounter() {
    $('#candlesLeft').textContent = cake.lit;
  }

  function blowOut(c) {
    if (c.classList.contains('is-out')) return;
    c.classList.add('is-out');
    c.setAttribute('aria-label', c.getAttribute('aria-label') + ' (погашена)');
    cake.lit--;
    updateCounter();
    if (cake.lit === 0) allOut();
  }

  function allOut() {
    stopMic();
    $('#micBtn').hidden = true;
    const wish = $('#cakeWish');
    wish.hidden = false;
    confetti();
    setTimeout(() => wish.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' }), 250);
  }

  function relight() {
    cake.candles.forEach((c) => {
      c.classList.remove('is-out');
      c.setAttribute('aria-label', c.getAttribute('aria-label').replace(' (погашена)', ''));
    });
    cake.lit = cake.candles.length;
    updateCounter();
    $('#cakeWish').hidden = true;
    if (cake.micSupported) $('#micBtn').hidden = false;
  }

  /* ---------- Задуть по-настоящему: микрофон + Web Audio ---------- */
  function initMic() {
    const btn = $('#micBtn');
    const AC = window.AudioContext || window.webkitAudioContext;
    cake.micSupported = !!(AC && navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.isSecureContext);
    if (!cake.micSupported) return;
    btn.hidden = false;
    btn.addEventListener('click', () => (cake.mic ? stopMic() : startMic()));
  }

  async function startMic() {
    const btn = $('#micBtn');
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false },
      });
    } catch (err) {
      // Отказ или ошибка — молча оставляем клики
      btn.hidden = true;
      cake.micSupported = false;
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    const ctx = new AC();
    if (ctx.state === 'suspended') ctx.resume();
    const src = ctx.createMediaStreamSource(stream);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 1024;
    src.connect(analyser);
    const data = new Uint8Array(analyser.fftSize);
    const meter = $('#micMeter');
    const bar = meter.firstElementChild;
    meter.hidden = false;
    btn.classList.add('is-on');
    $('#micBtnLabel').textContent = CONTENT.cake.micListening;

    const started = performance.now();
    let baseline = 0, baseN = 0, blowAcc = 0, last = started, level = 0;
    const mic = { stream, ctx, raf: 0 };
    cake.mic = mic;

    const tick = (now) => {
      if (cake.mic !== mic) return;
      analyser.getByteTimeDomainData(data);
      let sum = 0;
      for (let i = 0; i < data.length; i++) {
        const v = (data[i] - 128) / 128;
        sum += v * v;
      }
      const rms = Math.sqrt(sum / data.length);
      level = level * 0.6 + rms * 0.4;
      const dt = now - last;
      last = now;

      // первые полсекунды — замеряем фоновый шум
      if (now - started < 500) {
        baseline += rms; baseN++;
      } else {
        const base = baseN ? baseline / baseN : 0.02;
        const threshold = Math.max(0.12, base * 4);
        bar.style.width = Math.min(100, (level / (threshold * 1.6)) * 100) + '%';
        if (level > threshold) {
          blowAcc += dt;
          while (blowAcc > 90) { // пока дуешь — гаснет свеча каждые ~90 мс
            blowAcc -= 90;
            const lit = cake.candles.filter((c) => !c.classList.contains('is-out'));
            if (lit.length) blowOut(lit[Math.floor(Math.random() * lit.length)]);
            if (!cake.mic) return;
          }
        } else {
          blowAcc = Math.max(0, blowAcc - dt);
        }
      }
      mic.raf = requestAnimationFrame(tick);
    };
    mic.raf = requestAnimationFrame(tick);
  }

  function stopMic() {
    const mic = cake.mic;
    if (!mic) return;
    cake.mic = null;
    cancelAnimationFrame(mic.raf);
    mic.stream.getTracks().forEach((t) => t.stop());
    mic.ctx.close().catch(() => {});
    $('#micMeter').hidden = true;
    $('#micBtn').classList.remove('is-on');
    $('#micBtnLabel').textContent = CONTENT.cake.micButton;
  }

  /* ---------- Конфетти на canvas ---------- */
  function confetti() {
    if (reduced) return;
    const canvas = $('#confetti');
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth, h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const colors = ['#f1d38a', '#d4a74a', '#e0782c', '#b8433b', '#efe3c8', '#8e2a2a'];
    const parts = [];
    for (let i = 0; i < 170; i++) {
      const a = rand(-Math.PI * 0.92, -Math.PI * 0.08);
      const sp = rand(7, 16);
      parts.push({
        x: w / 2 + rand(-20, 20), y: h * 0.55,
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
        w: rand(6, 11), h: rand(3, 6), r: rand(0, 6), vr: rand(-0.25, 0.25),
        c: colors[i % colors.length], ph: rand(0, 6), round: Math.random() < 0.25,
      });
    }
    for (let i = 0; i < 90; i++) {
      parts.push({
        x: rand(0, w), y: rand(-h * 0.6, -10), vx: rand(-1, 1), vy: rand(1, 3),
        w: rand(6, 10), h: rand(3, 5), r: rand(0, 6), vr: rand(-0.2, 0.2),
        c: colors[i % colors.length], ph: rand(0, 6), round: Math.random() < 0.25,
      });
    }
    const t0 = performance.now();
    const frame = (now) => {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);
      let alive = 0;
      for (const p of parts) {
        p.vy += 0.28;
        p.vx *= 0.985; p.vy *= 0.985;
        if (p.vy > 5) p.vy = 5;
        p.x += p.vx + Math.sin(t * 3 + p.ph) * 0.7;
        p.y += p.vy;
        p.r += p.vr;
        if (p.y < h + 20) alive++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.r);
        ctx.scale(1, Math.cos(t * 6 + p.ph));
        ctx.fillStyle = p.c;
        if (p.round) { ctx.beginPath(); ctx.arc(0, 0, p.h * 0.7, 0, Math.PI * 2); ctx.fill(); }
        else ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
      if (alive && t < 8) requestAnimationFrame(frame);
      else ctx.clearRect(0, 0, w, h);
    };
    requestAnimationFrame(frame);
  }

  /* =======================================================================
     4. Павлодар: счётчик рилсов и галереи
     ======================================================================= */
  function initReels() {
    const el = $('#reelsCount');
    const now = new Date();
    let n = 3 + Math.floor((now.getHours() * 60 + now.getMinutes()) / 11);
    el.textContent = n;
    const bump = () => {
      n += Math.random() < 0.8 ? 1 : 2;
      el.textContent = n;
      el.classList.remove('is-bump');
      void el.offsetWidth;
      el.classList.add('is-bump');
      setTimeout(bump, rand(3500, 9000));
    };
    setTimeout(bump, rand(3000, 6000));
  }

  const PH_ICON = '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="9" width="38" height="30" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="19" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 36l11-11 7 7 6-6 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';

  function placeholder(src) {
    const d = document.createElement('div');
    d.className = 'photo__ph';
    d.innerHTML = PH_ICON + '<span>Место для фото</span>';
    if (src) {
      const code = document.createElement('code');
      code.textContent = src;
      d.append(code);
    }
    return d;
  }

  function initGalleries() {
    $$('[data-gallery]').forEach((box) => {
      const list = get(box.dataset.gallery) || [];
      list.forEach((item) => {
        const photo = typeof item === 'string' ? { src: item } : item;
        const fig = document.createElement('figure');
        fig.className = 'photo';
        const frame = document.createElement('div');
        frame.className = 'photo__frame';
        if (photo.src) {
          const img = new Image();
          img.alt = photo.alt || photo.caption || '';
          img.loading = 'lazy';
          img.decoding = 'async';
          img.style.opacity = '0';
          img.onload = () => { img.style.opacity = ''; };
          img.onerror = () => frame.replaceChildren(placeholder(photo.src));
          img.src = photo.src;
          frame.append(img);
        } else {
          frame.append(placeholder(''));
        }
        fig.append(frame);
        if (photo.caption) {
          const cap = document.createElement('figcaption');
          cap.textContent = photo.caption;
          fig.append(cap);
        }
        box.append(fig);
      });
    });
  }

  /* =======================================================================
     5. Пенальти (canvas)
     ======================================================================= */
  function initPenalty() {
    const canvas = $('#pkCanvas');
    const ctx = canvas.getContext('2d');
    const W = 360, H = 270;
    const G = { l: 62, r: 298, t: 58, b: 150 };        // ворота
    const SPOT = { x: 180, y: 234 };                   // точка
    const FLIGHT = 0.62;                               // время полёта мяча, с
    let scale = 1, running = false, lastT = 0;

    const st = {
      phase: 'aim', results: [],
      keeper: { x: 180, v: 90, change: 1, lean: 0, dive: null },
      ball: { x: SPOT.x, y: SPOT.y, r: 9, vx: 0, vy: 0 },
      shot: null, msg: '', msgT: 0, net: 0, hover: null,
    };

    function resize() {
      const w = canvas.clientWidth || 320;
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round((w * H / W) * dpr);
      scale = canvas.width / W;
      draw();
    }

    function toLogical(e) {
      const r = canvas.getBoundingClientRect();
      return { x: ((e.clientX - r.left) / r.width) * W, y: ((e.clientY - r.top) / r.height) * H };
    }

    canvas.addEventListener('pointerdown', (e) => {
      if (st.phase !== 'aim') return;
      const p = toLogical(e);
      if (p.y > G.b + 34) return;            // тап по траве у ног — не удар
      if (p.y > G.b - 4) p.y = G.b - 6;      // удар низом
      shoot(p);
    });
    canvas.addEventListener('pointermove', (e) => {
      st.hover = e.pointerType === 'mouse' ? toLogical(e) : null;
    });
    canvas.addEventListener('pointerleave', () => { st.hover = null; });

    function shoot(p) {
      const to = { x: p.x + rand(-5, 5), y: p.y + rand(-5, 5) };
      st.shot = { to, t: 0 };
      const k = st.keeper;
      // вратарь угадывает направление чуть чаще, чем в половине случаев
      k.dive = Math.random() < 0.55 ? to.x : k.x + (Math.random() < 0.5 ? -1 : 1) * rand(30, 80);
      k.dive = Math.max(G.l + 10, Math.min(G.r - 10, k.dive));
      st.phase = 'flight';
      $('#pkHint').style.visibility = 'hidden';
    }

    function judge() {
      const b = st.ball, k = st.keeper;
      const nearPost = Math.abs(b.x - G.l) < 4 || Math.abs(b.x - G.r) < 4;
      const nearBar = Math.abs(b.y - G.t) < 4 && b.x > G.l - 4 && b.x < G.r + 4;
      if (nearPost && b.y > G.t - 4 || nearBar) return 'post';
      if (b.x <= G.l || b.x >= G.r || b.y <= G.t) return 'miss';
      const diving = Math.abs(k.lean) > 0.3;
      const reachX = diving ? 32 : 24;
      const reachUp = diving ? 84 : 66;
      if (Math.abs(b.x - k.x) <= reachX && b.y >= G.b - reachUp) return 'save';
      return 'goal';
    }

    function finishShot(res) {
      const b = st.ball;
      st.results.push(res === 'goal');
      st.msg = { goal: 'ГОЛ!', save: 'Сейв!', miss: 'Мимо!', post: 'Штанга!' }[res];
      st.msgT = 1.3;
      st.phase = 'result';
      if (res === 'goal') { st.net = 1; b.vx = 0; b.vy = 0; }
      else if (res === 'save') { b.vx = (b.x - st.keeper.x) * 4 + rand(-60, 60); b.vy = 180; }
      else if (res === 'post') { b.vx = rand(-80, 80); b.vy = 220; }
      else { b.vx = (b.x - 180) * 0.6; b.vy = -120; }
      const i = st.results.length - 1;
      $$('#pkDots i')[i].classList.add(res === 'goal' ? 'is-goal' : 'is-miss');
      $('#pkGoals').textContent = st.results.filter(Boolean).length;
    }

    function nextShot() {
      if (st.results.length >= 5) {
        st.phase = 'over';
        const goals = st.results.filter(Boolean).length;
        $('#pkResultText').textContent = `${goals} из 5. ${CONTENT.field.results[goals] || ''}`;
        $('#pkResult').hidden = false;
        return;
      }
      Object.assign(st.ball, { x: SPOT.x, y: SPOT.y, r: 9, vx: 0, vy: 0 });
      st.keeper.dive = null;
      st.phase = 'aim';
      $('#pkShot').textContent = st.results.length + 1;
      $('#pkHint').style.visibility = '';
    }

    $('#pkRestart').addEventListener('click', () => {
      st.results = [];
      $$('#pkDots i').forEach((d) => d.classList.remove('is-goal', 'is-miss'));
      $('#pkGoals').textContent = '0';
      $('#pkResult').hidden = true;
      nextShot();
    });

    function update(dt) {
      const k = st.keeper, b = st.ball;
      if (st.phase === 'aim') {
        k.change -= dt;
        if (k.change <= 0) {
          k.v = (Math.random() < 0.5 ? -1 : 1) * rand(50, 150);
          k.change = rand(0.5, 1.4);
        }
        k.x += k.v * dt;
        if (k.x < G.l + 24) { k.x = G.l + 24; k.v = Math.abs(k.v); }
        if (k.x > G.r - 24) { k.x = G.r - 24; k.v = -Math.abs(k.v); }
        k.lean += (0 - k.lean) * Math.min(1, dt * 8);
      } else if (st.phase === 'flight') {
        const dx = k.dive - k.x;
        const step = Math.sign(dx) * Math.min(Math.abs(dx), 200 * dt);
        k.x += step;
        k.lean += (Math.max(-1, Math.min(1, dx / 30)) - k.lean) * Math.min(1, dt * 10);
        const s = st.shot;
        s.t = Math.min(1, s.t + dt / FLIGHT);
        const e = s.t;
        b.x = SPOT.x + (s.to.x - SPOT.x) * e;
        b.y = SPOT.y + (s.to.y - SPOT.y) * e - Math.sin(Math.PI * e) * 18;
        b.r = 9 - 3.5 * e;
        if (s.t >= 1) finishShot(judge());
      } else if (st.phase === 'result') {
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        b.vx *= 0.96; b.vy *= 0.96;
        st.net = Math.max(0, st.net - dt * 1.5);
        st.msgT -= dt;
        if (st.msgT <= 0) nextShot();
      }
    }

    function draw() {
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      // трава
      for (let i = 0; i < 10; i++) {
        ctx.fillStyle = i % 2 ? '#2a4523' : '#2f4d27';
        ctx.fillRect(0, i * 27, W, 27);
      }
      const vg = ctx.createRadialGradient(W / 2, H / 2, 60, W / 2, H / 2, 260);
      vg.addColorStop(0, 'rgba(0,0,0,0)');
      vg.addColorStop(1, 'rgba(0,0,0,.45)');
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, W, H);

      // разметка
      ctx.strokeStyle = 'rgba(255,255,255,.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, G.b); ctx.lineTo(W, G.b);
      ctx.moveTo(G.l - 30, G.b); ctx.lineTo(G.l - 44, 190); ctx.lineTo(G.r + 44, 190); ctx.lineTo(G.r + 30, G.b);
      ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,.7)';
      ctx.beginPath(); ctx.ellipse(SPOT.x, SPOT.y + 4, 4, 2, 0, 0, Math.PI * 2); ctx.fill();

      // сетка
      ctx.fillStyle = 'rgba(10,10,10,.35)';
      ctx.fillRect(G.l, G.t, G.r - G.l, G.b - G.t);
      ctx.strokeStyle = 'rgba(255,255,255,.18)';
      ctx.lineWidth = 1;
      const bx = st.ball.x, by = st.ball.y, bulge = st.net * 6;
      ctx.beginPath();
      for (let x = G.l; x <= G.r; x += 12) {
        const off = bulge * Math.exp(-((x - bx) ** 2) / 800);
        ctx.moveTo(x, G.t); ctx.lineTo(x, G.b + off * 0.2);
      }
      for (let y = G.t; y <= G.b; y += 10) {
        const off = bulge * Math.exp(-((y - by) ** 2) / 600);
        ctx.moveTo(G.l, y); ctx.lineTo(G.r, y - off);
      }
      ctx.stroke();
      // штанги
      ctx.strokeStyle = '#f4efe2';
      ctx.lineWidth = 5;
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(G.l, G.b + 1); ctx.lineTo(G.l, G.t); ctx.lineTo(G.r, G.t); ctx.lineTo(G.r, G.b + 1);
      ctx.stroke();

      drawKeeper();

      // прицел (только мышь)
      if (st.hover && st.phase === 'aim' && st.hover.y < G.b + 34) {
        ctx.strokeStyle = 'rgba(241,211,138,.9)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(st.hover.x, Math.min(st.hover.y, G.b - 6), 8, 0, Math.PI * 2);
        ctx.stroke();
      }

      // мяч
      const b = st.ball;
      ctx.fillStyle = 'rgba(0,0,0,.35)';
      ctx.beginPath();
      ctx.ellipse(b.x, st.phase === 'flight' ? SPOT.y + (G.b - SPOT.y) * st.shot.t + 4 : b.y + b.r * 0.8, b.r, b.r * 0.35, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fbf8f0';
      ctx.strokeStyle = '#2a2420';
      ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#2a2420';
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
        const px = b.x + Math.cos(a) * b.r * 0.38, py = b.y + Math.sin(a) * b.r * 0.38;
        i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
      }
      ctx.fill();

      // надпись
      if (st.phase === 'result' && st.msg) {
        ctx.font = '700 38px "Cormorant SC", Georgia, serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'rgba(20,16,12,.85)';
        ctx.fillStyle = st.msg === 'ГОЛ!' ? '#f1d38a' : '#e9a19a';
        ctx.strokeText(st.msg, W / 2, 30);
        ctx.fillText(st.msg, W / 2, 30);
      }
    }

    function drawKeeper() {
      const k = st.keeper;
      ctx.save();
      ctx.translate(k.x, G.b - 2);
      ctx.rotate(k.lean * 0.95);
      // ноги
      ctx.strokeStyle = '#1d1611';
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(-5, -16); ctx.lineTo(-8, 0);
      ctx.moveTo(5, -16); ctx.lineTo(8, 0);
      ctx.stroke();
      // шорты и свитер
      ctx.fillStyle = '#1d1611';
      ctx.fillRect(-10, -24, 20, 10);
      ctx.fillStyle = '#d4a74a';
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(-11, -50, 22, 28, 4) : ctx.rect(-11, -50, 22, 28);
      ctx.fill();
      ctx.fillStyle = '#8e2a2a';
      ctx.fillRect(-11, -40, 22, 4);
      // руки
      ctx.strokeStyle = '#d4a74a';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(-9, -46); ctx.lineTo(-22, -62);
      ctx.moveTo(9, -46); ctx.lineTo(22, -62);
      ctx.stroke();
      ctx.fillStyle = '#f4efe2';
      ctx.beginPath(); ctx.arc(-23, -64, 4.5, 0, Math.PI * 2); ctx.arc(23, -64, 4.5, 0, Math.PI * 2); ctx.fill();
      // голова
      ctx.fillStyle = '#e8c9a0';
      ctx.beginPath(); ctx.arc(0, -58, 7.5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#3a2416';
      ctx.beginPath(); ctx.arc(0, -61, 7.5, Math.PI, 0); ctx.fill();
      ctx.restore();
    }

    function loop(t) {
      if (!running) return;
      const dt = Math.min(0.05, (t - lastT) / 1000 || 0);
      lastT = t;
      update(dt);
      draw();
      requestAnimationFrame(loop);
    }
    function setRunning(on) {
      if (on === running) return;
      running = on;
      if (on) { lastT = performance.now(); requestAnimationFrame(loop); }
    }

    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas);
    else window.addEventListener('resize', resize);
    resize();
    // Игра крутится только когда видна на экране — бережём батарею
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([en]) => setRunning(en.isIntersecting && !document.hidden)).observe(canvas);
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) setRunning(false);
        else {
          const r = canvas.getBoundingClientRect();
          setRunning(r.bottom > 0 && r.top < window.innerHeight);
        }
      });
    } else setRunning(true);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
  }

  /* =======================================================================
     6. Мастерская: светодиод и код прошивки
     ======================================================================= */
  function initWorkshop() {
    const led = $('#led');
    const board = led.ownerSVGElement;
    let slow = false;
    const toggle = () => {
      slow = !slow;
      board.style.setProperty('--blink', slow ? (60 / 27).toFixed(3) + 's' : '1s');
      $('#ledFreq').textContent = slow ? '27' : '60';
      $('#ledNote').textContent = slow ? CONTENT.workshop.led27 : CONTENT.workshop.ledHint;
    };
    led.addEventListener('click', toggle);
    led.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });

    $('#firmware').innerHTML = highlightC(CONTENT.workshop.firmware);
  }

  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function highlightC(src) {
    const re = /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|("(?:\\.|[^"\\\n])*")|(^[ \t]*#\w+)|\b(int|void|static|volatile|while|for|if|else|return|const|unsigned|uint32_t|uint8_t)\b|\b(0x[0-9a-fA-F]+U?|\d+U?)\b|\b([A-Z][A-Z0-9_]{2,})\b/gm;
    let out = '', last = 0, m;
    while ((m = re.exec(src))) {
      out += esc(src.slice(last, m.index));
      const [tok, com, str, pre, kw, num, mac] = m;
      let cls = '';
      if (com) cls = /рожден/i.test(com) ? 'tok-com is-secret' : 'tok-com';
      else if (str) cls = 'tok-str';
      else if (pre) cls = 'tok-pre';
      else if (kw) cls = 'tok-kw';
      else if (num) cls = 'tok-num';
      else if (mac) cls = 'tok-mac';
      out += `<span class="${cls}">${esc(tok)}</span>`;
      last = m.index + tok.length;
    }
    return out + esc(src.slice(last));
  }

  /* =======================================================================
     7. Миры: полка и карточка Diablo
     ======================================================================= */
  const GLYPHS = {
    lotr: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2.6"/><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width=".8" opacity=".6"/></svg>',
    witcher: '<svg viewBox="0 0 24 24"><path d="M5 3l14 18M19 3L5 21M3 17l4 4M17 21l4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    got: '<svg viewBox="0 0 24 24"><path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M12 5l-2.5-2M12 5l2.5-2M12 19l-2.5 2M12 19l2.5 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  };
  const SERIES = {
    lotr: { c: '#2f3b22', band: '#d4a74a', w: 54 },
    witcher: { c: '#26262b', band: '#cfcfd4', w: 70 },
    got: { c: '#5a1d1d', band: '#e7c77a', w: 58 },
  };

  function initShelf() {
    const shelf = $('#shelf');
    const note = $('#shelfNote');
    const heights = [252, 262, 274, 280, 258];
    CONTENT.worlds.books.forEach((b, i) => {
      const s = SERIES[b.series] || SERIES.lotr;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'book';
      btn.setAttribute('aria-pressed', 'false');
      btn.style.setProperty('--c', s.c);
      btn.style.setProperty('--band', s.band);
      btn.style.setProperty('--w', s.w + 'px');
      btn.style.setProperty('--h', (heights[i % heights.length]) + 'px');
      btn.innerHTML = `<span class="book__glyph" aria-hidden="true">${GLYPHS[b.series] || GLYPHS.lotr}</span>`;
      const title = document.createElement('span');
      title.className = 'book__title';
      title.textContent = b.title;
      const vol = document.createElement('span');
      vol.className = 'book__vol';
      vol.textContent = b.vol || '';
      btn.append(title, vol);
      btn.addEventListener('click', () => {
        $$('.book', shelf).forEach((x) => { x.classList.remove('is-pulled'); x.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('is-pulled');
        btn.setAttribute('aria-pressed', 'true');
        $('#shelfNoteTitle').textContent = b.title;
        $('#shelfNoteText').textContent = b.note;
        note.classList.remove('is-flash');
        void note.offsetWidth;
        note.classList.add('is-flash');
      });
      shelf.append(btn);
    });

    const d = CONTENT.worlds.diablo;
    const pr = $('#diabloProgress');
    pr.style.setProperty('--p', d.progress + '%');
    pr.setAttribute('aria-valuenow', d.progress);
    const ul = $('#diabloObjectives');
    d.objectives.forEach((o) => {
      const li = document.createElement('li');
      li.textContent = o.text;
      if (o.done) li.className = 'is-done';
      ul.append(li);
    });
  }

  /* ---------- Кола: карточка предмета ---------- */
  function initCola() {
    const c = CONTENT.cola;
    const potion = $('#potion');
    const liquid = $('#potionLiquid');
    const btn = $('#colaBtn');
    const status = $('#colaStatus');
    const LIQUID_H = 112; // высота жидкости в единицах SVG
    let level = 4;        // 4 глотка в бутылке

    c.stats.forEach((t) => {
      const li = document.createElement('li');
      li.textContent = t;
      $('#colaStats').append(li);
    });
    btn.textContent = c.drink;

    btn.addEventListener('click', () => {
      if (level === 0) {
        level = 4;
        status.textContent = c.refilled;
        btn.textContent = c.drink;
      } else {
        status.textContent = c.sips[4 - level] || '';
        level--;
        if (level === 0) btn.textContent = c.refill;
        potion.classList.remove('is-sip');
        void potion.getBoundingClientRect();
        potion.classList.add('is-sip');
      }
      potion.classList.toggle('is-empty', level === 0);
      liquid.style.transform = `translateY(${((4 - level) / 4) * LIQUID_H}px)`;
    });
  }

  /* =======================================================================
     8. Журнал заданий
     ======================================================================= */
  const STATUS = { active: 'Активно', new: 'Новое задание', legendary: 'Легендарное' };
  const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

  function initQuests() {
    const list = $('#questList');
    CONTENT.questLog.items.forEach((q, i) => {
      const li = document.createElement('li');
      li.className = `quest parchment reveal quest--${q.status}`;
      li.innerHTML = `
        <div class="quest__top">
          <span class="quest__num">Задание ${ROMAN[i] || i + 1}</span>
          <span class="badge badge--${q.status}"></span>
        </div>
        <h3 class="quest__title"></h3>
        <p class="quest__text"></p>
        <div class="quest__foot"><button class="quest__accept" type="button" aria-pressed="false">Принять задание</button></div>`;
      $('.badge', li).textContent = STATUS[q.status] || q.status;
      $('.quest__title', li).textContent = q.title;
      $('.quest__text', li).textContent = q.text;
      const btn = $('.quest__accept', li);
      btn.addEventListener('click', () => {
        const on = btn.getAttribute('aria-pressed') !== 'true';
        btn.setAttribute('aria-pressed', String(on));
        btn.textContent = on ? 'Принято ✓' : 'Принять задание';
      });
      list.append(li);
    });
  }

  /* =======================================================================
     9. Музыка
     ======================================================================= */
  let unlocking = false;
  function unlockAudio() {
    // Клик по медальону «разрешает» звук: тихо запускаем и сразу ставим на паузу.
    const audio = $('#audio');
    if (!audio.src) return;
    unlocking = true;
    audio.muted = true;
    const p = audio.play();
    const end = () => { audio.pause(); audio.muted = false; unlocking = false; };
    if (p && p.then) p.then(() => { end(); audio.currentTime = 0; }).catch(end);
    else end();
  }

  function initPlayer() {
    const audio = $('#audio');
    const btn = $('#playBtn');
    const roadBtn = $('#roadPlay');
    const title = $('#trackTitle');
    const vol = $('#volume');
    title.textContent = CONTENT.music.title;
    audio.src = CONTENT.music.src;

    // На iPhone громкость меняется только кнопками телефона — прячем ползунок
    audio.volume = 0.5;
    if (Math.abs(audio.volume - 0.5) > 0.01) $('#volWrap').hidden = true;
    audio.volume = +vol.value;
    vol.addEventListener('input', () => { audio.volume = +vol.value; });

    const toggle = () => {
      if (audio.paused) {
        audio.muted = false;
        const p = audio.play();
        if (p && p.catch) p.catch(() => {});
      } else audio.pause();
    };
    btn.addEventListener('click', toggle);
    roadBtn.addEventListener('click', toggle);

    const setState = (playing) => {
      document.body.classList.toggle('is-playing', playing);
      btn.setAttribute('aria-pressed', String(playing));
      btn.setAttribute('aria-label', playing ? 'Поставить на паузу' : 'Включить музыку');
      roadBtn.textContent = playing ? 'Пауза' : 'Включить музыку дороги';
    };
    audio.addEventListener('play', () => { if (!unlocking) setState(true); });
    audio.addEventListener('pause', () => setState(false));
    audio.addEventListener('error', () => {
      setState(false);
      title.textContent = `Нет файла ${CONTENT.music.src}`;
      title.classList.add('is-error');
    });
  }

  /* =======================================================================
     Прочее: кнопка «к карте», финал
     ======================================================================= */
  function initToMap() {
    const btn = $('#toMap');
    const map = $('#map');
    let queued = false;
    const check = () => {
      queued = false;
      const r = map.getBoundingClientRect();
      btn.classList.toggle('is-shown', r.bottom < 0);
    };
    window.addEventListener('scroll', () => {
      if (!queued) { queued = true; requestAnimationFrame(check); }
    }, { passive: true });
  }

  function initFinal() {
    const since = new Date(CONTENT.friendsSince + 'T00:00:00');
    const days = Math.max(0, Math.floor((Date.now() - since.getTime()) / 864e5));
    if (!isNaN(days)) {
      $('#friendDays').textContent = `Дружим уже ${days} ${plural(days, 'день', 'дня', 'дней')} — ${CONTENT.friendsSinceText}`;
    }
  }

  /* ---------- Запуск ---------- */
  fillTexts();
  initIntro();
  initCake();
  initReels();
  initGalleries();
  initPenalty();
  initWorkshop();
  initShelf();
  initCola();
  initQuests();
  initPlayer();
  initToMap();
  initFinal();
  initReveal();
})();
