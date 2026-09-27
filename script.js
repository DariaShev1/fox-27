/* =========================================================================
   ВСЕ ТЕКСТЫ САЙТА — ЗДЕСЬ
   Меняй только значения в кавычках. Кавычки, запятые и скобки не трогай.
   Если в тексте нужен апостроф или кавычки — используй «ёлочки».
   Метки в квадратных скобках [ВОТ ТАКИЕ] — места, которые точно нужно заменить.
   ========================================================================= */
const CONTENT = {
  // --- Общее -----------------------------------------------------------------
  name: "Антон",
  nickname: "Хитрый Рыжий Лис",
  age: 27, // сколько свечей на торте
  birthday: "29.09.2026", // дата в финале
  friendsSince: "2021-10-01", // когда познакомились (ГГГГ-ММ-ДД) — для счётчика дней дружбы
  friendsSinceText: "с октября 2021-го, когда мы оказались коллегами",
  signature: "— Твоя подруга, Дарья", // подпись под главным письмом

  // --- 1. Экран-вход -----------------------------------------------------------
  intro: {
    kicker: "Журнал заданий · том XXVII",
    hint: "Прикоснись к медальону",
  },

  // --- 2. Торт -----------------------------------------------------------------
  cake: {
    lead: "27 свечей — по одной за каждый год. Загадай желание. Задуй все до одной!",
    hintClick: "Нажимай на огоньки по одному",
    micButton: "Дунуть по-настоящему",
    micListening: "Слушаю… дуй! (нажми, чтобы выключить)",
    wish: "С днём рождения, Антошенька",
    afterWish: "Желание загадано. Дальше — карта твоих земель.",
  },

  // --- 3. Карта ----------------------------------------------------------------
  map: {
    title: "Твоё королевство",
    lead: "Пять локаций, в каждой что-то спрятано. Нажми на точку — карта сама отнесёт.",
  },

  // --- 4. Павлодар -------------------------------------------------------------
  pavlodar: {
    lead: "Твой родной город, лучшая набережная Иртыша и — по твоей версии — центр мира!!!",
    // Каждая строка массива — отдельный абзац
    text: [
      "Я знаю Павлодар лучше многих, хотя сама там даже не была))) Всё благодаря тебе и рилсам!",
      "Когда уже я приеду в гости?!",
    ],
    reelsJoke: "Рилсов про Павлодар, которые ты мне прислал:",
    reelsNote: "Счётчик честный, проверь.",
    // Фото: положи файлы в папку images/ и впиши пути сюда.
    // Если файла нет — вместо фото будет аккуратная рамка-заглушка.
    photos: [
      {
        src: "images/pavlodar-1.jpg",
        caption: "Но уже и я шлю тебе их!",
      },
      {
        src: "images/pavlodar-2.jpg",
        caption: "Чтоб на душе хорошо стало",
      },
    ],
  },

  // --- 4½. Лисёнок (детские фото) ----------------------------------------------
  childhood: {
    lead: "Каждый великий герой начинал с первого уровня. Те времена, когда STM32 ещё даже не придумали.",
    // Детские фото: положи в images/ и впиши пути. Лучше чётное количество — они стоят по два в ряд.
    photos: [
      {
        src: "images/child-1.jpg",
        caption: "Праздничный ты",
      },
      {
        src: "images/child-2.jpg",
        caption: "Хоккеисто-футболист",
      },
      {
        src: "images/child-3.jpg",
        caption:
          "Уже с детства базовая настройка — не знать, что делать с девочками",
      },
      {
        src: "images/child-4.jpg",
        caption: "Ну уже почти взрослый лев со львом побольше))",
      },
    ],
    text: [
      "Почти не изменился с тех пор, как был маленьким лисёнком-котёнком-львёнком",
    ],
  },

  // --- 5. Поле -----------------------------------------------------------------
  field: {
    lead: "Пять ударов, один вратарь, никаких VAR. Выбирай угол и бей. Посмотрим, какой ты футболист",
    scarfMadrid: "¡HALA MADRID!",
    scarfIrtysh: "ИРТЫШ · ПАВЛОДАР",
    // Цвета шарфа «Иртыша»: [основной, полосы и надпись]. Поправь, если хочешь другие.
    irtyshColors: ["#1f4fb8", "#f6f1e4"],
    text: [
      "Все мы знаем: если бы не работа, ты бы все выходные проводил на поле",
      "И если бы собиралась команда...",
    ],
    // Итог серии: ключ — сколько голов забито
    results: {
      0: "Вратарь сегодня в ударе. Реванш?",
      1: "Гол престижа есть. Ещё серия?",
      2: "Борьба до конца. Попробуй ещё!",
      3: "Победа по пенальти! Трибуны довольны.",
      4: "Почти идеально — стадион аплодирует стоя.",
      5: "Пять из пяти! Мадрид и Павлодар гордятся.",
    },
  },

  // --- 6. Лаборатория ----------------------------------------------------------
  lab: {
    lead: "Работа — то место, где ты проводишь большую часть времени, творишь, отлаживаешь, пишешь код и делаешь мир лучше. В лаборатории спрятано несколько сюрпризов.",
    ledHint: "Нажми кнопку USER на плате.",
    resetNote: "RESET — перезагрузка. Снова 60 вспышек в минуту.",

    // OLED-дисплей под платой: экраны листаются сами и по нажатию
    oled: {
      hint: "Нажми на дисплей, чтобы листать экраны",
      marquee: "С ДНЁМ РОЖДЕНИЯ, АНТОН!", // заглавными: так читается на дисплее
      foxLine1: "АНТОН",
      foxLine2: "V27.0",
      countTitle: "ДО 29.09",
      countLeft: "ОСТАЛОСЬ",
      todayBig: "LVL UP!",
      todaySmall: "С ДР, АНТОН!",
      afterBig: "С ДР!",
      //uartLine2: "ДЕКОДИРУЙ МЕНЯ",
      led27: "ПО РАЗУ ЗА ГОД",
      led60: "ОБЫЧНЫЙ РЕЖИМ",
      genius1: "ТЫ", // крупно, до 8 символов в строке
      genius2: "ГЕНИЙ!",
    },

    // Логический анализатор: загадка. Плата передаёт answer по UART в UTF-8: 115200 бод, кадр 8E1 (с битом чётности).
    // Ничего из этого не написано прямо: скорость — из BRR = 0x16D при PCLK1 = 42 MHz или по линейке осциллограммы,
    // формат кадра — по числу битов в кадре (или из заголовка терминала), текст — байты UTF-8 вручную: ASCII в декодере нет.
    analyzer: {
      intro:
        "Плата что-то передаёт по линии TX. Захват уже сделан, а декодер не настроен: скорость и формат кадра придётся выяснить самому.",
      answer: "ты гений", // слово-разгадка: именно его «передаёт» плата
      question: "Что передаёт плата?",
      check: "Проверить",
      statusNone: "Декодер ждёт скорость",
      statusOk: "Кадров: {n} · ошибок нет",
      statusBad: "Кадров: {n} · ошибок: {e} — что-то в настройках не так",
      wrong: "Не то. Посмотри на байты ещё раз.",
      hintButton: "Подсказка",
      hints: [
        "Скорость можно измерить: над осциллограммой есть линейка.",
        "Регистр BRR и частота шины есть на дисплее и в прошивке.",
        "Скорость верная, а ошибки остались? Посчитай, сколько битов в одном кадре.",
        "Все байты больше 0x7F — значит, это не ASCII.",
        "D1 82 — это «т». Дальше сам.",
      ],
      winTitle: "Точно, ты ГЕниЙ!!!",
      secret:
        "Мы все это давно знаем про тебя, но теперь ещё и эксперименты подтвердили.",
    },
    led27: "27 вспышек в минуту — по одной за каждый год.",
    text: [
      "Ты — суперспециалист, ценный сотрудник, самый трудолюбивый и ответственный человек в вашей команде.",
      "И чуткий преподаватель, которого так любят студенты.",
    ],

    // Вкладка UART: ответы «прошивки» на команды. Каждая строка массива — строка в терминале.
    uart: {
      boot: [
        "LIS-27 bootloader v27.0",
        "SYSCLK 168 MHz ............ OK",
        "ADC1 / TIM1 / USART2 ...... OK",
        "Источник: готов, все защиты в норме",
        "",
        "Нажми кнопку ниже или набери команду. help — список команд.",
      ],
      help: [
        "status      — состояние источника",
        "measure     — снять измерения",
        "flash       — прошить новую версию",
        "git status  — что в репозитории",
        "wish        — главное сообщение",
        "clear       — очистить экран",
      ],
      status: [
        "SRC     : ON, режим стабилизации тока",
        "I_set   : 27.000 A",
        "Защиты  : OK   Перегрев: нет",
        "Аптайм  : 27 лет без перезагрузки",
        "Настроение: стабильно «да пойдёт»",
      ],
      gitStatus: [
        "On branch main",
        "Your branch is ahead of 'origin/v26' by 365 commits.",
        "",
        "nothing to commit, working tree clean",
        "(ну почти: Diablo 4 только началась)",
      ],
      wish: [
        "С днём рождения!!!",
        "Пусть измерения сходятся с первого раза,",
        "источник держит уставку, мерж проходит без конфликтов,",
        "а самые сложные баги находятся за пять минут.",
      ],
      measureDone:
        "Стабильность в допуске. Источник держит уставку. Измерения сходятся.",
      flashDone: "Антон v27.0 прошит успешно. Перезагрузка в новый год жизни…",
      unknown: "Неизвестная команда. Попробуй help.",
    },

    // Вкладка main.c. Поздравление спрятано в комментариях.
    firmware: `/**
 * main.c — прошивка «Anton», версия 27.0
 * Target: STM32, по сути — хороший человек.
 */
#include <stdint.h>
#include "main.h"          
#include "adc.h"           
#include "tim.h"           
#include "usart.h"        
#include "source_ctrl.h"   

#define AGE          27U          /* лет в продакшене без критических багов */
#define COLA_mL      UINT32_MAX   /* годовой запас колы, переполнения не ожидается */
#define I_SET_mA     27000U       /* уставка тока источника */

static volatile uint32_t happiness = 0;

void SystemClock_Config(void);   /* реализация ниже, сгенерирована CubeMX */

int main(void)
{
  HAL_Init();
  SystemClock_Config();     /* разгоняем праздник до максимума */
  MX_ADC1_Init();           /* измерения */
  MX_TIM1_Init();           /* управление */
  MX_USART2_UART_Init();    /* PCLK1 = 42 MHz, BRR = 0x16D */

  /* С днём рождения, Антон!
   * Пусть код собирается
   * без единого warning,
   * HardFault обходит стороной,
   * баг ловится с первого
   * брейкпоинта, а DMA 
   * не теряет ни байта */

  while (1)
  {
    uint32_t i_meas = ADC_Read_mA();          /* меряем */
    PWM_Set(PI_Step(I_SET_mA, i_meas));       /* держим ток */
    happiness++;                              // без остановки
  }
}

/* ... SystemClock_Config(): HSE 8 MHz → PLL → SYSCLK 168 MHz, PCLK1 42 MHz */`,

    // Вкладка git log: история версий Антона. g — «ветки» слева, как в git log --graph.
    // Меняй сообщения как хочешь; строки без hash — просто линии графа.
    gitLog: [
      {
        g: "*",
        hash: "27a9f29",
        refs: "HEAD -> main, tag: v27.0",
        msg: "release: Антон v27.0",
        date: "29.09.2026",
      },
      {
        g: "*",
        hash: "8c41e02",
        msg: "feat(accel): самые крутые источники питания",
      },
      {
        g: "*",
        hash: "5b7d913",
        msg: "feat: курсы по МК, студенты довольны, дипломницы в фанатках",
      },
      {
        g: "*",
        hash: "a9e2c77",
        msg: "fix: Ведьмак пройден ещё раз, регрессий нет",
      },
      {
        g: "*",
        hash: "c0ffee1",
        msg: "Merge branch 'friendship'",
        date: "10.2021",
      },
      { g: "|\\" },
      {
        g: "| *",
        hash: "1f2e3d4",
        msg: "feat: знакомство с невероятно красивой и умной девушкой (это я!)",
      },
      { g: "|/" },
      { g: "*", hash: "7e57ab1", msg: "fix: первый HardFault побеждён" },
      {
        g: "*",
        hash: "32f4d0c",
        msg: "feat: embedded, STM32, любовь с первого регистра",
      },
      {
        g: "*",
        hash: "4a11e5d",
        msg: "feat: любовь к футболу, к Павлодару и к коле",
      },
      { g: "*", hash: "0000001", msg: "init: Павлодар", date: "29.09.1999" },
    ],
  },

  // --- 7. Миры -----------------------------------------------------------------
  worlds: {
    lead: "Средиземье, Континент и Вестерос — ты был везде. Вытяни книгу с полки.",
    // series: 'lotr' | 'witcher' | 'got' — задаёт оформление корешка
    books: [
      {
        series: "lotr",
        title: "Братство Кольца",
        vol: "I",
        note: "О вашем братстве 5 корпуса ходят легенды: кто там эльф, а кто гном — не разобраться))",
      },
      {
        series: "lotr",
        title: "Две крепости",
        vol: "II",
        note: "Две твои крепости — работа и футбол. Обе держишь уверенно.",
      },
      {
        series: "lotr",
        title: "Возвращение короля",
        vol: "III",
        note: "Каждая твоя поездка в Павлодар — маленькое возвращение короля. Правда, без орлов.",
      },
      {
        series: "witcher",
        title: "Ведьмак",
        vol: "1–8",
        note: "Все книги прочитаны, игра пройдена сто раз. Живёшь по заветам Геральта: ты тоже берёшься за контракты, от которых другие отказываются, — только вместо утопцев у тебя спагетти-код.",
      },
      {
        series: "got",
        title: "Игра престолов",
        vol: "I",
        note: "Ждём «Ветра зимы» вместе со всем миром. Зима близко… но не так близко, как шестая книга.",
      },
    ],
    diablo: {
      title: "Спасти Санктуарий (Diablo 4)",
      status: "только начато",
      progress: 5, // процент на полоске
      objectives: [
        { text: "Создать персонажа и полчаса выбирать ему бороду", done: true },
        { text: "Выбрать класс и не передумать на десятой минуте", done: true },
        { text: "Дойти по снегу до Кёвашада и не замёрзнуть", done: false },
        { text: "Не продать торговцу первую же легендарку", done: false },
        {
          text: "Разобраться, что вообще делает этот Кодекс силы",
          done: false,
        },
        { text: "Заслужить коня и больше не бегать пешком", done: false },
        { text: "Лично познакомиться с Лилит", done: false },
        { text: "Не уснуть на работе после ночного рейда", done: false },
      ],
      reward: "Награда: легендарный предмет «Выходной без будильника».",
    },
    // Вестерос: книги, «Игра престолов», «Дом дракона». Яйцо в карточке вылупляется после нескольких нажатий.
    westeros: {
      kicker: "Задание · Вестерос",
      title: "Хроники Вестероса",
      status: "в процессе",
      progress: 80, // процент на полоске
      objectives: [
        {
          text: "Прочитать «Песнь льда и огня» и не сойти с ума от количества персонажей",
          done: false,
        },
        { text: "Посмотреть все восемь сезонов «Игры престолов»", done: true },
        { text: "Пережить финал восьмого сезона", done: true },
        { text: "Дождаться «Ветров зимы» (без дедлайна)", done: false },
        { text: "Досмотреть «Дом дракона» вместе!!!", done: false },
      ],
      reward: "Награда: драконье яйцо. Кажется, оно тёплое…",
      // Что пишется под яйцом после каждого нажатия; последнее — когда дракон вылупился
      egg: [
        "Яйцо чуть качнулось.",
        "По скорлупе пошла трещина. Внутри кто-то шевелится.",
        "Ещё немного…",
        "Дракон вылупился! Теперь ты точно из дома Таргариенов. Имя придумай сам.",
      ],
    },
  },

  // --- 7½. Инвентарь: кола (карточка предмета в разделе «Миры») ------------------
  cola: {
    kicker: "Инвентарь · предмет",
    name: "Эликсир шипучей бодрости",
    rarity: "Легендарное зелье · всегда с собой",
    stats: [
      "+128 к настроению",
      "+15% к скорости отладки прошивок",
      "Мгновенно восстанавливает силы после матча",
      "Никаких «без сахара»",
    ],
    flavor: "Ты можешь отказаться от многого, но только не от неё.",
    drink: "Выпить",
    refill: "Достать ещё одну",
    // Что пишется после каждого глотка (их четыре, последний опустошает бутылку)
    sips: [
      "Пш-ш-ш! +128 к настроению.",
      "Холодненькая. Как надо.",
      "Ещё глоток — и готов на всё.",
      "Бутылка пуста. Хорошо, что в инвентаре всегда есть ещё одна.",
    ],
    refilled: "Новая бутылка из инвентаря. Холодная.",
  },

  // --- 8. Журнал заданий (пожелания) --------------------------------------------
  questLog: {
    lead: "Задания на двадцать восьмой год. Принимать можно в любом порядке.",
    // status: 'active' — «Активно», 'new' — «Новое задание», 'legendary' — «Легендарное»
    items: [
      {
        status: "active",
        title: "Здоровье героя",
        text: "Чтобы здоровье было как у ведьмака после «Ласточки»: любые царапины затягиваются сами, а колени выдерживают ещё сотню матчей!",
      },
      {
        status: "active",
        title: "5/16 корпус",
        text: "Чтобы прошивки собирались с первого раза, а источники работали ровно тогда, когда нужно. Никаких сожжённых микросхем.",
      },
      {
        status: "new",
        title: "Путешествия",
        text: "Поехать со мной в Питер!! Ну или на Алтай...",
      },
      {
        status: "new",
        title: "Поле",
        text: "Побольше играть в футбол, забивать голы, но без травм!",
      },
      {
        status: "legendary",
        title: "Свои люди",
        text: "Чтобы рядом всегда были родные люди, семья, друзья.",
      },
      {
        status: "legendary",
        title: "Главный квест",
        text: "Чтобы твои желания сбывались (и они были), и самое главное — чтобы ты был счастлив.",
      },
    ],
  },

  // --- 9. Таверна (музыка + доска заказов) ---------------------------------------
  music: {
    title: "Присцилла — «Волчья буря»", // так трек подписан в плеере, можно поменять
    src: "audio/track.mp3", // путь к файлу
    lead: "Тёплый угол, где можно снять доспехи. Кола за счёт заведения.",
    text: [
      "Сюда заходят после долгого заказа: у камина сохнут сапоги, на доске висят объявления, а бард настраивает лютню. Сегодня здесь поют для тебя.",
      "Песня Присциллы, та самая, под которую затихает весь зал.",
    ],
    // Ноты для фортепиано: страницы-картинки в notes/. Свёрнуты в карточку, открываются по нажатию.
    sheet: {
      title: "Ноты «The Wolven Storm»",
      text: "Для фортепиано. Бард спел — теперь твоя очередь.",
      button: "Открыть ноты",
      pages: [
        "notes/wolven-storm-1.png",
        "notes/wolven-storm-2.png",
        "notes/wolven-storm-3.png",
      ],
    },
    boardTitle: "Доска заказов",
    // Объявления на доске: title — заголовок, text — текст, reward — награда
    board: [
      {
        title: "Требуется ведьмак",
        text: "В модуле измерений завёлся баг. Появляется только по ночам. Конструкторов не боится.",
        reward: "Награда: 100 рублей",
      },
      {
        title: "Разыскивается хозяин мяча",
        text: "Команды собраны, ворота стоят, а игра не начинается: мяч есть только у одного. Особые приметы: красивый, занятой, всегда приходит с мячом под мышкой.",
        reward: "Награда: право первым выбирать команду",
      },
      {
        title: "Заказ на чудовище",
        text: "В округе объявилась зелёная сова. Каждый вечер требует урок французского и грозит сжечь ударный режим. Нужен кто-то, кто знает французский.",
        reward: "Récompense : merci beaucoup и сохранённый ударный режим",
      },
    ],
  },

  // --- Достижения ----------------------------------------------------------------
  // Всплывают плашкой, когда Антон что-то делает на странице, и собираются в «Зале трофеев».
  // secret: true — до получения показывается как «???».
  achievements: {
    title: "Зал трофеев",
    lead: "Всё, что ты успел найти на этой странице. Некоторые достижения секретные.",
    toastLabel: "Достижение получено",
    allDoneLabel: "Все достижения",
    allDone: "Легенда Павлодара!",
    secretDesc: "Секретное достижение",
    reset: "Сбросить",
    list: [
      {
        id: "open",
        title: "Медальон пробуждён",
        desc: "Открыть журнал заданий",
      },
      {
        id: "candles",
        title: "Двадцать семь огней",
        desc: "Задуть все свечи на торте",
      },
      {
        id: "mic",
        title: "Ветер перемен",
        desc: "Задуть свечу по-настоящему, в микрофон",
        secret: true,
      },
      { id: "map", title: "Картограф", desc: "Отправиться в путь по карте" },
      { id: "goal", title: "Первый гол", desc: "Забить пенальти" },
      {
        id: "perfect",
        title: "Пять из пяти",
        desc: "Забить все пять пенальти в одной серии",
      },
      { id: "led", title: "27 в минуту", desc: "Нажать кнопку USER на плате" },
      {
        id: "flash",
        title: "Прошито",
        desc: "Залить прошивку v27.0 через UART",
      },
      {
        id: "typed",
        title: "Руками в консоли",
        desc: "Набрать команду в терминале самому",
        secret: true,
      },
      {
        id: "books",
        title: "Книжный червь",
        desc: "Вытянуть с полки все книги",
      },
      {
        id: "cola",
        title: "До дна",
        desc: "Выпить эликсир шипучей бодрости до последней капли",
      },
      {
        id: "quests",
        title: "Все задания приняты",
        desc: "Принять все задания из журнала",
      },
      { id: "music", title: "Бард, играй!", desc: "Попросить песню в таверне" },
      {
        id: "genius",
        title: "Ты гений",
        desc: "Расшифровать посылку в логическом анализаторе",
        secret: true,
      },
      {
        id: "dragon",
        title: "Кровь дракона",
        desc: "Высидеть драконье яйцо",
        secret: true,
      },
      {
        id: "raven",
        title: "Тёмные крылья, тёмные вести",
        desc: "Сломать печать на письме, которое принёс ворон",
      },
      {
        id: "loot",
        title: "Легендарный дроп",
        desc: "Открыть сундук в конце пути",
      },
      { id: "final", title: "Эпилог", desc: "Дочитать до самого конца" },
    ],
    // Подсказка под сеткой медалей, пока ни одна не выбрана
    pickTitle: "Выбери медаль",
    pickText: "Нажми на любую — узнаешь, за что она.",
    gotLabel: "Получено",
    lockedLabel: "Ещё не получено",
  },

  // --- Легендарный лут: сундук в финале --------------------------------------------
  // Подарок описан загадочно, чтобы не раскрыть сюрприз раньше времени.
  loot: {
    kicker: "И ещё кое-что…",
    hint: "В конце любого пути стоит сундук. Этот — не исключение.",
    open: "Открыть сундук",
    label: "Легендарный дроп",
    name: "Доспех Шипучего Лиса",
    type: "Легендарная броня · уникальный предмет",
    stats: ["+100 к уюту", "Сопротивление холоду: высокое"],
    rune: "C•••••••K", // руна на груди: первая и последняя буква надписи
    runeNote: "Руна на груди. Расшифровка — при получении.",
    flavor:
      "Этот предмет не выпадает ни в одном подземелье. Он ждёт тебя в реальном мире — выдаётся лично в руки.",
  },

  // --- 10. Финал ---------------------------------------------------------------
  final: {
    title: "Главное",
    // Ворон с письмом: письмо откроется, только когда сломаешь печать
    raven: {
      hint: "Прилетел ворон. Сургуч ещё тёплый.",
      button: "Сломать печать",
    },
    // Твоё большое поздравление. Каждая строка массива — отдельный абзац.
    text: [
      "Ты — невероятный человек. Очень умный, самый добрый и внимательный, невероятно трудолюбивый, талантливый во всём, очень красивый парень и просто потрясающий.",
      "Я желаю тебе, чтобы работа программистом приносила радость, чтобы никто тебя не бесил, всё было организовано и структурировано, дедлайны не горели и тебе не приходилось работать до десяти вечера каждый день.",
      "В работе преподавателя пусть студенты перестанут использовать DeepSeek и никогда тебя не расстраивают, а дипломники будут самостоятельными, ответственными и способными.",
      "Чтобы друзья и все, кого ты любишь, были рядом, а ты здорово проводил с ними время.",
      "Ты очень любишь свой родной город, поэтому я желаю тебе чаще туда ездить, видеть родителей, и чтобы они были здоровы и счастливы.",
      "Чтобы твои хобби приносили тебе удовольствие, чтобы ты чаще играл в футбол, чтобы твои команды выигрывали, чтобы ты забивал самые красивые голы и не получал никаких травм.",
      "Я знаю, что ты в глубине души хочешь семью, дом, семейный очаг, как у твоих родителей, и я желаю тебе, чтобы у тебя была семья, дети, уютный дом и счастье.",
      "Чтобы все твои потаённые мечты сбывались, чтобы желания исполнялись, чтобы жизнь была яркой, насыщенной, долгой.",
      "Ты для меня очень дорог.",
    ],
    // Фото «хроник» над медальоном. Оставь пустой массив [], если не нужно.
    photos: [
      {
        src: "images/us-1.jpg",
        caption:
          "С совместными фотографиями проблема, я везде третья лишняя)))",
      },
      {
        src: "images/us-2.jpg",
        caption: "Последнее фото. Хороший был день",
      },
    ],
  },
};

/* =========================================================================
   Дальше — логика. Для правки текстов сюда заходить не нужно.
   ========================================================================= */
(function () {
  "use strict";

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const SVG_NS = "http://www.w3.org/2000/svg";
  const rand = (a, b) => a + Math.random() * (b - a);

  document.documentElement.classList.add("js");

  /* ---------- Тексты из CONTENT ---------- */
  function get(path) {
    return path
      .split(".")
      .reduce((o, k) => (o == null ? undefined : o[k]), CONTENT);
  }
  function fillTexts() {
    $$("[data-text]").forEach((el) => {
      const v = get(el.dataset.text);
      if (v != null) el.textContent = v;
    });
    $$("[data-paras]").forEach((el) => {
      let v = get(el.dataset.paras);
      if (typeof v === "string") v = [v];
      el.textContent = "";
      (v || []).forEach((t) => {
        const p = document.createElement("p");
        p.textContent = t;
        el.append(p);
      });
      // буквица не нужна, если текст начинается с [ЗАГЛУШКИ]
      el.classList.toggle("starts-bracket", /^\s*\[/.test((v || [])[0] || ""));
    });
    const [c1, c2] = CONTENT.field.irtyshColors || [];
    if (c1) document.documentElement.style.setProperty("--irtysh-1", c1);
    if (c2) document.documentElement.style.setProperty("--irtysh-2", c2);
  }

  function plural(n, one, few, many) {
    const m10 = n % 10,
      m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
    return many;
  }

  /* ---------- Появление разделов при прокрутке ---------- */
  function initReveal() {
    const items = $$(".reveal");
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" },
    );
    items.forEach((el) => io.observe(el));
  }

  /* =======================================================================
     1. Экран-вход
     ======================================================================= */
  function initIntro() {
    const intro = $("#intro");
    const medal = $("#introMedallion");
    const done = () => {
      intro.classList.add("is-gone");
    };
    medal.addEventListener(
      "click",
      () => {
        unlockAudio();
        document.body.classList.remove("is-locked");
        $("#player").classList.add("is-ready");
        if (reduced) {
          intro.classList.add("is-open");
          done();
          unlock("open");
          return;
        }
        medal.classList.add("is-shudder");
        setTimeout(() => intro.classList.add("is-open"), 520);
        setTimeout(done, 520 + 1150);
        setTimeout(() => unlock("open"), 520 + 1250);
      },
      { once: true },
    );
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
    const group = $("#candles");
    const n = CONTENT.age || 27;
    const cx = 180,
      cy = 170,
      rx = 122,
      ry = 36;
    const colors = ["#efe3c8", "#d4a74a", "#b8433b"];
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
      const g = svgEl("g", {
        class: "candle",
        transform: `translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${s.toFixed(3)})`,
        role: "button",
        tabindex: "0",
        "aria-label": `Свеча ${i + 1}`,
      });
      g.append(
        svgEl("rect", {
          class: "candle__hit",
          x: -12,
          y: -64,
          width: 24,
          height: 68,
        }),
        svgEl("ellipse", {
          cx: 0,
          cy: 0,
          rx: 6,
          ry: 2.2,
          fill: "rgba(0,0,0,.35)",
        }),
        svgEl("rect", {
          class: "candle__body",
          x: -3.6,
          y: -32,
          width: 7.2,
          height: 32,
          rx: 1.6,
          fill: color,
        }),
        svgEl("path", {
          d: "M-3.6 -22 l7.2 -4 M-3.6 -12 l7.2 -4",
          stroke: color === "#b8433b" ? "#efe3c8" : "#8e2a2a",
          "stroke-width": 1.8,
          opacity: 0.7,
        }),
        svgEl("line", {
          x1: 0,
          y1: -32,
          x2: 0,
          y2: -36,
          stroke: "#2a1a10",
          "stroke-width": 1.2,
        }),
        svgEl("circle", {
          class: "candle__glow",
          cx: 0,
          cy: -43,
          r: 14,
          fill: "url(#g-glow)",
        }),
        svgEl("path", {
          class: "candle__flame",
          d: "M0 -35 C-4.5 -38 -4.5 -44 0 -51 C4.5 -44 4.5 -38 0 -35 Z",
          fill: "url(#g-flame)",
        }),
        svgEl("path", {
          class: "candle__smoke",
          d: "M0 -38 q-3 -5 0 -10 q3 -5 0 -10",
        }),
      );
      const delay = `${-rand(0, 1.4).toFixed(2)}s`;
      g.children[5].style.animationDelay = delay;
      g.children[6].style.animationDelay = delay;
      group.append(g);
      cake.candles.push(g);
    });
    cake.lit = n;
    updateCounter();

    group.addEventListener("click", (e) => {
      const c = e.target.closest(".candle");
      if (c) blowOut(c);
    });
    group.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const c = e.target.closest(".candle");
      if (c) {
        e.preventDefault();
        blowOut(c);
      }
    });

    $("#relightBtn").addEventListener("click", relight);
    initMic();
  }

  function updateCounter() {
    $("#candlesLeft").textContent = cake.lit;
  }

  function blowOut(c) {
    if (c.classList.contains("is-out")) return;
    c.classList.add("is-out");
    c.setAttribute("aria-label", c.getAttribute("aria-label") + " (погашена)");
    cake.lit--;
    updateCounter();
    if (cake.lit === 0) allOut();
  }

  function allOut() {
    stopMic();
    unlock("candles");
    $("#micBtn").hidden = true;
    const wish = $("#cakeWish");
    wish.hidden = false;
    confetti();
    setTimeout(
      () =>
        wish.scrollIntoView({
          behavior: reduced ? "auto" : "smooth",
          block: "center",
        }),
      250,
    );
  }

  function relight() {
    cake.candles.forEach((c) => {
      c.classList.remove("is-out");
      c.setAttribute(
        "aria-label",
        c.getAttribute("aria-label").replace(" (погашена)", ""),
      );
    });
    cake.lit = cake.candles.length;
    updateCounter();
    $("#cakeWish").hidden = true;
    if (cake.micSupported) $("#micBtn").hidden = false;
  }

  /* ---------- Задуть по-настоящему: микрофон + Web Audio ---------- */
  function initMic() {
    const btn = $("#micBtn");
    const AC = window.AudioContext || window.webkitAudioContext;
    cake.micSupported = !!(
      AC &&
      navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia &&
      window.isSecureContext
    );
    if (!cake.micSupported) return;
    btn.hidden = false;
    btn.addEventListener("click", () => (cake.mic ? stopMic() : startMic()));
  }

  async function startMic() {
    const btn = $("#micBtn");
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false,
        },
      });
    } catch (err) {
      // Отказ или ошибка — молча оставляем клики
      btn.hidden = true;
      cake.micSupported = false;
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    const ctx = new AC();
    if (ctx.state === "suspended") ctx.resume();
    const src = ctx.createMediaStreamSource(stream);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 1024;
    src.connect(analyser);
    const data = new Uint8Array(analyser.fftSize);
    const meter = $("#micMeter");
    const bar = meter.firstElementChild;
    meter.hidden = false;
    btn.classList.add("is-on");
    $("#micBtnLabel").textContent = CONTENT.cake.micListening;

    const started = performance.now();
    let baseline = 0,
      baseN = 0,
      blowAcc = 0,
      last = started,
      level = 0;
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
        baseline += rms;
        baseN++;
      } else {
        const base = baseN ? baseline / baseN : 0.02;
        const threshold = Math.max(0.12, base * 4);
        bar.style.width =
          Math.min(100, (level / (threshold * 1.6)) * 100) + "%";
        if (level > threshold) {
          blowAcc += dt;
          while (blowAcc > 90) {
            // пока дуешь — гаснет свеча каждые ~90 мс
            blowAcc -= 90;
            const lit = cake.candles.filter(
              (c) => !c.classList.contains("is-out"),
            );
            if (lit.length) {
              unlock("mic");
              blowOut(lit[Math.floor(Math.random() * lit.length)]);
            }
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
    $("#micMeter").hidden = true;
    $("#micBtn").classList.remove("is-on");
    $("#micBtnLabel").textContent = CONTENT.cake.micButton;
  }

  /* ---------- Конфетти на canvas ---------- */
  function confetti() {
    if (reduced) return;
    const canvas = $("#confetti");
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth,
      h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const colors = [
      "#f1d38a",
      "#d4a74a",
      "#e0782c",
      "#b8433b",
      "#efe3c8",
      "#8e2a2a",
    ];
    const parts = [];
    for (let i = 0; i < 170; i++) {
      const a = rand(-Math.PI * 0.92, -Math.PI * 0.08);
      const sp = rand(7, 16);
      parts.push({
        x: w / 2 + rand(-20, 20),
        y: h * 0.55,
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp,
        w: rand(6, 11),
        h: rand(3, 6),
        r: rand(0, 6),
        vr: rand(-0.25, 0.25),
        c: colors[i % colors.length],
        ph: rand(0, 6),
        round: Math.random() < 0.25,
      });
    }
    for (let i = 0; i < 90; i++) {
      parts.push({
        x: rand(0, w),
        y: rand(-h * 0.6, -10),
        vx: rand(-1, 1),
        vy: rand(1, 3),
        w: rand(6, 10),
        h: rand(3, 5),
        r: rand(0, 6),
        vr: rand(-0.2, 0.2),
        c: colors[i % colors.length],
        ph: rand(0, 6),
        round: Math.random() < 0.25,
      });
    }
    const t0 = performance.now();
    const frame = (now) => {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);
      let alive = 0;
      for (const p of parts) {
        p.vy += 0.28;
        p.vx *= 0.985;
        p.vy *= 0.985;
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
        if (p.round) {
          ctx.beginPath();
          ctx.arc(0, 0, p.h * 0.7, 0, Math.PI * 2);
          ctx.fill();
        } else ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
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
    const el = $("#reelsCount");
    const now = new Date();
    let n = 3 + Math.floor((now.getHours() * 60 + now.getMinutes()) / 11);
    el.textContent = n;
    const bump = () => {
      n += Math.random() < 0.8 ? 1 : 2;
      el.textContent = n;
      el.classList.remove("is-bump");
      void el.offsetWidth;
      el.classList.add("is-bump");
      setTimeout(bump, rand(3500, 9000));
    };
    setTimeout(bump, rand(3000, 6000));
  }

  const PH_ICON =
    '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="9" width="38" height="30" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="19" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 36l11-11 7 7 6-6 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';

  function placeholder(src) {
    const d = document.createElement("div");
    d.className = "photo__ph";
    d.innerHTML = PH_ICON + "<span>Место для фото</span>";
    if (src) {
      const code = document.createElement("code");
      code.textContent = src;
      d.append(code);
    }
    return d;
  }

  function initGalleries() {
    $$("[data-gallery]").forEach((box) => {
      const list = get(box.dataset.gallery) || [];
      list.forEach((item) => {
        const photo = typeof item === "string" ? { src: item } : item;
        const fig = document.createElement("figure");
        fig.className = "photo";
        const frame = document.createElement("div");
        frame.className = "photo__frame";
        if (photo.src) {
          const img = new Image();
          img.alt = photo.alt || photo.caption || "";
          img.loading = "lazy";
          img.decoding = "async";
          img.style.opacity = "0";
          img.onload = () => {
            img.style.opacity = "";
          };
          img.onerror = () => frame.replaceChildren(placeholder(photo.src));
          img.src = photo.src;
          frame.append(img);
        } else {
          frame.append(placeholder(""));
        }
        fig.append(frame);
        if (photo.caption) {
          const cap = document.createElement("figcaption");
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
    const canvas = $("#pkCanvas");
    const ctx = canvas.getContext("2d");
    const W = 360,
      H = 270;
    const G = { l: 62, r: 298, t: 58, b: 150 }; // ворота
    const SPOT = { x: 180, y: 234 }; // точка
    const FLIGHT = 0.62; // время полёта мяча, с
    let scale = 1,
      running = false,
      lastT = 0;

    const st = {
      phase: "aim",
      results: [],
      keeper: { x: 180, v: 90, change: 1, lean: 0, dive: null },
      ball: { x: SPOT.x, y: SPOT.y, r: 9, vx: 0, vy: 0 },
      shot: null,
      msg: "",
      msgT: 0,
      net: 0,
      hover: null,
    };

    function resize() {
      const w = canvas.clientWidth || 320;
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(((w * H) / W) * dpr);
      scale = canvas.width / W;
      draw();
    }

    function toLogical(e) {
      const r = canvas.getBoundingClientRect();
      return {
        x: ((e.clientX - r.left) / r.width) * W,
        y: ((e.clientY - r.top) / r.height) * H,
      };
    }

    canvas.addEventListener("pointerdown", (e) => {
      if (st.phase !== "aim") return;
      const p = toLogical(e);
      if (p.y > G.b + 34) return; // тап по траве у ног — не удар
      if (p.y > G.b - 4) p.y = G.b - 6; // удар низом
      shoot(p);
    });
    canvas.addEventListener("pointermove", (e) => {
      st.hover = e.pointerType === "mouse" ? toLogical(e) : null;
    });
    canvas.addEventListener("pointerleave", () => {
      st.hover = null;
    });

    function shoot(p) {
      const to = { x: p.x + rand(-5, 5), y: p.y + rand(-5, 5) };
      st.shot = { to, t: 0 };
      const k = st.keeper;
      // вратарь угадывает направление чуть чаще, чем в половине случаев
      k.dive =
        Math.random() < 0.55
          ? to.x
          : k.x + (Math.random() < 0.5 ? -1 : 1) * rand(30, 80);
      k.dive = Math.max(G.l + 10, Math.min(G.r - 10, k.dive));
      st.phase = "flight";
      $("#pkHint").style.visibility = "hidden";
    }

    function judge() {
      const b = st.ball,
        k = st.keeper;
      const nearPost = Math.abs(b.x - G.l) < 4 || Math.abs(b.x - G.r) < 4;
      const nearBar = Math.abs(b.y - G.t) < 4 && b.x > G.l - 4 && b.x < G.r + 4;
      if ((nearPost && b.y > G.t - 4) || nearBar) return "post";
      if (b.x <= G.l || b.x >= G.r || b.y <= G.t) return "miss";
      const diving = Math.abs(k.lean) > 0.3;
      const reachX = diving ? 32 : 24;
      const reachUp = diving ? 84 : 66;
      if (Math.abs(b.x - k.x) <= reachX && b.y >= G.b - reachUp) return "save";
      return "goal";
    }

    function finishShot(res) {
      const b = st.ball;
      st.results.push(res === "goal");
      st.msg = { goal: "ГОЛ!", save: "Сейв!", miss: "Мимо!", post: "Штанга!" }[
        res
      ];
      st.msgT = 1.3;
      st.phase = "result";
      if (res === "goal") {
        unlock("goal");
        st.net = 1;
        b.vx = 0;
        b.vy = 0;
      } else if (res === "save") {
        b.vx = (b.x - st.keeper.x) * 4 + rand(-60, 60);
        b.vy = 180;
      } else if (res === "post") {
        b.vx = rand(-80, 80);
        b.vy = 220;
      } else {
        b.vx = (b.x - 180) * 0.6;
        b.vy = -120;
      }
      const i = st.results.length - 1;
      $$("#pkDots i")[i].classList.add(res === "goal" ? "is-goal" : "is-miss");
      $("#pkGoals").textContent = st.results.filter(Boolean).length;
    }

    function nextShot() {
      if (st.results.length >= 5) {
        st.phase = "over";
        const goals = st.results.filter(Boolean).length;
        if (goals === 5) unlock("perfect");
        $("#pkResultText").textContent =
          `${goals} из 5. ${CONTENT.field.results[goals] || ""}`;
        $("#pkResult").hidden = false;
        return;
      }
      Object.assign(st.ball, { x: SPOT.x, y: SPOT.y, r: 9, vx: 0, vy: 0 });
      st.keeper.dive = null;
      st.phase = "aim";
      $("#pkShot").textContent = st.results.length + 1;
      $("#pkHint").style.visibility = "";
    }

    $("#pkRestart").addEventListener("click", () => {
      st.results = [];
      $$("#pkDots i").forEach((d) => d.classList.remove("is-goal", "is-miss"));
      $("#pkGoals").textContent = "0";
      $("#pkResult").hidden = true;
      nextShot();
    });

    function update(dt) {
      const k = st.keeper,
        b = st.ball;
      if (st.phase === "aim") {
        k.change -= dt;
        if (k.change <= 0) {
          k.v = (Math.random() < 0.5 ? -1 : 1) * rand(50, 150);
          k.change = rand(0.5, 1.4);
        }
        k.x += k.v * dt;
        if (k.x < G.l + 24) {
          k.x = G.l + 24;
          k.v = Math.abs(k.v);
        }
        if (k.x > G.r - 24) {
          k.x = G.r - 24;
          k.v = -Math.abs(k.v);
        }
        k.lean += (0 - k.lean) * Math.min(1, dt * 8);
      } else if (st.phase === "flight") {
        const dx = k.dive - k.x;
        const step = Math.sign(dx) * Math.min(Math.abs(dx), 200 * dt);
        k.x += step;
        k.lean +=
          (Math.max(-1, Math.min(1, dx / 30)) - k.lean) * Math.min(1, dt * 10);
        const s = st.shot;
        s.t = Math.min(1, s.t + dt / FLIGHT);
        const e = s.t;
        b.x = SPOT.x + (s.to.x - SPOT.x) * e;
        b.y = SPOT.y + (s.to.y - SPOT.y) * e - Math.sin(Math.PI * e) * 18;
        b.r = 9 - 3.5 * e;
        if (s.t >= 1) finishShot(judge());
      } else if (st.phase === "result") {
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        b.vx *= 0.96;
        b.vy *= 0.96;
        st.net = Math.max(0, st.net - dt * 1.5);
        st.msgT -= dt;
        if (st.msgT <= 0) nextShot();
      }
    }

    function draw() {
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      // трава
      for (let i = 0; i < 10; i++) {
        ctx.fillStyle = i % 2 ? "#2a4523" : "#2f4d27";
        ctx.fillRect(0, i * 27, W, 27);
      }
      const vg = ctx.createRadialGradient(W / 2, H / 2, 60, W / 2, H / 2, 260);
      vg.addColorStop(0, "rgba(0,0,0,0)");
      vg.addColorStop(1, "rgba(0,0,0,.45)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, W, H);

      // разметка
      ctx.strokeStyle = "rgba(255,255,255,.5)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, G.b);
      ctx.lineTo(W, G.b);
      ctx.moveTo(G.l - 30, G.b);
      ctx.lineTo(G.l - 44, 190);
      ctx.lineTo(G.r + 44, 190);
      ctx.lineTo(G.r + 30, G.b);
      ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,.7)";
      ctx.beginPath();
      ctx.ellipse(SPOT.x, SPOT.y + 4, 4, 2, 0, 0, Math.PI * 2);
      ctx.fill();

      // сетка
      ctx.fillStyle = "rgba(10,10,10,.35)";
      ctx.fillRect(G.l, G.t, G.r - G.l, G.b - G.t);
      ctx.strokeStyle = "rgba(255,255,255,.18)";
      ctx.lineWidth = 1;
      const bx = st.ball.x,
        by = st.ball.y,
        bulge = st.net * 6;
      ctx.beginPath();
      for (let x = G.l; x <= G.r; x += 12) {
        const off = bulge * Math.exp(-((x - bx) ** 2) / 800);
        ctx.moveTo(x, G.t);
        ctx.lineTo(x, G.b + off * 0.2);
      }
      for (let y = G.t; y <= G.b; y += 10) {
        const off = bulge * Math.exp(-((y - by) ** 2) / 600);
        ctx.moveTo(G.l, y);
        ctx.lineTo(G.r, y - off);
      }
      ctx.stroke();
      // штанги
      ctx.strokeStyle = "#f4efe2";
      ctx.lineWidth = 5;
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(G.l, G.b + 1);
      ctx.lineTo(G.l, G.t);
      ctx.lineTo(G.r, G.t);
      ctx.lineTo(G.r, G.b + 1);
      ctx.stroke();

      drawKeeper();

      // прицел (только мышь)
      if (st.hover && st.phase === "aim" && st.hover.y < G.b + 34) {
        ctx.strokeStyle = "rgba(241,211,138,.9)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(st.hover.x, Math.min(st.hover.y, G.b - 6), 8, 0, Math.PI * 2);
        ctx.stroke();
      }

      // мяч
      const b = st.ball;
      ctx.fillStyle = "rgba(0,0,0,.35)";
      ctx.beginPath();
      ctx.ellipse(
        b.x,
        st.phase === "flight"
          ? SPOT.y + (G.b - SPOT.y) * st.shot.t + 4
          : b.y + b.r * 0.8,
        b.r,
        b.r * 0.35,
        0,
        0,
        Math.PI * 2,
      );
      ctx.fill();
      ctx.fillStyle = "#fbf8f0";
      ctx.strokeStyle = "#2a2420";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#2a2420";
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
        const px = b.x + Math.cos(a) * b.r * 0.38,
          py = b.y + Math.sin(a) * b.r * 0.38;
        i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
      }
      ctx.fill();

      // надпись
      if (st.phase === "result" && st.msg) {
        ctx.font = '700 38px "Cormorant SC", Georgia, serif';
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineWidth = 5;
        ctx.strokeStyle = "rgba(20,16,12,.85)";
        ctx.fillStyle = st.msg === "ГОЛ!" ? "#f1d38a" : "#e9a19a";
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
      ctx.strokeStyle = "#1d1611";
      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(-5, -16);
      ctx.lineTo(-8, 0);
      ctx.moveTo(5, -16);
      ctx.lineTo(8, 0);
      ctx.stroke();
      // шорты и свитер
      ctx.fillStyle = "#1d1611";
      ctx.fillRect(-10, -24, 20, 10);
      ctx.fillStyle = "#d4a74a";
      ctx.beginPath();
      ctx.roundRect
        ? ctx.roundRect(-11, -50, 22, 28, 4)
        : ctx.rect(-11, -50, 22, 28);
      ctx.fill();
      ctx.fillStyle = "#8e2a2a";
      ctx.fillRect(-11, -40, 22, 4);
      // руки
      ctx.strokeStyle = "#d4a74a";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(-9, -46);
      ctx.lineTo(-22, -62);
      ctx.moveTo(9, -46);
      ctx.lineTo(22, -62);
      ctx.stroke();
      ctx.fillStyle = "#f4efe2";
      ctx.beginPath();
      ctx.arc(-23, -64, 4.5, 0, Math.PI * 2);
      ctx.arc(23, -64, 4.5, 0, Math.PI * 2);
      ctx.fill();
      // голова
      ctx.fillStyle = "#e8c9a0";
      ctx.beginPath();
      ctx.arc(0, -58, 7.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#3a2416";
      ctx.beginPath();
      ctx.arc(0, -61, 7.5, Math.PI, 0);
      ctx.fill();
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
      if (on) {
        lastT = performance.now();
        requestAnimationFrame(loop);
      }
    }

    if ("ResizeObserver" in window) new ResizeObserver(resize).observe(canvas);
    else window.addEventListener("resize", resize);
    resize();
    // Игра крутится только когда видна на экране — бережём батарею
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([en]) =>
        setRunning(en.isIntersecting && !document.hidden),
      ).observe(canvas);
      document.addEventListener("visibilitychange", () => {
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
     6. Лаборатория: светодиод и код прошивки
     ======================================================================= */
  function initLab() {
    const led = $("#led");
    const board = led.ownerSVGElement;
    let slow = false;
    const setMode = (value) => {
      slow = value;
      if (slow) unlock("led");
      oled.notify(slow);
      board.style.setProperty(
        "--blink",
        slow ? (60 / 27).toFixed(3) + "s" : "1s",
      );
      $("#ledFreq").textContent = slow ? "27" : "60";
      $("#ledNote").textContent = slow
        ? CONTENT.lab.led27
        : CONTENT.lab.ledHint;
    };
    // Кнопка на плате: вдавливается при нажатии и выполняет действие
    const pcbButton = (btn, action) => {
      const press = () => {
        btn.classList.add("is-pressed", "is-used");
        setTimeout(() => btn.classList.remove("is-pressed"), 150);
        action();
      };
      btn.addEventListener("click", press);
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          press();
        }
      });
    };
    pcbButton($("#userBtn"), () => setMode(!slow));
    pcbButton($("#resetBtn"), () => {
      led.classList.add("is-reset");
      setTimeout(() => {
        led.classList.remove("is-reset");
        setMode(false);
        $("#ledNote").textContent = CONTENT.lab.resetNote;
      }, 600);
    });

    $("#firmware").innerHTML = highlightC(CONTENT.lab.firmware);
    initIdeTabs();
    initGitLog();
    initTerminal();
    initOled();
    initAnalyzer();
  }

  /* ---------- OLED-дисплей 128×64 ---------- */
  const oled = { notify() {}, solve() {} };

  function initOled() {
    const O = CONTENT.lab.oled;
    const cv = $("#oledCanvas");
    const ctx = cv.getContext("2d");
    const buf = document.createElement("canvas");
    buf.width = 128;
    buf.height = 64;
    const b = buf.getContext("2d", { willReadFrequently: true });
    const img = ctx.createImageData(128, 64);
    const screens = ["fox", "age", "graph", "count", "uart"];
    const graph = [];
    const [bd, bm, by] = CONTENT.birthday.split(".").map(Number);
    const birthday = new Date(by, bm - 1, bd);
    const pad = (n) => String(n).padStart(2, "0");
    let idx = 0;
    let shownAt = performance.now();
    let notice = null;
    let running = false;
    let lastDraw = 0;

    const FONT = '"Press Start 2P", monospace';
    const txt = (s, x, y, size = 8, align = "left") => {
      b.font = `${size}px ${FONT}`;
      b.textAlign = align;
      b.fillText(s, x, y);
    };
    const header = (title) => {
      txt(title, 0, 12);
      txt("0x3C", 128, 12, 8, "right");
    };
    const poly = (pts) => {
      b.beginPath();
      pts.forEach(([x, y], i) => (i ? b.lineTo(x, y) : b.moveTo(x, y)));
      b.closePath();
      b.fill();
    };
    const drawFox = (x, y, s) => {
      b.save();
      b.translate(x, y);
      b.scale(s, s);
      poly([
        [2, 2],
        [36, 34],
        [68, 34],
        [102, 2],
        [104, 62],
        [84, 92],
        [52, 128],
        [20, 92],
        [0, 62],
      ]);
      b.fillStyle = "#000";
      poly([
        [10, 18],
        [30, 36],
        [14, 52],
      ]);
      poly([
        [94, 18],
        [74, 36],
        [90, 52],
      ]);
      poly([
        [16, 60],
        [44, 70],
        [24, 76],
      ]);
      poly([
        [88, 60],
        [60, 70],
        [80, 76],
      ]);
      poly([
        [42, 112],
        [62, 112],
        [52, 126],
      ]);
      b.strokeStyle = "#000";
      b.lineWidth = 6;
      b.beginPath();
      b.moveTo(0, 62);
      b.lineTo(26, 80);
      b.lineTo(52, 100);
      b.lineTo(78, 80);
      b.lineTo(104, 62);
      b.stroke();
      b.restore();
      b.fillStyle = "#fff";
    };

    function scene(now) {
      b.fillStyle = "#000";
      b.fillRect(0, 0, 128, 64);
      b.fillStyle = "#fff";
      b.strokeStyle = "#fff";
      if (notice && now < notice.until) {
        header(notice.title);
        txt(notice.big, 64, 44, 16, "center");
        txt(notice.small, 64, 60, 8, "center");
        return;
      }
      const t = now / 1000;
      const name = screens[idx];
      if (name === "fox") {
        header("LIS-27");
        drawFox(4, 19, 0.27);
        txt(O.foxLine1, 42, 32);
        txt(O.foxLine2, 42, 44);
        b.font = `8px ${FONT}`;
        b.textAlign = "left";
        const w = b.measureText(O.marquee).width;
        b.fillText(
          O.marquee,
          reduced ? 0 : Math.round(128 - ((t * 32) % (w + 128))),
          62,
        );
      } else if (name === "age") {
        header("AGE");
        const forms = [
          ["27", "DEC"],
          ["0x1B", "HEX"],
          ["0b11011", "BIN"],
        ];
        const [v, label] = forms[Math.floor(t / 1.5) % forms.length];
        txt(v, 64, 44, 16, "center");
        txt(label, 64, 60, 8, "center");
      } else if (name === "graph") {
        header("I_OUT, A");
        graph.push(27 + (Math.random() - 0.5) * 0.0004);
        if (graph.length > 128) graph.shift();
        b.lineWidth = 1;
        b.beginPath();
        graph.forEach((v, i) => {
          const y = Math.round(36 - (v - 27) * 40000) + 0.5;
          i ? b.lineTo(i + 0.5, y) : b.moveTo(i + 0.5, y);
        });
        b.stroke();
        txt("I=27.000 A", 64, 62, 8, "center");
      } else if (name === "count") {
        header(O.countTitle);
        const diff = birthday - Date.now();
        if (diff > 0) {
          const s = Math.floor(diff / 1000);
          const d = Math.floor(s / 86400);
          const h = Math.floor((s % 86400) / 3600);
          const m = Math.floor((s % 3600) / 60);
          txt(`${O.countLeft} ${d} ДН`, 64, 32, 8, "center");
          txt(`${pad(h)}:${pad(m)}:${pad(s % 60)}`, 64, 54, 16, "center");
        } else if (diff > -864e5) {
          txt(O.todayBig, 64, 42, 16, "center");
          txt(O.todaySmall, 64, 58, 8, "center");
        } else {
          txt(O.afterBig, 64, 48, 16, "center");
        }
      } else if (name === "uart") {
        header("UART TX");
        txt("BRR=0x16D", 64, 32, 8, "center");
        txt("PCLK1 42 MHZ", 64, 46, 8, "center");
        if (O.uartLine2) txt(O.uartLine2, 64, 60, 8, "center");
      } else if (name === "genius") {
        header("D0 DECODED");
        txt(O.genius1, 64, 38, 16, "center");
        txt(O.genius2, 64, 58, 16, "center");
        for (let i = 0; i < 12; i++)
          b.fillRect(
            (Math.random() * 128) | 0,
            17 + ((Math.random() * 46) | 0),
            1,
            1,
          );
      }
    }

    // Порог в 1 бит + двухцветная матрица: верхние 16 строк жёлтые, остальные голубые
    function blit() {
      const src = b.getImageData(0, 0, 128, 64).data;
      const d = img.data;
      for (let i = 0, p = 0; i < src.length; i += 4, p++) {
        const on = src[i] > 160;
        const top = p < 128 * 16;
        d[i] = on ? (top ? 255 : 110) : 6;
        d[i + 1] = on ? (top ? 208 : 205) : 9;
        d[i + 2] = on ? (top ? 64 : 255) : 14;
        d[i + 3] = 255;
      }
      ctx.putImageData(img, 0, 0);
    }

    const dots = $("#oledDots");
    function renderDots() {
      dots.textContent = "";
      screens.forEach((_, i) => {
        const dot = document.createElement("i");
        if (i === idx) dot.className = "is-on";
        dots.append(dot);
      });
    }
    function draw(now) {
      scene(now);
      blit();
    }
    function go(i) {
      idx = (i + screens.length) % screens.length;
      shownAt = performance.now();
      notice = null;
      renderDots();
      draw(performance.now());
    }
    function frame(now) {
      if (!running) return;
      if (now - lastDraw > 66) {
        lastDraw = now;
        const noticeOn = notice && now < notice.until;
        if (!reduced && !noticeOn && now - shownAt > 5000) go(idx + 1);
        else draw(now);
      }
      requestAnimationFrame(frame);
    }

    const box = $("#oled");
    box.addEventListener("click", () => go(idx + 1));
    box.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        go(idx + 1);
      }
    });

    oled.notify = (slow) => {
      notice = {
        title: "LD2",
        big: slow ? "27/МИН" : "60/МИН",
        small: slow ? O.led27 : O.led60,
        until: performance.now() + 2200,
      };
      shownAt = performance.now();
      draw(performance.now());
    };
    oled.solve = () => {
      if (!screens.includes("genius")) screens.push("genius");
      go(screens.indexOf("genius"));
      shownAt = performance.now() + 10000; // подольше задержаться на этом экране
    };

    renderDots();
    draw(performance.now());
    if (document.fonts && document.fonts.load) {
      document.fonts.load(`8px ${FONT}`).then(() => draw(performance.now()));
    }
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([en]) => {
        const on = en.isIntersecting;
        if (on && !running) {
          running = true;
          requestAnimationFrame(frame);
        } else if (!on) running = false;
      }).observe(box);
    }
  }

  /* ---------- Логический анализатор: настоящий UART-декодер ---------- */
  function initAnalyzer() {
    const A = CONTENT.lab.analyzer;
    const bytes = Array.from(new TextEncoder().encode(A.answer));
    const T = 1e6 / 115200; // длительность бита на реальной скорости, мкс
    const PX = 7 / T; // пикселей на мкс: 7 px на бит
    const gaps = [2, 1, 1, 3, 1, 2, 1, 1, 2, 1, 3, 1, 1, 2, 1];

    // Сигнал линии TX: старт-бит 0, 8 бит данных младшим вперёд, бит чётности (even), стоп-бит 1, паузы
    const edges = [{ t: 0, v: 1 }];
    let t = 6 * T;
    const put = (v, dur) => {
      if (edges[edges.length - 1].v !== v) edges.push({ t, v });
      t += dur;
    };
    bytes.forEach((byte, i) => {
      put(0, T);
      let ones = 0;
      for (let k = 0; k < 8; k++) {
        const b = (byte >> k) & 1;
        ones += b;
        put(b, T);
      }
      put(ones & 1, T); // even: общее число единиц чётное
      put(1, T + gaps[i % gaps.length] * T);
    });
    put(1, 8 * T);
    const total = t;
    const level = (x) => {
      let v = 1;
      for (const e of edges) {
        if (e.t > x) break;
        v = e.v;
      }
      return v;
    };

    // Декодер сэмплирует середину каждого бита на выбранной скорости и формате кадра («8E1» и т. п.)
    function decode(baud, frame) {
      const bt = 1e6 / baud;
      const nd = +frame[0];
      const par = frame[1]; // N, E или O
      const len = 1 + nd + (par === "N" ? 0 : 1) + 1;
      const frames = [];
      let x = 0;
      for (let i = 1; i < edges.length; i++) {
        const e = edges[i];
        if (e.v !== 0 || e.t < x) continue;
        const s = e.t;
        if (s + len * bt > total) break;
        if (level(s + 0.5 * bt) !== 0) continue;
        let val = 0;
        let ones = 0;
        for (let k = 0; k < nd; k++)
          if (level(s + (1.5 + k) * bt)) {
            val |= 1 << k;
            ones++;
          }
        let ok = level(s + (len - 0.5) * bt) === 1;
        if (par !== "N") {
          ones += level(s + (1.5 + nd) * bt);
          if ((ones & 1) !== (par === "O" ? 1 : 0)) ok = false;
        }
        frames.push({ s, e: s + len * bt, val, ok });
        x = s + (len - 0.5) * bt;
      }
      return frames;
    }

    const fmt = (v, f) => {
      if (f === "hex") return v.toString(16).toUpperCase().padStart(2, "0");
      if (f === "dec") return String(v);
      return v.toString(2).padStart(8, "0");
    };

    const svg = $("#laSvg");
    const status = $("#laStatus");
    const W = Math.ceil(total * PX) + 8;
    const H = 104;
    const X = (us) => us * PX + 4;
    const Y = (v) => (v ? 56 : 92);
    let baud = 0; // пока скорость не введена, декодер молчит
    let frameFmt = "8N1";
    let format = "hex";

    function render() {
      const frames = baud ? decode(baud, frameFmt) : [];
      let h = "";
      for (let us = 10; us <= total; us += 10) {
        if (us % 100)
          h += `<line class="la__minor" x1="${X(us).toFixed(1)}" y1="11" x2="${X(us).toFixed(1)}" y2="15"/>`;
      }
      for (let us = 0; us <= total; us += 100) {
        const x = X(us).toFixed(1);
        h += `<line class="la__grid" x1="${x}" y1="14" x2="${x}" y2="${H}"/>`;
        h += `<text class="la__tick" x="${(X(us) + 3).toFixed(1)}" y="10">${us} µs</text>`;
      }
      frames.forEach((f) => {
        const x = X(f.s);
        const w = (f.e - f.s) * PX;
        h += `<rect class="la__frame${f.ok ? "" : " is-err"}" x="${x.toFixed(1)}" y="20" width="${Math.max(1, w - 1).toFixed(1)}" height="18" rx="3"/>`;
        if (w >= (format === "bin" ? 58 : 16))
          h += `<text class="la__byte" x="${(x + w / 2).toFixed(1)}" y="33">${esc(fmt(f.val, format))}</text>`;
      });
      let d = `M4 ${Y(1)}`;
      edges.slice(1).forEach((e) => {
        d += ` H${X(e.t).toFixed(1)} V${Y(e.v)}`;
      });
      d += ` H${W - 4}`;
      h += `<path class="la__wave" d="${d}"/>`;
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
      svg.setAttribute("width", W);
      svg.setAttribute("height", H);
      svg.innerHTML = h;

      const errs = frames.filter((f) => !f.ok).length;
      const ok = baud > 0 && errs === 0 && frames.length === bytes.length;
      status.textContent = !baud
        ? A.statusNone
        : (ok ? A.statusOk : A.statusBad)
            .replace("{n}", frames.length)
            .replace("{e}", errs);
      status.classList.toggle("is-ok", ok);
    }

    // Скорость вводится вручную: только цифры, разумный диапазон UART
    const baudInput = $("#laBaud");
    const applyBaud = () => {
      baudInput.value = baudInput.value.replace(/\D/g, "");
      const v = +baudInput.value;
      baud = v >= 300 && v <= 5000000 ? v : 0;
      render();
    };
    baudInput.addEventListener("input", applyBaud);
    baudInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") baudInput.blur();
    });
    $("#laFrame").addEventListener("change", (e) => {
      frameFmt = e.target.value;
      render();
    });
    $$(".la__fmt .chip").forEach((btn) =>
      btn.addEventListener("click", () => {
        format = btn.dataset.fmt;
        $$(".la__fmt .chip").forEach((x) =>
          x.setAttribute("aria-pressed", String(x === btn)),
        );
        render();
      }),
    );

    // Ответ: регистр, «ё», пробелы и знаки препинания не важны
    const norm = (s) =>
      s
        .toLowerCase()
        .replace(/ё/g, "е")
        .replace(/[^a-zа-я0-9]/g, "");
    $("#laForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = $("#laMsg");
      if (norm($("#laInput").value) === norm(A.answer)) {
        msg.textContent = "";
        $("#laWin").hidden = false;
        unlock("genius");
        oled.solve();
        confetti();
      } else {
        msg.textContent = A.wrong;
      }
    });

    let hint = 0;
    const hintBtn = $("#laHint");
    const hintLabel = () => {
      hintBtn.textContent = `${A.hintButton} ${Math.min(hint + 1, A.hints.length)}/${A.hints.length}`;
    };
    hintBtn.addEventListener("click", () => {
      if (hint >= A.hints.length) return;
      $("#laHintText").textContent = A.hints[hint];
      hint++;
      if (hint >= A.hints.length) hintBtn.disabled = true;
      else hintLabel();
    });
    hintLabel();

    render();
  }

  /* ---------- Вкладки UART / main.c / git log ---------- */
  function initIdeTabs() {
    const tabs = $$(".ide__tab");
    const select = (tab) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        $("#" + t.getAttribute("aria-controls")).hidden = !on;
      });
      $("#ideTitle").textContent = tab.dataset.title;
    };
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => select(t));
      t.addEventListener("keydown", (e) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        const next =
          tabs[
            (i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length
          ];
        next.focus();
        select(next);
      });
    });
  }

  function initGitLog() {
    const box = $("#gitLog");
    CONTENT.lab.gitLog.forEach((c) => {
      const line = document.createElement("div");
      line.className = "git-line";
      const graph = document.createElement("span");
      graph.className = "git-graph";
      graph.textContent = c.g || "";
      const body = document.createElement("span");
      body.className = "git-body";
      line.append(graph, body);
      const add = (cls, text) => {
        const sp = document.createElement("span");
        sp.className = cls;
        sp.textContent = text;
        body.append(sp);
      };
      if (c.hash) {
        add("git-hash", c.hash + " ");
        if (c.refs) add("git-refs", `(${c.refs}) `);
        add("git-msg", c.msg || "");
        if (c.date) add("git-date", `  ${c.date}`);
      }
      box.append(line);
    });
  }

  /* ---------- UART-терминал ---------- */
  function initTerminal() {
    const U = CONTENT.lab.uart;
    const out = $("#uartOut");
    const input = $("#uartInput");
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = false;

    const print = (text, cls) => {
      const div = document.createElement("div");
      div.className = "term__line" + (cls ? " term__line--" + cls : "");
      div.textContent = text;
      out.append(div);
      out.scrollTop = out.scrollHeight;
      return div;
    };
    const printAll = (lines, cls) =>
      (lines || []).forEach((t) => print(t, cls));

    const commands = {
      help: () => printAll(U.help),
      status: () => printAll(U.status),
      "git status": () => printAll(U.gitStatus),
      wish: () => printAll(U.wish, "wish"),
      clear: () => {
        out.textContent = "";
      },
      measure: async () => {
        for (let i = 0; i < 6; i++) {
          const dI = (Math.random() - 0.5) * 0.0006;
          const dU = (Math.random() - 0.5) * 0.004;
          const ppm = ((Math.abs(dI) / 27) * 1e6).toFixed(1);
          print(
            `I ${(27 + dI).toFixed(4)} A · U ${(27 + dU).toFixed(3)} V · ${ppm} ppm`,
          );
          await wait(350);
        }
        print(U.measureDone, "ok");
      },
      flash: async () => {
        print("Erasing sectors 0–5 ...");
        await wait(500);
        const bar = print("");
        for (let p = 0; p <= 100; p += 10) {
          bar.textContent = `Writing  [${"#".repeat(p / 10)}${".".repeat(10 - p / 10)}] ${p}%`;
          await wait(160);
        }
        print("Verifying ... OK", "ok");
        await wait(300);
        print(U.flashDone, "ok");
        unlock("flash");
      },
    };
    commands.git = commands["git status"];

    async function run(raw) {
      const cmd = raw.trim().toLowerCase().replace(/\s+/g, " ");
      if (!cmd || busy) return;
      print("> " + raw.trim(), "in");
      busy = true;
      try {
        if (commands[cmd]) await commands[cmd]();
        else print(U.unknown, "err");
      } finally {
        busy = false;
      }
    }

    $("#uartForm").addEventListener("submit", (e) => {
      e.preventDefault();
      if (input.value.trim()) unlock("typed");
      run(input.value);
      input.value = "";
    });
    $$("[data-cmd]").forEach((b) =>
      b.addEventListener("click", () => run(b.dataset.cmd)),
    );
    printAll(U.boot, "dim");
  }

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function highlightC(src) {
    const re =
      /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|("(?:\\.|[^"\\\n])*")|(^[ \t]*#\w+)|\b(int|void|static|volatile|while|for|if|else|return|const|unsigned|uint32_t|uint8_t)\b|\b(0x[0-9a-fA-F]+U?|\d+U?)\b|\b([A-Z][A-Z0-9_]{2,})\b/gm;
    let out = "",
      last = 0,
      m;
    while ((m = re.exec(src))) {
      out += esc(src.slice(last, m.index));
      const [tok, com, str, pre, kw, num, mac] = m;
      let cls = "";
      if (com) cls = /рожден/i.test(com) ? "tok-com is-secret" : "tok-com";
      else if (str) cls = "tok-str";
      else if (pre) cls = "tok-pre";
      else if (kw) cls = "tok-kw";
      else if (num) cls = "tok-num";
      else if (mac) cls = "tok-mac";
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
    witcher:
      '<svg viewBox="0 0 24 24"><path d="M5 3l14 18M19 3L5 21M3 17l4 4M17 21l4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    got: '<svg viewBox="0 0 24 24"><path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M12 5l-2.5-2M12 5l2.5-2M12 19l-2.5 2M12 19l2.5 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  };
  const SERIES = {
    lotr: { c: "#2f3b22", band: "#d4a74a", w: 54 },
    witcher: { c: "#26262b", band: "#cfcfd4", w: 70 },
    got: { c: "#5a1d1d", band: "#e7c77a", w: 58 },
  };

  function initShelf() {
    const shelf = $("#shelf");
    const note = $("#shelfNote");
    const heights = [252, 262, 274, 280, 258];
    const pulled = new Set();
    CONTENT.worlds.books.forEach((b, i) => {
      const s = SERIES[b.series] || SERIES.lotr;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "book";
      btn.setAttribute("aria-pressed", "false");
      btn.style.setProperty("--c", s.c);
      btn.style.setProperty("--band", s.band);
      btn.style.setProperty("--w", s.w + "px");
      btn.style.setProperty("--h", heights[i % heights.length] + "px");
      btn.innerHTML = `<span class="book__glyph" aria-hidden="true">${GLYPHS[b.series] || GLYPHS.lotr}</span>`;
      const title = document.createElement("span");
      title.className = "book__title";
      title.textContent = b.title;
      const vol = document.createElement("span");
      vol.className = "book__vol";
      vol.textContent = b.vol || "";
      btn.append(title, vol);
      btn.addEventListener("click", () => {
        $$(".book", shelf).forEach((x) => {
          x.classList.remove("is-pulled");
          x.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("is-pulled");
        btn.setAttribute("aria-pressed", "true");
        pulled.add(i);
        if (pulled.size === CONTENT.worlds.books.length) unlock("books");
        $("#shelfNoteTitle").textContent = b.title;
        $("#shelfNoteText").textContent = b.note;
        note.classList.remove("is-flash");
        void note.offsetWidth;
        note.classList.add("is-flash");
      });
      shelf.append(btn);
    });

    const questCard = (d, name) => {
      const pr = $(`#${name}Progress`);
      pr.style.setProperty("--p", d.progress + "%");
      pr.setAttribute("aria-valuenow", d.progress);
      const ul = $(`#${name}Objectives`);
      d.objectives.forEach((o) => {
        const li = document.createElement("li");
        li.textContent = o.text;
        if (o.done) li.className = "is-done";
        ul.append(li);
      });
    };
    questCard(CONTENT.worlds.diablo, "diablo");
    questCard(CONTENT.worlds.westeros, "westeros");
  }

  /* ---------- Кола: карточка предмета ---------- */
  function initCola() {
    const c = CONTENT.cola;
    const potion = $("#potion");
    const liquid = $("#potionLiquid");
    const btn = $("#colaBtn");
    const status = $("#colaStatus");
    const LIQUID_H = 112; // высота жидкости в единицах SVG
    let level = 4; // 4 глотка в бутылке

    c.stats.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      $("#colaStats").append(li);
    });
    btn.textContent = c.drink;

    btn.addEventListener("click", () => {
      if (level === 0) {
        level = 4;
        status.textContent = c.refilled;
        btn.textContent = c.drink;
      } else {
        status.textContent = c.sips[4 - level] || "";
        level--;
        if (level === 0) {
          btn.textContent = c.refill;
          unlock("cola");
        }
        potion.classList.remove("is-sip");
        void potion.getBoundingClientRect();
        potion.classList.add("is-sip");
      }
      potion.classList.toggle("is-empty", level === 0);
      liquid.style.transform = `translateY(${((4 - level) / 4) * LIQUID_H}px)`;
    });
  }

  /* =======================================================================
     8. Журнал заданий
     ======================================================================= */
  const STATUS = {
    active: "Активно",
    new: "Новое задание",
    legendary: "Легендарное",
  };
  const ROMAN = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
  ];

  function initQuests() {
    const list = $("#questList");
    CONTENT.questLog.items.forEach((q, i) => {
      const li = document.createElement("li");
      li.className = `quest parchment reveal quest--${q.status}`;
      li.innerHTML = `
        <div class="quest__top">
          <span class="quest__num">Задание ${ROMAN[i] || i + 1}</span>
          <span class="badge badge--${q.status}"></span>
        </div>
        <h3 class="quest__title"></h3>
        <p class="quest__text"></p>
        <div class="quest__foot"><button class="quest__accept" type="button" aria-pressed="false">Принять задание</button></div>`;
      $(".badge", li).textContent = STATUS[q.status] || q.status;
      $(".quest__title", li).textContent = q.title;
      $(".quest__text", li).textContent = q.text;
      const btn = $(".quest__accept", li);
      btn.addEventListener("click", () => {
        const on = btn.getAttribute("aria-pressed") !== "true";
        btn.setAttribute("aria-pressed", String(on));
        btn.textContent = on ? "Принято ✓" : "Принять задание";
        if (
          $$('.quest__accept[aria-pressed="true"]').length ===
          CONTENT.questLog.items.length
        )
          unlock("quests");
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
    const audio = $("#audio");
    if (!audio.src) return;
    unlocking = true;
    audio.muted = true;
    const p = audio.play();
    const end = () => {
      audio.pause();
      audio.muted = false;
      unlocking = false;
    };
    if (p && p.then)
      p.then(() => {
        end();
        audio.currentTime = 0;
      }).catch(end);
    else end();
  }

  function initPlayer() {
    const audio = $("#audio");
    const btn = $("#playBtn");
    const bardBtn = $("#tavernPlay");
    const title = $("#trackTitle");
    const vol = $("#volume");
    title.textContent = CONTENT.music.title;
    audio.src = CONTENT.music.src;

    // Доска заказов в таверне
    const board = $("#tavernBoard");
    CONTENT.music.board.forEach((n) => {
      const li = document.createElement("li");
      li.className = "notice";
      const h = document.createElement("h4");
      h.textContent = n.title;
      const p = document.createElement("p");
      p.textContent = n.text;
      const r = document.createElement("p");
      r.className = "notice__reward";
      r.textContent = n.reward;
      li.append(h, p, r);
      board.append(li);
    });

    // На iPhone громкость меняется только кнопками телефона — прячем ползунок
    audio.volume = 0.5;
    if (Math.abs(audio.volume - 0.5) > 0.01) $("#volWrap").hidden = true;
    audio.volume = +vol.value;
    vol.addEventListener("input", () => {
      audio.volume = +vol.value;
    });

    const toggle = () => {
      if (audio.paused) {
        audio.muted = false;
        const p = audio.play();
        if (p && p.catch) p.catch(() => {});
      } else audio.pause();
    };
    btn.addEventListener("click", toggle);
    bardBtn.addEventListener("click", toggle);

    const setState = (playing) => {
      document.body.classList.toggle("is-playing", playing);
      btn.setAttribute("aria-pressed", String(playing));
      btn.setAttribute(
        "aria-label",
        playing ? "Поставить на паузу" : "Включить музыку",
      );
      bardBtn.textContent = playing
        ? "Пусть бард передохнёт"
        : "Попросить барда спеть";
    };
    audio.addEventListener("play", () => {
      if (!unlocking) {
        setState(true);
        unlock("music");
      }
    });
    audio.addEventListener("pause", () => setState(false));
    audio.addEventListener("error", () => {
      setState(false);
      title.textContent = `Нет файла ${CONTENT.music.src}`;
      title.classList.add("is-error");
    });
  }

  /* =======================================================================
     Прочее: кнопка «к карте», финал
     ======================================================================= */
  function initToMap() {
    const btn = $("#toMap");
    const map = $("#map");
    let queued = false;
    const check = () => {
      queued = false;
      const r = map.getBoundingClientRect();
      btn.classList.toggle("is-shown", r.bottom < 0);
    };
    window.addEventListener(
      "scroll",
      () => {
        if (!queued) {
          queued = true;
          requestAnimationFrame(check);
        }
      },
      { passive: true },
    );
  }

  function initFinal() {
    const since = new Date(CONTENT.friendsSince + "T00:00:00");
    const days = Math.max(
      0,
      Math.floor((Date.now() - since.getTime()) / 864e5),
    );
    if (!isNaN(days)) {
      $("#friendDays").textContent =
        `Дружим уже ${days} ${plural(days, "день", "дня", "дней")} — ${CONTENT.friendsSinceText}`;
    }
  }

  /* =======================================================================
     Достижения
     ======================================================================= */
  const ACH_KEY = "fox27-achievements";
  const ach = { got: new Set(), queue: [], showing: false, selected: null };
  const MEDAL_SVG =
    '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="url(#g-gold)"/><circle cx="20" cy="20" r="14.5" fill="#1d140d"/><path d="M20 11L22.2 16.9L28.6 17.2L23.6 21.2L25.3 27.3L20 23.8L14.7 27.3L16.4 21.2L11.4 17.2L17.8 16.9Z" fill="#f1d38a"/></svg>';

  function initAchievements() {
    try {
      JSON.parse(localStorage.getItem(ACH_KEY) || "[]").forEach((id) =>
        ach.got.add(id),
      );
    } catch (e) {}
    renderTrophies();
    $("#trophyReset").addEventListener("click", () => {
      ach.got.clear();
      saveAchievements();
      renderTrophies();
    });
    $$(".map-loc").forEach((a) =>
      a.addEventListener("click", () => unlock("map")),
    );
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        ([en]) => {
          if (en.isIntersecting) {
            unlock("final");
            io.disconnect();
          }
        },
        { threshold: 0.6 },
      );
      io.observe($(".finale"));
    }
  }

  function saveAchievements() {
    try {
      localStorage.setItem(ACH_KEY, JSON.stringify([...ach.got]));
    } catch (e) {}
  }

  function unlock(id) {
    const list = CONTENT.achievements.list;
    const a = list.find((x) => x.id === id);
    if (!a || ach.got.has(id)) return;
    ach.got.add(id);
    saveAchievements();
    renderTrophies();
    ach.queue.push(a);
    if (ach.got.size === list.length) ach.queue.push({ all: true });
    showNextToast();
  }

  function showNextToast() {
    if (ach.showing || !ach.queue.length) return;
    const A = CONTENT.achievements;
    const a = ach.queue.shift();
    ach.showing = true;
    const t = document.createElement("div");
    t.className = "toast" + (a.all ? " toast--all" : "");
    t.innerHTML =
      MEDAL_SVG +
      '<div class="toast__text"><span class="toast__label"></span><span class="toast__title"></span></div><span class="toast__count"></span>';
    $(".toast__label", t).textContent = a.all ? A.allDoneLabel : A.toastLabel;
    $(".toast__title", t).textContent = a.all ? A.allDone : a.title;
    $(".toast__count", t).textContent = `${ach.got.size}/${A.list.length}`;
    $("#toasts").append(t);
    if (a.all) confetti();
    setTimeout(() => {
      t.classList.add("is-leaving");
      setTimeout(
        () => {
          t.remove();
          ach.showing = false;
          showNextToast();
        },
        reduced ? 0 : 400,
      );
    }, 3200);
  }

  const MEDAL_SECRET_SVG =
    '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="url(#g-gold)"/><circle cx="20" cy="20" r="14.5" fill="#1d140d"/><text x="20" y="26.5" text-anchor="middle" font-size="17" font-weight="700" font-family="Georgia, serif" fill="#f1d38a">?</text></svg>';

  function renderTrophies() {
    const A = CONTENT.achievements;
    const box = $("#trophyList");
    box.textContent = "";
    A.list.forEach((a) => {
      const got = ach.got.has(a.id);
      const open = got || !a.secret;
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "trophy" + (got ? " is-got" : "");
      btn.setAttribute("aria-pressed", String(ach.selected === a.id));
      btn.setAttribute(
        "aria-label",
        (open ? a.title : "Секретное достижение") + (got ? ", получено" : ""),
      );
      btn.innerHTML = open ? MEDAL_SVG : MEDAL_SECRET_SVG;
      btn.addEventListener("click", () => {
        ach.selected = a.id;
        renderTrophies();
      });
      li.append(btn);
      box.append(li);
    });

    const sel = A.list.find((x) => x.id === ach.selected);
    const title = $("#trophyNoteTitle");
    const text = $("#trophyNoteText");
    if (sel) {
      const got = ach.got.has(sel.id);
      const open = got || !sel.secret;
      title.textContent = open ? sel.title : "???";
      text.textContent = (open ? sel.desc : A.secretDesc) + " · ";
      const status = document.createElement("b");
      status.textContent = got ? A.gotLabel : A.lockedLabel;
      text.append(status);
    } else {
      title.textContent = A.pickTitle;
      text.textContent = A.pickText;
    }

    const n = ach.got.size;
    const total = A.list.length;
    $("#trophyCount").textContent = `${n} из ${total}`;
    const bar = $("#trophyProgress");
    bar.style.setProperty("--p", (n / total) * 100 + "%");
    bar.setAttribute("aria-valuenow", n);
    bar.setAttribute("aria-valuemax", total);
  }

  /* ---------- Сундук с легендарным лутом ---------- */
  function initLoot() {
    const L = CONTENT.loot;
    const box = $("#loot");
    const btn = $("#lootBtn");
    const item = $("#lootItem");
    L.stats.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      $("#lootStats").append(li);
    });
    btn.addEventListener("click", () => {
      box.classList.add("is-open");
      btn.hidden = true;
      unlock("loot");
      setTimeout(
        () => {
          item.hidden = false;
          item.scrollIntoView({
            behavior: reduced ? "auto" : "smooth",
            block: "nearest",
          });
        },
        reduced ? 0 : 1000,
      );
    });
  }

  /* ---------- Драконье яйцо: несколько нажатий — и дракон вылупился ---------- */
  function initDragonEgg() {
    const egg = $("#dragonEgg");
    const msg = $("#eggMsg");
    const lines = CONTENT.worlds.westeros.egg;
    let stage = 0;
    egg.addEventListener("click", () => {
      if (stage >= lines.length) return;
      stage++;
      egg.dataset.stage = stage;
      egg.classList.remove("is-wobble");
      void egg.offsetWidth;
      egg.classList.add("is-wobble");
      msg.textContent = lines[stage - 1];
      if (stage === lines.length) {
        egg.classList.add("is-hatched");
        egg.setAttribute("aria-label", "Дракон вылупился");
        unlock("dragon");
        confetti();
      }
    });
  }

  /* ---------- Ворон с письмом: сломать печать, чтобы прочитать ---------- */
  function initRaven() {
    const raven = $("#raven");
    const letter = $("#letter");
    const btn = $("#sealBtn");
    letter.classList.add("is-sealed");
    btn.addEventListener("click", () => {
      btn.disabled = true;
      raven.classList.add("is-broken");
      unlock("raven");
      setTimeout(
        () => {
          letter.classList.remove("is-sealed");
          letter.classList.add("is-unrolling");
          raven.classList.add("is-gone");
          letter.scrollIntoView({
            behavior: reduced ? "auto" : "smooth",
            block: "start",
          });
        },
        reduced ? 0 : 1400,
      );
    });
  }

  /* ---------- Ноты: карточка, по нажатию — просмотр страниц ---------- */
  function initSheet() {
    const pages = CONTENT.music.sheet.pages;
    const big = $("#sheetBig");
    const view = $("#sheetView");
    let page = 0;
    const show = (n) => {
      page = (n + pages.length) % pages.length;
      big.src = pages[page];
      big.alt = `Ноты, страница ${page + 1}`;
      $("#sheetViewNum").textContent = `${page + 1} / ${pages.length}`;
      $(".sheet-view__scroll").scrollTop = 0;
    };
    $("#sheetViewPrev").addEventListener("click", () => show(page - 1));
    $("#sheetViewNext").addEventListener("click", () => show(page + 1));
    $("#sheetOpen").addEventListener("click", () => {
      show(0);
      if (view.showModal) view.showModal();
      else window.open(pages[page], "_blank", "noopener");
    });
    $("#sheetClose").addEventListener("click", () => view.close());
    // клик по затемнению вокруг листа закрывает просмотр
    view.addEventListener("click", (e) => {
      if (e.target === view) view.close();
    });
    view.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") show(page + 1);
      if (e.key === "ArrowLeft") show(page - 1);
    });
  }

  /* ---------- Запуск ---------- */
  fillTexts();
  initAchievements();
  initIntro();
  initCake();
  initReels();
  initGalleries();
  initPenalty();
  initLab();
  initShelf();
  initCola();
  initLoot();
  initDragonEgg();
  initSheet();
  initRaven();
  initQuests();
  initPlayer();
  initToMap();
  initFinal();
  initReveal();
})();
