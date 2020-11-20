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
        lastSeen: "",
        lastMessage: "",
        id: 100,
      },
      {
        avatar: "css/img/avatar_1.jpg",
        name: "Jacopo",
        lastSeen: "",
        lastMessage: "",
        id: 101,
      },
      {
        avatar: "css/img/avatar_3.jpg",
        name: "Giulio",
        lastSeen: "",
        lastMessage: "",
        id: 102,
      },
      {
        avatar: "css/img/avatar_4.jpg",
        name: "Marco",
        lastSeen: "",
        lastMessage: "",
        id: 103,
      },
      {
        avatar: "css/img/avatar_5.jpg",
        name: "Elia",
        lastSeen: "",
        lastMessage: "",
        id: 104,
      },
      {
        avatar: "css/img/avatar_6.jpg",
        name: "Giulia",
        lastSeen: "",
        lastMessage: "",
        id: 105,
      },
      {
        avatar: "css/img/avatar_7.jpg",
        name: "Alessio",
        lastSeen: "",
        lastMessage: "",
        id: 106,
      },
      {
        avatar: "css/img/avatar_8.jpg",
        name: "Luca",
        lastSeen: "",
        lastMessage: "",
        id: 107,
      },
    ],
    filteredContacts: [], //new array, based of search
    searchToggle: false, // will use this to know when user tried to search something
    currentContact: {
      //this will be the selected contacts. Chat will change on this status
      avatar: "css/img/avatar_io.jpg",
      name: "Noemi",
      lastSeen: "",
      lastMessage: "",
      id: 100,
    },
  },

  methods: {
    /** this methos is for searching. If an element in the search bar is present in any of contact name,
    add it to the filtered contact list. In HTML v-for is on normal contacts if search is empty and on filtered if not */

    search() {
      this.searchToggle = true;
      this.filteredContacts = this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.contactSearch.toLowerCase())
      );
    },

    selectContact(event) {
      let value = event.target.value;
      console.log(value);
      this.contacts.forEach((e) => {
        if (e.id == value) {
          this.currentContact = e;
        }
      });
    },
  },

  computed: {},
});
