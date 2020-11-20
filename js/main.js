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
      },
      {
        avatar: "css/img/avatar_1.jpg",
        name: "Jacopo",
      },
      {
        avatar: "css/img/avatar_3.jpg",
        name: "Giulio",
        lastSeen: "",
      },
      {
        avatar: "css/img/avatar_4.jpg",
        name: "Marco",
        lastSeen: "",
      },
      {
        avatar: "css/img/avatar_5.jpg",
        name: "Elia",
        lastSeen: "",
      },
      {
        avatar: "css/img/avatar_6.jpg",
        name: "Giulia",
        lastSeen: "",
      },
      {
        avatar: "css/img/avatar_7.jpg",
        name: "Alessio",
        lastSeen: "",
      },
      {
        avatar: "css/img/avatar_8.jpg",
        name: "Luca",
        lastSeen: "",
      },
    ],
    filteredContacts: [], //new array, based of search
  },

  methods: {
    /** this methos is for searching. If an element in the search bar is present in any of contact name,
    add it to the filtered contact list. In HTML v-for is on normal contacts if search is empty and on filtered if not */
      
    search() {
      this.filteredContacts = this.contacts.filter((contact, i) =>
        contact.name.toLowerCase().includes(this.contactSearch.toLowerCase())
      );
    },
    },
  
  computed: {},
});







