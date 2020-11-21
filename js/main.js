const app = new Vue({
  el: "#app",
  data: {
    mySelf: {
      avatar: "css/img/avatar_2.jpg", //self-contact
      name: "Matteo Fattorini",
    },

    contactSearch: "", //v-modeled with search in contact

    contacts: [
      //array of contacts, as obj, with avatar,name,lastSeen proprieties
      {
        avatar: "css/img/avatar_io.jpg",
        name: "Noemi",
        lastSeen: "18:32",
        lastMessage: [
          "Hey what's going on?",
          "Everything's good!",
          "Wanna hang up later?",
          "Sure!",
          "Awesome!",
        ],
        id: 100,
      },
      {
        avatar: "css/img/avatar_1.jpg",
        name: "Jacopo",
        lastSeen: "15:24",
        lastMessage: [
          "Have you seen the news?",
          "Yeah, unbelievable!",
          "I told you it would be that way!",
          "Guess you were right!",
          "I always am!",
        ],
        id: 101,
      },
      {
        avatar: "css/img/avatar_3.jpg",
        name: "Giulio",
        lastSeen: "12:21",
        lastMessage: ["So tomorrow at 10.00?", "Sure!", "Great!"],
        id: 102,
      },
      {
        avatar: "css/img/avatar_4.jpg",
        name: "Marco",
        lastSeen: "18:15",
        lastMessage: [
          "What do you think about this new Whats'app?",
          "I love it!",
          "Yeah me too! I heard next patch will be emoticon!",
          "Yeah sure...!",
          "I got that from reliable sources!"
        ],
        id: 103,
      },
      {
        avatar: "css/img/avatar_5.jpg",
        name: "Elia",
        lastSeen: "14:26",
        lastMessage: [
          "Man, we should hang up sometime",
          "Tomorrow?",
          "Sound's Good!",
          
        ],
        id: 104,
      },
      {
        avatar: "css/img/avatar_6.jpg",
        name: "Giulia",
        lastSeen: "12:00",
        lastMessage: [
          "Going to sleep now, see you tomorrow!",
          "Good night! \u2764",
        ],
        id: 105,
      },
      {
        avatar: "css/img/avatar_7.jpg",
        name: "Alessio",
        lastSeen: "22:00",
        lastMessage: [
          "Yeah now it works!",
          "Do you like this app?",
          "It's pretty good!",
          "Yeah i love it too!",
          "Why some button's aren't working?",
          "Yeah i have to go now, bye!"

        ],
        id: 106,
      },
      {
        avatar: "css/img/avatar_8.jpg",
        name: "Luca",
        lastSeen: "15:00",
        lastMessage: [
          "Do you like hot dogs?",
          "I like them a lot",
          "How about one right now",
          "Sure!",
        ],
        id: 107,
      },
    ],
    filteredContacts: [], //new array, based of search
    searchToggle: false, // will use this to know when user tried to search something
    currentContact: {
      //this will be the selected contacts. Chat will change on this status
      avatar: "css/img/avatar_io.jpg",
      name: "Noemi",
      lastSeen: "18:32",
      lastMessage: [
        "Hey what's going on?",
        "Everything's good!",
        "Wanna hang up later?",
        "Sure!",
        "Awesome!"
      ],
      id: 100,
    },
  },

  methods: {
    /** this function is for searching. If an element in the search bar is present in any of contact name,
    add it to the filtered contact list. In HTML v-for is on normal contacts if search is empty and on filtered if not */

    search() {
      this.searchToggle = true;
      this.filteredContacts = this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.contactSearch.toLowerCase())
      );
    },

    /**
     *
     * this function handles the click on the contacts. Will assign the the clicked contact to currentContact obj.
     */
    selectContact(id) {
      this.contacts.forEach((e) => {
        if (e.id == id) {
          this.currentContact = e;
        }
      });
    },
  },

  computed: {},
});
