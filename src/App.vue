<template>
  <div id="app" class="jumbotron">
    <div class="container">
      <h1>Hello! Nice to meet you!</h1>
      <hr/>
      <form @submit="addMessage">
        <div class="form-group">
          <input class="form-control" v-model="newMessage.title" maxlength="40" autofocus placeholder="Please Introduce yourself :)"/>
        </div>
        <div class="form-group">
          <textarea v-model="newMessage.text" class="form-control" placeholder="Leave your message!"rows="3">
          </textarea>
        </div>
        <button class="btn btn-primary" type="submit">Send</button>
      </form>
      <hr/>
      <div class="card-columns">
        <div class="card bg-success">
          <div class="card-block">
            <h5 class="card-title">Hello!</h5>
            <p class="card-text">This is our fixed card!</p>
            <p class="card-text"><small class="text-white">Added On {{dateToString(Date.now())}}</small></p>
          </div>
        </div>

        <div class="card" v-for="message in reverse(messages)">
          <div class="card-block">
            <h5 class="card-title">{{ message.title }}</h5>
            <p class="card-text">{{ message.text }}</p>
            <p class="card-text"><small class="text-muted">Added On {{ dateToString(message.timestamp) }}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase'
  import {dateToString, reverse} from './utils/utils'

  let config = {
    apiKey: 'AIzaSyD0GO4UDs02BhoZvLQ_qaHOi9lVnXN9w7M',
    authDomain: 'pleaseintroduceyourself-a3daf.firebaseapp.com',
    databaseURL: 'https://pleaseintroduceyourself-a3daf.firebaseio.com',
    projectId: 'pleaseintroduceyourself-a3daf',
    storageBucket: 'pleaseintroduceyourself-a3daf.appspot.com',
    messagingSenderId: '816229127070'
  }

  let app = Firebase.initializeApp(config)
  let db = app.database()
  let messagesRef = db.ref('messages')

  export default {
    name: 'app',
    data () {
      return {
        newMessage: {
          title: '',
          text: '',
          timestamp: null
        }
      }
    },
    methods: {
      addMessage (e) {
        e.preventDefault()
        if (this.newMessage.title === '') {
          return
        }
        this.newMessage.timestamp = Date.now()
        messagesRef.push(this.newMessage)
        this.newMessage.text = ''
        this.newMessage.title = ''
        this.newMessage.timestamp = null
      },
      dateToString,
      reverse
    },
    firebase: {
      messages: messagesRef
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
