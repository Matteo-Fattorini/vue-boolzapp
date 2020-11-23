/**
 * @author Matteo Fattorini 22-11-2020
 * Boolzap: a What's app replica using Vue.js
 */

const app = new Vue({
  el: "#app",
  data: {
    mySelf: {
      avatar: "css/img/avatar_2.jpg", //self-contact
      name: "Matteo Fattorini",
    },
    contacts, //get contacts from data.js
    possibleAnswers, //get answers from data.js

    isWriting: false, //will use this to know when the automate answer is triggered

    filteredContacts: [], //new array, based of search

    currentContact: {
      //this will be the selected contacts. Everything will change based on this
    },

    contactSearch: "", //v-modeled with search in contact
    sendMessageText: "", //v-modeled with sendMessage
  },

  methods: {
    /** this function is for searching. If a letter is present in the contact name,
    add it to the filtered contact list. In HTML v-for is on filtered list. */

    search() {
      this.filteredContacts = this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.contactSearch.toLowerCase())
      );
    },

    //this function keep the scroll to the last sent element. Will be called on updated() section.

    scrollToElement() {
      let len = this.$refs.listItem.length;
      let al = this.$refs.listItem[len - 1]; //gets all items with the class "listItem", specifically the last one
      if (al) {
        //scroll into the view of that item
        al.scrollIntoView(true);
      }
    },

    /** this function handles chat. Will push to the array of messages of currentContact the string in the v-modeled input box */

    sendMessage() {
      let today = new Date();
      let minutes =
        parseInt(today.getMinutes()) > 10 // adds a "0" if minutes are lower than 10
          ? today.getMinutes()
          : "0" + today.getMinutes();
      let time = today.getHours() + ":" + minutes;
      let maxLen = this.possibleAnswers.length;
      let answer = this.possibleAnswers;
      let random = Math.floor(Math.random() * maxLen);
      let current = this.currentContact;
      if (this.sendMessageText.length > 0) {
        //this handles the message: will push a new timeStamp ad a new string
        current.messages.push({
          text: this.sendMessageText,
          timeStamp: time,
          isSent: true,
        });

        this.filteredContacts.forEach((e) => (e.writtenTo = false));
        current.writtenTo = true; /** writtenTo = true to the contact last written to, everyone else is on false. */
        this.filteredContacts.sort(
          (a, b) => (a.writtenTo > b.writtenTo ? -1 : 1)
          // This variable is used to sort the array, based on the person
          // who has writtenTo = true
        );
        this.sendMessageText = "";
        this.answer(current, random, answer, time); //will call answer function, line 196
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

    // this functions is only called after sendMessage(). Will trigger a random answer and add time stamp. 2 sec delay

    answer(current, random, answers, time) {
      app.isWriting = true;
      setTimeout(function () {
        current.lastSeen = time;
        current.messages.push({
          text: answers[random],
          timeStamp: time,
          isSent: false,
        });
        app.isWriting = false;
      }, 2000);
    },
  },

  updated() {
    // whenever data changes and the component re-renders, this function keeps the overflow
    this.$nextTick(() => this.scrollToElement());
  },
  mounted() {
    //as soon as its loaded current contact becomes the first one
    this.currentContact = this.contacts[0];
    //at start, filteredContacts is the same as contacts. Will change if user search.
    this.filteredContacts = [...this.contacts];
  },
});
