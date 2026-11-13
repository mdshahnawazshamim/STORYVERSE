const readerOverlay = document.getElementById("readerOverlay");
const closeReader = document.getElementById("closeReader");
const backReader = document.getElementById("backReader");

const pageBookTitle = document.getElementById("pageBookTitle");
const pageVolume = document.getElementById("pageVolume");
const pageContent = document.getElementById("pageContent");
const flipTitle = document.getElementById("flipTitle");

const bookCards = document.querySelectorAll(".book-card");

let currentBookIndex = 0;
let currentView = "parts"; // parts | original | episodes | episode
let currentEpisode = 0;


// =====================================
// FOUR STORIES AND THEIR CONTENT
// EDIT YOUR PLACEHOLDERS HERE LATER
// =====================================

const books = [

  
  // BOOK 1
  {
    title: "The Love That Followed Death",
    volume: "VOLUME I",

   
originalStory: {
  subtitle: "An unfinished love story across lifetimes",

  paragraphs: [

    "There was once a boy named Himanshu and a girl named Sakshi. They were deeply in love and believed that they would spend their entire lives together. But destiny had something else planned for them. One unfortunate day, something terrible happened, and both of them lost their lives. Their love story ended before it could reach its beautiful ending.",

    "Years later, Himanshu was born again into a new life. He was living in Delhi, unaware of his previous birth or the love he had once shared with Sakshi. One ordinary day, he visited an old bookstore, where he met a girl named Sakshi. The moment they looked into each other's eyes, both felt a strange connection, as if they had known each other for a very long time. But Himanshu had no idea that this was not an ordinary meeting.",

    "In reality, Sakshi was a restless soul who had returned in search of liberation. She had been wandering between worlds, unable to find peace. But instead of accepting her fate, she wanted Himanshu to remain with her forever, even if it meant taking his life. This time, however, Sakshi had become an evil spirit.",

    "Himanshu slowly fell for her. For the first time, a girl had approached him, shown interest in him and made him feel special. He was unaware of her true identity and believed that their connection was something beautiful. Sakshi, on the other hand, was hiding a terrifying secret.",

    "One day, she took him to an isolated place where there was nobody around. There, she asked him to leave his human life behind and stay with her as a soul. Himanshu thought she was joking and refused to believe her. Her expression suddenly changed. Filled with anger, Sakshi tried to kill him. Somehow, Himanshu managed to escape and rushed to tell his friends everything that had happened.",

    "But nobody believed him. His friends thought he was imagining things or suffering from stress. He was left alone to face the fear that was slowly taking over his life. Meanwhile, Sakshi somehow discovered his home address and decided to approach his family. She visited his house pretending to be one of his friends, hiding her real identity behind a harmless smile.",

    "What happened next was beyond anyone's imagination. Sakshi mysteriously killed Himanshu. His sudden death spread fear throughout the neighbourhood. But her madness did not end there. Soon, Himanshu's entire family was found dead in what appeared to be a series of suicides. In reality, it was Sakshi who had murdered them.",

    "A love that had once brought two souls together had now turned into a curse. Himanshu had been given another life, but Sakshi refused to let him live it. And the most terrifying question remained: Would her soul ever find liberation, or would she continue searching for Himanshu in every lifetime?"
  ]
},


    episodes: [

      {
        title: "The Girl in the Bookstore",
        paragraphs: [
          "Delhi was a city that never truly slept. Its crowded streets, endless traffic and countless people made it difficult to notice a stranger. But Himanshu had a habit of escaping the noise of the city by visiting a small second-hand bookstore in an old part of Delhi.",

          "One rainy evening, while searching through a shelf of forgotten novels, he noticed a girl standing at the other end of the aisle. She wore a simple white dress and had long hair falling over her shoulders. She was looking directly at him, as if she had been waiting for him for years.",

          "\"Have we met before?\" she asked. Himanshu smiled awkwardly. \"I was about to ask you the same thing.\" She smiled and replied, \"Maybe in another life.\"",

          "Her name was Sakshi. Hearing it made Himanshu feel strangely uncomfortable, as if the name belonged to a memory he had forgotten. Before leaving, Sakshi picked up an old novel and handed it to him. \"Keep this. You will need it,\" she said.",

          "Himanshu opened the book. On its first page, two names were written in faded ink: Sakshi and Himanshu. He immediately looked up, but the girl had disappeared.",

          "He turned to the final page. A sentence was written there in dark ink: \"We died together once. This time, I will not let you leave me.\""
        ]
      },

      {
        title: "A Familiar Stranger",
        paragraphs: [
          "The following evening, Himanshu returned to the bookstore, hoping to see Sakshi again. He told himself that he was only curious, but deep inside, he wanted to meet her.",

          "She was there. This time, she smiled as soon as she saw him. Their conversations became longer, and soon they started meeting regularly. Sakshi knew little things about him that he had never told her. She knew his favourite coffee, the songs he listened to when he was sad and even the name of his childhood street.",

          "\"How do you know so much about me?\" Himanshu asked. Sakshi simply replied, \"Some people do not need introductions.\"",

          "Himanshu had never been confident around girls. Sakshi was the first girl who had openly approached him and made him feel wanted. Slowly, he began falling for her.",

          "But something about her was unusual. She never ate anything when they met. She never spoke about her family, and her phone was always switched off. Whenever Himanshu tried to take a photograph with her, the image appeared strangely blurred.",

          "One night, Sakshi stood in front of an old mirror inside an abandoned building. Her reflection was not smiling. It was crying. A faint voice whispered, \"Why are you doing this?\" Sakshi stared into the mirror and answered, \"Because this time, he belongs to me.\""
        ]
      },

      {
        title: "The Life They Lost",
        paragraphs: [
          "Himanshu could no longer ignore the strange things happening around Sakshi. One night, he searched her name on the internet. At first, he found nothing unusual. Then he discovered an old newspaper archive.",

          "The article was dated twenty years earlier. It described the mysterious deaths of two young lovers named Sakshi and Himanshu. Their bodies had been discovered near an abandoned property outside Delhi. Both had died on the same night.",

          "Himanshu felt a chill run down his spine. The photograph attached to the article showed a girl who looked exactly like Sakshi. The boy standing beside her looked exactly like him.",

          "That night, he dreamt of another life. He saw himself standing beneath a streetlight, holding Sakshi's hand. They were arguing. She was crying and begging him not to leave. Then came a loud crash, followed by complete darkness.",

          "He woke up screaming. The next day, he confronted Sakshi. \"Who were we twenty years ago?\" he asked. For the first time, her smile disappeared.",

          "\"You remembered,\" she whispered. Himanshu stepped back. \"What happened to us?\" Sakshi touched his face and said, \"You died, Himanshu. And so did I. I am the only person who never stopped loving you.\"",

          "Himanshu looked at her in fear. Sakshi leaned closer and whispered, \"But there is one thing you still do not know. I was not the one who died first.\""
        ]
      },

      {
        title: "The Place Without People",
        paragraphs: [
          "After discovering the truth, Himanshu tried to stay away from Sakshi. But she kept appearing wherever he went: near the bookstore, outside his college and even close to the cafe where he met his friends.",

          "\"You promised you would never leave me,\" she said one evening. Himanshu replied, \"I do not remember making that promise.\" Sakshi looked at him with disappointment.",

          "One evening, she asked him to accompany her somewhere. She claimed she wanted to show him the place where their old story had ended. They travelled far from the busy streets of Delhi until they reached an isolated building surrounded by trees.",

          "There were no houses nearby, no vehicles and no people. Himanshu suddenly felt uncomfortable. \"Why did you bring me here?\" he asked.",

          "Sakshi turned towards him. Her expression had changed, and her eyes looked darker than before. \"I want us to finish what we started,\" she said.",

          "\"Come with me, Himanshu. This time, we do not have to leave each other. Not as humans, but as souls.\"",

          "Himanshu froze. \"Sakshi, stop joking. Let us go.\" Her face twisted with anger. \"I waited for twenty years! I searched for you through lifetimes, and you still want to leave me?\"",

          "When she reached for his hand, Himanshu ran. He somehow escaped the abandoned building and reached the road. But just as he thought he was safe, he heard her voice beside his ear: \"You can run today, but you cannot escape me forever.\"",

          "When he finally reached home, his phone displayed a message from Sakshi. It contained a photograph of him sleeping in his bedroom."
        ]
      },

      {
        title: "Nobody Believes Him",
        paragraphs: [
          "Terrified, Himanshu told his friends everything: the bookstore, the newspaper, the abandoned building and the photograph. But nobody believed him.",

          "One friend suggested that he was stressed. Another said he was becoming obsessed with a girl who might not even exist. Himanshu felt completely alone.",

          "He stopped visiting the bookstore, stopped answering unknown calls and even changed his daily routine. But Sakshi was always one step ahead.",

          "Strange things began happening at home. His bedroom window opened on its own. Books fell from the shelves without anyone touching them. Sometimes, he woke up to find a wet footprint beside his bed.",

          "Then one afternoon, he received a message: \"I miss you.\" He blocked the number. A few minutes later, another message arrived from an unknown account: \"You cannot block someone who is already inside your life.\"",

          "Desperate for answers, Himanshu began searching for information about restless spirits. He discovered that some souls were believed to remain trapped because of unfinished desires. He wondered whether Sakshi wanted revenge or something even worse.",

          "Meanwhile, Sakshi stood outside his apartment building. She looked up at his window and smiled. She had finally discovered where he lived.",

          "\"Tomorrow, we will meet again,\" she whispered.",

          "The following morning, Himanshu's mother opened the front door. A young woman stood outside, smiling politely. \"Namaste, aunty. I am Sakshi, Himanshu's friend.\""
        ]
      },

      {
        title: "The Last Visitor",
        paragraphs: [
          "Sakshi entered the house like an ordinary guest. She greeted Himanshu's family, smiled at his mother and spoke politely to his father. She claimed that she was an old friend.",

          "Himanshu was horrified when he saw her. \"Why are you here?\" he whispered. Sakshi smiled. \"I thought we could talk.\"",

          "He tried to take her outside, but she refused to move. His family noticed his strange behaviour. They could not understand why he was treating his friend like a stranger.",

          "\"I never invited her,\" Himanshu said helplessly. Sakshi turned towards his mother and calmly replied, \"Aunty, I think he has not been sleeping properly.\"",

          "Everyone assumed Himanshu was behaving strangely because of stress. That night, he locked himself inside his bedroom and called his closest friend, begging him to come over.",

          "Before his friend could arrive, the lights went out. A familiar voice came from behind him. \"You still do not understand, do you?\"",

          "Himanshu turned around. Sakshi was standing near the window. \"I do not want to hurt you,\" she said softly. \"I just do not want to be alone anymore.\"",

          "\"You are not alive, Sakshi!\" Himanshu shouted. Her expression became emotionless. \"Neither are you, in the life I remember.\"",

          "The room grew unbearably cold. Himanshu tried to reach the door, but it slammed shut. Sakshi approached him and whispered, \"We died together once. This time, I will make sure you stay with me.\"",

          "The next morning, Himanshu was found dead. His family could not understand what had happened. But the mystery had only begun.",

          "A neighbour's security camera showed Sakshi entering the apartment the previous evening. It never recorded her leaving."
        ]
      },

      {
        title: "The Soul That Never Left",
        paragraphs: [
          "News of Himanshu's death spread through the neighbourhood. His family was devastated. They could not understand how a healthy young man could die so suddenly.",

          "His friends were questioned, his belongings were examined and the police investigated the apartment. But no clear explanation emerged.",

          "Days later, another terrible tragedy struck. Members of Himanshu's family were found dead in what initially appeared to be a series of suicides. The neighbourhood was shaken, and people began whispering that the family had been cursed.",

          "But the truth was far more terrifying. Sakshi had never disappeared after Himanshu's death. She had been watching the family and making them believe that the same tragedy would happen to them unless they followed her wishes.",

          "The investigation eventually revealed that the family deaths were murders, carefully disguised as suicides. Someone had been manipulating the family and hiding the truth behind a series of unexplained events.",

          "Meanwhile, in the old bookstore, a new customer entered. He walked towards the same shelf where Himanshu had first met Sakshi. There, he found the old novel.",

          "Its pages were yellow, its cover was damaged, and its first page still carried two names: Sakshi and Himanshu.",

          "He turned to the final page. A new sentence had appeared beneath the old writing: \"Love never dies. It only waits for another life.\"",

          "A cold breeze passed through the bookstore. Behind him, a familiar voice whispered, \"Have we met before?\"",

          "He turned around. Sakshi was standing there, smiling. And this time, she was not looking for Himanshu. She was looking for someone new.",

          "Perhaps her search had never been about finding love. Perhaps she was simply looking for another soul to keep her company forever.",

          "THE END... OR ANOTHER BEGINNING?"
        ]
      }

    ]
  },


  {
    title: "The Lost World",
    volume: "VOLUME II",
    originalStory: {
      subtitle: "An original tale",
      paragraphs: [
        "This is the original story placeholder for Book 2.",
        "Add your second story here. Introduce its setting, characters and the idea that makes this world unique.",
        "Continue your story here. This section should contain your original writing, not the AI-expanded episodes."
      ]
    },
    episodes: ["The Forgotten Place", "A Journey Begins", "The Mysterious Stranger", "The Secret Passage", "The Revelation", "The Last Decision", "Beyond the Lost World"]
  },

  {
    title: "Beyond the Horizon",
    volume: "VOLUME III",
    originalStory: {
      subtitle: "An original tale",
      paragraphs: [
        "This is the original story placeholder for Book 3.",
        "Write your third story here. Establish the world, its characters and the central conflict.",
        "This space is reserved for your original manuscript and creative expression."
      ]
    },
    episodes: ["The Distant Horizon", "An Unfamiliar Path", "The Turning Point", "Shadows of the Past", "A Difficult Choice", "The Final Journey", "A World Beyond"]
  },

  {
    title: "The Final Chapter",
    volume: "VOLUME IV",
    originalStory: {
      subtitle: "An original tale",
      paragraphs: [
        "This is the original story placeholder for Book 4.",
        "Introduce your fourth fictional world and the characters who bring it to life.",
        "Use this space for your original story. You can replace every paragraph with your own writing."
      ]
    },
    episodes: ["The Final Chapter Begins", "A Forgotten Promise", "The Rising Conflict", "The Unexpected Truth", "The Point of No Return", "The Last Stand", "The Story Continues"]
  }

];


// =====================================
// NAVIGATION STATE
// =====================================

function setView(view) {
  currentView = view;
  backReader.textContent = view === "parts" ? "← ALL STORIES" : "← BACK";
  readerOverlay.scrollTop = 0;
}

// One step back: episode -> episodes -> parts -> all stories
function goBack() {
  if (currentView === "episode") showEpisodes();
  else if (currentView === "episodes" || currentView === "original") showParts();
  else closeBook();
}


// =====================================
// OPEN A BOOK
// =====================================

function openBook(index) {

  currentBookIndex = index;
  const book = books[index];

  pageBookTitle.textContent = book.title;
  pageVolume.textContent = book.volume;
  flipTitle.textContent = book.title.toUpperCase();

  showParts();

  readerOverlay.classList.remove("opened");
  readerOverlay.classList.add("visible");

  setTimeout(() => {
    readerOverlay.classList.add("opened");
  }, 100);

}


// =====================================
// SHOW TWO PARTS
// =====================================

function showParts() {

  setView("parts");

  pageContent.innerHTML = `
    <p class="page-volume">INSIDE THIS BOOK</p>
    <h2>Choose a part</h2>
    <div class="part-options">

      <button class="part-button" id="originalPart">
        <span class="part-number">PART I</span>
        <span class="part-title">Original Story</span>
        <span class="part-description">Read the story in its original form.</span>
        <span class="part-arrow">→</span>
      </button>

      <button class="part-button" id="seriesPart">
        <span class="part-number">PART II</span>
        <span class="part-title">AI-Expanded Series</span>
        <span class="part-description">Explore seven episodes developed from this story.</span>
        <span class="part-arrow">→</span>
      </button>

    </div>
  `;

  document.getElementById("originalPart").addEventListener("click", showOriginalStory);
  document.getElementById("seriesPart").addEventListener("click", showEpisodes);

}


// =====================================
// PART I — ORIGINAL STORY
// =====================================

function showOriginalStory() {

  setView("original");

  const book = books[currentBookIndex];
  const story = book.originalStory;

  pageContent.innerHTML = `
    <div class="story-reading">
      <p class="page-volume">PART I · ORIGINAL MANUSCRIPT</p>
      <h2>${book.title}</h2>
      <div class="story-subtitle">${story.subtitle}</div>

      ${story.paragraphs.map(p => `<p>${p}</p>`).join("")}

      <button class="back-button" id="backToParts">← Back to book</button>
    </div>
  `;

  document.getElementById("backToParts").addEventListener("click", showParts);

}


// =====================================
// PART II — SEVEN EPISODES
// =====================================


function showEpisodes() {

  const book = books[currentBookIndex];

  pageContent.innerHTML = `

    <div class="story-reading">

      <p class="page-volume">PART II · AI-EXPANDED SERIES</p>

      <h2>Seven Episodes</h2>

      <div class="story-subtitle">
        ${book.title}
      </div>

      <div class="episode-list">

        ${book.episodes.map((episode, index) => `
          <button class="episode-button" data-episode="${index}">
            <span>EPISODE ${index + 1}</span>
            <strong>${episode.title}</strong>
            <span>→</span>
          </button>
        `).join("")}

      </div>

      <button class="back-button" id="backToParts">
        ← Back to book
      </button>

    </div>

  `;

  document.querySelectorAll(".episode-button").forEach(button => {

    button.addEventListener("click", () => {

      const episodeIndex = Number(button.dataset.episode);

      showEpisode(episodeIndex);

    });

  });

  document
    .getElementById("backToParts")
    .addEventListener("click", showParts);

}



// =====================================
// A SINGLE EPISODE
// =====================================


function showEpisode(index) {

  const book = books[currentBookIndex];

  const episode = book.episodes[index];

  const isLastEpisode = index === book.episodes.length - 1;

  pageContent.innerHTML = `

    <div class="story-reading">

      <p class="page-volume">
        PART II · EPISODE ${index + 1}
      </p>

      <h2>${episode.title}</h2>

      <div class="story-subtitle">
        ${book.title} — Expanded Series
      </div>

      ${episode.paragraphs.map(paragraph => `
        <p>${paragraph}</p>
      `).join("")}

      <div class="episode-navigation">

        <button class="back-button" id="backToEpisodes">
          ← All Episodes
        </button>

        ${
          isLastEpisode
          ? `<span class="end-series">END OF SERIES ✦</span>`
          : `<button class="next-button" id="nextEpisode">
               Next Episode →
             </button>`
        }

      </div>

    </div>

  `;

  document
    .getElementById("backToEpisodes")
    .addEventListener("click", showEpisodes);

  if (!isLastEpisode) {

    document
      .getElementById("nextEpisode")
      .addEventListener("click", () => {
        showEpisode(index + 1);
      });

  }

}



// =====================================
// CLOSE THE BOOK
// =====================================

function closeBook() {

  readerOverlay.classList.remove("opened");

  setTimeout(() => {
    readerOverlay.classList.remove("visible");
  }, 500);

}

closeReader.addEventListener("click", closeBook);
backReader.addEventListener("click", goBack);

// Close when clicking outside the book
readerOverlay.addEventListener("click", (event) => {
  if (event.target === readerOverlay) closeBook();
});


// =====================================
// BOOK CARD CLICK EVENTS
// =====================================

bookCards.forEach(card => {
  card.addEventListener("click", () => openBook(Number(card.dataset.book)));
});


// Escape = one step back (closes from the first screen)
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && readerOverlay.classList.contains("visible")) goBack();
});