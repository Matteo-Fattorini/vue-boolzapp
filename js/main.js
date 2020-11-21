var app = new Vue({
  el: "#app",
  data: {
    mySelf: {
      avatar: "css/img/avatar_2.jpg", //self-contact
      name: "Matteo Fattorini",
    },

    contactSearch: "", //v-modeled with search in contact
    sendMessageText: "", //v-modeled with sendMessage
    possibleAnswers: [
      //possible answer that every contact can give
      "Not sure about that",
      "Yeah, whatever",
      "I guess so...",
      "Probably not",
      "Yeah, indeed!",
      "No, i don't think so",
      "Are you sure about that?",
      "I never tought about that!",
      "I would love to!",
      "I always wanted you to ask me that...",
      "Me too!",
    ],

    contacts: [
      //array of contacts, as obj, with avatar,name,lastSeen proprieties
      {
        avatar: "css/img/avatar_io.jpg",
        name: "Noemi",
        lastSeen: "22:32",
        lastMessage: [
          "Hey what's going on?",
          "Everything's good!",
          "Wanna hang up later?",
          "Sure!",
          "Awesome!",
        ],
        timeStamp: ["22:15", "22:15", "22:18", "22:19", "22:20"],
        id: 100,
      },
      {
        avatar: "css/img/avatar_1.jpg",
        name: "Jacopo",
        lastSeen: "22:00",
        lastMessage: [
          "Have you seen the news?",
          "Yeah, unbelievable!",
          "I told you it would be that way!",
          "Guess you were right!",
          "I always am!",
        ],
        timeStamp: ["22:12", "22:12", "22:13", "22:13", "22:14"],
        id: 101,
      },
      {
        avatar: "css/img/avatar_3.jpg",
        name: "Leo",
        lastSeen: "21:50",
        lastMessage: ["So tomorrow at 10.00?", "Sure!", "Great!"],
        id: 102,
        timeStamp: ["21:39", "21:40", "21:45"],
      },
      {
        avatar: "css/img/avatar_4.jpg",
        name: "Marco",
        lastSeen: "20:00",
        lastMessage: [
          "What do you think about this new Whats'app?",
          "I love it!",
          "Yeah me too! I heard next patch will be emoticon!",
          "Yeah sure...!",
          "I got that from reliable sources!",
        ],
        timeStamp: ["19:32", "19:33", "19:33", "19:34", "19:35"],
        id: 103,
      },
      {
        avatar: "css/img/avatar_5.jpg",
        name: "Elia",
        lastSeen: "19:00",
        lastMessage: [
          "Man, we should hang up sometime",
          "Tomorrow?",
          "Sounds Good!",
        ],
        timeStamp: ["18:32", "18:33", "18:33"],
        id: 104,
      },
      {
        avatar: "css/img/avatar_6.jpg",
        name: "Giulia",
        lastSeen: "18:00",
        lastMessage: [
          "Going to sleep now, see you tomorrow!",
          "Good night!",
        ],
        timeStamp: ["17:32", "17:33"],
        id: 105,
      },
      {
        avatar: "css/img/avatar_7.jpg",
        name: "Alessio",
        lastSeen: "17:00",
        lastMessage: [
          "Yeah now it works!",
          "Do you like this app?",
          "It's pretty good!",
          "Yeah i love it too!",
          "Why some button's aren't working?",
          "Yeah i have to go now, bye!",
        ],
        timeStamp: ["16:32", "16:33", "16:33", "16:34", "16:35", "16:36"],
        id: 106,
      },
      {
        avatar: "css/img/avatar_8.jpg",
        name: "Luca",
        lastSeen: "12:00",
        lastMessage: [
          "Do you like hot dogs?",
          "I like them a lot",
          "How about one right now",
          "Sure!",
        ],
        id: 107,
        timeStamp: ["11:32", "11:33", "11:33", "11:34"],
      },
    ],
    isWriting: false, //will use this to know when the automate answer is triggered

    filteredContacts: [], //new array, based of search
    
    currentContact: {
      //this will be the selected contacts. Everything will change based on this
    },
  },

  methods: {
    /** this function is for searching. If an element in the search bar is present in any of contact name,
    add it to the filtered contact list. In HTML v-for is on normal contacts if search is empty and on filtered if not */

    search() {
      this.filteredContacts = this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.contactSearch.toLowerCase())
      );
    },

    //this function keep the scroll to the last sent element

    scrollToElement() {
      let len = this.$refs.listItem.length;
      let al = this.$refs.listItem[len - 1];
      if (al) {
        al.scrollIntoView(true);
      }
    },

    /** this function handles chat. Will push to the array of message of currentContact the text value of message element  */

    sendMessage() {
      var today = new Date();
      var minutes =
        parseInt(today.getMinutes()) > 10 // adds a "0" if minutes are lower than 10
          ? today.getMinutes()
          : "0" + today.getMinutes();
      var time = today.getHours() + ":" + minutes;
      let maxLen = this.possibleAnswers.length;
      let answer = this.possibleAnswers;
      let random = Math.floor(Math.random() * maxLen);
      let current = this.currentContact;
      if (this.sendMessageText.length > 0 && !this.isWriting) {
        this.currentContact.lastMessage.push(this.sendMessageText);
        this.currentContact.timeStamp.push(time);

        this.sendMessageText = "";
        this.answer(current, random, answer, time);
      }
    },

    /* this function handles the click on the contacts. Will assign the clicked contact to currentContact obj.*/
    selectContact(id) {
      this.contacts.forEach((e) => {
        if (e.id == id) {
          this.currentContact = e;
        }
      });
    },

    // this functions is only called after sendMessage. Will trigger a random answer and add time stamp. 2 sec delay

    answer(current, random, answers, time) {
      app.isWriting = true;
      setTimeout(function () {
        current.lastSeen = time;
        current.lastMessage.push(answers[random]);
        current.timeStamp.push(time);
        app.isWriting = false;
      }, 2000);
    },
  },

  updated() {
    // whenever data changes and the component re-renders, this is called.
    this.$nextTick(() => this.scrollToElement());
  },
  mounted() {
    //as soon as he load current contact becomes the first one
    this.currentContact = this.contacts[0]
    this.filteredContacts = [...this.contacts]
  }
});






//TODO  tirare su la posizione dei contatti quando scrivono
